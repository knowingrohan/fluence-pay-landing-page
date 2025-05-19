"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#features"
            className="text-lg font-medium hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-lg font-medium hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-lg font-medium hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href="#subscribe"
            className="text-lg font-medium hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Subscribe
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild variant="outline">
              <Link href="#subscribe" onClick={() => setOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <Link href="#subscribe" onClick={() => setOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
