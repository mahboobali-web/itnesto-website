const serviceLinks = [
  'Web development', 'iOS and Android apps', 'AI and LLM integration',
  'AI agent workflows', 'RAG systems', 'API development',
  'SEO', 'Graphic design', 'Digital marketing', 'Content writing',
  'Cloud and DevOps', 'IT consulting',
]
const companyLinks = ['About', 'Our process', 'Case studies', 'Blog', 'Careers', 'Contact']

export default function Footer() {
  return (
    <footer className="section-navy border-t border-white/10 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-white font-semibold text-lg mb-2">
              IT <span className="text-electric-300">Nesto</span>
            </div>
            <p className="text-sm text-electric-200 leading-relaxed">
              Software, AI, and digital services. Registered in the USA. Working worldwide.
            </p>
            <div className="mt-4 text-xs text-electric-300">
              USA · UAE · Saudi Arabia · Qatar · Middle East · Europe · Worldwide
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-electric-300 uppercase tracking-widest mb-4">Services</div>
            <div className="grid grid-cols-2 gap-1">
              {serviceLinks.map(s => (
                <a key={s} href="#services" className="text-xs text-electric-200 hover:text-white transition-colors py-0.5">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-electric-300 uppercase tracking-widest mb-4">Company</div>
            <div className="flex flex-col gap-1">
              {companyLinks.map(l => (
                <a key={l} href="#" className="text-xs text-electric-200 hover:text-white transition-colors py-0.5">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-electric-300">
          <span>© {new Date().getFullYear()} IT Nesto LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
