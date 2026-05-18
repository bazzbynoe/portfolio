import ProjectCard from "../components/ProjectCard"
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-32">
      
        <div className="grid lg:grid-cols-2 gap-12 w-full items-start">
            <div className="relative">
            <div className="lg:fixed lg:top-32">
                <p className="text-blue-400 mb-4">
                Frontend Developer & IT Professional
                </p>

                <h1 className="text-5xl font-bold text-gray-300">
                Shabazz Bynoe
                </h1>

                <p className="mt-6 text-[#94A3B8] max-w-md text-base">
                Building responsive websites and digital
                experiences using modern web technologies.
                </p>

                <div className="mt-8">
                <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    bg-blue-500 
                    px-6 
                    py-3 
                    rounded-xl 
                    text-gray-200
                    hover:bg-blue-700
                    transition-all
                    duration-300
                    ease-in-out
                    ">
                    View Resume
                </a>
                </div>
                <div className="lg:fixed lg:bottom-10 flex items-center gap-5 mt-8">
                <a
                href="https://www.linkedin.com/in/shabazz-bynoe-4a482529a/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-[#94A3B8]
                    hover:text-white
                    transition-colors
                    duration-300
                "
                >
                <FaLinkedin className="text-3xl" />
                </a>
                <a
                href="https://github.com/YOUR-USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-[#94A3B8]
                    hover:text-white
                    transition-colors
                    duration-300
                "
                >
                <FaGithub className="text-3xl" />
                </a>
                </div>

            </div>
            </div>

            <div>
                <h1 className="lg:hidden text-lg font-bold text-gray-300 ml-6 mb-6 mt-10">
                About
                </h1>
                <p className="text-[#94A3B8] max-w-xl text-base">
                I'm a Frontend Developer and IT professional with experience <span className="text-gray-300 font-bold">building responsive websites</span>, 
                supporting business systems, and solving technical problems across both development and support environments. 
                My background combines frontend development with hands-on IT troubleshooting, allowing me to approach projects 
                with both technical precision and a strong understanding of user experience.
                </p>
                <p className="text-[#94A3B8] max-w-xl text-base mt-6">
                I've worked with technologies including <span className="text-gray-300 font-bold">React</span>, {""}
                <span className="text-gray-300 font-bold">Node.js</span>, {""}
                <span className="text-gray-300 font-bold">JavaScript</span>, {""}
                <span className="text-gray-300 font-bold">HTML</span>, {""} 
                <span className="text-gray-300 font-bold">CSS</span>, {""} 
                <span className="text-gray-300 font-bold">PHP</span>, {""} 
                <span className="text-gray-300 font-bold">WordPress</span>, {""}and {""}
                <span className="text-gray-300 font-bold">RESTful APIs</span> to create and maintain websites and web applications. Alongside development, 
                I've also supported infrastructure, resolved technical issues, and assisted users across corporate and 
                government environments, strengthening my ability to communicate effectively and adapt quickly to new systems 
                and challenges.
                </p>
                <p className="text-[#94A3B8] max-w-xl text-base mt-6">
                I enjoy building clean, modern, and user-focused digital experiences while continuously improving my skills 
                as a developer. Whether I'm developing frontend features, debugging issues, or optimizing workflows, 
                I approach every project with attention to detail, problem-solving, and a focus on creating reliable solutions 
                that provide real value.
                </p>

                <section className="group/list space-y-6 lg:mt-40 mb-10">
                    <h1 className="lg:hidden text-lg font-bold text-gray-300 ml-6 mb-6 mt-30">
                    Projects
                    </h1>

                    <ProjectCard
                        year="Jan - Apr 2025"
                        title="Frontend Developer · Trident Media"
                        description="Rebuilt the Trident Media website as apart of a team. My contribution to the tech stack
                        was heavier on Frontend Development this time, however, I contributed some of the backend."
                        tech={["HTML & CSS", "JavaScript", "PHP", "WordPress"]}
                        link="https://tridentmediacorp.com"
                    />

                    <ProjectCard
                        year="2024 - 2025"
                        title="Fullstack Developer · Stonesbridge Construction"
                        description="Built a web application for Stonesbridge Construction to help contractors log their work for tracking and billing purposes.
                        Also helped with the maintenance of this site."
                        tech={["React", "Node.js", "PostgreSQL", "HTML & CSS", "JavaScript", "PHP", "WordPress"]}
                        link="https://stonesbridge.net"
                    />

                    <ProjectCard
                        year="2024 - 2025"
                        title="Fullstack Developer · Serenity Properties"
                        description="Built and maintained a real estate website for Lumisol Technologies. 
                        This site was built from scratch and the development cycle was owned entirely by me."
                        tech={["HTML & CSS", "JavaScript", "PHP", "WordPress"]}
                        link="https://serenityproperties.bb"
                    />

                </section>
            </div>
        </div>
    </section>
  )
}