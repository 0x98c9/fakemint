"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, ArrowUp, ArrowDown, Check } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import type { DataField, GeneratedData } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, Copy as CopyIcon, Trash2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DataTableProps {
  data: GeneratedData[]
  fields: DataField[]
  isLoading: boolean
  selectedRows: Set<number>
  onSelectRow: (index: number) => void
  onSelectAll: () => void
  sortConfig: {
    key: string | null
    direction: "ascending" | "descending"
  }
  onSort: (key: string) => void
  onClear?: () => void
  onCopyAll?: () => void
  onExportCSV?: () => void
}

export function DataTable({
  data,
  fields,
  isLoading,
  selectedRows,
  onSelectRow,
  onSelectAll,
  sortConfig,
  onSort,
  onClear,
  onCopyAll,
  onExportCSV,
}: DataTableProps) {
  const [copiedCell, setCopiedCell] = useState<string | null>(null)

  const handleCopyCell = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedCell(value)
    setTimeout(() => setCopiedCell(null), 1000)
  }

  const handleClear = () => {
    if (onClear) {
      onClear()
    }
    // fallback: do nothing if onClear is not provided
  }
  
  const handleCopy = () => {
    if (onCopyAll) {
      onCopyAll()
    } else {
      // fallback: copy table as TSV
      const header = fields.map((f) => f.label).join("\t")
      const rows = data.map((row) => fields.map((f) => row[f.id]).join("\t"))
      const tsv = [header, ...rows].join("\n")
      navigator.clipboard.writeText(tsv)
    }
  }
  
  const handleExportCsv = () => {
    if (onExportCSV) {
      onExportCSV()
    } else {
      // fallback: download CSV
      const header = fields
        .map((f) => '"' + f.label.replace(/"/g, '""') + '"')
        .join(",")
      const rows = data
        .map((row) =>
          fields
            .map(
              (f) => '"' + (row[f.id]?.toString().replace(/"/g, '""') || "") + '"'
            )
            .join(",")
        )
        .join("\r\n")
      const csv = [header, rows].join("\r\n")
      const blob = new Blob([csv], { type: "text/csv" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "data.csv"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  if (isLoading) {
    return (
      <div className="rounded-xl border bg-card shadow-sm">
        <ScrollArea className="h-[calc(100vh-240px)]">
          <div className="relative overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Skeleton className="h-5 w-5" />
                  </TableHead>
                  {fields.map((field) => (
                    <TableHead key={field.id}>
                      <Skeleton className="h-5 w-24" />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>
                      <Skeleton className="h-4 w-4" />
                    </TableCell>
                    {fields.map((field, colIndex) => (
                      <TableCell key={`${rowIndex}-${colIndex}`}>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-240px)] text-center p-4 rounded-xl border bg-card/50">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <Copy className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-medium mb-2">No data generated yet</h3>
        <p className="text-muted-foreground max-w-md">
          Select data types from the configuration panel and click &quot;Generate Data&quot; to create fake data.
        </p>
      </div>
    )
  }

  return (
    <TooltipProvider>
      {/* Action buttons above the table */}
      <div className="flex items-center gap-2 mb-4 justify-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handleClear} size="sm" className="h-9">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Clear all data</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handleCopy} size="sm" className="h-9">
              <CopyIcon className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy to clipboard</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleExportCsv} size="sm" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Export as CSV file</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="rounded-xl border bg-card shadow-sm">
        <ScrollArea className="h-[calc(100vh-240px)]">
          <div className="relative overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50 sticky top-0 z-10">
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox
                      checked={selectedRows.size > 0 && selectedRows.size === data.length}
                      onCheckedChange={onSelectAll}
                      aria-label="Select all rows"
                    />
                  </TableHead>
                  {fields.map((field) => (
                    <TableHead key={field.id} className="relative" onClick={() => onSort(field.id)}>
                      <div className="flex items-center gap-1 cursor-pointer group">
                        {field.label}
                        <div className="text-muted-foreground">
                          {sortConfig.key === field.id ? (
                            sortConfig.direction === "ascending" ? (
                              <ArrowUp className="h-3.5 w-3.5" />
                            ) : (
                              <ArrowDown className="h-3.5 w-3.5" />
                            )
                          ) : (
                            <ArrowUp className="h-3.5 w-3.5 opacity-0 group-hover:opacity-30" />
                          )}
                        </div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    className={cn("group transition-colors", selectedRows.has(rowIndex) && "bg-primary/5")}
                  >
                    <TableCell className="p-2">
                      <Checkbox
                        checked={selectedRows.has(rowIndex)}
                        onCheckedChange={() => onSelectRow(rowIndex)}
                        aria-label={`Select row ${rowIndex + 1}`}
                      />
                    </TableCell>
                    {fields.map((field) => (
                      <TableCell
                        key={`${rowIndex}-${field.id}`}
                        className="relative cursor-pointer p-3"
                        onClick={() => handleCopyCell(row[field.id]?.toString() || "")}
                        title="Click to copy"
                      >
                        <div className="max-w-[300px] truncate">{row[field.id]?.toString() || ""}</div>
                        {copiedCell === row[field.id]?.toString() && (
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-xs font-medium animate-in fade-in-0 zoom-in-95 duration-200">
                            <Check className="h-3.5 w-3.5 mr-1" /> Copied
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
    </TooltipProvider>
  )
}
