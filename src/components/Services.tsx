import { skillsArray } from '../data/skills'
import image from '../assets/fotoMinha3.png'
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import { useEffect, useState } from 'react'

export const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="py-8 lg:py-24 lg:h-screen flex items-center bg-gray-100 btn" id="services">
            <motion.div variants={fadeIn('bottom', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="container mx-auto flex flex-wrap md:flex-nowrap gap-x-10 md:gap-x-20 gap-y-10 items-center justify-evenly">
                <div className='flex flex-col items-center'>
                    <h2 className='text-[45px] font-primary text-neutral-600'>What i do now?</h2>
                    <h3 className='my-6 text-[25px]  font-terciary text-justify '>Now i'm working in my personal projects searching for first job in area.</h3>
                    <div className='lg:flex mx-20 flex-1 max-w-[320px] lg:max-w-[352px] lg:max-h-[452px] overflow-hidden opacity-30'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-3 filter  gap-5'>
                        {skillsArray.map((skill, index) => {
                            return (
                                <img
                                    key={index}
                                    {...skill}
                                    alt={skill.title}
                                    className='contrast-0 hover:filter-none hover:scale-125 opacity-1 transition-all duration-500'
                                />
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}