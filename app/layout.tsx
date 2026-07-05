import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Digital Marketing Agency, Agentic — AI Agents + Human Strategists | Branch Avenue',
  description: 'A team of marketing agents that work your search, ads, website, and conversion across every platform that matters — Google, Meta, ChatGPT, Perplexity, Gemini and more. You approve, they do everything.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} style={{ scrollBehavior: 'smooth', height: '100%' }}>
      <body style={{ margin: 0, background: '#fff', color: '#181c22', fontFamily: 'var(--font-sans)', WebkitFontSmoothing: 'antialiased', textRendering: 'optimizeLegibility', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
