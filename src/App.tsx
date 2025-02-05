import './App.css';

import Axolotl from '/axolotl.gif';
import Heart from '/heart.png';
import Poof from '/poof.gif';
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

import { Letter } from './components/Letter';

function App() {
  const [scope, animate] = useAnimate()
  const [showOpen, setShowOpen] = useState(false)

  useEffect(() => {
    const startAnimation = async () => {
      // Dragging to middle
      await animate("#envelope", { x: ["-50vw", "-40vw", "-40vw", "-30vw", "-30vw", "-20vw", "-20vw", "-10vw", "-10vw", "0"] }, { delay: .9, duration: 1, ease: 'easeOut' })
      // Bye bye vacuum
      animate("#vacuum", { opacity: 0 }, { duration: .25 })
      await animate("#poof", { opacity: 1 }, { duration: .75 })
      animate("#poof", { opacity: 0 }, { duration: .01 })
      setShowOpen(true)
      // Open letter
      // await animate("#flap", { rotateX: 180 }, { duration: 1 })
    }
    void startAnimation()
  }, [])

  return (
    <>
      <div className='bg-black w-screen h-screen'>
        <div ref={scope} className='w-full h-full flex justify-center items-center'>
          <motion.div id="envelope" className='w-96 h-64 bg-red-500 drop-shadow-md shadow-amber-500 relative'
            initial={{ x: "-50vw" }}>
            <motion.div className="absolute w-full h-1/2 bg-red-200 [clip-path:polygon(0%_0%,100%_0%,50%_100%)] transform-3d origin-top" />
            <motion.div whileHover={{ rotateX: 45 }} id="flap" className="w-full h-1/2 bg-red-600 [clip-path:polygon(0%_0%,100%_0%,50%_102%)] transform-3d origin-top" />
            <div className='absolute right-0 bottom-12 translate-x-full'>
              <img id="vacuum" src={Axolotl} />
              <img id="poof" className='opacity-0 absolute inset-0' src={Poof} />
            </div>
            <img id="heart" className='m-auto absolute inset-0' width={45} height={45} src={Heart} />
            <div className='h-full'>
              {showOpen && <Letter content="open me!" />}
            </div>
          </motion.div>
        </div>
      </div >
    </>
  )
}

export default App
