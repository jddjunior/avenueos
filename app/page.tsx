import Link from 'next/link'

const pages = [
  { name: 'Branch Avenue', file: 'Branch Avenue.html' },
  { name: 'Agentic', file: 'agentic.html' },
  { name: 'Home', file: 'Home.dc.html' },
  { name: 'Home v1', file: 'Home v1.dc.html' },
  { name: 'Home v2 (operational)', file: 'Home v2 (operational).dc.html' },
  { name: 'Home v3 (desire)', file: 'Home v3 (desire).dc.html' },
  { name: 'Home v4 (opportunity)', file: 'Home v4 (opportunity).dc.html' },
  { name: 'Home v5 (keys)', file: 'Home v5 (keys).dc.html' },
  { name: 'Home v6 (autopilot)', file: 'Home v6 (autopilot).dc.html' },
  { name: 'Home v7 (while you sell)', file: 'Home v7 (while you sell).dc.html' },
  { name: 'Home v8 (agentic)', file: 'Home v8 (agentic).dc.html' },
  { name: 'Home v9 (web-first)', file: 'Home v9 (web-first).dc.html' },
  { name: 'Agent', file: 'Agent.dc.html' },
  { name: 'Agent Ads', file: 'Agent-Ads.dc.html' },
  { name: 'Agent CRO', file: 'Agent-CRO.dc.html' },
  { name: 'Agent Call', file: 'Agent-Call.dc.html' },
  { name: 'Agent SEO', file: 'Agent-SEO.dc.html' },
  { name: 'Agent Web', file: 'Agent-Web.dc.html' },
  { name: 'Agent Report', file: 'Agent-Report.dc.html' },
  { name: 'Service Web Design', file: 'Service-Web-Design.dc.html' },
  { name: 'Service SEO', file: 'Service-SEO.dc.html' },
  { name: 'Service CRO', file: 'Service-CRO.dc.html' },
  { name: 'Service Ads', file: 'Service-Ads.dc.html' },
  { name: 'Industry Automotive', file: 'Industry-Automotive.dc.html' },
  { name: 'Industry Contractors', file: 'Industry-Contractors.dc.html' },
  { name: 'Industry Franchise', file: 'Industry-Franchise.dc.html' },
  { name: 'Industry Shopify', file: 'Industry-Shopify.dc.html' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Branch Avenue OS</h1>
        <p className="text-gray-600 mb-8">Select a page to view:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.file}
              href={`/page?file=${encodeURIComponent(page.file)}`}
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <h2 className="font-semibold text-gray-900 hover:text-blue-600">{page.name}</h2>
              <p className="text-xs text-gray-500 mt-1">{page.file}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
