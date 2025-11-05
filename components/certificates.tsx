"use client"

import { useState } from "react"

interface Certificate {
  title: string
  issuer: string
  date: string
  icon: string
}

const certificates: Certificate[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundation Associate",
    issuer: "Oracle University",
    date: "Oct 2025 - Oct 2027",
    icon: "🏆",
  },
]

export default function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
        </h2>

        <div className="space-y-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/15 to-accent/15 rounded-xl blur-lg transition-all duration-500 ${
                  hoveredIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`relative bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-primary/50 ${
                  hoveredIndex === idx ? "transform -translate-y-2 shadow-2xl shadow-primary/20" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-foreground/60 text-sm">{cert.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
