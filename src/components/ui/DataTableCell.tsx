import { cn } from "@/lib/utils"
import { Row } from "@tanstack/react-table"

interface DataTableCellProps<TData> {
  row: Row<TData>
  children: React.ReactNode
  className?: string
  position?: "start" | "center" | "end"
}

export const DataTableCell = function <TData>({
  className,
  children,
  row,
  position = "start",
}: DataTableCellProps<TData>): JSX.Element {
  return (
    <div
      className={`flex min-w-full items-center 
      ${position === "center" && "justify-center"} 
      ${position === "end" && "justify-end"}
      `}
    >
      <div className={cn(`px-4 font-medium`, className)}>{children}</div>
    </div>
  )
}
