'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            ref={ref}
            id='contact'
            className="scroll-mt-28 mb-20 w-[min(100%, 38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading> Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at 
                <a  href='mailto:rafayshakeelbachani@gmail.com'> rafayshakeelbachani@gmail.com </a>
                or through this form.
            </p>
            <form className='mt-10 flex flex-col dark:text-black'>
                <input type='email' name="senderEmail" placeholder="Your email" className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none" required={true} maxLength={500} />
                <textarea name="message" placeholder="Your message" className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none" maxLength={5000} />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
