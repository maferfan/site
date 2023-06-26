import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import image from '../assets/imageMinha.jpg'

export const Banner = () => {
    return (
        <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center btn" id="home">
            <div className="container mx-auto">
                <div className='flex mx-auto flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-7'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[45px] font-bold leadind-[0.8] lg:text-[80px]'>
                            Greetings,
                        </motion.h1>
                        <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[43px] font-semibold uppercase leading-[1]'>
                            <span className='mr-4 text-neutral-600'>I am a</span>
                            <TypeAnimation sequence={[
                                'FullStack Developer',
                                2000,
                                'Engineer',
                                2000
                            ]}
                                speed={50}
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 mx-auto lg:mx-0 lg:text-[20px] font-secondary'> Here you will find information about me such as contacts and my projects.</motion.p>
                        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <button className='hover:text-gray-500 transition-all duration-300'>
                                Contact me
                            </button>
                            <a href="https://github.com/maferfan?tab=repositories" className='hover:text-gray-500 transition-all duration-300'>My Portfolio</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href="https://github.com/maferfan" target='_blank' className='hover:text-gray-500 transition-all duration-300'>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/matheus-ferrazza-52138219b/" target='_blank' className='hover:text-gray-500 transition-all duration-300'>
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/ferrazzam_/" target='_blank' className='hover:text-gray-500 transition-all duration-300'>
                                <FaInstagram />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[422px] lg:max-h-[452px] overflow-hidden rounded-full'>
                        <img src={image} alt="" className="w-full h-full object-cover transform opacity-70"/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}