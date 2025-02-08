import Cedarville from '/fonts/cedarville.ttf';
import MontserratItalic from '/fonts/montserrat-italic.ttf';
import Montserrat from '/fonts/montserrat.ttf';
import opentype from 'opentype.js';

const LOADED_FONTS: Record<string, opentype.Font> = {}

export const loadFont = async (name: FONT_TYPES) => {
    let loadedFont = undefined
    const font = FONTS[name];

    if (LOADED_FONTS[name]) {
        loadedFont = LOADED_FONTS[name]
    } else {
        loadedFont = await fetch(font['family'])
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
                return opentype.parse(buffer);
            })
        LOADED_FONTS[name] = loadedFont;
    }
    return {
        "font": loadedFont as opentype.Font,
        "offset": font['offset']
    };
}

interface FontDetails {
    family: string;
    offset: number;
}

export const FONTS: Record<FONT_TYPES, FontDetails> = {
    'Montserrat': {
        family: Montserrat,
        offset: .25
    },
    'MontserratItalic': {
        family: MontserratItalic,
        offset: .25
    },
    'Cedarville': {
        family: Cedarville,
        offset: .5
    }
}

export type FONT_TYPES = 'Montserrat' | 'Cedarville' | 'MontserratItalic'
