"use client"

import { useState } from "react"

interface EducationItem {
  degree: string
  school: string
  duration: string
  description?: string
  icon: string
}

const educationItems: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Lovely Professional University, Phagwara, Punjab",
    duration: "2025 - 2027 (Pursuing)",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Patliputra University, Patna",
    duration: "May 2022 - Jul 2025",
    icon: "📚",
  },
  {
    degree: "Intermediate",
    school: "Bihar School Examination Board (BSEB)",
    duration: "Apr 2020 - 2022",
    icon: "📖",
  },
  {
    degree: "Matriculation",
    school: "Bihar School Examination Board (BSEB)",
    duration: "2019 - 2020",
    icon: "✏️",
  },
]

export default function Education() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {educationItems.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-lg transition-all duration-500 ${
                  hoveredIndex === idx ? "opacity-100 scale-105" : "opacity-0"
                }`}
              />

              <div
                className={`relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 ${
                  hoveredIndex === idx ? "transform -translate-y-1" : ""
                }`}
              >
                <div className="flex gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-primary text-sm font-semibold mt-1">{item.duration}</p>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
