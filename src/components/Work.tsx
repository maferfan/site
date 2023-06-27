import { projects } from "../data/projects"
import { AiFillCheckCircle } from 'react-icons/ai'
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import { RotatingLines } from 'react-loader-spinner'
import { useState } from "react"
export const Work = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseOver = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="py-16 lg:py-8 lg:py-24 lg:flex lg:items-center btn2" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col items-center px-7 gap-y-10">
                    <h1 className="text-center text-[50px]">Projetos</h1>
                    <motion.div variants={fadeIn('right', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className=" xl:grid xl:grid-cols-3 xl:gap-x-28 xl:gap-y-6">
                        {projects.map((project, index) => {
                            return (
                                <div key={index} className={`w-[350px] h-[350px] relative ${project.isFinished === true && hoveredIndex === index ? "icon-animation transition-all duration-100" : ""}`} onMouseOver={() => handleMouseOver(index)}
                                    onMouseOut={handleMouseOut}
                                >
                                    {project.isFinished === true ? <a href={project.link} target="_blank" rel="noreferrer">
                                        <img src={project.image} alt="" className="h-[320px] w-[320px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 rounded-3xl" />
                                        <p className={`absolute top-0 left-0 w-[320px] h-[320px] object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white rounded-3xl text-xl font-bold ${project.isFinished === true ? "bg-black/20 bg-opacity-70" : "bg-black bg-opacity-70"}`}>{project.title}</p>
                                        <AiFillCheckCircle color="green" />
                                    </a> : <div>
                                        <img src={project.image} alt="" className="h-[320px] w-[320px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80 rounded-3xl" />
                                        <p className={`absolute top-0 left-0 w-[320px] h-[320px] object-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white rounded-3xl text-xl font-bold bg-black/60 bg-opacity-70"}`}>{project.title}</p>
                                        <RotatingLines strokeColor="black"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="15"
                                            visible={true} />
                                    </div>}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )

}