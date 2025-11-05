"use client"

import { useState } from "react"

interface Skill {
  category: string
  items: string[]
  icon: string
}

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++"],
    icon: "💻",
  },
  {
    category: "Tools & Platforms",
    items: ["MySQL", "AI Tools", "SciPort"],
    icon: "⚙️",
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Project Management", "Adaptability", "Teamwork"],
    icon: "🎯",
  },
]

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredCard === idx ? "opacity-100 scale-105" : "opacity-0 scale-95"
                }`}
              />

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{skill.category}</h3>
                <div className="space-y-3">
                  {skill.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 text-foreground/70 group/item">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
