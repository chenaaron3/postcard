import { motion } from 'motion/react';

import { LETTER_VARIANTS } from './animation';

export const Letter: React.FC<{ animateState: string }> = ({ animateState }) => {
    return (
        <motion.svg
            width="8.203" height="92.676" viewBox="0 0 8.203 92.676" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" stroke-linecap="round" font-size="9pt" stroke="#000" stroke-width="0.25mm">
                <motion.path
                    strokeWidth="2"
                    strokeDashoffset="5"
                    variants={LETTER_VARIANTS}
                    initial="initial"
                    animate={animateState}
                    d="M 6.543 3.516 L 6.543 52.93 L 4.98 67.578 A 0.071 0.071 0 0 1 4.942 67.641 Q 4.889 67.673 4.763 67.676 A 1.119 1.119 0 0 1 4.736 67.676 L 4.297 67.676 A 0.861 0.861 0 0 1 3.678 67.372 Q 3.122 66.797 2.679 65.135 A 18.402 18.402 0 0 1 2.49 64.356 Q 1.992 62.099 1.63 59.007 A 100.039 100.039 0 0 1 1.318 55.908 A 258.848 258.848 0 0 1 0.916 50.513 A 342.854 342.854 0 0 1 0.586 44.58 A 410.61 410.61 0 0 1 0.256 35.581 A 357.503 357.503 0 0 1 0.195 32.715 A 1976.339 1976.339 0 0 1 0.114 27.673 Q 0.08 25.306 0.056 23.203 A 1146.922 1146.922 0 0 1 0.049 22.608 Q 0.009 18.962 0.002 17.189 A 171.127 171.127 0 0 1 0 16.504 Q 0 14.453 0.049 12.842 Q 0.098 11.231 0.195 9.57 Q 0.293 7.91 0.439 6.152 Q 0.54 4.944 0.71 3.366 A 200.984 200.984 0 0 1 0.879 1.856 A 5.108 5.108 0 0 1 1.168 1.263 Q 1.559 0.588 2.051 0.342 Q 2.692 0.021 3.59 0.001 A 5.427 5.427 0 0 1 3.711 0 A 3.838 3.838 0 0 1 4.54 0.084 Q 5.098 0.208 5.509 0.512 A 2.249 2.249 0 0 1 5.811 0.781 Q 6.468 1.482 6.535 3.127 A 9.489 9.489 0 0 1 6.543 3.516 Z M 4.492 92.676 L 4.102 92.676 A 6.021 6.021 0 0 0 3.992 92.569 Q 3.866 92.449 3.688 92.291 A 24.735 24.735 0 0 0 3.516 92.139 Q 3.125 91.797 2.734 91.406 L 2.002 90.674 A 5.255 5.255 0 0 1 1.886 90.554 Q 1.667 90.321 1.66 90.24 A 0.062 0.062 0 0 1 1.66 90.234 A 1.88 1.88 0 0 1 1.563 89.636 Q 1.563 89.388 1.627 89.132 A 2.377 2.377 0 0 1 1.66 89.014 A 2.347 2.347 0 0 1 2.344 87.94 Q 2.832 87.5 3.418 87.256 A 3.136 3.136 0 0 1 4.251 87.032 A 2.83 2.83 0 0 1 4.59 87.012 A 1.986 1.986 0 0 1 5.011 87.06 Q 5.214 87.104 5.437 87.189 A 4.224 4.224 0 0 1 5.713 87.305 A 5.448 5.448 0 0 1 6.885 88.037 A 4.647 4.647 0 0 1 7.813 89.063 A 2.541 2.541 0 0 1 8.073 89.557 A 1.872 1.872 0 0 1 8.203 90.234 A 2.476 2.476 0 0 1 8.088 91.014 Q 7.846 91.746 7.094 92.1 A 2.664 2.664 0 0 1 6.885 92.188 A 8.913 8.913 0 0 1 5.854 92.504 Q 5.311 92.633 4.816 92.665 A 4.979 4.979 0 0 1 4.492 92.676 Z"
                    id="0"
                    vector-effect="non-scaling-stroke" />
            </g>
        </motion.svg>
    );
}