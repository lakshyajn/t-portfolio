import React from "react";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, MailPlus, MouseIcon, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyProjects from "@/components/projects";
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import CertificationsSection from "@/components/cert";
import Head from "next/head";
import CopyCmd from "@/components/copycmd";
import { FlipWordsDemo } from "@/components/words";
import { DockDemo } from "@/components/dock";
import HoverImageComponent from "@/components/skills";
import ReadmeDisplay from "@/components/readme";
import ContactMe from "@/components/contact";

const projects = [
    { title: 'After 10', description: 'A Next.js Food Ordering Website for Mobile', icon: <RiNextjsFill className='text-black bg-white rounded-3xl' /> },
    { title: 'Freelance Forge', description: 'A Next.js + Web3 project for freelancing', icon: <div className="flex-col justify-between gap-4"><SiHiveBlockchain className='text-blue-500' /><RiNextjsFill className='text-black bg-white rounded-3xl' /></div>},
    { title: 'Tour Planner', description: 'A Tour Planner using React', icon: <FaReact className='text-purple-500' /> },
   
 
  
  ];
  
const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
          
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={20} />
                    Hey, I am
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">Lakshya</h1>
                    
                </div>
               
                <FlipWordsDemo />
                
                <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    Contributor @< span className="  text-blue-500  font-bold"> GSSoC'24 , TSoC'24</span> & <span className="  text-blue-500 font-bold ">SSoC'24 </span> 
                </p>
                <div className="flex flex-col md:flex-row items-right mt-3 gap-1 md:gap-3">
                <CopyCmd /> 
             <DockDemo />
         </div>
         <HoverImageComponent />
        <div>
     <MyProjects projects={projects} />
      </div>
       <div>
      <ContactMe />
    </div>
    </div>  
   </section>
    );
};

export default page;