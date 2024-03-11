import { BlobComponent } from "@/components/ui/Blob"
import { H1 } from "@/components/ui/H1"
import { LoadingIcon } from "@/components/ui/LoadingIcon"
import { Mintlify } from "@/components/ui/Mintlify"
import { SearchInput } from "@/components/ui/SearchInput"
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton"
import { UserSelect } from "@/components/ui/UserSelect"
import { MAIN_NAV_LINKS } from "@/config/nav"
import Link from "next/link"

type SearchQueryPageProps = {
  searchParams: { fruit: string }
}

export default async function ComponentsPage({
  searchParams,
}: SearchQueryPageProps) {
  const test = [
    { label: "Peach", value: "Peach" },
    { label: "wish you would", value: "Wish you would" },
  ]
  const sortedLinks = MAIN_NAV_LINKS.slice().sort((a, b) =>
    a.label.localeCompare(b.label),
  )

  return (
    <main className="grid grid-cols-1 sm:grid-cols-[280px,8fr]">
      <aside className="border-r">
        <nav className="sticky top-0 min-h-screen p-8">
          <H1 className="text-lg sm:text-3xl">Valkyrie.</H1>

          <ul className="mt-12 space-y-2 text-sm tracking-tight text-muted-foreground">
            {sortedLinks.map(({ label, url }, index) => (
              <li
                key={index}
                className="flex items-center rounded p-1 transition-colors duration-300 ease-in-out hover:bg-red-600 hover:font-medium hover:text-foreground"
              >
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="px-4">
        <div className="min-h-screen">component page</div>
        <div className="min-h-screen">main content</div>
      </div>
    </main>
  )
}
