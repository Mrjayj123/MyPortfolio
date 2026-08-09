import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { GlassCard } from './Glass'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Mrjayj123/MyPortfolio',
    iconId: 'github-icon',
    color: 'hover:text-white',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/TabisunDesigns',
    iconId: 'x-icon',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joel-oduor-592399248/',
    iconId: 'linkedin-icon',
    color: 'hover:text-cyan-400',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/254112200125',
    iconId: 'whatsapp-icon',
    color: 'hover:text-green-400',
  },
]

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'ongangojoel@gmail.com',
    href: 'mailto:ongangojoel@gmail.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Available Remotely',
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only: just show success state
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="ambient-blob top-1/3 -left-32 w-80 h-80 bg-cyan-500/5" />
      <div className="ambient-blob bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <AnimatedSection variant="fade-right" delay={0.1} className="lg:col-span-3">
            <GlassCard className="glass-shadow p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity duration-300"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </GlassCard>
          </AnimatedSection>

          {/* Contact Info & Socials */}
          <AnimatedSection variant="fade-left" delay={0.2} className="lg:col-span-2">
            <div className="space-y-6 h-full flex flex-col justify-between">
              {/* Info cards */}
              <div className="space-y-4">
                <GlassCard className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-4">Let's work together</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    I'm always interested in new opportunities, whether it's a freelance project,
                    collaboration, or just a chat about frontend development.
                  </p>

                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <info.icon className="text-cyan-400" size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </GlassCard>
              </div>

              {/* Social Links */}
              <GlassCard className="p-5">
                <h4 className="text-sm font-medium text-slate-400 mb-4">Find me online</h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.name}
                      className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${link.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300`}
                    >
                      <svg width="18" height="18" className="fill-current">
                        <use href={`/icons.svg#${link.iconId}`} />
                      </svg>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
