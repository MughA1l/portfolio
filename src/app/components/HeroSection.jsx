"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-600 to-red-800 from-primary-400 to-secondary-600">
              Hello, I&apos;m {"Muhammad Rohail "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "React/Next js Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a passionate web developer specializing in React, Next.js,
            HTML, CSS, Bootstrap, and Tailwind CSS. I excel at building
            responsive, dynamic websites and focus on clean, maintainable code.
            Eager to learn and adapt, I thrive in innovative, problem-solving
            environments.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-green-200 via-green-300 to-green-400 from-primary-300 to-secondary-500 hover:bg-slate-500 text-white"
            >
              <span className="block bg-[#232323] hover:bg-slate-500 rounded-full px-3 py-1">
                Hire Me
              </span>
            </Link>
            <Link
              href="/#contact"
              className="px-1 inline-block rounded-full py-1 w-full sm:w-fit bg-gradient-to-r from-green-200 via-green-300 to-green-400 from-primary-200 to-secondary-500 hover:bg-slate-400 text-white mt-3"
            >
              <span className="block bg-[#232323] hover:bg-slate-500 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-[#9121212] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/her.jpg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
