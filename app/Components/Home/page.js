// NO "use client"
import Hero from './Hero/Hero';
import About from './About/About';
import Emilio from './Emilio/Emilio';
import Feature from './Feature/Feature';
import Trusted from './Trusted/Trusted';
import Jumpstart from './JumpStart/JumpStart';
import Faq from './Faq/Faq';

import connectDB from "@/app/lib/db";
import HomePageModel from "@/app/models/HomePage";

async function getHomePageData() {
  try {
    await connectDB();
    const data = await HomePageModel.findOne().lean();
    if (!data) return null;
    // Serialize to ensure it's simple JSON (removes ObjectIds etc)
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export default async function HomePage() {
  const data = await getHomePageData() || {}; // Fallback to empty object if null


  if (!data) return null;

  return (
    <>
      <Hero data={data.hero} />
      <About data={data.about} />
      <Emilio data={data.emilio} />
      <Feature data={data.features} />
      <Trusted data={data.trusted} />
      <Faq data={data.faqs} />
      <Jumpstart data={data.jumpStart} />
    </>
  );
}
