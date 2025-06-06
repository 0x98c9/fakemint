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
