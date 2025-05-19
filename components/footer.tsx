import Link from "next/link"
import { ShoppingBag, Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold">FluencePay</span>
            </div>
            <p className="text-sm text-gray-500">
              The ultimate platform connecting influencers with brands for a seamless shopping and sharing experience.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-gray-500 hover:text-pink-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-gray-500 hover:text-pink-500">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-sm text-gray-500 hover:text-pink-500">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  For Brands
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  For Influencers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-pink-500">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} FluencePay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
