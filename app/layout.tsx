import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Global Stock Analysis Dashboard",
  description: "Deep-dive analysis of stocks from major global indices",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
