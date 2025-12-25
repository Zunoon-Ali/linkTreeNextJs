import React, { cache } from 'react'
import Hero from '../Home/Hero/Hero'
import About from '../Home/About/About'
import Emilio from '../Home/Emilio/Emilio'
import Feature from '../Home/Feature/Feature'
import Trusted from '../Home/Trusted/Trusted'
import Jumpstart from '../Home/Jumpstart/JumpStart'
import Faq from '../Home/Faq/Faq'

async function getHomePageData() {
  const res = await fetch(`${process.env.NEXT_BASE_PUBLIC_URL}/api/HomePage`, {
    cache: 'no-store'
  })
  return res.json()
}
const HomePage = async () => {
  const data = await getHomePageData()
  return (
    <>
      <Hero data={data.hero} />
      <About data={data} />
      <Emilio data={data} />
      <Feature data={data} />
      <Trusted data={data} />
      <Faq data={data} />
      <Jumpstart data={data} />


    </>
  )
}

export default HomePage