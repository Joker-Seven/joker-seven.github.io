"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

const rotatingWords = ["startups", "enterprises", "developers", "teams", "visionaries"]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0c0c0c]">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 animate-ken-burns">
        <img
          src="/images/tech-hero.jpg"
          alt="Futuristic technology background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-[#0c0c0c]/50 to-[#0c0c0c]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/60 via-transparent to-[#0c0c0c]/60" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 170, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 170, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted &&
          [...Array(30)].map((_, i) => (
            <div
              key={i}
              className="animate-float absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background:
                  i % 3 === 0
                    ? "rgba(0, 255, 170, 0.6)"
                    : i % 3 === 1
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(0, 200, 255, 0.4)",
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
      </div>

      {/* Glowing orb accent */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#00ffaa]/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#00c8ff]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Content */}
        <div className="flex flex-1 flex-col justify-center px-6 pt-24 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-8 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-[#00ffaa]/30 bg-[#00ffaa]/10 px-4 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-[#00ffaa]" />
              <span className="text-sm font-medium text-[#00ffaa]">
                Next-Generation Technology Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up mb-6 text-5xl font-bold tracking-tight text-white [animation-delay:200ms] md:text-6xl lg:text-7xl">
              <span className="text-white/80">Build the Future.</span>
              <br />
              <span className="text-white/80">Powered by </span>
              <span
                className={`inline-block bg-gradient-to-r from-[#00ffaa] to-[#00c8ff] bg-clip-text text-transparent transition-all duration-500 ${
                  isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                }`}
              >
                {rotatingWords[currentWordIndex]}.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up mb-10 max-w-2xl text-lg leading-relaxed text-white/60 [animation-delay:300ms] md:text-xl">
              We craft cutting-edge software solutions that transform ideas into reality. From AI to
              cloud infrastructure, we build what others only imagine.
            </p>

            {/* CTA Section */}
            <div className="animate-fade-in-up flex flex-wrap items-center gap-6 [animation-delay:400ms]">
              <Button
                size="lg"
                className="group rounded-full bg-[#00ffaa] px-8 text-[#0c0c0c] hover:bg-[#00ffaa]/90"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up mt-16 flex flex-wrap gap-12 [animation-delay:500ms]">
              <div>
                <div className="text-3xl font-bold text-[#00ffaa]">500+</div>
                <div className="text-sm text-white/50">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-white/50">Uptime Guaranteed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/50">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="animate-fade-in-up px-6 pb-12 [animation-delay:600ms] md:px-16 lg:px-24">
          <p className="max-w-2xl text-base leading-relaxed text-white/50">
            Delivering innovative technology solutions that drive growth, enhance efficiency, and
            create lasting competitive advantages for businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}
