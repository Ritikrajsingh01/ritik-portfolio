"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in" : "opacity-0"}`}>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Ritik Raj
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl">
                MCA Student at LPU | Backend Developer | AI Foundation Certified
              </p>
            </div>

            <p className="text-foreground/60 leading-relaxed text-lg max-w-2xl">
              I'm passionate about building robust systems and exploring AI technologies. Specializing in Java, Python,
              and C++, I create efficient solutions that solve real-world problems with clean code and innovative
              approaches.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/ritik-raj-0873b41ab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:singhritikraj01234@gmail.com"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            <div className="pt-8 flex gap-6">
              <a
                href="https://www.linkedin.com/in/ritik-raj-0873b41ab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:singhritikraj01234@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center ${isVisible ? "animate-slide-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated rotating border */}
              <div
                className="absolute inset-0 rounded-2xl animate-rotate-slow opacity-75"
                style={{
                  background: "conic-gradient(from 0deg, rgb(102, 204, 204), rgb(102, 153, 255), rgb(102, 204, 204))",
                }}
              ></div>

              <div className="absolute inset-1 rounded-2xl bg-card animate-border-glow flex items-center justify-center overflow-hidden">
                <img
                  src="/professional-developer-portrait-tech-background.jpg"
                  alt="Ritik Raj - Software Developer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/30 animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-accent/30"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
