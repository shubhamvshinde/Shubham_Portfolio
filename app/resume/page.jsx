"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNode, FaAngular, FaTypo3, FaBootstrap, FaCss3Alt, FaReacteurope, FaBox, FaGithub, FaGit, FaDatabase, FaAd } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description: `Hello! I'm Shubham Shinde, a passionate and dedicated software developer with over 1.8+ years of experience in front-end and full stack development. My journey in the tech world has allowed me to craft seamless, robust, and scalable web applications that provide users with intuitive and engaging digital experiences. ${<br></br>} With a strong foundation in ReactJS, NextJS, Angular, HTML5, CSS3. I specialize in building dynamic user interfaces and integrating them with powerful back-end systems. My expertise extends to creating responsive, high-performance applications that meet modern web standards and exceed client expectations.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shubham Shinde",
    },
    {
      fieldName: "Phone",
      fieldValue: "9673401627",
    },
    {
      fieldName: "Email",
      fieldValue: "sshubhams1906@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.8+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/shubhamvshinde/",
    },
    {
      fieldName: "GitHub",
      fieldValue: "https://github.com/shubhamvshinde",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
  ]
}

const experience = {
  icon: "/assets/resume/bagde.svg",
  title: "My Experience",
  description: "I'm passionate and dedicated software developer with over 1.8+ years of experience in front-end and full stack development. My journey in the tech world has allowed me to craft seamless, robust, and scalable web applications that provide users with intuitive and engaging digital experiences. With a strong foundation in ReactJS, NextJS, Angular, HTML5, CSS3, Bootstrap and NodeJS.",
  items: [
    {
      company: "Indiam Tech Kolhapur",
      position: "Frontend Developer",
      duration: "August 2023 - Present",
    },
    {
      company: "Mobiloitte Technologies Pvt Ltd. Pune",
      position: "Full Stack Developer",
      duration: "Dec 2022 - July 2023",
    },
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      institution: "JSPM'S Jayawant Institute Of Management Studies, Pune",
      degree: "Master Of Computer Application",
      duration: "2023",
    },
    {
      institution: "Yashwantrao Chavan Institute Of Science, Satara",
      degree: "B.Sc ( Computer Science )",
      duration: "2020",
    },
    {
      institution: "Yashwantrao Chavan Institute Of Science, Satara",
      degree: "HSC",
      duration: "2017",
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "",
  skillset: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaBootstrap />,
      name: "BootStrap",
    },
    {
      icon: <FaCss3Alt />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaTypo3 />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaReacteurope />,
      name: "React-Redux",
    },
    {
      icon: <FaAd />,
      name: "API",
    },
    {
      icon: <FaBox />,
      name: "PostMan",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaNode />,
      name: "Node JS",
    },
    {
      icon: <FaDatabase />,
      name: "MySQL",
    },
    {
      icon: <FaDatabase />,
      name: "MongoDB",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity:1,
        transition:{ delay: 2.4, duration: 0.4, ease:"easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

      <div className="min-h-[70vh] w-full" >
        <TabsContent value="experience" className="w-full">
          Experience
        </TabsContent>
        <TabsContent value="education" className="w-full">
        Education
        </TabsContent>
        <TabsContent value="skills" className="w-full">
        Skills
        </TabsContent>
        <TabsContent value="about" className="w-full">
        About Me
        </TabsContent>

      </div>


        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume