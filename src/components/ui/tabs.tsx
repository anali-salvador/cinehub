import * as React from "react"
import { cn } from "@/lib/utils"

interface Tab {
  value: string
  label: string
  content: React.ReactNode
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[]
  defaultValue?: string
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ tabs, defaultValue, className, ...props }, ref) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue || tabs[0]?.value)

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex border-b border-border gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors relative",
                activeTab === tab.value
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {activeTab === tab.value && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {tabs.find((tab) => tab.value === activeTab)?.content}
        </div>
      </div>
    )
  }
)
Tabs.displayName = "Tabs"

export { Tabs }
export type { TabsProps }
