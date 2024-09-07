'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About');


    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading> About me</SectionHeading>
            <p>Proficient in front-end development with a passion for creating engaging user experiences, I am currently pursuing a degree in Software Engineering at MUET. I bring a strong foundation in HTML5, CSS, JavaScript, and WordPress to the table. Eager to apply my skills and collaborate with dynamic teams in a front-end developer role, I am excited about the opportunity to leverage WordPress to build interactive and visually appealing websites.</p>
            {/* <p className='mb-3'>
                After graduating with a degree in {" "}
                <span className='font-medium'>Accounting</span>, I decided to pursue my passion for programming. I enrolled in a coding boocamp and learned {" "} <span className='font-medium'> full-stack web development</span>. {" "} <span className='italic'>My favorite part of programming</span> is the problem-solving aspect. I <span className='underline'>love</span> the feeling of finally figuring out a solution to a problem. My code stack is {" "} <span className='font-medium'>React.js, Next.js, Node.js and MongoDB</span>. I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a {" "} <span className='font-medium'>full-time position</span> as software developer.
            </p>
            <p>
                <span className='italic'>When I&apos;m not coding</span>, I enjoy play video games, watching movies, and playing with my dog. I also enjoy {" "} <span className='font-medium'>learning new things</span>. I am currently learning about {" "} <span className='font-medium'>history and philosophy</span>. I&apos;m also learning how to play the guitar.
            </p> */}

        </motion.section>
    )
}
