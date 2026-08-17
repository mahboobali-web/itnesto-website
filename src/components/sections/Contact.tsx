import Button from '@/components/ui/Button'

export default function Contact() {
  return (
    <section id="contact" className="section-navy py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-medium text-electric-300 uppercase tracking-widest">Get started</span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 mb-4">
          45 minutes. No commitment.<br />No sales deck.
        </h2>
        <p className="text-electric-200 mb-8 max-w-lg mx-auto">
          Tell us what you are building. We ask the right questions, map your scope, and send a detailed proposal within 48 hours. If we are not the right fit, we say so on the call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button href="mailto:hello@itnesto.com" size="lg">Book a free discovery call</Button>
          <Button href="mailto:hello@itnesto.com" size="lg" variant="outline">Email us directly</Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-electric-200">
          <span>📧 hello@itnesto.com</span>
          <span className="hidden sm:inline text-electric-600">·</span>
          <span>🌍 USA registered · Serving clients worldwide</span>
        </div>
      </div>
    </section>
  )
}
