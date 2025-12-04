import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cornell High Frequency Trading Club',
  description: 'The premiere trading club for FPGA Engineers at Cornell University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

