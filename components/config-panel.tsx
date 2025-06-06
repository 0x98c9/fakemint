"use client"

import type React from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Globe,
  Hash,
  AtSign,
  Briefcase,
  BadgeCheck,
  Calendar,
  Type,
  Loader2,
  CreditCard,
  Network,
  Palette,
  Key,
} from "lucide-react"
import type { DataField } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ConfigPanelProps {
  fields: DataField[]
  rowCount: number
  onToggleField: (fieldId: string) => void
  onRowCountChange: (count: number) => void
  onGenerate: () => void
  isOpen: boolean
  isGenerating: boolean
}

export function ConfigPanel({
  fields,
  rowCount,
  onToggleField,
  onRowCountChange,
  onGenerate,
  isOpen,
  isGenerating,
}: ConfigPanelProps) {
  const handleRowCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (isNaN(value)) return

    // Clamp value between 1 and 1000
    const clampedValue = Math.min(Math.max(value, 1), 1000)
    onRowCountChange(clampedValue)
  }

  const handleSliderChange = (value: number[]) => {
    onRowCountChange(value[0])
  }

  const getIconForField = (iconName: string) => {
    switch (iconName) {
      case "user":
        return <User className="h-4 w-4" />
      case "mail":
        return <Mail className="h-4 w-4" />
      case "phone":
        return <Phone className="h-4 w-4" />
      case "map-pin":
        return <MapPin className="h-4 w-4" />
      case "building":
        return <Building className="h-4 w-4" />
      case "globe":
        return <Globe className="h-4 w-4" />
      case "hash":
        return <Hash className="h-4 w-4" />
      case "at-sign":
        return <AtSign className="h-4 w-4" />
      case "briefcase":
        return <Briefcase className="h-4 w-4" />
      case "badge":
        return <BadgeCheck className="h-4 w-4" />
      case "calendar":
        return <Calendar className="h-4 w-4" />
      case "text":
        return <Type className="h-4 w-4" />
      case "credit-card":
        return <CreditCard className="h-4 w-4" />
      case "network":
        return <Network className="h-4 w-4" />
      case "palette":
        return <Palette className="h-4 w-4" />
      case "key":
        return <Key className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  return (
    <div
      className={cn(
        "w-full md:w-96 lg:w-[420px] border-r bg-card transition-all duration-300 ease-in-out overflow-y-auto",
        "fixed md:relative inset-0 z-20 md:z-0 transform",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-0 md:opacity-0",
      )}
    >
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-1">Configure Data</h2>
          <p className="text-sm text-muted-foreground mb-6">Select the types of data you want to generate</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Data Types</h3>
              <div className="grid grid-cols-2 gap-3">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={cn(
                      "flex items-center rounded-lg border p-2 transition-all duration-200 cursor-pointer",
                      field.selected 
                        ? "border-primary bg-primary/10 shadow-sm scale-[1.02]" 
                        : "border-border hover:bg-accent hover:border-accent/50",
                    )}
                    onClick={() => onToggleField(field.id)}
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div
                        className={cn(
                          "h-6 w-6 rounded-md flex items-center justify-center flex-shrink-0",
                          field.selected ? "text-primary bg-primary/20" : "text-muted-foreground",
                        )}
                      >
                        {getIconForField(field.icon)}
                      </div>
                      <span className={cn(
                        "text-xs sm:text-sm flex-1 truncate",
                        field.selected ? "font-medium text-primary" : ""
                      )}>
                        {field.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-4">Row Count: {rowCount}</h3>
              <div className="space-y-4">
                <Slider
                  value={[rowCount]}
                  min={1}
                  max={1000}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="py-2"
                />
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={1}
                    max={1000}
                    value={rowCount}
                    onChange={handleRowCountChange}
                    className="w-full"
                  />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Max: 1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={onGenerate}
          className="w-full"
          size="lg"
          disabled={isGenerating || fields.filter((f) => f.selected).length === 0}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Data"
          )}
        </Button>
      </div>
    </div>
  )
}
