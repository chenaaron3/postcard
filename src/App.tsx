import { Envelope } from './components/Envelope';
import { Polaroids } from './components/Polaroids';
import { usePostcardStore } from './store';

function App() {
  const showPolaroids = usePostcardStore(state => state.showPolaroids)

  return (
    <>
      <div className='bg-pink-200 w-screen h-screen overflow-scroll'>
        {showPolaroids && <Polaroids />}
        {!showPolaroids && <Envelope />}
      </div >
    </>
  )
}

export default App
