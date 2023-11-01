"use client"
import { useState, useRef } from "react"

import { motion, useInView } from "framer-motion"

import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const projectsData = [
  {
    id: 1,
    title: "Pizza Mizza App",
    description: "Not hard pizza delivery website with auth and shopping cart",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GoGagoo/pizza-mizza-app",
    previewUrl: "https://pizza-mizza-app.vercel.app/",
  },
  {
    id: 2,
    title: "Short URL 'HTTP I Tochka'",
    description: "Simple website allows users to shorten long links, making them more compact and easier to share and use. (Working with connected server-side)",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GoGagoo/course-project-mern-short-url",
    previewUrl: "https://mern-short-url.vercel.app/",
  },
  {
    id: 3,
    title: "Prompt And Share",
    description: "Website about creating customizable prompts for ChatGPT in various fields with OAuth2 (Working with connected server-side)",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GoGagoo/prompt-and-share-nextjs",
    previewUrl: "https://prompt-and-share-nextjs.vercel.app/",
  },
  {
    id: 4,
    title: "IT Chad Web Blog",
    description: "The website provides a blog with an authorization feature where users can publish their posts and interact through comments.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GoGagoo/it-chad_mern_diplom_project",
    previewUrl: "https://it-chad.vercel.app/",
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="rounded absolute border-md right-6 left-8 w-20 h-20 bg-secondary-500 to-transparent blur-md -rotate-6"></div>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection