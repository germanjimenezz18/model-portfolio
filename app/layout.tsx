import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollIndicator from "@/components/scroll-indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Melanie Bermudez - Portfolio profesional",
  description:
    "Portfolio profesional de Melanie Bermudez, actriz valenciana.",
    generator: 'Melanie Bermudez',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ScrollIndicator />
        {children}
      </body>
    </html>
  )
}



import './globals.css'