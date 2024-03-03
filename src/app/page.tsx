import { Button } from "@/components/shadcn/button";
import { getAllUsers } from "@/db/actions/user";

export default async function Home() {
  const s = await getAllUsers();
  console.log(s);
  return (
    <main className="grid min-h-screen place-items-center">
      <Button className="w-20 font-bricolage">Kevin</Button>
    </main>
  );
}
