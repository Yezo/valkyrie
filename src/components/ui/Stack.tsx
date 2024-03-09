import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type StackProps = {
  className?: string
  children: React.ReactNode
}

const StackVariants = cva("flex items-center", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    gap: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
      12: "gap-12",
      16: "gap-16",
      20: "gap-20",
      24: "gap-24",
      40: "gap-40",
      48: "gap-48",
    },
    paddingY: {
      0: "",
      1: "py-1",
      2: "py-2",
      3: "py-3",
      4: "py-4",
      6: "py-6",
      8: "py-8",
      10: "py-10",
      12: "py-12",
      16: "py-16",
      20: "py-20",
      24: "py-24",
      40: "py-40",
      48: "py-48",
    },
    paddingX: {
      0: "",
      1: "px-1",
      2: "px-2",
      3: "px-3",
      4: "px-4",
      6: "px-6",
      8: "px-8",
      10: "px-10",
      12: "px-12",
      16: "px-16",
      20: "px-20",
      24: "px-24",
      40: "px-40",
      48: "px-48",
    },
    marginY: {
      0: "",
      1: "my-1",
      2: "my-2",
      3: "my-3",
      4: "my-4",
      6: "my-6",
      8: "my-8",
      10: "my-10",
      12: "my-12",
      16: "my-16",
      20: "my-20",
      24: "my-24",
      40: "my-40",
      48: "my-48",
    },
    marginX: {
      0: "",
      1: "mx-1",
      2: "mx-2",
      3: "mx-3",
      4: "mx-4",
      6: "mx-6",
      8: "mx-8",
      10: "mx-10",
      12: "mx-12",
      16: "mx-16",
      20: "mx-20",
      24: "mx-24",
      40: "mx-40",
      48: "mx-48",
    },
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    gap: 2,
    paddingY: 0,
    paddingX: 0,
    marginY: 0,
    marginX: 0,
  },
})

interface StackCVAProps extends VariantProps<typeof StackVariants>, StackProps {
  className?: string
  children: React.ReactNode
}

export const Stack = ({
  className,
  children,
  gap,
  direction,
  align,
  justify,
  paddingY,
  paddingX,
  marginY,
  marginX,
}: StackCVAProps) => {
  return (
    <div
      className={cn(
        StackVariants({
          gap,
          direction,
          align,
          justify,
          paddingY,
          paddingX,
          marginY,
          marginX,
          className,
        }),
      )}
    >
      {children}
    </div>
  )
}
