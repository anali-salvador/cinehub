import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
      className
    )}
    {...props}
  />
))
Command.displayName = "Command"

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ ...props }: CommandDialogProps) => (
  <Dialog {...props}>
    <DialogContent className="overflow-hidden p-0 shadow-lg">
      <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group-heading]]:dark:text-slate-400 [&_[cmdk-group]:overflow-hidden [&_[cmdk-group]>:not([cmdk-group-heading])]:px-2 [&_[cmdk-group]>:not([cmdk-group-heading])]:py-1.5 [&_[cmdk-group]>:not([cmdk-group-heading])]:text-sm [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500" />
    </DialogContent>
  </Dialog>
)

const CommandInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-slate-200 px-3 dark:border-slate-800">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = "CommandInput"

const CommandList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = "CommandList"

const CommandEmpty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className="py-6 text-center text-sm text-slate-500 dark:text-slate-400"
    {...props}
  />
))

CommandEmpty.displayName = "CommandEmpty"

const CommandGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { heading?: string }
>(({ className, heading, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("overflow-hidden", className)}
    {...props}
  />
))

CommandGroup.displayName = "CommandGroup"

const CommandItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-800 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = "CommandItem"

const CommandSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 h-px bg-slate-200 dark:bg-slate-800", className)}
    {...props}
  />
))
CommandSeparator.displayName = "CommandSeparator"

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn("ml-auto text-xs tracking-widest text-slate-500", className)}
    {...props}
  />
)
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}
