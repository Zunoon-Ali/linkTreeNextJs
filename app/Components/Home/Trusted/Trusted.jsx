
"use client";
import React from 'react'
import {useState,useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Slider from '../../Slider/Slider';



const Trusted = () => {
    const h2 = [
        "atheletes",
        "health educator",
        "streamers",
        "vloggers",
        "fitness coaches",
        "ecommerce seller",
        "retailers",
    ];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % h2.length);
        }, 5000)
        return () => clearInterval(timer);
    }, [h2.length])


    return (
        <>
            <section id="trusted sec" className='min-h-screen w-full bg-[#f3f3f1]'>
                <div className="trusted-top-content flex flex-col justify-center items-center py-16">
                    <h2 className='text-5xl text-black font-extrabold uppercase mb-6'>The only link in bio trusted by 70M+</h2>
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index} // Key is index so Framer Motion knows it's a "new" element
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -15, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-5xl text-black font-extrabold uppercase'
                        >
                            {h2[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>
                <div className="trusted-slider w-full min-h-auto">
                    <Slider />
                </div>
                
            </section>
        </>
    )
}

export default Trusted