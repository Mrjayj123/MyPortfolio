import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const testimonials = [
  {
    quote:
      "Jay Joel's attention to detail is exceptional. He delivered a pixel-perfect frontend that exceeded our expectations. The animations and responsiveness were top-notch.",
    name: 'Alex Carter',
    role: 'Project Manager',
    initials: 'AC',
    color: 'from-cyan-400 to-teal-400',
  },
  {
    quote:
      "Working with Jay was a fantastic experience. He has a great eye for design and really understands how to create interfaces that users love interacting with.",
    name: 'Sarah Williams',
    role: 'UX Designer',
    initials: 'SW',
    color: 'from-purple-400 to-pink-400',
  },
  {
    quote:
      "Jay consistently writes clean, well-structured React code. His components are reusable and his CSS is immaculate. A true craftsman of the frontend.",
    name: 'Marcus Chen',
    role: 'Senior Developer',
    initials: 'MC',
    color: 'from-teal-400 to-blue-400',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="ambient-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5" />

      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Testimonials" subtitle="Kind Words" />

        <AnimatedSection variant="fade-up">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <GlassCard className="glass-shadow p-8 sm:p-10 h-full flex flex-col justify-center">
                  <FaQuoteLeft className="text-cyan-400/30 text-3xl mb-5" />
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-cyan-400 w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <button
              onClick={next}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </AnimatedSection>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
