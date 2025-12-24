import React from 'react'
import Image from "next/image";

import CanvaVideo from '../../images/analyze.avif'
const Canva = () => {
    return (
        <>
            <section id="sec canva" className='min-h-screen bg-[#e8efd6] text-slate-800'>
                <div className="grid grid-cols-2">
                    <div className="left flex items-center justify-center">
                        <Image
                            src={CanvaVideo}
                            alt='canva'
                        />
                    </div>
                    <div className="right flex items-center justify-center ml-4">
                        <div className="right-content flex items-start justify-center flex-col" >
                            <h2 className='text-6xl w-3/4 mb-3 font-extrabold '>Create and customize your Linktree in minutes</h2>
                            <p className='w-3/4 mb-3 text-xl '>Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
                            <button type='button' className=' py-4 px-6 bg-[#e9c0e9] rounded-full font-semibold my-4'>Get Started for Free</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Canva