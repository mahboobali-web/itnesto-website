'use client'
import { useEffect, useRef, useState } from 'react'

const services = ['Web Development', 'Mobile Apps', 'AI Integration', 'RAG Systems', 'SEO & Marketing', 'Graphic Design', 'AI Agents', 'Cloud & DevOps']

const stats = [
  { value: 12, suffix: '+', label: 'Services' },
  { value: 48, suffix: 'hr', label: 'Proposal turnaround' },
  { value: 2, suffix: ' wks', label: 'To project start' },
  { value: 100, suffix: '%', label: 'IP ownership — yours' },
]

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target, duration])
  return count
}

function StatCard({ value, suffix, label, trigger }: { value: number; suffix: string; label: string; trigger: boolean }) {
  const count = useCountUp(value, 1800, trigger)
  return (
    <div className="stat-card rounded-2xl p-5 flex flex-col gap-1">
      <div className="text-3xl sm:text-4xl font-bold text-white counter">
        {count}{suffix}
      </div>
      <div className="text-sm text-[#8BA3E0]">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [serviceIdx, setServiceIdx] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setServiceIdx(i => (i + 1) % services.length)
        setFade(true)
      }, 300)
    }, 2500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  // Scroll animations
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden section-dark grid-bg pt-[70px]">
      {/* Animated orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[500px] rounded-full bg-[#2F54EB]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2F54EB] animate-pulse" />
            <span className="text-xs font-medium text-[#6B8CFF]">USA Registered · Serving clients worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-4">
            We build.
            <br />
            <span className="gradient-text text-glow">You grow.</span>
            <br />
            <span className="text-white/60">Anywhere.</span>
          </h1>

          {/* Rotating service */}
          <div className="fade-up fade-up-delay-2 flex items-center gap-3 mb-8 h-10">
            <span className="text-lg text-[#8BA3E0]">Currently building:</span>
            <span
              className={`text-lg font-semibold text-[#6B8CFF] transition-all duration-300 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            >
              {services[serviceIdx]}
            </span>
          </div>

          {/* Subtext */}
          <p className="fade-up fade-up-delay-3 text-lg sm:text-xl text-[#8BA3E0] leading-relaxed max-w-2xl mb-10">
            Software development, AI systems, SEO, and digital marketing — for businesses across the USA, UAE, Middle East, and beyond. One team. Every service. Any timezone.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#2F54EB] text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-[#1a3fd4] transition-all duration-300 glow-btn"
            >
              Book a free discovery call
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 glass text-white font-medium px-8 py-4 rounded-xl text-base hover:bg-white/[0.08] transition-all duration-300"
            >
              Explore services
            </a>
          </div>

          {/* Tech tags */}
          <div className="fade-up fade-up-delay-5 flex flex-wrap gap-2">
            {['Next.js', 'React Native', 'LangChain', 'OpenAI', 'AWS', 'Figma', 'Google Ads'].map(t => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="fade-up fade-up-delay-6 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20 pt-16 border-t border-white/[0.06]">
          {stats.map(s => (
            <StatCard key={s.label} {...s} trigger={statsVisible} />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04091f] to-transparent pointer-events-none" />
    </section>
  )
}
