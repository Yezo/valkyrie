import { BasicForm } from "@/components/forms/BasicForm"
import { Button } from "@/components/shadcn/button"
import { Badge } from "@/components/ui/Badge"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { getAllUsers } from "@/db/actions/user"
import { CodeIcon } from "@radix-ui/react-icons"

export default async function Home() {
  // const s = await getAllUsers()
  // console.log(s)
  return (
    <main className="grid min-h-screen place-items-center">
      {/* <Button className="w-20 font-bricolage">Kevin</Button> */}
      {/* <Badge variant={"release"}>
        <CodeIcon className="h-3 w-3" /> Release
      </Badge> */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <ThemeToggleButton />
        <BasicForm />
      </div>
    </main>
  )
}
