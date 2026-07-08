"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import TechIcon from "@/components/TechIcon";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isContain = project.imageMode === "contain";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group mc-block flex h-full flex-col bg-deepslate"
      data-cursor="clickable"
    >
      {/* Image Container */}
      <div
        className={`relative h-48 w-full border-b-4 border-obsidian overflow-hidden ${
          isContain ? "bg-obsidian" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
            isContain ? "object-contain p-6" : "object-cover opacity-80 group-hover:opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Subtle glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent pointer-events-none" />
        
        {/* Period Badge - Blocky */}
        <span className="absolute bottom-3 right-3 bg-obsidian/80 border border-stone px-2 py-1 pixel-text text-sm text-ink backdrop-blur-sm shadow-[inset_1px_1px_0_rgba(255,255,255,0.2)]">
          {project.period}
        </span>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="pixel-text text-2xl text-diamond-glow drop-shadow-[0_0_5px_rgba(85,255,255,0.5)]">
          {project.title}
        </h3>
        
        {/* Readable body text */}
        <p className="mt-3 flex-1 readable-text text-sm text-ink/80">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={`${project.title}-${item}`}
              className="inline-flex items-center gap-1.5 bg-obsidian border border-stone px-2 py-1 pixel-text text-sm text-muted"
            >
              <TechIcon label={item} size={14} />
              {item}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-6 pt-4 border-t-2 border-obsidian">
          <a
            href={project.linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 bg-stone hover:bg-diamond-base border-2 border-obsidian py-2 pixel-text text-lg text-ink shadow-[inset_2px_2px_0_rgba(255,255,255,0.2)] transition-colors group-hover:text-white"
            data-cursor="clickable"
            aria-label={project.linkLabel}
          >
            {project.linkLabel}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
