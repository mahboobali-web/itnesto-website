const services = [
  { icon: '🌐', name: 'Web development', desc: 'SaaS platforms, portals, and e-commerce. Next.js and React with Core Web Vitals built in.' },
  { icon: '📱', name: 'iOS and Android apps', desc: 'Native and cross-platform mobile apps. React Native, Swift, and Kotlin. Full pipeline to App Store.' },
  { icon: '🤖', name: 'AI and LLM integration', desc: 'GPT-4o, Claude, and Gemini embedded into your product. Chatbots, document processing, workflow automation.' },
  { icon: '🔗', name: 'AI agent workflows', desc: 'Autonomous agents for multi-step business tasks. Lead qualification, support triage, data extraction, report generation.' },
  { icon: '🧠', name: 'RAG systems', desc: 'AI that answers from your actual data. Full retrieval pipeline: ingestion, vector DB, re-ranking, precision testing.' },
  { icon: '⚡', name: 'API development', desc: 'REST and GraphQL APIs to OpenAPI spec. Payment gateways, CRMs, ERPs, and third-party integrations.' },
  { icon: '🔍', name: 'SEO', desc: 'Technical SEO, on-page optimization, keyword strategy, and content architecture. Rank higher, convert better.' },
  { icon: '🎨', name: 'Graphic design', desc: 'Brand identity, UI design, pitch decks, social media assets, and marketing collateral.' },
  { icon: '📢', name: 'Digital marketing', desc: 'Google Ads, Meta Ads, and LinkedIn campaigns. Strategy, execution, and reporting under one roof.' },
  { icon: '✍️', name: 'Content writing', desc: 'Website copy, blog posts, case studies, and email sequences. Written for humans, optimized for search.' },
  { icon: '☁️', name: 'Cloud and DevOps', desc: 'AWS, Azure, and GCP infrastructure. CI/CD, Kubernetes, Terraform, and observability stack.' },
  { icon: '💡', name: 'IT consulting', desc: 'Architecture reviews, technology selection, and technical discovery before you commit to a build.' },
]

export default function Services() {
  return (
    <section id="services" className="section-light py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="text-xs font-medium text-electric-500 uppercase tracking-widest">What we do</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-2">Services</h2>
          <p className="text-navy-700 mt-3 max-w-xl">
            Software, AI, design, and marketing under one roof. Most clients use two or three service lines together.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(s => (
            <div key={s.name} className="bg-white rounded-xl p-6 border border-electric-100 hover:border-electric-300 hover:shadow-sm transition-all duration-200 group">
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-semibold text-navy-900 mb-2 group-hover:text-electric-500 transition-colors">{s.name}</h3>
              <p className="text-sm text-navy-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
