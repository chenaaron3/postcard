import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { Letter as LetterA } from './letters/a';
import { Letter as LetterB } from './letters/b';
import { Letter as LetterC } from './letters/c';
import { Letter as LetterD } from './letters/d';
import { Letter as LetterE } from './letters/e';
import { Letter as LetterExclamation } from './letters/exclamation';
import { Letter as LetterF } from './letters/f';
import { Letter as LetterG } from './letters/g';
import { Letter as LetterH } from './letters/h';
import { Letter as LetterI } from './letters/i';
import { Letter as LetterJ } from './letters/j';
import { Letter as LetterK } from './letters/k';
import { Letter as LetterL } from './letters/l';
import { Letter as LetterM } from './letters/m';
import { Letter as LetterN } from './letters/n';
import { Letter as LetterO } from './letters/o';
import { Letter as LetterP } from './letters/p';
import { Letter as LetterPeriod } from './letters/period';
import { Letter as LetterQ } from './letters/q';
import { Letter as LetterQuestion } from './letters/question';
import { Letter as LetterR } from './letters/r';
import { Letter as LetterS } from './letters/s';
import { Letter as LetterT } from './letters/t';
import { Letter as LetterU } from './letters/u';
import { Letter as LetterV } from './letters/v';
import { Letter as LetterW } from './letters/w';
import { Letter as LetterX } from './letters/x';
import { Letter as LetterY } from './letters/y';
import { Letter as LetterZ } from './letters/z';

const LetterToClassMap: { [key: string]: React.FC<{ animateState: string }> } = {
    'a': LetterA,
    'b': LetterB,
    'c': LetterC,
    'd': LetterD,
    'e': LetterE,
    'f': LetterF,
    'g': LetterG,
    'h': LetterH,
    'i': LetterI,
    'j': LetterJ,
    'k': LetterK,
    'l': LetterL,
    'm': LetterM,
    'n': LetterN,
    'o': LetterO,
    'p': LetterP,
    'q': LetterQ,
    'r': LetterR,
    's': LetterS,
    't': LetterT,
    'u': LetterU,
    'v': LetterV,
    'w': LetterW,
    'x': LetterX,
    'y': LetterY,
    'z': LetterZ,
    '.': LetterPeriod,
    '!': LetterExclamation,
    '?': LetterQuestion,
    ' ': () => <div className='w-4 h-4' />
}

export const Letter: React.FC<{ content: string }> = ({ content }) => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        if (visibleIndex >= content.length) return;
        setTimeout(() => {
            setVisibleIndex(visibleIndex + 1);
        }, 250);
    }, [content, visibleIndex]);

    return <motion.div
        className='flex w-full justify-center items-baseline'>
        {content.split('').map((letter, index) => {
            const LetterComponent = LetterToClassMap[letter.toLowerCase()];
            return <LetterComponent key={index} animateState={visibleIndex >= index ? 'animate' : 'initial'} />
        })}
    </motion.div>
}