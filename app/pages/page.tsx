'use client'

import Link from 'next/link'

const allPages = [
  { category: 'Marketing', name: 'Branch Avenue', file: 'Branch-Avenue.html' },
  { category: 'Home Versions', name: 'Home (Default)', file: 'Home.dc.html' },
  { category: 'Home Versions', name: 'Home v1', file: 'Home-v1.dc.html' },
  { category: 'Home Versions', name: 'Home v2 (Operational)', file: 'Home-v2-(operational).dc.html' },
  { category: 'Home Versions', name: 'Home v3 (Desire)', file: 'Home-v3-(desire).dc.html' },
  { category: 'Home Versions', name: 'Home v4 (Opportunity)', file: 'Home-v4-(opportunity).dc.html' },
  { category: 'Home Versions', name: 'Home v5 (Keys)', file: 'Home-v5-(keys).dc.html' },
  { category: 'Home Versions', name: 'Home v6 (Autopilot)', file: 'Home-v6-(autopilot).dc.html' },
  { category: 'Home Versions', name: 'Home v7 (While You Sell)', file: 'Home-v7-(while-you-sell).dc.html' },
  { category: 'Home Versions', name: 'Home v8 (Agentic)', file: 'Home-v8-(agentic).dc.html' },
  { category: 'Home Versions', name: 'Home v9 (Web-First)', file: 'Home-v9-(web-first).dc.html' },
  { category: 'Agents', name: 'Agent', file: 'Agent.dc.html' },
  { category: 'Agents', name: 'Agent - Ads', file: 'Agent-Ads.dc.html' },
  { category: 'Agents', name: 'Agent - CRO', file: 'Agent-CRO.dc.html' },
  { category: 'Agents', name: 'Agent - Call', file: 'Agent-Call.dc.html' },
  { category: 'Agents', name: 'Agent - SEO', file: 'Agent-SEO.dc.html' },
  { category: 'Agents', name: 'Agent - Web', file: 'Agent-Web.dc.html' },
  { category: 'Agents', name: 'Agent - Report', file: 'Agent-Report.dc.html' },
  { category: 'Services', name: 'Service - Web Design', file: 'Service-Web-Design.dc.html' },
  { category: 'Services', name: 'Service - SEO', file: 'Service-SEO.dc.html' },
  { category: 'Services', name: 'Service - CRO', file: 'Service-CRO.dc.html' },
  { category: 'Services', name: 'Service - Ads', file: 'Service-Ads.dc.html' },
  { category: 'Industries', name: 'Industry - Automotive', file: 'Industry-Automotive.dc.html' },
  { category: 'Industries', name: 'Industry - Contractors', file: 'Industry-Contractors.dc.html' },
  { category: 'Industries', name: 'Industry - Franchise', file: 'Industry-Franchise.dc.html' },
  { category: 'Industries', name: 'Industry - Shopify', file: 'Industry-Shopify.dc.html' },
]

const categories = ['Marketing', 'Home Versions', 'Agents', 'Services', 'Industries']

export default function PagesDirectory() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', background: '#f7f8f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#181c22' }}>
            Branch Avenue Pages
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#565c65' }}>
            Click any page to view it, or go back to <Link href="/" style={{ color: '#1f7d54', textDecoration: 'none', fontWeight: 600 }}>the home page</Link>.
          </p>
        </div>

        {categories.map((category) => {
          const categoryPages = allPages.filter((p) => p.category === category)
          return (
            <div key={category} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid #dfe2e6', color: '#181c22' }}>
                {category}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {categoryPages.map((page) => (
                  <Link
                    key={page.file}
                    href={`/view?page=${encodeURIComponent(page.file)}`}
                    style={{
                      display: 'block',
                      padding: '1.5rem',
                      background: '#ffffff',
                      border: '1px solid #dfe2e6',
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#1f7d54'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(31, 125, 84, 0.1)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#dfe2e6'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#181c22', marginBottom: '0.5rem' }}>
                      {page.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#787e87' }}>
                      {page.file}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
