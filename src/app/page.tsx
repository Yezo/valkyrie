import { LoadingIcon } from "@/components/ui/LoadingIcon"
import { Mintlify } from "@/components/ui/Mintlify"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { UserSelect } from "@/components/ui/UserSelect"

type SearchQueryPageProps = {
  searchParams: { fruit: string }
}

export default async function Home({ searchParams }: SearchQueryPageProps) {
  // const fruit = searchParams.fruit
  return (
    <main className="min-h-screen flex flex-col">
      <div className="self-center py-4">
        <LoadingIcon />
        <ThemeToggleButton />
      </div>
      <div className="h-full flex-1 flex flex-col gap-2 items-center justify-center">
        <div>
          <UserSelect />
        </div>
        {/* <Mintlify /> */}
      </div>
    </main>
  )
}
