import makerJS from 'makerjs';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { LETTER_VARIANTS } from './animation';
import { FONT_TYPES, loadFont } from './Fonts';

interface CharacteProps {
    className?: string;
    char: string
    animateState: string
    size?: number
}

const longCharacters = new Set([
    "g", "j", "p", "q", "y"
])

const fontFamily = 'Montserrat' as FONT_TYPES

export const Character: React.FC<CharacteProps> = ({ className, char, animateState, size = 1 }) => {
    const [path, setPath] = useState("")
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [offset, setOffset] = useState(0)
    const [viewbox, setViewBox] = useState("")

    useEffect(() => {
        const asyncCall = async () => {
            const font = await loadFont(fontFamily);
            setOffset(font['offset']);
            const textModel = new makerJS.models.Text(
                font['font'],
                char,
                25, // fontsize
                false, // combine
                true, // center origin
            )
            for (const i in textModel.models) {
                textModel.models[i].layer = i;
            }
            const svg = makerJS.exporter.toSVG(textModel, {
                fill: false,
                stroke: true,
                scalingStroke: false,
                useSvgPathOnly: true,
            });

            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svg, "image/svg+xml"); // Parse as XML
            // Get the <svg> element
            const svgElement = svgDoc.querySelector("svg")!;
            // Extract viewBox
            const viewBox = svgElement.getAttribute("viewBox")!;
            // Get the <path> element
            const pathElement = svgElement.querySelector("path")!;
            const pathData = pathElement.getAttribute("d")!;
            let viewBoxSplit = viewBox.split(" ");
            if (viewBoxSplit.length == 4) {
                setWidth(parseFloat(viewBoxSplit[2]))
                setHeight(parseFloat(viewBoxSplit[3]))
            }
            setViewBox(viewBox);
            setPath(pathData)
        }
        asyncCall()
    }, [char])

    return (
        <svg className={className} style={{
            transform: longCharacters.has(char) ? `translateY(${100 * offset + "%"})` : ""
        }} width={width * size} height={height * size} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" >
            <g id="svgGroup" strokeLinecap="round" fontSize="1pt" stroke="#000" strokeWidth="0.25mm">
                <motion.path
                    strokeWidth="1"
                    strokeDashoffset="5"
                    variants={LETTER_VARIANTS}
                    initial="initial"
                    animate={animateState}
                    d={path}
                    id="0"
                    vector-effect="non-scaling-stroke" />
            </g>
        </svg>
    );
}