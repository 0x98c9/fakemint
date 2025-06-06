"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Github, Info, FileText, Shield } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  onToggleConfig?: () => void
  isConfigOpen?: boolean
}

export function Header({ onToggleConfig, isConfigOpen }: HeaderProps = {}) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, []) 

  if (!mounted) {
    return (
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
              FM
            </div>
            <span className="font-bold text-xl">FakeMint</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <div className="w-9 h-9"></div>
            <div className="w-24 h-9"></div>
            <div className="w-24 h-9"></div>
            <div className="w-24 h-9"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <TooltipProvider>
      <header className="border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {pathname === "/" && onToggleConfig && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleConfig}
                className="md:hidden"
                aria-label="Toggle configuration panel"
              >
                {isConfigOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
                FM
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">FakeMint</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}</p>
              </TooltipContent>
            </Tooltip>

            {/* Page links */}
            <div className="hidden md:flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href="/">
                      Home
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to Home page</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href="/about">
                      <Info className="h-4 w-4 mr-1" />
                      About
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>About this tool</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href="/terms">
                      <FileText className="h-4 w-4 mr-1" />
                      Terms
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Terms of Service</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    asChild
                  >
                    <Link href="/privacy">
                      <Shield className="h-4 w-4 mr-1" />
                      Privacy
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Privacy Policy</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground"
                    aria-label="GitHub"
                    asChild
                  >
                    <a href="https://github.com/0x98c9/fakemint" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View on GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  )
}
