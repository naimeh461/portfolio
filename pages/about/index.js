import { useState } from "react";

import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress , FaBootstrap , FaNodeJs , FaStripe, FaJava } from "react-icons/fa";
import { VscDebugConsole } from "react-icons/vsc";
import { BiExtension , BiLogoNetlify} from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { PiMicrosoftWordLogoFill , PiMicrosoftExcelLogoFill , PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { SiNextdotjs , SiTailwindcss , SiDaisyui , SiFirebase ,SiCloudera , SiCplusplus ,SiJavascript, SiReactrouter, SiMongodb , SiNotion, SiExpress, SiAdobeillustrator } from "react-icons/si";
import AboutMe from "../../components/About/AboutMe";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
export const aboutData = [
  {
    title: 'Expertise',
    icons: [<FaHtml5 key="html" />, <FaCss3 key="css" />, <FaBootstrap key="bootstrap" />, <SiTailwindcss key="tailwind" />, <SiDaisyui key="daisyui" />],
    icons1: [<SiFirebase key="firebase" />, <FaReact key="react" />, <SiCloudera key="cloudera" />, <SiCplusplus key="cplusplus" />],
  },
  {
    title: 'Comfortable',
    icons: [
      <SiJavascript key="javascript" />,
      <SiReactrouter key="reactrouter" />,
      <SiMongodb key="mongodb" />,
      <VscDebugConsole key="debugconsole" />,
      <BiExtension key="extension" />,
    ],
  },
  {
    title: 'Familiar',
    icons: [<FaJava key="java" />, <SiExpress key="express" />, <FaNodeJs key="nodejs" />, <FaStripe key="stripe" />, <SiNextdotjs key="nextjs" />],
  },
  {
    title: 'Tools',
    icons: [
      <SiAdobeillustrator key="illustrator" />,
      <FaFigma key="figma" />,
      <TbBrandVscode key="vscode" />,
      <BiLogoNetlify key="netlify" />,
      <SiNotion key="notion" />,
    ],
    icons1: [
      <PiMicrosoftExcelLogoFill key="excel" />,
      <PiMicrosoftPowerpointLogoFill key="powerpoint" />,
      <PiMicrosoftWordLogoFill key="word" />,
    ],
  },
];
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/40 py-32 text-center xl:text-left ">
       <h2 className="poppins-font text-4xl font-bold text-center text-white -mt-10 lg:mt-0">About me</h2>
      <div className="container mx-auto h-full flex flex-col justify-center items-center lg:items-start lg:mt-40 xl:flex-row gap-x-6 lg:mx-[300px]">
        <motion.div 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex-1 flex flex-col justify-center lg:px-10"
        ><AboutMe></AboutMe>
        </motion.div>
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex- flex-col w-[90%] mx-auto xl:max-w-[40%] h-[480px] justify-center items-center"
        >
          <div className="flex  gap-x-4 xl:gap-x-8 ax-auto xl:mx-0 mb-4">
          {aboutData.map ((item, itemIndex) => {
            return(
              <div 
              key={itemIndex}
              className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
              {item. title}
            </div>
            )
            
          })}
          
       
          </div>     
          <div>
          <div className="flex gap-x-4  lg:mt-10">
            {aboutData[index]?.icons?.map((icon,itemIndex)=>{
              return <div className="lg:text-7xl text-5xl mt-6 mb-5" key={itemIndex}>{icon}</div>
            })}
          </div>
          <div  className="flex gap-x-4  lg:mt-10">
          {aboutData[index]?.icons1?.map((icon,itemIndex)=>{
            return <div className="lg:text-7xl text-5xl" key={itemIndex}>{icon}</div>
          })}
          </div>
          </div>   
        </motion.div>
      </div>
    </div>
  )
};

export default About;



