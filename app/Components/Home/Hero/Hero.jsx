import React from 'react'
import './hero.css';
import VerticalSlider from '../../VericalSlider/VerticalSlider';
import InputButton from '../../inputButton/InputButton';

const Hero = ({ data }) => {
  // Fallback to empty array if no videos
  const videoUrls = data?.heroSliderVideos || [];

  // Map simple strings to object structure expected by VerticalSlider
  const videos = videoUrls.map((src, index) => ({
    id: index + 1,
    src: src,
    name: `Video ${index + 1}`
  }));

  // Generic fallback content if data is completely missing
  if (!data) return null;

  return (
    <>
      <section id="hero sec" className='bg-[#b0d555] text-white min-h-screen pt-24 md:pt-0'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <div className="hero-left min-h-[60vh] md:min-h-[110dvh] flex items-center justify-center text-center md:text-start mx-auto w-full px-4 md:px-0">
            <div className="hero-left-content flex flex-col justify-end md:ml-6 items-center md:items-start">
              <h2 className='text-4xl md:text-6xl text-[#254f1a] font-extrabold mb-2' dangerouslySetInnerHTML={{ __html: data.heroH2 || "Welcome" }}></h2>
              <p className='text-base md:text-lg text-[#254f1a] mb-6 w-full md:w-[90%]'>{data.heroP}</p>
              <div className="hero-left-newsletter flex justify-center md:justify-start">
                <InputButton
                  ButtonText="Get Started"
                  ButtonLink={data.heroButtonLink || "#"}
                  ButtonColor="#254f1a"
                  ButtonTextColor="white"
                  ButtonPadding="12px 18px"
                />

              </div>
            </div>
          </div>
          <div className="hero-right min-h-[50vh] md:min-h-[70dvh] w-full overflow-hidden">
            <VerticalSlider videos={videos} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero