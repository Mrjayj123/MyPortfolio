import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const stats = [
  { value: '10+', label: 'Technologies' },
  { value: '3+', label: 'Projects Built' },
  { value: '2+', label: 'Years Learning' },
  { value: '100%', label: 'Passion Driven' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-blob top-1/3 -left-32 w-72 h-72 bg-cyan-500/5" />
      <div className="ambient-blob bottom-1/4 -right-32 w-80 h-80 bg-purple-500/5" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="Who I Am" />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile Image Area */}
          <AnimatedSection variant="fade-right" delay={0.1}>
            <div className="relative mx-auto md:mx-0 max-w-sm">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
                {/* Profile image */}
                <img
                  src="/profile.jpg"
                  alt="Jay Joel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 grid-bg opacity-40" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-purple-400/40 rounded-br-lg" />
            </div>
          </AnimatedSection>

          {/* Bio Text */}
          <AnimatedSection variant="fade-left" delay={0.2}>
            <div className="space-y-5">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
Hey there! I'm <span className="text-cyan-400 font-semibold">Joel Ong'ango</span>, 
                a passionate full-stack developer who loves turning creative ideas into interactive, 
                pixel-perfect web experiences.
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
I specialize in building modern applications with <span className="text-white font-medium">React</span>, 
                <span className="text-white font-medium"> Node.js</span>, and 
                <span className="text-white font-medium"> Tailwind CSS</span>. I also structure backend systems and databases using <span className="text-white font-medium">Python3</span> ,<span className="text-white font-medium">SQLAlchemy</span>  and <span className="text-white font-medium">Flask</span>. I'm deeply interested 
                in clean UI design, robust back-end architecture, and creating applications that feel alive.
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or designing user interfaces. 
                I believe great software comes from the intersection of solid engineering 
                and beautiful design.
              </p>

              {/* Quick highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
{['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Responsive Design', 'Python3', 'Git', 'SQLAlchemy','Flask'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} variant="fade-up" delay={0.1 * i}>
              <GlassCard className="p-5 sm:p-6 text-center card-hover">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
