import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItem {
  value: string
  title: string
  content: React.ReactNode
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  defaultValue?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, defaultValue, className, ...props }, ref) => {
    const [openItem, setOpenItem] = React.useState(defaultValue || null)

    return (
      <div ref={ref} className={cn("w-full space-y-2", className)} {...props}>
        {items.map((item) => (
          <div key={item.value} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() =>
                setOpenItem(openItem === item.value ? null : item.value)
              }
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">{item.title}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  openItem === item.value && "rotate-180"
                )}
              />
            </button>
            {openItem === item.value && (
              <div className="px-4 py-3 bg-muted/30 border-t border-border">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
)
Accordion.displayName = "Accordion"

export { Accordion }
export type { AccordionProps, AccordionItem }
