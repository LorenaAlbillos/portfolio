"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ULEfy",
    description: "Proyecto de aplicación web sobre el almacenamiento y reproducción de canciones",
    image: "/images/projects/UleFy.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ULE-Informatica-2023-2024/aw-final-1c-g13",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Cifrado vigenère",
    description: "Proyecto que implementa el cifrado y descifrado de vigenère de forma clásica y en flujo",
    image: "/images/projects/vigenere.png",
    tag: ["All", "Seguridad Informática"],
    gitUrl: "https://github.com/LorenaAlbillos/Cifrado-Vigenere",
    previewUrl: "/",
  },
  {
    id: 3, 
    title: "Cifrado por Bloques",
    description: "Proyecto que implementa el cifrado y descifrado de Hill y Afín.",
    image: "/images/projects/bloques.png",
    tag: ["All", "Seguridad Informática"],
    gitUrl: "https://github.com/escorpivo/Cifrado-por-Bloques",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Simulación de Hamming", 
    description: "Proyecto que implementa la codificación y decodificación en un canal con ruido",
    image: "/images/projects/hamming.png",
    tag: ["All", "Seguridad Informática"],
    gitUrl: "https://github.com/escorpivo/Simulacion-Hamming",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Wordle",
    description: "Proyecto que implementa el juego wordle sobre la terminal",
    image: "/images/projects/wordle.png",
    tag: ["All", "Programación I"],
    gitUrl: "https://github.com/ULE-Informatica-2022-2023/wordle-grupo-1e",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis proyectos
      </h2>
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
        <ProjectTag
          onClick={handleTagChange}
          name="Seguridad Informática"
          isSelected={tag === "SI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programación I"
          isSelected={tag === "Programación I"}
        />
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
  );
};

export default ProjectsSection;
