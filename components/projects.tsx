"use client"

import { useState } from "react"

interface Project {
  title: string
  description: string
  tech: string[]
  highlight: string
  date: string
  link: string
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive system designed to manage patient records, staff information, and billing processes efficiently.",
    tech: ["C++", "MySQL", "Python"],
    highlight: "Reduced manual data errors by 40% and improved operational speed",
    date: "May 2025",
    link: "https://hospital-management-swart-five.vercel.app/", // ← Add your link here
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative block"
            >
              {/* Background glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredIndex === idx ? "opacity-100 scale-105" : "opacity-0 scale-95"
                }`}
              />

              <div
                className={`relative bg-card border border-border rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 ${
                  hoveredIndex === idx ? "transform -translate-y-2" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-6">
                  <div className="flex-1">
                    <p className="text-primary text-sm font-semibold mb-2">{project.date}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-4">{project.description}</p>
                    <p className="text-primary/80 font-semibold mb-6">✨ {project.highlight}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-sm font-semibold text-primary hover:border-primary/80 hover:bg-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
