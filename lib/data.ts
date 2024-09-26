import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/proj1.png";
import rmtdevImg from "@/public/proj2.png";
import wordanalyticsImg from "@/public/proj3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Learner, Problem solver",
    location: "Vadodara, India",
    description:
      "Aspiring UI/UX front-end developer with a strong growth mindset and a passion for learning. I actively engage in self-directed studies of HTML, CSS, and JavaScript, tackling real-world challenges through personal projects. With a focus on user-centered design, I create wireframes and prototypes using Figma, collaborating with peers to enhance my problem-solving skills and adapt to new tools. My commitment to continuous improvement drives me to deliver intuitive and engaging user experiences.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - present",
   
  },
  {
    title: "Freelancing",
    location: "Vadadara,India",
    description:
      "As a freelance designer skilled in Figma, I create user-centric designs for web and mobile applications. My process includes user research, wireframing, and prototyping, ensuring a seamless user experience. I collaborate effectively with teams and integrate feedback to refine designs. With a strong portfolio of diverse projects, I’m dedicated to delivering innovative solutions that meet client goals.",

    icon: React.createElement(FaReact),
    date: "Jan 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Anime",
    description:
      "I utilized Figma to create an engaging user experience through prototyping and frame-to-frame animations. I designed interactive prototypes",
    tags: ["Prototyping", "Animations","Interactive", "Design",],    imageUrl: corpcommentImg,
     link:"https://www.figma.com/proto/doXs9OAVgQc8UbUSiGesTV/Untitled?node-id=111-491&starting-point-node-id=30%3A17&t=LMD8x995TFLLxCHc-1"
  },
  {
    title: "rmtDev",
    description:
      " I designed an Apple webpage using Figma, featuring prototyping and smooth scrolling to enhance user engagement and showcase products effectively.",
    tags: ["Prototyping", "Animations","Interactive", "Design"],
    imageUrl: rmtdevImg,
     link:"https://www.figma.com/proto/qM3uvQLLazigt06sei3Ebo/Untitled?node-id=18-158&node-type=frame&t=scvuYnkLfiQeQC0P-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  },
  {
    title: "Mysink Ecommerce ",
    description:
      "I developed a responsive eCommerce website using HTML, CSS, and JavaScript, featuring product categories, cart functionality, and animations with the DummyJSON API.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
     link:"https://rohithchiluveru.github.io/Ecommerce/html/index.html"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "UI/UX",
  "Wordpress",
  "JavaScript",
  "Responsive Design",
  "Wireframing",
  "Prototyping",
  "Git",
  "github",
  "Tailwind",
  "Figma",
] as const;
