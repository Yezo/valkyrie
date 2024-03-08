import { H2 } from "@/components/ui/H2"
import { H3 } from "@/components/ui/H3"
import { Paragraph } from "@/components/ui/Paragraph"
import { cn } from "@/lib/utils"
import Image from "next/image"

type MintlifyProps = {
  className?: string
}

export const Mintlify = ({ className }: MintlifyProps) => {
  return (
    <section className={cn("xl:w-[1025px]", className)}>
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <p className="mb-4 text-xs font-light uppercase tracking-wide text-muted-foreground/80">
          a modern solution
        </p>
        <H2 className="max-w-[450px] font-medium tracking-tight sm:text-4xl ">
          Beautiful documentation that converts users
        </H2>
        <Paragraph>A platform you can rely on to reach your audience</Paragraph>
      </div>

      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 ">
        <TopBlock
          roundedSide="tl"
          title="Gorgeous out of the box"
          description="Opinionated when you're lazy, but infinitely flexible when you need it to be"
          lightModeImageURL="/gorgeous.webp"
          lightModeImageAlt="ye"
          darkModeImageURL="/gorgeous-dark.webp"
          darkModeImageAlt="ye"
        />
        <TopBlock
          roundedSide="tr"
          title="Developer forward"
          description="Content is powered by markdown and lives alongside your codebase"
          lightModeImageURL="/gorgeous.webp"
          lightModeImageAlt="ye"
          darkModeImageURL="/gorgeous-dark.webp"
          darkModeImageAlt="ye"
        />

        <div className="col-span-2 hidden md:block">
          <div className="grid-cols-1 gap-1.5 md:grid md:grid-cols-3">
            <BottomBlock
              roundedSide="bl"
              title="Built for performance"
              description="Meticulously designed and optimized for a great user experience"
              lightModeImageURL="/gorgeous.webp"
              lightModeImageAlt="ye"
              darkModeImageURL="/gorgeous-dark.webp"
              darkModeImageAlt="ye"
            />

            <BottomBlock
              roundedSide="middle"
              title="Conversion as a priority"
              description="Crafted for more user engagement and conversions"
              lightModeImageURL="/gorgeous.webp"
              lightModeImageAlt="ye"
              darkModeImageURL="/gorgeous-dark.webp"
              darkModeImageAlt="ye"
            />

            <BottomBlock
              roundedSide="br"
              title="Effortlessly maintained"
              description="Designed to make updating documentation easy"
              lightModeImageURL="/gorgeous.webp"
              lightModeImageAlt="ye"
              darkModeImageURL="/gorgeous-dark.webp"
              darkModeImageAlt="ye"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type TopBlockProps = {
  roundedSide: "tl" | "tr"
  lightModeImageURL: string
  lightModeImageAlt: string
  darkModeImageURL: string
  darkModeImageAlt: string
  title: string
  description: string
}

export const TopBlock = ({
  roundedSide,
  lightModeImageURL,
  lightModeImageAlt,
  darkModeImageURL,
  darkModeImageAlt,
  title,
  description,
}: TopBlockProps) => {
  return (
    <div
      className={`rounded-xl bg-gray-100/70 dark:border dark:border-white/5 ${roundedSide === "tl" ? "md:rounded-tl-[3rem]" : "md:rounded-tr-[3rem]"} grid h-[305px] place-items-center overflow-hidden dark:bg-[#04050B]`}
    >
      <div className="relative flex justify-center overflow-hidden rounded-xl">
        <Image
          src={lightModeImageURL}
          alt={lightModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className="max-h-[185px] w-full rounded-xl object-cover object-top dark:hidden xl:w-[400px]"
        />
        <Image
          src={darkModeImageURL}
          alt={darkModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className="hidden max-h-[185px] w-full rounded-xl object-cover object-top dark:block xl:w-[400px]"
        />
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-b from-transparent to-[#F7F7F8] dark:to-[#04050B]" />
      </div>
      <div className="flex flex-col items-center justify-center text-center ">
        <H3 className="tracking-tight">{title}</H3>
        <Paragraph className="px-8 text-xs">{description}</Paragraph>
      </div>
    </div>
  )
}

type BottomBlockProps = {
  roundedSide: "bl" | "br" | "middle"
  lightModeImageURL: string
  lightModeImageAlt: string
  darkModeImageURL: string
  darkModeImageAlt: string
  title: string
  description: string
}

export const BottomBlock = ({
  roundedSide,
  lightModeImageURL,
  lightModeImageAlt,
  darkModeImageURL,
  darkModeImageAlt,
  title,
  description,
}: BottomBlockProps) => {
  return (
    <div
      className={`grid h-[345px] place-items-center overflow-hidden rounded-xl bg-gray-100/70 dark:border dark:border-white/5 dark:bg-[#04050B] ${roundedSide === "bl" && "md:rounded-bl-[3rem]"} ${roundedSide === "br" && "md:rounded-br-[3rem]"} ${roundedSide === "middle" && ""}`}
    >
      <div className="relative flex justify-center overflow-hidden rounded-xl">
        <Image
          src={lightModeImageURL}
          alt={lightModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className=" max-h-[185px] w-full rounded-xl object-cover object-top px-4 dark:hidden"
        />
        <Image
          src={darkModeImageURL}
          alt={darkModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className=" hidden  max-h-[185px] w-full rounded-xl object-cover object-top dark:block"
        />
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-b from-transparent to-[#F7F7F8] dark:to-[#04050B]" />
      </div>
      <div className="flex flex-col items-center justify-center text-center ">
        <H3 className="tracking-tight">{title}</H3>
        <Paragraph className="px-8 text-xs">{description}</Paragraph>
      </div>
    </div>
  )
}
