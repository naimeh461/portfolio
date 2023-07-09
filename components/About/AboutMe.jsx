import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"
const AboutMe = () => {
    return (
        <div className='mt-5 mb-10 lg:my-0'>
            <div className='flex gap-2 justify-center lg:justify-start mb-3'>
                <h2 className='text-xl lg:text-4xl font-bold text-gray-100'>{"I'm"}</h2>
                <TypeAnimation className='text-xl lg:text-4xl font-bold text-gray-100'

                    sequence=
                    {
                        [
                            "Sk Naime Hasan",
                            1000,
                            "MERN Stack Developer",
                            1000,
                            "Computer Science Student",
                            1000,
                            "Front-End Developer",
                            1000,
                        ]}
                    speed={30}
                    style={{ fontWeight: 'bold', color: "red" }}
                    repeat={Infinity}
                />
            </div>
            <motion.p 
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='text-sm lg:text-lg text-justify '>A Passionate Full-Stack Developer Crafting Cutting-Edge Web Apps with Clean Code, Pixel-Perfect Designs, and Engaging Web Animations. Currently pursuing a BSC Degree in Computer Science Engineering (CSE), I am dedicated to delivering exceptional user experiences through my expertise in the MERN stack. Let us bring your ideas to life and make an impact together</motion.p>

            <div className='mt-6 hidden lg:flex gap-4'>
            <div>
                 <a href={'/work'}><button className='py-3 px-6 bg-white text-purple-950 font-semibold rounded border-2 border-while'>Work</button></a>
            </div>
            <a href={'/contact'} className=''>
            <button data-aos="fade-up-left" data-aos-delay="600" data-aos-duration="1200" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-while hover:border-transparent rounded-lg group">
                <span className="absolute inset-0 flex gap-2 items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-br from-red-500 to-accent group group-hover:translate-x-0 ease">
                    <span>Hire Me</span>
                    <FaArrowRight />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Hire Me</span>
                <span className="relative invisible">Hire Me</span>
            </button>
            </a>
            </div>
        </div>
    );
};

export default AboutMe;