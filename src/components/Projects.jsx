import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const projects = [
  {
    title: 'Clean Cutz',
    description:
      'A sleek video editing tool with start and end points to trim and save videos  in real time. Built with a glassmorphism UI and responsive design.',
    image: '/project-taskboard.png',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Mrjayj123/CleanCutz',
    live: 'https://clean-cutz.vercel.app/',
    featured: true,
  },
  {
    title: 'M&C Loan App',
    description:
      'A modern fintech platform that mimicks a loan app. You can track athe loans disbursed and have rcords. Features clean typography and gradient CTAs.',
    image: '/project-ecommerce.png',
    tags: ['React', 'CSS Modules', 'REST API', 'Framer Motion'],
    github: 'https://github.com/Mrjayj123/mnc',
    live: 'https://loan-tracker-kappa-one.vercel.app/',
    featured: true,
  },
]

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <AnimatedSection variant={isEven ? 'fade-right' : 'fade-left'} delay={0.1}>
      <GlassCard className="glass-shadow card-hover overflow-hidden group">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
          {/* Project Image */}
          <div className="relative lg:w-1/2 overflow-hidden">
            <div className="aspect-video lg:aspect-auto lg:h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-[#0b0f19]/60 hidden lg:block`} />
            </div>
            {project.featured && (
              <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg">
                Featured
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium text-cyan-400/80 bg-cyan-400/5 border border-cyan-400/15 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} className="group-hover/link:text-cyan-400 transition-colors" />
                <span>Source Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 group/link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={14} className="group-hover/link:text-cyan-400 transition-colors" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </AnimatedSection>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="ambient-blob top-1/4 -right-48 w-96 h-96 bg-cyan-500/5" />
      <div className="ambient-blob bottom-1/4 -left-48 w-80 h-80 bg-purple-500/5" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="My Work" />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
