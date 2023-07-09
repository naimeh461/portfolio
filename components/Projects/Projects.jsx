import { useEffect, useState } from "react";
import Project from "./Project";
import { motion } from "framer-motion"
import { fadeIn } from "../../variants";
const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])
    console.log(projects)

    return (
        <div id="projects" className="py-10 lg:py-0 h-full my-auto">
            <h2 className="poppins-font text-4xl font-bold text-center text-white -mt-20 lg:mt-0">My Projects</h2>

            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            className="grid md:gap-5 grid-cols-2 md:grid-cols-4 lg:my-20 gap-5 mt-6 ">
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </motion.div>
        </div>
    );
};

export default Projects;