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
      className="group obsidian-glass flex h-full flex-col overflow-hidden"
      data-cursor="clickable"
    >
      {/* Image Container */}
      <div
        className={`relative h-52 w-full overflow-hidden ${
          isContain ? "bg-black/30" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
            isContain ? "object-contain p-6" : "object-cover opacity-80 group-hover:opacity-100"
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111216] via-[#111216]/20 to-transparent pointer-events-none" />
        
        {/* Period Badge */}
        <span className="absolute bottom-4 right-4 bg-obsidian/60 backdrop-blur-md border border-white/5 rounded-full px-3 py-1 readable-text text-[10px] uppercase tracking-wider text-ink/80">
          {project.period}
        </span>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6 pt-2">
        <h3 className="readable-text text-xl font-bold text-ink group-hover:text-diamond-glow transition-colors">
          {project.title}
        </h3>
        
        {/* Readable body text */}
        <p className="mt-3 flex-1 readable-text text-sm text-muted">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={`${project.title}-${item}`}
              className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 readable-text text-xs text-muted/90"
            >
              <TechIcon label={item} size={13} />
              {item}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-6 pt-5 border-t border-white/5">
          <a
            href={project.linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 readable-text text-sm font-medium text-diamond-glow/80 hover:text-diamond-glow transition-colors"
            data-cursor="clickable"
            aria-label={project.linkLabel}
          >
            {project.linkLabel}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
