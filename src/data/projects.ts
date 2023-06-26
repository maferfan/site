import {skillsObject } from "./skills";
import imageProject1 from '../assets/projects/IMC.png'
import imageProject2 from '../assets/projects/bibliotech.png'
import imageProject3 from '../assets/projects/memoryGame.png'
import imageProject4 from '../assets/projects/petshop.png'
import imageProject5 from '../assets/projects/assistenteVirtual.png'
import imageProject6 from '../assets/projects/OLX.png'

type Skill = {
    title: string,
    icon: string
}

type ProjectsType = {
    image: string,
    title: string,
    link: string,
    isFinished: boolean
    skills: Skill[]
}

export const projects: ProjectsType[] = [
    {
        image: imageProject1,
        title: "IMC calculator",
        link: "https://github.com/maferfan/Projetos/tree/main/react-calculator",
        isFinished: true,
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"]]
    },
    {
        image: imageProject2,
        title: "Bibliotech",
        link: "https://github.com/maferfan/Projetos/tree/main/bibliotech-project",
        isFinished: true,
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"], skillsObject["bootstrap"], skillsObject["firebase"]]
    },
    {
        image: imageProject3,
        title: "Memory Game",
        link: "https://github.com/maferfan/Projetos/tree/main/memory-game",
        isFinished: true,
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["ts"]]
    },
    {
        image: imageProject4,
        title: "PetShop",
        link: "https://github.com/maferfan/Projetos/tree/main/petshop",
        isFinished: true,
        skills: [skillsObject["node"]]
    },
    {
        image: imageProject5,
        title: "Virtual Assistant",
        link: "https://github.com/maferfan/Projetos/tree/main/Assistente%20virtual",
        isFinished: true,
        skills: [skillsObject["py"]]
    },
    {
        image: imageProject6,
        title: "OLX",
        link: "",
        isFinished: false,
        skills: [skillsObject["py"]]
    },
];