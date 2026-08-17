const tracks = [
  ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'React Native', 'Swift', 'Kotlin', 'Flutter', 'Node.js', 'Python', 'FastAPI'],
  ['LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic API', 'CrewAI', 'AutoGen', 'Pinecone', 'Weaviate', 'pgvector', 'AWS', 'Azure', 'GCP'],
  ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Datadog', 'PostgreSQL', 'MongoDB', 'Redis', 'Figma', 'Google Ads', 'Meta Ads', 'Ahrefs'],
]

export default function TechStack() {
  return (
    <section className="relative py-20 overflow-hidden section-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 fade-up">
          <div>
            <div className="text-xs font-medium text-[#6B8CFF] uppercase tracking-widest mb-3">Tech stack</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Tools we ship<br />production systems with
            </h2>
          </div>
          <p className="text-[#8BA3E0] text-sm max-w-xs">
            We do not list 60 technologies. Every tool here has shipped in a real production environment.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3 overflow-hidden">
        {tracks.map((track, ti) => (
          <div key={ti} className="relative">
            <div
              className="marquee-track"
              style={{ animationDirection: ti % 2 === 0 ? 'normal' : 'reverse', animationDuration: `${25 + ti * 5}s` }}
            >
              {[...track, ...track].map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 mx-2 glass text-[#a0b4ff] text-sm font-medium px-4 py-2.5 rounded-full whitespace-nowrap hover:bg-white/[0.08] hover:text-white cursor-default transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F54EB]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
