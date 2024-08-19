"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";


const services = [
  {
    num: '01',
    title: 'Front-End Development',
    description: 'Crafting visually appealing and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React.js and Angular. I specialize in creating responsive designs that work seamlessly across devices, ensuring an optimal user experience.',
    href: "",
  },
  {
    num: '02',
    title: 'Full-Stack Development',
    description: 'Providing comprehensive web development services, from front-end to back-end. Utilizing technologies like Node.js and Express for server-side development and React.js for client-side development. I build scalable, secure, and efficient web applications tailored to your needs.',
    href: "",
  },
  {
    num: '03',
    title: 'Responsive Web Design',
    description: 'Designing and developing websites that look and function beautifully on any device, from desktops to smartphones. I focus on creating adaptive layouts that provide a consistent user experience across different screen sizes.',
    href: "",
  },
  {
    num: '04',
    title: 'Single-Page Application',
    description: 'Building fast, interactive, and seamless single-page applications (SPAs) using modern JavaScript frameworks like React.js and Angular. My SPAs are designed for performance, offering a native app-like experience in the browser.',
    href: "",
  },
  {
    num: '05',
    title: 'API Integration & Development',
    description: 'Integrating third-party APIs or developing custom APIs to connect your application with external services. I ensure smooth data exchange between your app and other platforms, enhancing functionality and user experience.',
    href: "",
  },
  {
    num: '06',
    title: 'Web Performance Optimization',
    description: 'Enhancing website performance by optimizing code, reducing load times, and implementing best practices. I ensure your website is fast, reliable, and provides a smooth user experience.',
    href: "",
  },
  {
    num: '07',
    title: 'Cross-Platform Mobile App Development',
    description: 'Developing mobile applications that work on both iOS and Android platforms using frameworks like Ionic and React Native. I focus on delivering apps that are responsive, efficient, and aligned with your business goals.',
    href: "",
  },
  {
    num: '08',
    title: 'Custom Web Application Development',
    description: 'Designing and developing custom web applications tailored to your unique business needs. I deliver scalable, secure, and high-performing solutions that align with your goals, whether it’s a complex enterprise application or a simple tool.',
    href: "",
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {
            services.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-180"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>

                  <h2>{service.title}</h2>

                  <p>{service.description}</p>

                  <div className="border-b border-white/20 w-full">
                  </div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Services;