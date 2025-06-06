"use client"

import { Button } from "@/components/ui/button"
import { Download, Copy, Trash2, CheckSquare } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingActionsProps {
  onExportCSV: () => void
  onCopyAll: () => void
  onClear: () => void
  hasData: boolean
  hasSelection: boolean
  selectionCount: number
}

export function FloatingActions({
  onExportCSV,
  onCopyAll,
  onClear,
  hasData,
  hasSelection,
  selectionCount,
}: FloatingActionsProps) {
  if (!hasData) return null

  return (
    <div className="md:hidden fixed bottom-16 right-4 z-10 flex flex-col gap-2">
      {hasSelection && (
        <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full shadow-md">
          {selectionCount} selected
        </div>
      )}
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={onClear}
          className="h-10 w-10 rounded-full bg-background shadow-md"
        >
          <Trash2 className="h-5 w-5" />
          <span className="sr-only">Clear data</span>
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={onCopyAll}
          className={cn(
            "h-10 w-10 rounded-full bg-background shadow-md",
            hasSelection && "bg-primary text-primary-foreground",
          )}
        >
          {hasSelection ? <CheckSquare className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
          <span className="sr-only">Copy data</span>
        </Button>

        <Button size="icon" onClick={onExportCSV} className="h-10 w-10 rounded-full shadow-md">
          <Download className="h-5 w-5" />
          <span className="sr-only">Export CSV</span>
        </Button>
      </div>
    </div>
  )
}
