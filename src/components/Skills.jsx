import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaNpm, 
} from 'react-icons/fa'
import {
  SiJavascript, SiTailwindcss, SiVite, SiVercel, SiTypescript, SiFramer,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },

 {
    title: 'Backend',
    skills: [
      { name: 'Python3', icon: FaFigma, color: '#F24E1E' },
      { name: 'SQLAlchemy', icon: FaFigma, color: '#F24E1E' },
      { name: 'Flask', icon: FaFigma, color: '#F24E1E' },
    ],
  },


  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'npm', icon: FaNpm, color: '#CB3837' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    ],
  },
]

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <GlassCard className="p-4 sm:p-5 card-hover group cursor-default">
        <div className="flex flex-col items-center gap-3 text-center">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ boxShadow: `0 0 20px ${skill.color}10` }}
          >
            <skill.icon
              size={28}
              style={{ color: skill.color }}
              className="group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300"
            />
          </div>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="ambient-blob top-0 right-0 w-96 h-96 bg-purple-500/5" />
      <div className="ambient-blob bottom-0 left-0 w-72 h-72 bg-cyan-500/5" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills & Technologies" subtitle="What I Use" />

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <AnimatedSection key={category.title} variant="fade-up">
              <h3 className="text-lg font-semibold text-slate-300 mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
