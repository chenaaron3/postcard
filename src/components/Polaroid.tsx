import babi from '/memories/babi.jpeg';
import noise from '/noise.png';

export const Polaroid = () => {
    return <div className="fixed top-1/2 p-4 w-54 h-86 flex justify-center items-center flex-col bg-white shadow-xl">
        <div className="relative mt-2 w-full h-62 ">
            <img
                className='object-cover object-top brightness-130 contrast-85 saturate-90 sepia-[30%] shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]'
                src={babi} />
            <div style={{ backgroundImage: `url(${noise})` }} className="absolute inset-0 opacity-30 pointer-events-none"></div>
        </div>
        <div className='text-lg m-2 h-full w-full text-center justify-center items-center flex'>
            Thats my babi
        </div>
    </div>
}