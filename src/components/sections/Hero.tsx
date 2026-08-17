import Button from '@/components/ui/Button'

const stats = [
  { value: '12+', label: 'Services' },
  { value: '48hr', label: 'Scope turnaround' },
  { value: '2 wks', label: 'Project start' },
  { value: 'Global', label: 'USA · UAE · Worldwide' },
]

export default function Hero() {
  return (
    <section className="section-navy min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-medium text-electric-300 border border-electric-300/40 bg-electric-500/10 px-3 py-1 rounded-full mb-6">
            Registered in USA · Serving clients worldwide
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            We build.<br />
            You <span className="text-electric-300">grow.</span><br />
            From anywhere.
          </h1>
          <p className="text-lg text-electric-200 mb-8 max-w-xl leading-relaxed">
            Software development, AI systems, and digital services for businesses across the USA, UAE, Middle East, and beyond. One team. Any timezone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="#contact" size="lg">Book a free discovery call</Button>
            <Button href="#services" size="lg" variant="outline">See our services</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-16 border-t border-white/10">
          {stats.map(s => (
            <div key={s.value}>
              <div className="text-2xl sm:text-3xl font-semibold text-white">{s.value}</div>
              <div className="text-sm text-electric-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
