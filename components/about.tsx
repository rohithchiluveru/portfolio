"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* 

    
 

*/}

<p className="mb-3">
  Hi, I'm Rohith Chiluveru— a{" "}
  <span className="font-medium">UI/UX-centric front-end developer</span> with a strong foundation in{" "}
  <span className="font-medium">Figma</span>, intermediate proficiency in{" "}
  <span className="font-medium">HTML and CSS</span>, and growing knowledge in{" "}
  <span className="font-medium">JavaScript and React</span>. I specialize in crafting{" "}
  <span className="font-medium">responsive, user-friendly websites</span> that balance{" "}
  <span className="italic">clean design</span> with smooth functionality to create seamless user experiences.
  Currently, I'm pursuing my{" "}
  <span className="font-medium">B.Tech in Computer Science Engineering</span>, and alongside my studies, I'm
  actively advancing my skills in{" "}
  <span className="font-medium">full-stack web development</span> through coding bootcamps and hands-on projects. 
  Currently seeking opportunities to leverage my skills and contribute to innovative software development projects.
</p>




    </motion.section>
  );
}
