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
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Link
        href="/"
        className="absolute top-4 left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Back
      </Link>
      <iframe
        src={`/${file}`}
        style={{
          width: '100%',
          flex: 1,
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
