import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-pink-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-pink-600">
                Influence. Shop. Share. Earn.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Connect with brands, shop with exclusive perks, share your purchases, and earn cashback as an
                influencer.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600">
                <Link href="#subscribe">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/influencer-shopping.png"
            width={550}
            height={550}
            alt="Influencer using FluencePay"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
