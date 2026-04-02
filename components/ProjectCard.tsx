"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import MagneticWrapper from "@/components/MagneticWrapper";
import TechIcon from "@/components/TechIcon";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isContain = project.imageMode === "contain";

  return (
    <MagneticWrapper className="h-full rounded-2xl">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group h-full overflow-hidden rounded-2xl border border-blush bg-sand shadow-card"
        data-cursor="clickable"
      >
        <div
          className={`relative h-48 w-full ${
            isContain ? "bg-[radial-gradient(circle_at_20%_20%,#2d9cdb55,transparent_40%),linear-gradient(180deg,#243445_0%,#1a1a1a_100%)]" : ""
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`transition duration-500 group-hover:opacity-100 ${
              isContain ? "object-contain p-7 group-hover:scale-105" : "object-cover opacity-90 group-hover:scale-105"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className={`absolute inset-0 ${isContain ? "bg-gradient-to-t from-black/40 via-transparent to-transparent" : "bg-gradient-to-t from-black/55 via-transparent to-transparent"}`} />
        </div>

        <div className="space-y-4 p-6">
          <h3 className="font-display text-xl text-ink">{project.title}</h3>
          <p className="line-clamp-3 text-sm leading-6 text-ink/70" data-cursor="text">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={`${project.title}-${item}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-blush bg-paper px-3 py-1 text-xs text-ink/75"
              >
                <TechIcon label={item} />
                {item}
              </span>
            ))}
          </div>

          <a
            href={project.linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-coral"
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
