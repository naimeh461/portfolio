import { useEffect, useState } from "react";
import DetailsModal from "./DetailsModal";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({ project }) => {
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (openModal) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [openModal]);

    return (
        <div data-aos="fade-up" data-aos-duration="1200" className="border border-[#6f54ef] rounded-lg overflow-hidden flex flex-col h-full my-auto">
            <div className="   overflow-hidden lg:h-[300px] h-[100px]">
            <picture>   <img className="w-full h-full object-cover object-top hover:object-bottom duration-[6000ms]" src={project.image} alt="" /> </picture>
            </div>

            <div className="p-5 flex flex-col -mt-2 lg:mt- lg:h-[60%] h-[80%]">
                <h3 className="text-2xl font-semibold text-gray-100 lg:mb-4">{project.name}</h3>
                <p className="text-gray-300 hidden lg:flex">{project.details}</p>

                <div className="flex gap-3 mt-auto justify-center lg:justify-start ">
                    <a href={project?.links?.git_code} target="_blank" className=" bg-white rounded hidden lg:flex text-purple-950 p-1"><button>GitHub Code</button></a>
                    <a href={project?.links?.live_site} target="_blank" className=" bg-white rounded hidden lg:flex text-purple-950 p-1"><button>Live Site</button></a>
                    <a onClick={() => setOpenModal(true)}><button className=" bg-white rounded text-purple-950 p-1 ">Details</button></a>
                </div>

                
            </div>
            {openModal && <DetailsModal id={project._id} setOpenModal={setOpenModal} />}
        </div>
    )
};

export default Project;