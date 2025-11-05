"use client"

import { useState } from "react"

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const contactInfo = [
    {
      label: "Email",
      value: "singhritikraj01234@gmail.com",
      href: "mailto:singhritikraj01234@gmail.com",
      icon: "📧",
    },
    {
      label: "Phone",
      value: "+91 8102956935",
      href: "tel:+918102956935",
      icon: "📞",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ritik-raj-0873b41ab",
      icon: "🔗",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        <p className="text-foreground/70 text-lg mb-12">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredButton(info.label)}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg transition-all duration-500 ${
                  hoveredButton === info.label ? "opacity-100 scale-110" : "opacity-0"
                }`}
              />

              <div
                className={`relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 ${
                  hoveredButton === info.label ? "transform -translate-y-2" : ""
                }`}
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                <p className="text-foreground/70 group-hover:text-primary transition-colors duration-300 text-sm break-all">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:singhritikraj01234@gmail.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  )
}
