import { cn } from "@/lib/utils"

type BlobComponentProps = {
  className?: string
}

export const BlobComponent = ({ className }: BlobComponentProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-800 opacity-40 mix-blend-multiply blur-[50px] filter dark:mix-blend-normal"></div>
        <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-blue-200  opacity-40 mix-blend-multiply blur-[50px] filter dark:mix-blend-normal"></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full  bg-red-200 opacity-40 mix-blend-multiply blur-[50px] filter dark:mix-blend-normal"></div>
        <div className="animation-delay-2000 absolute right-32 top-8 h-72 w-72 animate-blob rounded-full bg-orange-200  opacity-40 mix-blend-multiply blur-[50px] filter dark:mix-blend-normal"></div>
        <div className="relative m-8 space-y-4">
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-48 rounded bg-gray-300"></div>
            </div>
            <div>
              <div className="h-6 w-24 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-56 rounded bg-gray-300"></div>
            </div>
            <div>
              <div className="h-6 w-20 rounded-lg bg-yellow-300"></div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-44 rounded bg-gray-300"></div>
            </div>
            <div>
              <div className="h-6 w-28 rounded-lg bg-pink-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
