"use client"

import type React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { DataField } from "@/lib/types"

interface SidebarProps {
  fields: DataField[]
  rowCount: number
  onToggleField: (fieldId: string) => void
  onRowCountChange: (count: number) => void
  onGenerate: () => void
}

export function Sidebar({ fields, rowCount, onToggleField, onRowCountChange, onGenerate }: SidebarProps) {
  const handleRowCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (isNaN(value)) return

    // Clamp value between 1 and 1000
    const clampedValue = Math.min(Math.max(value, 1), 1000)
    onRowCountChange(clampedValue)
  }

  return (
    <div className="w-64 border-r bg-muted/40 p-4 overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Data Types</h3>
          <div className="space-y-2">
            {fields.map((field) => (
              <div key={field.id} className="flex items-center space-x-2">
                <Checkbox id={field.id} checked={field.selected} onCheckedChange={() => onToggleField(field.id)} />
                <Label htmlFor={field.id} className="text-sm cursor-pointer">
                  {field.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Row Count</h3>
          <div className="flex flex-col space-y-2">
            <Input
              type="number"
              min={1}
              max={1000}
              value={rowCount}
              onChange={handleRowCountChange}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground">Min: 1, Max: 1000</div>
          </div>
        </div>

        <Button onClick={onGenerate} className="w-full" size="lg">
          Generate Data
        </Button>
      </div>
    </div>
  )
}
