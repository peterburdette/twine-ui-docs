"use client"

import * as React from "react"

interface CollapsibleContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CollapsibleContext = React.createContext<CollapsibleContextType | null>(null)

interface CollapsibleProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Collapsible = ({ open, defaultOpen = false, onOpenChange, children }: CollapsibleProps) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const isOpen = open !== undefined ? open : internalOpen
  const handleOpenChange = onOpenChange || setInternalOpen

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      <div>{children}</div>
    </CollapsibleContext.Provider>
  )
}

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", ...props }, ref) => {
    const context = React.useContext(CollapsibleContext)
    if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible")

    return (
      <button
        ref={ref}
        className={className}
        onClick={() => context.onOpenChange(!context.open)}
        data-state={context.open ? "open" : "closed"}
        {...props}
      />
    )
  },
)
CollapsibleTrigger.displayName = "CollapsibleTrigger"

const CollapsibleContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", children, ...props }, ref) => {
    const context = React.useContext(CollapsibleContext)
    if (!context) throw new Error("CollapsibleContent must be used within Collapsible")

    if (!context.open) return null

    return (
      <div ref={ref} className={`overflow-hidden transition-all duration-200 ${className}`} {...props}>
        {children}
      </div>
    )
  },
)
CollapsibleContent.displayName = "CollapsibleContent"

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
