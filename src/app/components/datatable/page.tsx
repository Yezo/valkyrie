import { columns } from "@/app/components/datatable/columns"
import { Separator } from "@/components/shadcn/separator"
import { Badge } from "@/components/ui/Badge"
import {
  ComponentBlock,
  ComponentCollapsible,
  ComponentDisplay,
  ComponentHeader,
} from "@/components/ui/ComponentBlock"
import { DataTable } from "@/components/ui/DataTable"
import { H2 } from "@/components/ui/H2"
import { Stack } from "@/components/ui/Stack"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
]

export default async function DatatablePage() {
  return (
    <>
      <ComponentHeader
        title="Data Table"
        description="A table for displaying large amounts of data with extra functionality."
      />

      <section className="space-y-12">
        <div className="space-y-4">
          <H2>Variants</H2>
          <ComponentBlock>
            <ComponentDisplay>
              <DataTable
                columns={columns}
                data={payments}
                title={"Data Table"}
                filterPlaceholder="Search emails..."
                filterColumn="status"
                hasPagination={false}
                hasFilter={true}
              />
            </ComponentDisplay>
            <Separator />
            <ComponentCollapsible>{`import { Badge } from "@/components/ui/Badge"
 
export function Component(): JSX.Element {
    return (
        <Badge>Default</Badge>
        <Badge variant={"red"}>Red</Badge>
        <Badge variant={"sky"}>Sky</Badge>
        <Badge variant={"indigo"}>Indigo</Badge>
        <Badge variant={"amber"}>Amber</Badge>
        <Badge variant={"purple"}>Purple</Badge>
        <Badge variant={"green"}>Green</Badge>
        <Badge variant={"yellow"}>Yellow</Badge>
        <Badge variant={"pink"}>Pink</Badge>
        <Badge variant={"teal"}>Teal</Badge>
   );
 }`}</ComponentCollapsible>
          </ComponentBlock>
        </div>

        <div className="space-y-4">
          <H2>Variants</H2>
          <ComponentBlock>
            <ComponentDisplay>
              <DataTable
                columns={columns}
                data={payments}
                title={"Data Table"}
                filterPlaceholder="Search emails..."
                filterColumn="status"
                hasPagination={false}
                hasFilter={true}
              />
            </ComponentDisplay>
            <Separator />
            <ComponentCollapsible>{`import { Badge } from "@/components/ui/Badge"
 
export function Component(): JSX.Element {
    return (
        <Badge>Default</Badge>
        <Badge variant={"red"}>Red</Badge>
        <Badge variant={"sky"}>Sky</Badge>
        <Badge variant={"indigo"}>Indigo</Badge>
        <Badge variant={"amber"}>Amber</Badge>
        <Badge variant={"purple"}>Purple</Badge>
        <Badge variant={"green"}>Green</Badge>
        <Badge variant={"yellow"}>Yellow</Badge>
        <Badge variant={"pink"}>Pink</Badge>
        <Badge variant={"teal"}>Teal</Badge>
   );
 }`}</ComponentCollapsible>
          </ComponentBlock>
        </div>
      </section>
    </>
  )
}
