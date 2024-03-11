import { cn } from "@/lib/utils"
import Image from "next/image"

type AvatarProps = {
  className?: string
  name: string | null | undefined
  image: string | null | undefined
  size: "small" | "large"
}

export const Avatar = ({ className, image, name, size }: AvatarProps) => {
  return (
    <Image
      src={image!}
      alt={`${name}\'s avatar`}
      width={size === "large" ? "72" : "36"}
      height={size === "large" ? "72" : "36"}
      className={`relative flex aspect-square shrink-0 overflow-hidden rounded object-cover ${size === "large" ? "max-h-[72px] min-h-[72px]" : "max-h-[36px] min-h-[36px]"} `}
      quality={100}
    />
  )
}
