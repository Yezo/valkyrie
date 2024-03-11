import { Badge } from "@/components/ui/Badge"
import { H1 } from "@/components/ui/H1"
import { H2 } from "@/components/ui/H2"
import { Paragraph } from "@/components/ui/Paragraph"
import { Separator } from "@/components/shadcn/separator"
import {
  DrawingPinIcon,
  MoonIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons"
import {
  ComponentBlock,
  ComponentCollapsible,
  ComponentDisplay,
  ComponentHeader,
} from "@/components/ui/ComponentBlock"

export default async function BadgePage() {
  return (
    <>
      <ComponentHeader
        title="Badge"
        description="A label that emphasizes an element that requires attention, or helps categorize with other similar elements."
      />

      <section className="space-y-12">
        <div className="space-y-4">
          <H2>Variants</H2>
          <ComponentBlock>
            <ComponentDisplay>
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
          <H2>Sizes</H2>
          <ComponentBlock>
            <ComponentDisplay>
              <Badge size={"small"}>Small</Badge>
              <Badge size={"default"}>Default</Badge>
              <Badge size={"large"}>Large</Badge>
            </ComponentDisplay>
            <Separator />
            <ComponentCollapsible>{`import { Badge } from "@/components/ui/Badge"
 
export function Component(): JSX.Element {
    return (
        <Badge size={"small"}>Small</Badge>
        <Badge size={"default"}>Default</Badge>
        <Badge size={"large"}>Large</Badge>
   );
 }`}</ComponentCollapsible>
          </ComponentBlock>
        </div>

        <div className="space-y-4">
          <H2>With icons</H2>
          <ComponentBlock>
            <ComponentDisplay>
              <Badge>
                <PersonIcon className="h-3 w-3" />
                Default
              </Badge>
              <Badge variant={"red"}>
                <DrawingPinIcon className="h-3 w-3" /> Red
              </Badge>
              <Badge variant={"sky"}>
                <MoonIcon className="h-3 w-3" /> Sky
              </Badge>
              <Badge variant={"indigo"}>
                <StarIcon className="h-3 w-3" />
                Indigo
              </Badge>
            </ComponentDisplay>
            <Separator />
            <ComponentCollapsible>{`import { Badge } from "@/components/ui/Badge"
 
export function Component(): JSX.Element {
    return (
        <Badge>
          <PersonIcon className="h-3 w-3" /> Default
        </Badge>
        <Badge variant={"red"}>
          <DrawingPinIcon className="h-3 w-3" /> Red
          </Badge>
        <Badge variant={"sky"}>
          <MoonIcon className="h-3 w-3" /> Sky
        </Badge>
        <Badge variant={"indigo"}>
          <StarIcon className="h-3 w-3" /> Indigo
        </Badge>
   );
 }`}</ComponentCollapsible>
          </ComponentBlock>
        </div>
      </section>
    </>
  )
}
