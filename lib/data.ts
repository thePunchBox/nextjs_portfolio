import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/corpcomment.png";
import tajdeedImg from "@/public/tajdeed.png";

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
    title: "Front End Developer Intern",
    location: "Verge Systems",
    description:
      "Acquired essential skills in HTML, CSS, and JavaScript to create engaging and interactive web interfaces, laying a solid foundation for building user-friendly websites and applications.",
      icon: React.createElement(CgWorkAlt),
    date: "APR 2024 - MAY 2024",
  },
  {
    title: "Cheif Technology Officer",
    location: "Tajdeed",
    description:
      "Oversaw the entire technology stack for the startup, ensuring seamless integration and functionality across various platforms. Designed and developed a high-quality landing page that effectively captures the startup's vision and engages visitors. This included handling everything from front-end development to backend integration, ensuring a cohesive and professional online presence.",
    icon: React.createElement(CgWorkAlt),
    date: "APR 2024 - PRESENT",
  },
  {
    title: "React and NextJs Fellowship",
    location: "Bytewise Limited",
    description:
      "Learning React and NextJS and making real world projects to excelGain practical experience in React and Next.js by working on real-world projects. This hands-on approach will help you build scalable web applications and advance your career as a skilled developer.",
      icon: React.createElement(CgWorkAlt),
    date: "JUNE 2024 - PRESENT",
  },
] as const;

export const projectsData = [
  {
    title: "Cryp Nex",
    description:
      "Made a clone of Uniswap Interface website with React",
    tags: ["React", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Tajdeed Landing Page",
    description:
      "Made the Landing Page for Tajdeed startup",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: tajdeedImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Java",
  "C++",
  "MySQL",
] as const;