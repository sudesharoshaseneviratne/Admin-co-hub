import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admin & Co Hub - Australian BPO Services | Streamlined Outsourcing',
  description: 'Trusted Australian BPO partner offering virtual assistance, back-office operations, and administrative support. Local accountability with global efficiency.',
  keywords: 'Australian BPO, virtual assistance Australia, back office outsourcing, admin support, business process outsourcing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}