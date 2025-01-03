"use client"
import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { FaTools, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CertificationsSection from "@/components/cert";
import ReadmeDisplay from "@/components/readme";
import { title } from "process";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const certifications = [
  {
    id: 1,
    title: "SQL-Basic to Advanced",
    image: "/assets/geekster.jpeg",
    description: "Received the certificate for comple the geekster SQL assignments",
    issuer: "Geekster",
    date: "2024-08-30"
  },
  {
      id: 2,
      title: "Bitcoin Script Course",
      image: "/assets/bs.jpeg",
      description: "Comprehensive course on Bitcoin and blockchain technologies.",
      issuer: "BSV Academy",
      date: "2024-06-15"
    },
    {
      id: 3,
      title: "Bitcoin Enterprise Course",
      image: "/assets/be.jpeg",
      description: "Enterprising Blockchain and its scalability.",
      issuer: "BSV Academy",
      date: "2024-06-15"
    },
    {
        id: 4,
        title: "ML and Data Scientist",
        image: "/assets/iitgml.jpeg",
        description: "Enterprising Blockchain and its scalability.",
        issuer: "BSV Academy",
        date: "2024-06-15"
      },
    {
      id: 5,
      title: "Open Source Contributor",
      image: "/assets/ssoc.jpeg",
      description: "A great time to work on different quests.",
      issuer: "Social Script Foundation",
      date: "2024-08-15"
    }
 
];

const AboutPage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 5 + 1,
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 - 1.5,
            });
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

            particles.forEach((particle) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            });

            requestAnimationFrame(drawParticles);
        };

        drawParticles();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative">
           
            <section className="lg:max-w-[50%] mt-10 md:mt-12 md:max-w-[90%] relative md:m-auto p-2 flex flex-col min-h-screen">
                <div className="flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                    <div className='flex justify-center items-center'>
                        <FaTools className='text-2xl mr-2' />
                        <h1 className='text-center'> | About Me |</h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold mb-2">I'm Lakshya Jain </h2>
                        <p className="mb-4">A guy delved into world of creativity and problem solving, exploring different domains.</p>
                        <div className="flex justify-center space-x-4">
                            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-3xl"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    <ReadmeDisplay />
                    <CertificationsSection certifications={certifications} />
                </div>
            </section>
        </div>
    );
};

export default AboutPage;