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
                        <h2 className="text-bold font-primary text-2xl mb-4 lg:text-[35px]">Sobre mim</h2>
                        <h3 className="mb-4 lg:text-[26px] font-secondary text-center">Seja muito bem vindo em meu site.</h3>
                        <p className="mb-6 max-w-lg lg:text-[20px] font-secondary">
                            Olá, sou o Matheus. Sou do Rio Grande do Sul, morando em Joinville - SC e tenho 24 anos.
                            Engenheiro Bioquímico em transição de carreira porque amo o mundo do desenvolvimento e cada dia que passa esse sentimento cresce.
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
                                    Meses de <br /> experiência
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
                                    Projectos <br /> completos
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
                                    Horas de <br /> desenvolvimento
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}