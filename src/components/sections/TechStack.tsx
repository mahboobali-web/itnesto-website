const stack = [
  { cat: 'Frontend', tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { cat: 'Mobile', tools: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
  { cat: 'Backend', tools: ['Node.js', 'Python', 'FastAPI', 'Django', 'Go'] },
  { cat: 'AI / ML', tools: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic API', 'CrewAI'] },
  { cat: 'Vector DB', tools: ['Pinecone', 'Weaviate', 'pgvector', 'Qdrant'] },
  { cat: 'Cloud', tools: ['AWS', 'Azure', 'GCP'] },
  { cat: 'DevOps', tools: ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions'] },
  { cat: 'Database', tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
  { cat: 'Design', tools: ['Figma', 'Adobe Illustrator', 'Photoshop'] },
  { cat: 'Marketing', tools: ['Google Ads', 'Meta Ads', 'Ahrefs', 'SEMrush'] },
]

export default function TechStack() {
  return (
    <section className="section-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-medium text-electric-500 uppercase tracking-widest">Tech stack</span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900 mt-2">Tools we ship with</h2>
          <p className="text-navy-700 mt-3 max-w-lg text-sm">
            We do not list 60 technologies. These are the tools we have shipped production systems with.
          </p>
        </div>
        <div className="space-y-5">
          {stack.map(s => (
            <div key={s.cat} className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs font-semibold text-navy-700 uppercase tracking-wider w-28 shrink-0">{s.cat}</span>
              <div className="flex flex-wrap gap-2">
                {s.tools.map(t => (
                  <span key={t} className="text-xs font-medium bg-electric-50 text-electric-600 border border-electric-100 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
