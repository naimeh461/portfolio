import Image  from "next/image";
import Link from "next/link";

import{RiGmail,RiGithubLine,RiLinkedinLine,RiWhatsappLine} from 'react-icons/ri'

const Header = () => {
  return <header className="absolute w-full px-16 h[90px] mt-4 z-30 ">
    <div className="">
      <div className="py-3 px-4 bg-white/10 backdrop-blur-sm text-xl rounded-full w-32 lg:ml-28 mx-auto">
      <div className="flex items-center gap-x-5 text-lg">
          <Link href={"https://github.com/naimeh461"} className="hover:text-accent transition-all duration-300" target="_blank"><RiGithubLine/></Link>
          <Link href={"https://www.linkedin.com/in/naime-hasan-63874719b"} className="hover:text-accent transition-all duration-300" target="_blank"><RiLinkedinLine/></Link>
          <Link href={"https://wa.link/5rz8ki"} className="hover:text-accent transition-all duration-300" target="_blank"><RiWhatsappLine/></Link>
       </div>
      </div>
      
    </div>
  </header>;
};

export default Header;
