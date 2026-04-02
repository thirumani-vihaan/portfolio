"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import MagneticWrapper from "@/components/MagneticWrapper";
import { portfolioData } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_15%_15%,rgba(69,90,100,0.15),transparent_40%),linear-gradient(180deg,#121212_0%,#1E1E1E_100%)] px-6 pb-14 pt-10 md:px-12 lg:px-20">
      <section className="mx-auto max-w-6xl">
        <motion.header
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-sm md:p-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-steel">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold text-offWhite md:text-6xl">{portfolioData.name}</h1>
          <h2 className="mt-4 max-w-3xl text-lg text-mutedGrey md:text-2xl">{portfolioData.title}</h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-mutedGrey" data-cursor="text">
            {portfolioData.bio}
          </p>

          <div className="mt-8 grid gap-4 text-sm text-mutedGrey md:grid-cols-3">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-steel"
              data-cursor="clickable"
            >
              <Mail size={16} />
              {portfolioData.contact.email}
            </a>
            <p className="inline-flex items-center gap-2" data-cursor="text">
              <Phone size={16} />
              {portfolioData.contact.mobile}
            </p>
            <p className="inline-flex items-center gap-2" data-cursor="text">
              <MapPin size={16} />
              {portfolioData.contact.location}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <MagneticWrapper className="inline-block rounded-full">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-offWhite transition hover:border-steel/70 hover:text-steel"
                data-cursor="clickable"
              >
                <Github size={16} />
                GitHub
              </a>
            </MagneticWrapper>

            <MagneticWrapper className="inline-block rounded-full">
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-offWhite transition hover:border-steel/70 hover:text-steel"
                data-cursor="clickable"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </MagneticWrapper>
          </div>
        </motion.header>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-14"
        >
          <h3 className="text-2xl font-semibold text-offWhite md:text-3xl">Education</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {portfolioData.education.map((item) => (
              <article
                key={item.institution}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs"
              >
                <h4 className="text-lg font-medium text-offWhite">{item.institution}</h4>
                <p className="mt-2 text-mutedGrey" data-cursor="text">
                  {item.detail}
                </p>
                <p className="mt-1 text-sm text-steel">{item.period}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mt-14"
        >
          <h3 className="text-2xl font-semibold text-offWhite md:text-3xl">Projects</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-14"
        >
          <h3 className="text-2xl font-semibold text-offWhite md:text-3xl">Skills</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {Object.entries(portfolioData.skills).map(([category, items], idx) => (
              <article
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xs"
              >
                <h4 className="text-lg text-offWhite">{category}</h4>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: idx * 0.08
                      }
                    }
                  }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={`${category}-${skill}`}
                      variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-mutedGrey"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </article>
            ))}
          </div>
        </motion.section>

        <footer className="mt-16 border-t border-white/10 py-8 text-sm text-mutedGrey">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} T Varaprasad. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-steel" data-cursor="clickable">
                {portfolioData.contact.email}
              </a>
              <a href={portfolioData.socials.github} className="hover:text-steel" data-cursor="clickable">
                GitHub
              </a>
              <a href={portfolioData.socials.linkedin} className="hover:text-steel" data-cursor="clickable">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
