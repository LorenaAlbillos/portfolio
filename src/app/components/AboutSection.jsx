"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>C</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>HTML y CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Grado en Ingeniería Informática, Universidad de León</li>
      </ul> 
    ),
  },
  {
    title: "Certificaciones",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Cisco Certified CyberOps Associate</li>
        <Link
          href="/certificado.pdf"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
          target="_blank" //recargar otra página
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Descargar certificado
          </span>
        </Link>
        <div></div>
        <Link
          href="/certificado2.pdf"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
          target="_blank" //recargar otra página
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Descargar actividades realizadas en el curso
          </span>
        </Link>
        <li>Ciberseguridad desde una mirada multidisciplinar</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} className="rounded-3xl"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
          Como estudiante de Ingeniería Informática en la Universidad de León, 
          me identifico como una persona creativa y resolutiva con una profunda 
          pasión por enfrentar y solucionar problemas mediante el aprendizaje 
          continuo y la aplicación del conocimiento.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
