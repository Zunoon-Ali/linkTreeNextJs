import React from 'react';
import Image from 'next/image';
import InputButton from '../../inputButton/InputButton';
import Blue from '../../../../public/Images/blue.svg';
import gpp from '../../../../public/Images/gpp.png';
import { FaApple } from "react-icons/fa";
import { TiSocialSkype } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import purple from '../../../../public/Images/purple.svg';
import flag1 from '../../../../public/Images/flag1.svg';
import flag2 from '../../../../public/Images/flag2.svg'





const Jumpstart = () => {
    return (
        <section className="relative min-h-[150vh] w-full bg-[#502274] text-white overflow-hidden pt-24 pb-12">

            {/* Background SVG */}
            <Image
                src={Blue}
                alt="blue man svg"
                className="absolute top-12 left-[22%] w-[22%] rotate-19 z-0"
            />
            <Image src={purple} alt=" purple" className='absolute bottom-130 right-[4%] w-[22%]  z-0' />


            {/* Top Content */}
            <div className="relative z-10 flex flex-col items-center pt-32 pb-24 text-center">
                <h2 className="max-w-2xl text-5xl font-extrabold text-[#e9c0e9] mb-12">
                    Jumpstart your corner of the internet today
                </h2>

                <InputButton
                    ButtonText="Claim Your Linktree"
                    ButtonLink="#"
                    ButtonColor="#d2e823"
                    ButtonTextColor="black"
                    ButtonPadding="15px 30px"
                />
            </div>

            {/* Footer Card */}
            <div className="relative z-10 bg-white text-slate-900 w-[90%] md:w-[70%] mx-auto mt-24 rounded-xl pt-16 pb-24 px-10">

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-24">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item}>
                            <h3 className="font-bold mb-3">Company</h3>
                            <ul className="space-y-1 text-sm">
                                <li>facilis nulla</li>
                                <li>iusto ipsa</li>
                                <li>magnam esse</li>
                                <li>earum consectetur</li>
                                <li>illo vel</li>
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-16 pb-2">
                    <div className='flex items-center justify-center'>
                        <a href="#" className="px-6 py-3 bg-gray-100 rounded-full">
                            Login
                        </a>
                        <a href="#" className="px-6 py-3 bg-[#d2e823] rounded-full font-semibold">
                            Get Started for Free
                        </a>
                    </div>
                    <div className='flex gap-4'>
                        <a href="#" className='flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white rounded-full px-3 py-2'><FaApple className='text-4xl' /><p className='flex items-center justify-center flex-col'><span className='text-xs text-gray-300 font-extrabold'>Download on the</span><span className='text-md'>App Store</span></p></a>
                        <a href="#" className='flex items-center justify-center bg-slate-900 text-white rounded-full px-3 py-2'><img src={gpp} className='' width={30} /><p className='flex items-center justify-center flex-col hover:bg-slate-800'><span className='text-xs text-gray-300 font-extrabold'>Get it on</span><span className='text-md'>Google Play</span></p></a>
                        <a href="#" className=' p-4 rounded-full bg-slate-900 text-white hover:bg-slate-800'><TiSocialSkype className='text-lg' /></a>
                        <a href="#" className='  p-4 rounded-full bg-slate-900 text-white hover:bg-slate-800'><SlSocialPintarest className='text-lg' /></a>
                        <a href="#" className=' p-4 rounded-full bg-slate-900 text-white hover:bg-slate-800'><SlSocialInstagram className='text-lg' /></a>
                        <a href="#" className=' p-4 rounded-full bg-slate-900 text-white hover:bg-slate-800'><SlSocialTwitter className='text-lg' /></a>
                    </div>
                </div>

            </div>

            <div className="flags">
                <div className="grid grid-cols-2 w-[15%] mx-auto py-18">
                    <Image src={flag1} alt=" flag 1" width={100} className='' />
                    <Image src={flag2} alt=" flag 2" width={100} className='' />
                </div>
            </div>
            <div className="jumpstartDescription text-violet-200">
                <p className='w-3/4 mx-auto text-center text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ab enim rerum blanditiis cumque. Fuga quo error aut culpa iste ducimus perferendis, unde cum quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est facilis, aut hic sunt recusandae fugiat? At alias dolorum, quis deleniti temporibus nesciunt rerum quo. </p>
            </div>
        </section>
    );
};

export default Jumpstart;