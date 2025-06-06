export interface DataField {
  id: string
  label: string
  icon: string
  selected: boolean
}

export interface GeneratedData {
  [key: string]: string | number | Date
}
