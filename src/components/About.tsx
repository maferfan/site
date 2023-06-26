import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from "../variants"
import image from '../assets/imageMinha2.png'
export const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
    })
    return (
        <div id="about" className="py-8 lg:py-24 lg:h-screen flex items-center btn2" ref={ref}>
            <div className="container mx-auto">
                <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
                    <div className='lg:flex mx-20 flex-1 max-w-[320px] lg:max-w-[322px] lg:max-h-[452px] overflow-hidden rounded-full'>
                        <img src={image} alt="" className="w-full h-full object-cover transform opacity-70" />
                    </div>
                    <div className="p-4 w-full flex-1 flex flex-col text-justify items-center">
                        <h2 className="text-bold font-primary text-2xl mb-4 lg:text-[35px]">About me</h2>
                        <h3 className="mb-4 lg:text-[26px] font-secondary text-center">I'm a Engineer and Fullstack Developer with 4 months of experience.</h3>
                        <p className="mb-6 max-w-lg lg:text-[20px] font-secondary">
                            Hello, I'm Matheus. I'm From Rio Grande do Sul, living in Joinville - SC and I'm 24 years old.
                            Biochemical engineer in career transition because  I love the creative  world of development and each day that passes this feeling grows.
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 text-center">
                            <div>
                                <div className="text-[40px] mb-2">
                                    {
                                        inView ?
                                            <CountUp start={0} end={4} duration={3} /> :
                                            null}
                                </div>
                                <div className="text-sm tracking-[2px]">
                                    Months of <br /> experience
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] mb-2">
                                    {
                                        inView ?
                                            <CountUp start={0} end={5} duration={3} /> :
                                            null}
                                </div>
                                <div className="text-sm tracking-[2px]">
                                    Projects <br /> completed
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] mb-2">
                                    {
                                        inView ?
                                            <CountUp start={0} end={1000} duration={4} /> :
                                            null}
                                    +
                                </div>
                                <div className="text-sm tracking-[2px]">
                                    Hours <br /> developing
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}