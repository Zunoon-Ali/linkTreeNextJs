import React from 'react';
import Image from 'next/image';


const Emilio = () => {
  return (
    <section id="sec-emilio" className="min-h-screen  w-full p-8 flex items-center justify-center bg-[#f3f3f1]">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl h-[100vh]">
        
        <div className="flex flex-col gap-4 h-full">
          <div className="card1 rounded-xl  flex flex-1 items-center justify-center font-bold text-slate-600 ">
            <img src={"/Images/emilio1.PNG"} alt="card 1 image" className='h-full w-full' />
          </div>
          <div className="card2 rounded-xl flex flex-1 items-center justify-center font-bold text-slate-600">
             <img src={"/Images/emilio3.PNG"} alt="card 2 image" className='h-full w-full' />
          </div>
        </div>

        <div className="h-full">
          <div className="card3 rounded-xl h-full w-full flex items-center justify-center font-bold text-slate-600">
             <img src={"/Images/emilio2.PNG"} alt="card 3 image" className='h-full w-full' />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Emilio