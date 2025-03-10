import "../styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider"
import { Toaster } from "sonner"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dummy Corp - Innovative Solutions for Tomorrow",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat, urna a convallis consequat, justo sapien feugiat felis, ac tristique eros justo vitae eros. Vivamus vestibulum libero ut tortor volutpat, a malesuada orci varius. Cras ullamcorper, purus ac interdum malesuada, eros velit efficitur nunc, a auctor neque enim ut arcu. Proin id justo id lorem eleifend cursus sit amet ut elit. Fusce a dolor magna. Nam vestibulum fringilla ex, a dictum ligula hendrerit et. Pellentesque nec lorem dui.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //  to fix the next hydration issue due to clerk Providre => suppressHydrationWarning
    <ClerkProvider>
      <html lang="en" className="dark">
        <body suppressHydrationWarning className={`${inter.className} D bg-background text-foreground antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <MouseMoveEffect />
            {children}
            <Toaster />
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  )
}


