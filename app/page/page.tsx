'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function PageViewerContent() {
  const searchParams = useSearchParams()
  const file = searchParams.get('file')

  if (!file) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No page selected</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to pages
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <Link
        href="/"
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 50, padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: 'white', borderRadius: '0.5rem', textDecoration: 'none' }}
      >
        ← Back
      </Link>
      <iframe
        src={`/${file}`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title={file}
      />
    </div>
  )
}

export default function PageViewer() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>}>
      <PageViewerContent />
    </Suspense>
  )
}
