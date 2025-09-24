import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shubham Sharma - MBA Finance Professional',
  description: 'Experienced Finance Professional with MBA in Finance. Specializing in financial analysis, operations management, and strategic planning.',
  keywords: 'Shubham Sharma, MBA Finance, Financial Analyst, Operations Manager, Finance Professional',
  authors: [{ name: 'Shubham Sharma' }],
  openGraph: {
    title: 'Shubham Sharma - MBA Finance Professional',
    description: 'Experienced Finance Professional with MBA in Finance. Specializing in financial analysis, operations management, and strategic planning.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Sharma - MBA Finance Professional',
    description: 'Experienced Finance Professional with MBA in Finance. Specializing in financial analysis, operations management, and strategic planning.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}
