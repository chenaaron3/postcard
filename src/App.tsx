import './App.css';

import Axolotl from '/axolotl.gif';
import Heart from '/heart.png';
import Poof from '/poof.gif';
import Toilet from '/toilet.gif';
import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

import { Letter } from './components/Letter';
import { useMediaQueries } from './utils/mediaQueries';
import { sleep } from './utils/utils';

const content = `Happy Valentines Day Eri!!
7 months really do fly by when you spend it with such an amazing person.
I wish I were there with you so we could snuggle the night away! I will make sure to give you plenty of kisses next week!!!
You single handedly made 2024 the best year of my life and I have no doubt that this year will be as magical if not more!
Wishing my special person the best Valentines Day ever and for many many many more to come.
From Other Babi (muah muah muah)`


function App() {
  const [scope, animate] = useAnimate()
  const [canOpen, setCanOpen] = useState(false)
  const [opened, setOpened] = useState(false)
  const [isExploding, setIsExploding] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const angle = useMotionValue(0)
  const angleSpring = useSpring(angle, { stiffness: 100, damping: 10 })
  const { isSmallScreen } = useMediaQueries()

  // Startup animation => Dragging letter to middle
  useEffect(() => {
    const startAnimation = async () => {
      // Dragging to middle
      await animate("#envelope",
        { x: ["-50vw", "-40vw", "-40vw", "-30vw", "-30vw", "-20vw", "-20vw", "-10vw", "-10vw", "0"] },
        { delay: .9, duration: 5, ease: 'easeOut' }
      )
      // Bye bye vacuum with poof
      animate("#vacuum", { opacity: 0 }, { duration: .25 })
      await animate("#poof", { opacity: 1 }, { duration: .75 })
      animate("#poof", { opacity: 0 }, { duration: .01 })
      // Set letter to be animateable
      setCanOpen(true)
    }
    void startAnimation()
  }, [])

  // Hover effect to lift the flap
  const handleHover = useCallback((hover: boolean) => {
    if (opened) return
    if (hover) angle.set(45)
    else angle.set(0)
  }, [opened])

  // Open the letter
  const openLetter = useCallback(async () => {
    if (canOpen && !opened) {
      setOpened(true);
      // Open letter
      animate("#flap", { rotateX: 180 }, { duration: 1, ease: 'circOut' })
      await animate("#envelope", { transform: "translateY(25%)" }, { duration: 1 })
      animate("#flap", { zIndex: -40 }, { duration: .01 })

      // Surprise with a little animation (1 seconds per gif cycle, ends with next cat loaded)
      animate("#toilet", { opacity: 1 })
      await sleep(650);
      // Firework caused by the exploding kitten
      setIsExploding(true);
      await sleep(100);
      await animate("#toilet", { opacity: 0 }, { duration: .01 })

      // Take the envelope out
      await sleep(1500);
      // Move paper upwards out of the envelope
      await animate("#paper", { transform: ["translateY(0)", "translateY(-120%)"] }, { duration: 1, ease: "easeInOut" })
      // The paper should be at the very front now
      await animate("#paper", { zIndex: 10 }, { duration: .01 })
      // Move paper down to be unfolded
      await animate("#paper", { transform: "translateY(50%)" }, { duration: 1, ease: "easeInOut" })
      // Unfold the paper
      animate("#paperfold", { transform: "translateY(1%) rotateX(180deg)" }, { duration: .75, ease: "easeInOut" })
      await animate("#paper", { height: isSmallScreen ? "120%" : undefined, transform: `translateY(25%) scale(1.2)`, backgroundColor: ["#808080", "#FFFFFF"] }, { duration: .75, ease: "easeInOut" })
      setShowLetter(true);
    }
  }, [canOpen, opened])

  return (
    <>
      <div className='bg-black w-screen h-screen overflow-hidden'>
        <div ref={scope} className='w-full h-full flex justify-center items-center'>
          <motion.div id="envelope" className='rounded-b-xl w-60 h-40 sm:w-96 sm:h-64 bg-red-500 drop-shadow-md shadow-amber-500 relative'
            initial={{ x: "-50vw" }}
            onHoverStart={() => handleHover(true)} onHoverEnd={() => handleHover(false)}
            onClick={openLetter}
          >
            <motion.div className="absolute -z-40 w-full h-1/2 bg-red-200 [clip-path:polygon(0%_0%,100%_0%,50%_100%)] transform-3d origin-top" />
            <motion.div id="paper" className="perspective-distant absolute rounded-b-4xl -z-30 w-[95%] left-[2.5%] h-[90%] bottom-1 bg-white">
              <motion.div id="paperfold" className="perspective-distant absolute inset-0 rounded-b-4xl bg-white origin-top" >
                {showLetter && <div className={`p-5 sm:p-7 absolute inset-0 w-full rotate-x-180 top-0`}>
                  <Letter size={isSmallScreen ? .75 : 1} content={content} />
                </div>}
              </motion.div>
            </motion.div>
            <motion.div className="rounded-b-xl absolute w-full h-full -z-20 bg-red-500 [clip-path:polygon(0%_0%,50%_50%,100%_0%,100%_100%,0%_100%)] transform-3d origin-top" />
            <motion.div id="flap" className="perspective-near relative w-full h-1/2 -z-10 bg-red-600 [clip-path:polygon(0%_0%,100%_0%,50%_102%)] transform-3d origin-top"
              style={{ rotateX: angleSpring }}
            />
            {/* Dragging Letter Axolotyl */}
            <div className='absolute right-0 bottom-12 translate-x-full pointer-events-none'>
              <img id="vacuum" src={Axolotl} />
              <img id="poof" className='opacity-0 absolute inset-0' src={Poof} />
            </div>
            {/* Toilet Cat */}
            <div className='w-full h-full absolute inset-0 justify-center items-start flex'>
              <div className="absolute -top-24 left-1/2">
                {isExploding && (
                  <ConfettiExplosion onComplete={() => setIsExploding(false)} />
                )}
              </div>
              <img id="toilet" className='opacity-0 -translate-y-1/2' src={Toilet} />
            </div>
            <img id="heart" className='m-auto absolute inset-0' width={45} height={45} src={Heart} />
            <div className='absolute bottom-0 w-full pb-10'>
              {canOpen && <Letter size={isSmallScreen ? 1.5 : 2} content="For Eri!!" centered={true} />}
            </div>
          </motion.div>
        </div>
      </div >
    </>
  )
}

export default App
