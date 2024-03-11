import { Button } from "@/components/shadcn/button"
import { Separator } from "@/components/shadcn/separator"
import { H1 } from "@/components/ui/H1"
import { H2 } from "@/components/ui/H2"
import { MAIN_NAV_LINKS } from "@/config/nav"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type ComponentsLayoutProps = {
  children: React.ReactNode
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const sortedLinks = MAIN_NAV_LINKS.slice().sort((a, b) =>
    a.label.localeCompare(b.label),
  )

  return (
    <main className="grid grid-cols-1 px-4 md:grid-cols-[250px,8fr]">
      <aside className="hidden border-r md:block">
        <nav className="sticky top-0 min-h-screen p-8">
          <H1 className="px-2 text-lg sm:text-2xl">Valkyrie.</H1>

          <div className="mt-12">
            <H2 className="px-2 text-base font-medium tracking-tight sm:text-base">
              Components
            </H2>
            <ul className="mt-2 space-y-1 text-sm tracking-tight text-muted-foreground">
              {sortedLinks.map(({ label, url }, index) => (
                <li key={index} className="">
                  <Link
                    href={url}
                    className="flex min-h-full min-w-full items-center rounded px-2 py-2 transition-colors duration-300 ease-in-out hover:bg-muted-foreground/[.15] hover:font-medium hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <aside className="flex items-center justify-between  py-4 md:hidden">
        <H1 className="text-2xl sm:text-2xl">Valkyrie.</H1>
        <button className="rounded-md border p-2 transition-colors duration-300 hover:bg-muted-foreground/[.15]">
          <HamburgerMenuIcon />
        </button>
      </aside>

      <div className="mx-auto grid grid-cols-1 py-20 md:max-w-[725px] md:px-8 xl:min-w-[725px] xl:px-0">
        {children}
      </div>
    </main>
  )
}
