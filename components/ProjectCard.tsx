"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import MagneticWrapper from "@/components/MagneticWrapper";
import TechIcon from "@/components/TechIcon";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isContain = project.imageMode === "contain";

  return (
    <MagneticWrapper className="h-full rounded-2xl">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="group glass-card glow-border shimmer-sweep h-full overflow-hidden rounded-2xl"
        data-cursor="clickable"
      >
        {/* Image */}
        <div
          className={`relative h-52 w-full overflow-hidden ${
            isContain
              ? "bg-[radial-gradient(circle_at_30%_20%,rgba(255,161,22,0.1),transparent_50%),linear-gradient(180deg,#222_0%,#1a1a1a_100%)]"
              : ""
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`transition-all duration-700 ease-out ${
              isContain
                ? "object-contain p-8 group-hover:scale-110"
                : "object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div
            className={`absolute inset-0 ${
              isContain
                ? "bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent"
                : "bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/20 to-transparent"
            }`}
          />
          {/* Period badge */}
          <span className="absolute bottom-3 right-3 rounded-lg bg-black/50 px-2.5 py-1 text-[10px] font-medium tracking-wider text-ink/70 backdrop-blur-sm">
            {project.period}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {project.title}
          </h3>
          <p
            className="line-clamp-3 text-sm leading-relaxed text-ink/60"
            data-cursor="text"
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((item) => (
              <span
                key={`${project.title}-${item}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-blush bg-paper px-2.5 py-1 text-[11px] text-ink/70 transition-colors hover:border-coral/30 hover:text-ink/85"
              >
                <TechIcon label={item} />
                {item}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-coral/80 transition-colors hover:text-coral"
            data-cursor="clickable"
            aria-label={project.linkLabel}
          >
            {project.linkLabel}
            <ExternalLink size={13} />
          </a>
        </div>
      </motion.article>
    </MagneticWrapper>
  );
}
