"use client"

import * as React from "react"

interface DocsContextType {
  activeSection: string
  setActiveSection: (section: string) => void
  currentPage?: string
}

const DocsContext = React.createContext<DocsContextType | null>(null)

interface DocsProviderProps {
  children: React.ReactNode
  currentPage?: string
}

export function DocsProvider({ children, currentPage }: DocsProviderProps) {
  const [activeSection, setActiveSection] = React.useState("")

  return (
    <DocsContext.Provider value={{ activeSection, setActiveSection, currentPage }}>{children}</DocsContext.Provider>
  )
}

export function useDocs() {
  const context = React.useContext(DocsContext)
  if (!context) {
    throw new Error("useDocs must be used within DocsProvider")
  }
  return context
}
