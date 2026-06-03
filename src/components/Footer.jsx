import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp, FaHeart } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', iconId: 'github-icon', href: '#' },
  { name: 'X', iconId: 'x-icon', href: '#' },
  { name: 'Bluesky', iconId: 'bluesky-icon', href: '#' },
  { name: 'Discord', iconId: 'discord-icon', href: '#' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-12 pb-8 px-6">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToTop() }}
            className="text-xl font-bold tracking-tight group"
          >
            <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">Jay</span>
            <span className="gradient-text ml-0.5">Joel</span>
            <span className="text-cyan-400 animate-pulse">_</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <svg width="16" height="16" className="fill-current">
                  <use href={`/icons.svg#${link.iconId}`} />
                </svg>
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp size={14} />
          </motion.button>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Jay Joel. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with React & <FaHeart className="text-red-400 text-xs" /> 
          </p>
        </div>
      </div>
    </footer>
  )
}
