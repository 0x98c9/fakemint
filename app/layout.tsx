"use client"

import React, { useEffect, useState } from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
        {/* Website Name and Tagline */}
        <title>FakeMint &mdash; Generate Realistic Fake Data Instantly</title>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {isMobile && (
          <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg">
            <div className="max-w-sm w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 flex flex-col items-center gap-4 border border-primary">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary mb-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
              <h2 className="text-xl font-bold text-center">Desktop Only</h2>
              <p className="text-center text-muted-foreground">This website is not available on mobile or tablet devices. Please use a desktop or laptop for the best experience.</p>
            </div>
          </div>
        )}
        <ThemeProvider defaultTheme="system" enableSystem disableTransitionOnChange>
          <div
            className={
              "flex flex-col min-h-screen w-full" +
              (isMobile ? " pointer-events-none select-none blur-sm" : "")
            }
            aria-hidden={isMobile}
          >
            <Header
              onToggleConfig={isHomePage ? () => setIsConfigOpen(!isConfigOpen) : undefined}
              isConfigOpen={isHomePage ? isConfigOpen : undefined}
            />
            <main className={
              "flex-1 w-full px-0 sm:px-2 md:px-0" +
              (isMobile ? "" : " pt-10")
            }>
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
