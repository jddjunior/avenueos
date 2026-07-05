'use client'

import Link from 'next/link'

const pages = [
  { category: 'Marketing', name: 'Branch Avenue', file: 'Branch Avenue.html' },
  { category: 'Home Versions', name: 'Home (Default)', file: 'Home.dc.html' },
  { category: 'Home Versions', name: 'Home v1', file: 'Home v1.dc.html' },
  { category: 'Home Versions', name: 'Home v2 (Operational)', file: 'Home v2 (operational).dc.html' },
  { category: 'Home Versions', name: 'Home v3 (Desire)', file: 'Home v3 (desire).dc.html' },
  { category: 'Home Versions', name: 'Home v4 (Opportunity)', file: 'Home v4 (opportunity).dc.html' },
  { category: 'Home Versions', name: 'Home v5 (Keys)', file: 'Home v5 (keys).dc.html' },
  { category: 'Home Versions', name: 'Home v6 (Autopilot)', file: 'Home v6 (autopilot).dc.html' },
  { category: 'Home Versions', name: 'Home v7 (While You Sell)', file: 'Home v7 (while you sell).dc.html' },
  { category: 'Home Versions', name: 'Home v8 (Agentic)', file: 'Home v8 (agentic).dc.html' },
  { category: 'Home Versions', name: 'Home v9 (Web-First)', file: 'Home v9 (web-first).dc.html' },
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

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', padding: 'var(--space-8)', background: 'var(--canvas)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-12)' }}>
          <h1 style={{ fontSize: 'var(--text-display)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', marginBottom: 'var(--space-2)', letterSpacing: 'var(--tracking-display)' }}>
            Branch Avenue OS
          </h1>
          <p style={{ fontSize: 'var(--text-body-md)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
            Select a page to view or edit directly in chat or Design Mode.
          </p>
        </div>

        {/* Pages by Category */}
        {categories.map((category) => {
          const categoryPages = pages.filter((p) => p.category === category)
          return (
            <div key={category} style={{ marginBottom: 'var(--space-12)' }}>
              <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: `1px solid var(--border-default)`, letterSpacing: 'var(--tracking-heading)' }}>
                {category}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 'var(--space-6)' }}>
                {categoryPages.map((page) => (
                  <Link
                    key={page.file}
                    href={`/view?page=${encodeURIComponent(page.file)}`}
                    style={{
                      display: 'block',
                      padding: 'var(--space-6)',
                      background: 'var(--surface)',
                      border: `1px solid var(--border-default)`,
                      borderRadius: 'var(--radius-lg)',
                      textDecoration: 'none',
                      transition: `all var(--duration-normal) var(--ease-out)`,
                      cursor: 'pointer',
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.background = 'var(--surface-raised)'
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-default)'
                      e.currentTarget.style.background = 'var(--surface)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', marginBottom: 'var(--space-2)' }}>
                      {page.name}
                    </h3>
                    <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>
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
