"use client";
import React from 'react'

const About = () => {
    return (
        <>
            <section id="sec about" className='min-h-screen bg-[#2665d6]'>
                <div className="grid grid-cols-1 md:grid-cols-2 md:pt-32">
                    <div className="left flex items-center justify-center w-full h-full">
                        <video  autoPlay loop muted playsInline className="w-[90%]">
                            <source src={"/videos/about-video.webm"} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                    <div className="right flex items-center justify-center">
                        <div className="right-content flex md:items-start items-center justify-center flex-col text-center" >
                            <h2 className='text-4xl md:text-6xl text-white w-[90%] mb-3 font-extrabold '>Create and customize your Linktree in minutes</h2>
                            <p className='w-[90%] mb-3 text-xl md:text-2xl text-white'>Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
                            <div className="button flex items-center justify-center w-full">
                            <button type='button' className='text-blue-600 py-6 px-4 bg-blue-50 rounded-full font-semibold '>Get Started for Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About