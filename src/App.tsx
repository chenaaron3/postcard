import { Envelope } from './components/Envelope';
import { Polaroid } from './components/Polaroid';

function App() {
  return (
    <>
      <Polaroid />
      <div className='bg-pink-200 w-screen h-screen overflow-hidden'>
        <Envelope />
      </div >
    </>
  )
}

export default App
