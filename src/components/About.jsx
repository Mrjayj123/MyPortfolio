import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const stats = [
  { value: '10+', label: 'Technologies' },
  { value: '5+', label: 'Projects Built' },
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
                {/* Gradient placeholder for profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-teal-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">JJ</span>
                    </div>
                    <p className="text-sm text-slate-500">Your photo here</p>
                  </div>
                </div>
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
                Hey there! I'm <span className="text-cyan-400 font-semibold">Jay Joel</span>, 
                a passionate front-end developer who loves turning creative ideas into interactive, 
                pixel-perfect web experiences.
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                I specialize in building modern web applications with <span className="text-white font-medium">React</span>, 
                <span className="text-white font-medium"> JavaScript</span>, and 
                <span className="text-white font-medium"> Tailwind CSS</span>. I'm deeply interested 
                in clean UI design, smooth animations, and creating interfaces that feel alive.
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or designing user interfaces. 
                I believe great software comes from the intersection of solid engineering 
                and beautiful design.
              </p>

              {/* Quick highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design', 'Git'].map((tag) => (
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
