import bootstrapIcon from "../assets/skills/ICON-BOOTSTRAP.svg"
import firebaseIcon from "../assets/skills/ICON-FIREBASE.svg";
import htmlIcon from "../assets/skills/ICON-HTML.svg";
import cssIcon from "../assets/skills/ICON-CSS.svg";
import jsIcon from "../assets/skills/ICON-JS.svg";
import mysqlIcon from "../assets/skills/ICON-MYSQL.svg";
import nodeIcon from "../assets/skills/ICON-NODE.svg";
import reactIcon from "../assets/skills/ICON-REACT.svg";
import tsIcon from "../assets/skills/ICON-TS.svg";

export type SkillObjectType = {
    [key: string]: {
        title: string;
        icon: string;
    };
};

type SkillItem = {
    id: string,
    alt: string;
    title: string;
    src: string;
    color: string
};


export const skillsObject: SkillObjectType = {
    bootstrap: { title: "Bootstrap", icon: bootstrapIcon },
    firebase: { title: "Firebase", icon: firebaseIcon },
    html: { title: "HTML", icon: htmlIcon },
    css: { title: "CSS", icon: cssIcon },
    js: { title: "JavaScript", icon: jsIcon },
    mysql: { title: "MySQL", icon: mysqlIcon },
    node: { title: "Node.js", icon: nodeIcon },
    react: { title: "React", icon: reactIcon },
    ts: { title: "TypeScript", icon: tsIcon },
};


export const skillsArray: SkillItem[] = [
    { id: '0', alt: "Bootstrap", title: "Bootstrap", src: bootstrapIcon, color:'green' },
    { id: '1', alt: "Firebase", title: "Firebase", src: firebaseIcon, color:'yellow' },
    { id: '2', alt: "HTML", title: "HTML", src: htmlIcon, color:'blue' },
    { id: '3', alt: "CSS", title: "CSS", src: cssIcon, color:'orange' },
    { id: '4', alt: "JavaScript", title: "JavaScript", src: jsIcon, color:'yellow' },
    { id: '5', alt: "MySQL", title: "MySQL", src: mysqlIcon, color:'aqua' },
    { id: '6', alt: "Node.js", title: "Node.js", src: nodeIcon, color:'dark-green' },
    { id: '7', alt: "React", title: "React", src: reactIcon, color:'dark-blue' },
    { id: '8', alt: "TypeScript", title: "TypeScript", src: tsIcon, color:'dark-blue' },
];