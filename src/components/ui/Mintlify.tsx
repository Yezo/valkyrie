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
      <div className="text-center flex flex-col items-center justify-center mb-12">
        <p className="text-muted-foreground/80 tracking-wide uppercase text-xs mb-4 font-light">
          a modern solution
        </p>
        <H2 className="sm:text-4xl font-medium tracking-tight max-w-[450px] ">
          Beautiful documentation that converts users
        </H2>
        <Paragraph>A platform you can rely on to reach your audience</Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 ">
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

        <div className="hidden md:block col-span-2">
          <div className="md:grid grid-cols-1 md:grid-cols-3 gap-1.5">
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
      className={`bg-gray-100/70 dark:border dark:border-white/5 rounded-xl ${roundedSide === "tl" ? "md:rounded-tl-[3rem]" : "md:rounded-tr-[3rem]"} overflow-hidden h-[305px] grid place-items-center dark:bg-[#04050B]`}
    >
      <div className="flex justify-center relative overflow-hidden rounded-xl">
        <Image
          src={lightModeImageURL}
          alt={lightModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className="w-full xl:w-[400px] max-h-[185px] object-cover object-top rounded-xl dark:hidden"
        />
        <Image
          src={darkModeImageURL}
          alt={darkModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className="w-full xl:w-[400px] max-h-[185px] object-cover object-top rounded-xl hidden dark:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F7F7F8] dark:to-[#04050B] overflow-hidden rounded-xl" />
      </div>
      <div className="flex items-center flex-col justify-center text-center ">
        <H3 className="tracking-tight">{title}</H3>
        <Paragraph className="text-xs px-8">{description}</Paragraph>
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
      className={`bg-gray-100/70 dark:border dark:border-white/5 rounded-xl overflow-hidden grid place-items-center dark:bg-[#04050B] h-[345px] ${roundedSide === "bl" && "md:rounded-bl-[3rem]"} ${roundedSide === "br" && "md:rounded-br-[3rem]"} ${roundedSide === "middle" && ""}`}
    >
      <div className="flex justify-center relative overflow-hidden rounded-xl">
        <Image
          src={lightModeImageURL}
          alt={lightModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className=" w-full max-h-[185px] object-cover object-top rounded-xl dark:hidden px-4"
        />
        <Image
          src={darkModeImageURL}
          alt={darkModeImageAlt}
          width={400}
          height={185}
          quality={100}
          className=" w-full  max-h-[185px] object-cover object-top rounded-xl hidden dark:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F7F7F8] dark:to-[#04050B] overflow-hidden rounded-xl" />
      </div>
      <div className="flex items-center flex-col justify-center text-center ">
        <H3 className="tracking-tight">{title}</H3>
        <Paragraph className="text-xs px-8">{description}</Paragraph>
      </div>
    </div>
  )
}
