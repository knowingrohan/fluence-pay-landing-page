import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-pink-500" />
          <Link href="/" className="text-xl font-bold">
            FluencePay
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-pink-500 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-pink-500 transition-colors">
            How It Works
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-pink-500 transition-colors">
            Benefits
          </Link>
          <Link href="#subscribe" className="text-sm font-medium hover:text-pink-500 transition-colors">
            Subscribe
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link href="#subscribe">Login</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600">
            <Link href="#subscribe">Sign Up</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
