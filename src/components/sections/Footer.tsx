const services = ['Web development','iOS and Android apps','AI and LLM integration','AI agent workflows','RAG systems','API development','SEO','Graphic design','Digital marketing','Content writing','Cloud and DevOps','IT consulting']
const company = ['About','Our process','Case studies','Blog','Careers','Contact']

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14 section-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2F54EB] flex items-center justify-center text-white font-bold text-sm">IT</div>
              <span className="text-white font-semibold text-lg">Nesto</span>
            </div>
            <p className="text-sm text-[#8BA3E0] leading-relaxed mb-5 max-w-xs">
              Software, AI, and digital services. Registered in the USA. Working worldwide.
            </p>
            <div className="flex flex-wrap gap-2">
              {['USA','UAE','Saudi Arabia','Qatar','Kuwait','Middle East','Europe','Worldwide'].map(m => (
                <span key={m} className="text-xs text-[#6B8CFF] glass border border-[#2F54EB]/20 px-2.5 py-1 rounded-full">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold text-[#6B8CFF] uppercase tracking-widest mb-4">Services</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {services.map(s => (
                <a key={s} href="#services" className="text-xs text-[#8BA3E0] hover:text-white transition-colors py-0.5 truncate">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold text-[#6B8CFF] uppercase tracking-widest mb-4">Company</div>
            <div className="flex flex-col gap-1">
              {company.map(l => (
                <a key={l} href="#" className="text-xs text-[#8BA3E0] hover:text-white transition-colors py-0.5">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-[#8BA3E0]">© {new Date().getFullYear()} IT Nesto LLC. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-[#8BA3E0] hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="text-xs text-[#8BA3E0] hover:text-white transition-colors">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
