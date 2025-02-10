import Babi from '/memories/babi.jpeg';
import Christmas from '/memories/christmas.jpeg';
import Clay from '/memories/clay.jpeg';
import Disney from '/memories/disney.jpeg';
import Facemask from '/memories/facemask.jpeg';
import Illenium from '/memories/illenium.jpeg';
import Illusion from '/memories/illusion.jpeg';
import Iphone from '/memories/iphone.jpeg';
import Island from '/memories/island.jpeg';
import LayingDown from '/memories/layingdown.jpeg';
import Library from '/memories/library.jpeg';
import Met from '/memories/met.jpeg';
import Model from '/memories/model.jpeg';
import Omakase from '/memories/omakase.jpeg';
import Parade from '/memories/parade.jpeg';
import Perv from '/memories/perv.jpeg';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { Polaroid, PolaroidProps } from './Polaroid';

const images: PolaroidProps[] = [
    {
        src: Babi,
        caption: "Babi confused @ Library"
    },
    {
        src: Christmas,
        caption: "Awkward Babi @ Christmas Market"
    },
    {
        src: Clay,
        caption: "Pottery Class @ Toronto"
    },
    {
        src: Disney,
        caption: "Lining Up @ DisneyLand"
    },
    {
        src: Facemask,
        caption: "Facemask Night @ Home"
    },
    {
        src: Illenium,
        caption: "Illenium Night @ SF Home"
    },
    {
        src: Illusion,
        caption: "Babi Cowering In Fear @ Illusion"
    },
    {
        src: Iphone,
        caption: "Android User @ Apple Store"
    },
    {
        src: Island,
        caption: "The Scream @ Toronto Island"
    },
    {
        src: LayingDown,
        caption: "Sun Bathing @ Pride Parade"
    },
    {
        src: Library,
        caption: "Random Photo @ Library"
    },
    {
        src: Met,
        caption: "Zen Garden @ The Met"
    },
    {
        src: Model,
        caption: "Babi Modeling @ Bar Prima"
    },
    {
        src: Omakase,
        caption: "23rd Birthday Dinner @ Kusakabe"
    },
    {
        src: Parade,
        caption: "Babi Wiping Other Babi's Mouth @ Pride Parade"
    },
    {
        src: Perv,
        caption: "Babi Attack @ Home"
    },
]

export const Polaroids = () => {
    // Scroll through polaroids
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [timeoutHandle, setTimeoutHandle] = useState<NodeJS.Timeout | null>(null);

    // Auto scroll through polaroids
    useEffect(() => {
        let nextIndex = visibleIndex + 1;;
        if (nextIndex >= images.length) {
            nextIndex = 0;
        }
        const timeout = setTimeout(() => {
            setVisibleIndex(nextIndex);
        }, 7000);
        setTimeoutHandle(timeout);
    }, [visibleIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            let newIndex = 0;
            // Change polaroid in circular loop
            if (event.key === 'ArrowRight') {
                if (visibleIndex < images.length - 1) {
                    newIndex = visibleIndex + 1;
                } else {
                    newIndex = 0;
                }
            } else if (event.key === 'ArrowLeft') {
                if (visibleIndex > 0) {
                    newIndex = visibleIndex - 1;
                } else {
                    newIndex = images.length - 1;
                }
            }
            // Cancel any existing animations
            if (timeoutHandle) {
                clearTimeout(timeoutHandle);
            }
            setVisibleIndex(newIndex);
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setVisibleIndex, setTimeoutHandle, timeoutHandle]);


    // A series of polaroids dangling from a string. Add padding so rotation doesnt get cut off
    return <motion.div layout className='py-24 w-full h-full flex justify-center items-center overflow-hidden gap-24 flex-row'>
        <Polaroid {...images[visibleIndex]} />
    </motion.div>
}