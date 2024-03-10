import { Button } from "@/components/shadcn/button"
import { cn } from "@/lib/utils"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>
  children: React.ReactNode
  className?: string
  hasSorting?: boolean
  position?: "start" | "center" | "end"
}

export const DataTableHeader = <TData, TValue>({
  className,
  children,
  column,
  hasSorting = true,
  position = "start",
}: DataTableColumnHeaderProps<TData, TValue>) => {
  const { toggleSorting, getIsSorted } = column

  if (!hasSorting) {
    return (
      <div
        className={`flex min-w-full items-center 
        ${position === "center" && "justify-center"} 
        ${position === "end" && "justify-end"}
        `}
      >
        <Button
          variant="ghost"
          className={cn(
            `flex max-w-fit items-center gap-2 hover:bg-transparent ${position === "center" && "self-center"}`,
            className,
          )}
          asChild
        >
          <div>{children}</div>
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`flex min-w-full items-center 
      ${position === "center" && "justify-center"} 
      ${position === "end" && "justify-end"}
      `}
    >
      <Button
        variant="ghost"
        onClick={() => toggleSorting(getIsSorted() === "asc")}
        className={cn(`flex items-center gap-2`, className)}
      >
        {children}
        {hasSorting && <CaretSortIcon className="h-4 w-4" />}
      </Button>
    </div>
  )
}
