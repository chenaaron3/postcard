import Chamomile from '/chamomile.png';
import { useEffect, useState } from 'react';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import { useMediaQueries } from '../utils/mediaQueries';

export const Flowers = () => {
    const { isSmallScreen } = useMediaQueries()
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return init && < Particles
        id="tsparticles"
        options={{
            background: {
                color: {
                    value: "black",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    repulse: {
                        distance: 100,
                    },
                },
            },
            particles: {
                move: {
                    direction: "bottom",
                    enable: true,
                    random: false,
                    straight: false,
                },
                number: {
                    value: isSmallScreen ? 5 : 15,
                },
                shape: {
                    type: 'image',
                    options: {
                        image: {
                            src: Chamomile,
                        },
                    },
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                },
                size: {
                    value: { min: 10, max: 20 },
                },
                wobble: {
                    distance: 20,
                    enable: true,
                    speed: {
                        min: -5,
                        max: 5,
                    },
                },
            },
            detectRetina: true,
        }}
    />
};