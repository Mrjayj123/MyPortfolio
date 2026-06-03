import React from 'react'

export function GlassCard({ className = '', children }) {
  return (
    <div
      className={`glass-card ${className}`}
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      {children}
    </div>
  )
}

export function GlassPanel({ className = '', children }) {
  return (
    <div className={`glass-panel ${className}`} style={{ WebkitBackdropFilter: 'blur(14px)', backdropFilter: 'blur(14px)' }}>
      {children}
    </div>
  )
}

