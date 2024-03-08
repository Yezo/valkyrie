import { BlobComponent } from "@/components/ui/Blob"
import { LoadingIcon } from "@/components/ui/LoadingIcon"
import { Mintlify } from "@/components/ui/Mintlify"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { UserSelect } from "@/components/ui/UserSelect"

type SearchQueryPageProps = {
  searchParams: { fruit: string }
}

export default async function Home({ searchParams }: SearchQueryPageProps) {
  const test = [
    { label: "Peach", value: "Peach" },
    { label: "wish you would", value: "Wish you would" },
  ]
  return (
    <main className="flex min-h-screen flex-col">
      <div className="self-center py-4">
        <LoadingIcon />
        <ThemeToggleButton />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <UserSelect placeholder="Select a song" items={test} />
        {/* <BlobComponent /> */}
      </div>
    </main>
  )
}
