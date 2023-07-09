
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="bg-primary/60 h-full ">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left container lg:ml-40 mx-auto h-full">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="uppercase text-2xl xl:text-5xl mb-4 font-semibold ">I am <span className="text-accent">SK Naime Hasan</span><br /><span > Full-stack web developer</span> </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-md xl:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-start text-sm lg:text-base">Welcome to my portfolio website! As a dedicated web developer, I specialize in crafting exceptional websites using the powerful MERN stack. With a passion for creativity and a commitment to excellence, I bring a unique touch to every project. Explore my portfolio to witness the artistry and functionality of my creations.Let us embark on a journey together to build remarkable digital experiences.</motion.p>
        <div className="flex justify-center xl:hidden">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-80">
        </div>
        <div>
          <motion.div        
        variants={fadeIn("up", 0.5)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        transition={{duration: 1 , ease: "easeInOut"}}
        className="w-full h-full max-w-[737px] max-h[678px] absolute -bottom-32 lg:-bottom-52 lg:right-[8%]"><Avatar/></motion.div>
        </div>
    </div>
  </div>
};

export default Home;
