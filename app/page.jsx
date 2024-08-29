"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stars from "@/components/Stars";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/ShubhamShinde__Resume.pdf';
    link.download = 'ShubhamShinde__Resume.pdf';
    link.click(); 
  };


  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 md-6">Hello I'm <br /> <span className=" text-accent">Shubham Shinde</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Crafting Seamless, Robust, and Scalable Web Applications with Expertise in Front-End, Full Stack Development, and Cutting-Edge Technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              onClick={handleDownload}
              download variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stars />
    </section>
  )
}

export default Home