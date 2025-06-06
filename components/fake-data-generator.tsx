"use client"

import { useState, useEffect } from "react"
import { ConfigPanel } from "@/components/config-panel"
import { DataTable } from "@/components/data-table"
import { FloatingActions } from "@/components/floating-actions"
import { generateFakeData } from "@/lib/generate-fake-data"
import { useToast } from "@/hooks/use-toast"
import type { DataField, GeneratedData } from "@/lib/types"

interface FakeDataGeneratorProps {
  isConfigOpen?: boolean;
}

export function FakeDataGenerator({ isConfigOpen = true }: FakeDataGeneratorProps) {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedFields, setSelectedFields] = useState<DataField[]>([
    { id: "fullName", label: "Full Name", icon: "user", selected: true },
    { id: "email", label: "Email", icon: "mail", selected: true },
    { id: "username", label: "Username", icon: "at-sign", selected: true },
    { id: "phone", label: "Phone Number", icon: "phone", selected: true },
    { id: "address", label: "Address", icon: "map-pin", selected: false },
    { id: "city", label: "City", icon: "building", selected: false },
    { id: "country", label: "Country", icon: "globe", selected: false },
    { id: "zipCode", label: "ZIP Code", icon: "hash", selected: false },
    { id: "company", label: "Company", icon: "briefcase", selected: false },
    { id: "jobTitle", label: "Job Title", icon: "badge", selected: false },
    { id: "date", label: "Date", icon: "calendar", selected: false },
    { id: "text", label: "Random Text", icon: "text", selected: false },
    { id: "creditCard", label: "Credit Card", icon: "credit-card", selected: false },
    { id: "ipAddress", label: "IP Address", icon: "network", selected: false },
    { id: "color", label: "Color", icon: "palette", selected: false },
    { id: "password", label: "Password", icon: "key", selected: false },
  ])

  const [rowCount, setRowCount] = useState(25)
  const [generatedData, setGeneratedData] = useState<GeneratedData[]>([])
  const [generationTime, setGenerationTime] = useState<number | null>(null)
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())
  const [sortConfig, setSortConfig] = useState<{
    key: string | null
    direction: "ascending" | "descending"
  }>({ key: null, direction: "ascending" })

  // Reset selected rows when data changes
  useEffect(() => {
    setSelectedRows(new Set())
  }, [generatedData])

  const handleGenerateData = () => {
    const activeFields = selectedFields.filter((field) => field.selected)

    if (activeFields.length === 0) {
      toast({
        title: "No fields selected",
        description: "Please select at least one field to generate data.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // Small delay to show loading state
    setTimeout(() => {
      const startTime = performance.now()
      const data = generateFakeData(activeFields, rowCount)
      setGeneratedData(data)
      const endTime = performance.now()
      setGenerationTime((endTime - startTime) / 1000)
      setIsGenerating(false)

      toast({
        title: "Data generated successfully",
        description: `Generated ${rowCount} rows in ${((endTime - startTime) / 1000).toFixed(2)}s`,
      })
    }, 600)
  }

  const handleClearData = () => {
    setGeneratedData([])
    setGenerationTime(null)
    setSelectedRows(new Set())
    toast({
      title: "Data cleared",
      description: "All generated data has been cleared.",
    })
  }

  const handleExportCSV = () => {
    if (generatedData.length === 0) return

    const activeFields = selectedFields.filter((field) => field.selected)
    const headers = activeFields.map((field) => field.label).join(",")

    const dataToExport = selectedRows.size > 0 ? [...selectedRows].map((index) => generatedData[index]) : generatedData

    const csvRows = dataToExport.map((row) => {
      return activeFields
        .map((field) => {
          // Escape commas and quotes in the data
          const value = row[field.id]?.toString() || ""
          return `"${value.replace(/"/g, '""')}"`
        })
        .join(",")
    })

    const csvContent = [headers, ...csvRows].join("\n")
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "fake-data.csv")
    link.click()

    toast({
      title: "CSV exported",
      description: `Exported ${dataToExport.length} rows to CSV.`,
    })
  }

  const handleCopyAll = () => {
    if (generatedData.length === 0) return

    const activeFields = selectedFields.filter((field) => field.selected)
    const headers = activeFields.map((field) => field.label).join("\t")

    const dataToExport = selectedRows.size > 0 ? [...selectedRows].map((index) => generatedData[index]) : generatedData

    const rows = dataToExport.map((row) => {
      return activeFields.map((field) => row[field.id]?.toString() || "").join("\t")
    })

    const textContent = [headers, ...rows].join("\n")
    navigator.clipboard.writeText(textContent)

    toast({
      title: "Copied to clipboard",
      description: `Copied ${dataToExport.length} rows to clipboard.`,
    })
  }

  const handleToggleField = (fieldId: string) => {
    setSelectedFields((prev) =>
      prev.map((field) => (field.id === fieldId ? { ...field, selected: !field.selected } : field)),
    )
  }

  const handleSelectAllRows = () => {
    if (selectedRows.size === generatedData.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(generatedData.map((_, index) => index)))
    }
  }

  const handleSelectRow = (index: number) => {
    const newSelectedRows = new Set(selectedRows)
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index)
    } else {
      newSelectedRows.add(index)
    }
    setSelectedRows(newSelectedRows)
  }

  const handleSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"

    if (sortConfig.key === key) {
      direction = sortConfig.direction === "ascending" ? "descending" : "ascending"
    }

    setSortConfig({ key, direction })
  }

  const sortedData = [...generatedData].sort((a, b) => {
    if (!sortConfig.key) return 0

    const valueA = a[sortConfig.key]
    const valueB = b[sortConfig.key]

    if (valueA === valueB) return 0

    if (sortConfig.direction === "ascending") {
      return valueA < valueB ? -1 : 1
    } else {
      return valueA > valueB ? -1 : 1
    }
  })

  return (
    <>
      <div className="flex flex-1 overflow-hidden">
        <ConfigPanel
          fields={selectedFields}
          rowCount={rowCount}
          onToggleField={handleToggleField}
          onRowCountChange={setRowCount}
          onGenerate={handleGenerateData}
          isOpen={isConfigOpen}
          isGenerating={isGenerating}
        />

        <div className="flex-1 p-4 md:p-6">
          <DataTable
            data={sortedData}
            fields={selectedFields.filter((field) => field.selected)}
            isLoading={isGenerating}
            selectedRows={selectedRows}
            onSelectRow={handleSelectRow}
            onSelectAll={handleSelectAllRows}
            sortConfig={sortConfig}
            onSort={handleSort}
            onClear={handleClearData}
            onCopyAll={handleCopyAll}
            onExportCSV={handleExportCSV}
          />

          {generationTime !== null && generatedData.length > 0 && (
            <div className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              Generated {generatedData.length} rows in {generationTime.toFixed(2)}s
            </div>
          )}
        </div>
      </div>

      <FloatingActions
        onExportCSV={handleExportCSV}
        onCopyAll={handleCopyAll}
        onClear={handleClearData}
        hasData={generatedData.length > 0}
        hasSelection={selectedRows.size > 0}
        selectionCount={selectedRows.size}
      />
    </>
  )
}
