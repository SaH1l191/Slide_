"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, User } from "lucide-react"
import ClerkAuthState from "./global/clerk-auth-state"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">XTR</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Lorem
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Lorem
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            Lorem
          </Link>
        </nav>
        <div className="flex items-center space-x-4">

          <Link href={`/sign-in`} >
            <SignedIn>
              <Link href="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
            </SignedIn>
 
            <SignedOut>
              <Link href={`/sign-in`} >
                <Button size="sm">Sign In</Button>
              </Link>
            </SignedOut>
          </Link>
          {/* <Button variant="ghost" size="sm">Lorem</Button>  */}

          {/* <ClerkAuthState /> */}
          <SignedIn>
                <UserButton>
                    <UserButton.UserProfileLink label='Dashboard' url={`/dashboard`}
                        labelIcon={<User size={16} />} />
                </UserButton>
            </SignedIn>
        </div>
      </div>
    </header>
  )
}
