'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function PageViewerContent() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  if (!page) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--canvas)', padding: 'var(--space-8)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', marginBottom: 'var(--space-6)' }}>No page selected</h1>
          <Link href="/" style={{ fontSize: 'var(--text-body-md)', color: 'var(--accent)', textDecoration: 'none' }}>
            ← Back to pages
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'var(--canvas)' }}>
      <Link
        href="/"
        style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', zIndex: 50, padding: `var(--space-2) var(--space-4)`, backgroundColor: 'var(--accent)', color: 'var(--canvas)', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-body-sm)' }}
      >
        ← Back
      </Link>
      <iframe
        src={`/${page}`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title={page}
      />
    </div>
  )
}

export default function PageViewer() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--canvas)', color: 'var(--text-body)', fontSize: 'var(--text-body-md)' }}>Loading...</div>}>
      <PageViewerContent />
    </Suspense>
  )
}
