import { Button } from "@/components/shadcn/button"
import { Badge } from "@/components/ui/Badge"
import { getAllUsers } from "@/db/actions/user"
import { CodeIcon } from "@radix-ui/react-icons"

export default async function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      {/* <Button className="w-20 font-bricolage">Kevin</Button> */}
      <Badge variant={"release"}>
        <CodeIcon className="h-3 w-3" /> Release
      </Badge>
    </main>
  )
}
