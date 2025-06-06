import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div>
            Built with ❤️ for developers & testers — 100% free
          </div>
        </div>
      </div>
    </footer>
  )
}