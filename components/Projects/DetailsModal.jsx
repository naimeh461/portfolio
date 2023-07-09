import { useEffect, useState } from "react";
const DetailsModal = ({ id, setOpenModal }) => {
    const [project, setProject] = useState({})

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => {
            const project = data.find(project => project._id === id)
            setProject(project)
            console.log(project)
        })
    }, )

    return (
        <div style={{ backgroundImage: 'url(	https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg)', backgroundSize: 'cover', backgroundPosition: 'top' }} data-aos="flip-left" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-gray-900">
            <div className="relative overflow-y-auto rounded-lg w-full max-w-xl lg:h-4/5 border border-[#6f54ef] flex flex-col h-full">
                <button onClick={() => setOpenModal(false)} type="button" className="absolute top-2.5 right-2.5 z-10 text-gray-300 bg-[#6f54ef] rounded-full p-2 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-105 transition duration-300">

                </button>

                <div data-aos="zoom-in" data-aos-duration="400" data-aos-easing="ease-in-out" className="bg-gradient-to-br from-[#0F2033] via-[#1B1631] to-[#0F172B] p-5 overflow-hidden rounded-lg flex flex-col h-full">
                    <h3 className="mb-3 text-xl font-bold text-gray-100">{project.name}</h3>
                    <div className="overflow-hidden h-[300px]">
                    <picture>  <img className="w-full h-full object-cover object-top hover:object-bottom duration-[3000ms]" src={project.image} alt="" /> </picture>
                    </div>
                    <div className="mt-3 mb-5">
                        <h3 className="mb-3 text-xl font-bold text-gray-100">Used Technologies</h3>
                        <div className="flex gap-2 items-center flex-wrap">
                            {
                                project?.used_technologies?.map((tech, index) => <span key={index} className="px-2 py-1 bg-[#1B3F5E] text-blue-400 text-sm font-medium rounded-md">{tech}</span>)
                            }
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="mb-3 text-xl font-bold text-gray-100">Features</h3>
                        <ul className="list-outside list-disc pl-5 text-gray-100">
                            {
                                project?.features?.map((feature, index) => <li key={index}>{feature}</li>)
                            }
                        </ul>
                        <div className="bg-[#6f54ef] my-2 rounded-md p-2">
                                <h2>test account</h2>
                                <ul className="list-outside list-disc pl-5 text-gray-100">
                            {
                                project?.account?.map((account, index) => <li key={index}>{account}</li>)
                            }
                        </ul>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto  ">
                        <a href={project?.links?.git_code} target="_blank" className=" bg-white rounded  text-purple-950 p-1"><button>GitHub Code</button></a>
                        <a href={project?.links?.live_site} target="_blank" className=" bg-white rounded  text-purple-950 p-1"><button>Live Site</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;