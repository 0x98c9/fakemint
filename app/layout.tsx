"use client"

import React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

// Metadata needs to be in a separate file when using 'use client'
// This is a simplified approach for this example
const metadata = {
  title: "FakeMint",
  description: "Generate realistic fake data for development, testing, and design",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [isConfigOpen, setIsConfigOpen] = useState(true)
  
  // Only pass the config toggle props on the home page
  const isHomePage = pathname === "/"
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {/* Basic Meta */}
        <meta name="description" content="Generate realistic fake data for development, testing, and design" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FakeMint" />
        <meta property="og:description" content="Generate realistic fake data for development, testing, and design" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://your-domain.com/" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FakeMint" />
        <meta name="twitter:description" content="Generate realistic fake data for development, testing, and design" />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header 
              onToggleConfig={isHomePage ? () => setIsConfigOpen(!isConfigOpen) : undefined}
              isConfigOpen={isHomePage ? isConfigOpen : undefined}
            />
            <main className="flex-1">
              {isHomePage ? (
                React.cloneElement(children as React.ReactElement<{ isConfigOpen?: boolean }>, { isConfigOpen })
              ) : (
                children
              )}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
