import React from 'react'
import AnimatedSection from './AnimatedSection'

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <AnimatedSection variant="fade-up" className={`mb-12 sm:mb-16 ${alignClass}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-8 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
        <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
          {subtitle}
        </span>
        <div className="h-[2px] w-8 bg-gradient-to-l from-cyan-400 to-transparent rounded-full" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
    </AnimatedSection>
  )
}
