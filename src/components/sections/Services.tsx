const services = [
  { icon: '⬡', name: 'Web development', desc: 'SaaS platforms, portals, marketplaces. Next.js and React. Core Web Vitals audited before handover.', color: 'from-blue-600/20 to-blue-900/10', border: 'border-blue-500/20', tag: 'Most popular' },
  { icon: '◈', name: 'iOS and Android apps', desc: 'React Native for shared codebases, Swift and Kotlin for performance-critical products. Full pipeline to App Store.', color: 'from-violet-600/20 to-violet-900/10', border: 'border-violet-500/20' },
  { icon: '◎', name: 'AI and LLM integration', desc: 'GPT-4o, Claude, Gemini embedded into your product. Chatbots, document processing, workflow automation.', color: 'from-cyan-600/20 to-cyan-900/10', border: 'border-cyan-500/20', tag: 'High demand' },
  { icon: '◉', name: 'AI agent workflows', desc: 'Autonomous agents for multi-step tasks. Lead qualification, support triage, data extraction — no human in the loop.', color: 'from-emerald-600/20 to-emerald-900/10', border: 'border-emerald-500/20', tag: 'High demand' },
  { icon: '◈', name: 'RAG systems', desc: 'AI that answers from your actual data. Full retrieval pipeline: ingestion, vector DB, re-ranking, precision testing.', color: 'from-orange-600/20 to-orange-900/10', border: 'border-orange-500/20' },
  { icon: '⬡', name: 'API development', desc: 'REST and GraphQL APIs to OpenAPI spec. Payment gateways, CRMs, ERPs, and third-party platforms connected.', color: 'from-pink-600/20 to-pink-900/10', border: 'border-pink-500/20' },
  { icon: '◎', name: 'SEO', desc: 'Technical SEO, on-page optimization, keyword strategy, and content architecture. Rank higher, convert better.', color: 'from-yellow-600/20 to-yellow-900/10', border: 'border-yellow-500/20' },
  { icon: '◉', name: 'Graphic design', desc: 'Brand identity, UI design, pitch decks, social media assets, and marketing collateral.', color: 'from-rose-600/20 to-rose-900/10', border: 'border-rose-500/20' },
  { icon: '⬡', name: 'Digital marketing', desc: 'Google Ads, Meta Ads, LinkedIn campaigns. Strategy, execution, and reporting under one roof.', color: 'from-indigo-600/20 to-indigo-900/10', border: 'border-indigo-500/20' },
  { icon: '◈', name: 'Content writing', desc: 'Website copy, blog posts, case studies, email sequences. Written for humans, optimized for search.', color: 'from-teal-600/20 to-teal-900/10', border: 'border-teal-500/20' },
  { icon: '◎', name: 'Cloud and DevOps', desc: 'AWS, Azure, GCP. CI/CD, Kubernetes, Terraform, and observability stack included by default.', color: 'from-sky-600/20 to-sky-900/10', border: 'border-sky-500/20' },
  { icon: '◉', name: 'IT consulting', desc: 'Architecture reviews, technology selection, technical discovery — before you commit to a build.', color: 'from-purple-600/20 to-purple-900/10', border: 'border-purple-500/20' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden" style={{background: '#020714'}}>
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F54EB]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest">What we do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Every service you need.<br />
            <span className="gradient-text-blue">One team.</span>
          </h2>
          <p className="text-lg text-[#8BA3E0] max-w-2xl mx-auto">
            Most clients use two or three service lines together. We coordinate across all of them so you do not have to manage separate agencies.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`fade-up fade-up-delay-${Math.min(i % 4 + 1, 6)} service-card glass rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:-translate-y-1 card-glow ${s.border}`}
              style={{ background: `linear-gradient(135deg, ${s.color.split(' ')[0].replace('from-','').replace('/20','')}/0.08, transparent)` }}
            >
              {s.tag && (
                <span className="inline-block text-xs font-semibold text-[#6B8CFF] bg-[#2F54EB]/15 border border-[#2F54EB]/30 px-2.5 py-0.5 rounded-full mb-3">
                  {s.tag}
                </span>
              )}
              <div className="text-3xl mb-3 text-[#2F54EB] group-hover:scale-110 transition-transform duration-300 inline-block">
                {s.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-[#6B8CFF] transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-[#8BA3E0] leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-[#2F54EB] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
