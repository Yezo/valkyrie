import type { Metadata } from "next"
import { inter, bricolage } from "@/config/font"
import { SITE_CONFIG } from "@/config/site"
import { Toaster } from "@/components/shadcn/sonner"
import "../styles/globals.css"

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["Keyword_ONE", "Keyword_TWO", "Keyword_THREE"],
  authors: [
    {
      name: SITE_CONFIG.creator,
      url: SITE_CONFIG.links.portfolio,
    },
  ],
  creator: SITE_CONFIG.creator,

  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en-US",
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@kevodotdev",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="bg-black">
        <Toaster />
        {children}
      </body>
    </html>
  )
}
