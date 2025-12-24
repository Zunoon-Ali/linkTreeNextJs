import React from 'react';
import Image from "next/image";

import bottomImg from "../../../../public/Images/feature-bottom.webp"
import TeamSlider from "../../TeamSlider/TeamSlider"


const Feature = () => {
    const capsule = [
        { capsule: "Images/crunch.png" },
        { capsule: "Images/forbes.png" },
        { capsule: "Images/insider.png" },
        { capsule: "Images/fortune.png" },
        { capsule: "Images/mashable.png" },
    ];

    return (
        <section id="feature-sec" className='min-h-screen w-full bg-[#f3f3f1]'>
            <div className="feature-top flex items-center justify-center flex-col py-16">
                <h2 className="w-1/2 text-5xl text-slate-900 mb-3 text-center font-extrabold">
                    The fast, friendly and <br /> powerful link in bio tool.
                </h2>
                <button type="button" className='text-gray-900 text-md bg-[#e9c0e9] my-3 px-12 py-4 rounded-full'>
                    Explore All Plans
                </button>
            </div>

            <div className="feature-middle flex items-center justify-center flex-col py-16 bg-[#f3f3f1]">
                <h2 className="w-1/2 text-5xl text-slate-900 mb-3 text-center font-extrabold">
                    As featured in...
                </h2>

                <div className="feature-capsule grid grid-cols-3 justify-items-center gap-2 py-16">
                    {capsule.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            className='px-6 py-4 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center'
                        >
                            <img
                                src={item.capsule}
                                alt={`capsule-${index}`}
                                className="h-7 object-contain object-center w-75 px-12"
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="feature-bottom flex items-center justify-center flex-col py-16 bg-[#f3f3f1]">
                {/* <img src={bottomImg} alt="feature Bottom images" className='w-[38.333vw] rounded-xl my-4' />

                <h2 className="w-1/2 text-5xl text-slate-900 mb-3 text-center font-extrabold">
                    The fast, friendly and <br /> powerful link in bio tool.
                </h2> */}
                <TeamSlider />
            </div>
        </section>
    );
};

export default Feature;