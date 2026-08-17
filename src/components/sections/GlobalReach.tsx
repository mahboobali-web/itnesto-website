const markets = ['USA', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'UK', 'Europe', 'Southeast Asia']

export default function GlobalReach() {
  return (
    <section id="global" className="section-navy py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-medium text-electric-300 uppercase tracking-widest">Global reach</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 mb-4">
              Based in the USA.<br />Working worldwide.
            </h2>
            <p className="text-electric-200 text-sm leading-relaxed mb-6">
              IT Nesto is registered in the United States and operates fully remote. We serve clients across North America, the Middle East, Europe, and Southeast Asia.
            </p>
            <p className="text-electric-200 text-sm leading-relaxed mb-6">
              For UAE and GCC clients, we handle Arabic RTL interfaces, UAE Pass integration, local payment gateways (Telr, PayTabs), and PDPL data compliance. For US clients, we work within GDPR, CCPA, and HIPAA-applicable frameworks.
            </p>
            <p className="text-electric-200 text-sm leading-relaxed">
              Language, timezone, and location have never stopped a well-run remote team.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold text-electric-300 uppercase tracking-widest mb-4">Markets we serve</div>
            <div className="flex flex-wrap gap-2">
              {markets.map(m => (
                <span key={m} className="text-sm font-medium bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-semibold text-white">$5k</div>
                <div className="text-xs text-electric-200 mt-1">Minimum engagement</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-semibold text-white">48hr</div>
                <div className="text-xs text-electric-200 mt-1">Proposal after discovery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
