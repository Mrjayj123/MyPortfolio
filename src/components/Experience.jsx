import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const experiences = [
  {
    date: 'Feb 2026 — Present',
    title: 'Backend Developer',
    company: 'Tabisun Suppliers',
    description:
      'I aid in creating backend solutions for this company that deals in the fiscal sector. I am the lead behind their app, MnC Solutions, which assists in tracking loans issued to customers..',
    tags: ['Python3', 'React', 'SQLAlchemy'],
  },
  {
    date: 'Aug 2025 — Feb 2026',
    title: 'Customer Service Executive',
    company: 'Call Center International',
    description:
      'Assist customers from Metro by T-Mobile with plan changes, making online purchases and troubleshooting any issues that they may encounter',
    tags: ['Optimus', 'SaaS', 'MetroAssist'],
  },
  {
    date: 'May 2024 — May 2025',
    title: 'Exploring Tech',
    company: 'Early Foundations',
    description:
      'Discovered passion for web development. Started learning HTML, CSS, and basic JavaScript. Built first static websites and fell in love with creating digital experiences.',
    tags: ['HTML', 'CSS', 'Web Basics'],
  },
]

function TimelineItem({ item, index, isLast }) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative flex items-start gap-6 md:gap-0">
      {/* Desktop: alternating sides */}
      <div className={`hidden md:flex w-full items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content */}
        <div className="w-[calc(50%-28px)]">
          <AnimatedSection variant={isLeft ? 'fade-right' : 'fade-left'} delay={0.1 * index}>
            <GlassCard className="p-6 card-hover">
              <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
                {item.date}
              </span>
              <h3 className="text-lg font-bold text-white mt-2">{item.title}</h3>
              <p className="text-sm text-purple-300/80 font-medium mt-0.5">{item.company}</p>
              <p className="text-sm text-slate-400 leading-relaxed mt-3">{item.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Timeline center line + dot */}
        <div className="flex flex-col items-center w-14 flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, type: 'spring' }}
            className="relative w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 shadow-lg shadow-cyan-500/30"
          >
            <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />
          </motion.div>
          {!isLast && (
            <div className="w-[2px] flex-1 min-h-[60px] bg-gradient-to-b from-cyan-400/30 to-purple-500/10" />
          )}
        </div>

        {/* Empty space for alignment */}
        <div className="w-[calc(50%-28px)]" />
      </div>

      {/* Mobile: left-aligned */}
      <div className="flex md:hidden items-start gap-4 w-full">
        {/* Timeline line + dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, type: 'spring' }}
            className="relative w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 z-10 mt-2 shadow-lg shadow-cyan-500/30"
          >
            <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />
          </motion.div>
          {!isLast && (
            <div className="w-[2px] flex-1 min-h-[20px] bg-gradient-to-b from-cyan-400/30 to-purple-500/10" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <AnimatedSection variant="fade-left" delay={0.1 * index}>
            <GlassCard className="p-5 card-hover">
              <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
                {item.date}
              </span>
              <h3 className="text-base font-bold text-white mt-1.5">{item.title}</h3>
              <p className="text-sm text-purple-300/80 font-medium mt-0.5">{item.company}</p>
              <p className="text-sm text-slate-400 leading-relaxed mt-2">{item.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="ambient-blob top-1/3 -left-32 w-72 h-72 bg-cyan-500/5" />
      <div className="ambient-blob bottom-1/3 -right-32 w-80 h-80 bg-purple-500/5" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.title}
              item={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
