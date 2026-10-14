import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNEXT from "../assets/techno/next-js.webp";
import imgPRISMA from "../assets/techno/prisma.webp";

import Title from "./Title";
// import google from "../assets/companies/google.png";
// import amazon from "../assets/companies/google.png";
// import meta from "../assets/companies/google.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Node.js", image: imgNODE },
  { id: 6, name: "Tailwind", image: imgTAILWIND },
  { id: 7, name: "TypeScript", image: imgTYPE },
  { id: 8, name: "Next.js", image: imgNEXT },
  { id: 9, name: "Prisma", image: imgPRISMA },
];




const Experiences = () => {      
    return (
        <div >
            <Title title="Mes Expériences"/>
            <div>
                <div className="flex flex-col gap-4 justify-center items-center grid grid-rows-3 grid-flow-col gap-4">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex flex-col items-center justify-center gap-2 ">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-green-200">
                                    <img src={skill.image} alt={skill.name} className="w-full h-full rounded-full border-4 p-1 border-green-200 object-cover"/>
                                </div>
                                <p className="text-black font-normal">{skill.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {

                    }
                </div>
            </div>
        </div>
    )
}
    export default Experiences;