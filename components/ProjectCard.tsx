"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import MagneticWrapper from "@/components/MagneticWrapper";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MagneticWrapper className="h-full rounded-2xl">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glass backdrop-blur-xs"
        data-cursor="clickable"
      >
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="space-y-4 p-6">
          <h3 className="text-xl font-semibold text-offWhite">{project.title}</h3>
          <p className="text-sm leading-6 text-mutedGrey" data-cursor="text">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={`${project.title}-${item}`}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-mutedGrey"
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={project.linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-offWhite transition-colors hover:text-steel"
            data-cursor="clickable"
            aria-label={project.linkLabel}
          >
            {project.linkLabel}
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.article>
    </MagneticWrapper>
  );
}
