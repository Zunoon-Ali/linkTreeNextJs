import React from 'react'
import './hero.css';
import VerticalSlider from '../../VericalSlider/VerticalSlider';
import InputButton from '../../inputButton/InputButton';

const Hero = () => {
  const videos = [
    { id: 1, src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnV3N3I0aDBkdmNyaHdmeXU4cTA3YjUxeGJjMGZycHF2YjdlNGFtYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4xWGyVKoXqg2eVCiq9/giphy.gif", name: "Nico & Fran" },
    { id: 2, src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd204ajE2MXhwYmttdTltanl2a2QyanM4d2FmZTZocmttdGl2Z3hmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Euep9OGNL0TutamVKS/giphy.gif", name: "Koy Sun" },
    { id: 3, src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW4wOW1jN2N3NWgzdnVna2hjdTkxYXI5ZHN6d296Y2FwMGRrenpieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DxwZPl7FRlqWDTruc7/giphy.gif", name: "Alex River" },
  ];
  return (
    <>
      <section id="hero sec" className='bg-[#b0d555] text-white min-h-screen'>
        <div className="grid grid-cols-2">
          <div className="hero-left min-h-[110dvh] flex items-center justify-center text-start mx-auto w-full">
            <div className="hero-left-content flex flex-col justify-end ml-12">
              <h2 className='text-6xl text-[#254f1a] font-extrabold mb-3'>A link in bio <br /> built for you.</h2>
              <p className='text-lg text-[#254f1a] mb-3 w-1/2'>Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.

              </p>
              <div className="hero-left-newsletter grid grid-cols-2 leading-relaxed gap-4">
                <InputButton
                  ButtonText="Get Started"
                  ButtonLink="#"
                  ButtonColor="#254f1a"
                  ButtonTextColor="white"
                  ButtonPadding="15px 30px"
                />

              </div>
            </div>
          </div>
          <div className="hero-right min-h-[70dvh]">
            <VerticalSlider videos={videos} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero