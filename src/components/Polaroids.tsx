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
    }, {
        src: Clay,
        caption: "Pottery Class @ Toronto"
    }, {
        src: Disney,
        caption: "Lining Up @ DisneyLand"
    }, {
        src: Facemask,
        caption: "Facemask Night @ Home"
    }, {
        src: Illenium,
        caption: "Illenium Night @ SF Home"
    }, {
        src: Illusion,
        caption: "Babi Cowering In Fear @ Illusion"
    }, {
        src: Iphone,
        caption: "Android User @ Apple Store"
    }, {
        src: Island,
        caption: "The Scream @ Toronto Island"
    }, {
        src: LayingDown,
        caption: "When I Got Marked @ Pride Parade"
    }, {
        src: Library,
        caption: "Random Photo @ Library"
    }, {
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
    useEffect(() => {
        if (visibleIndex >= images.length - 1) {
            return
        };
        setTimeout(() => {
            setVisibleIndex(visibleIndex + 1);
        }, 5000);
    }, [visibleIndex]);


    // A series of polaroids dangling from a string
    return <div className='p-10 w-full h-full flex justify-center items-center overflow-scroll gap-24 flex-row'>
        <Polaroid {...images[visibleIndex]} />
    </div>
}