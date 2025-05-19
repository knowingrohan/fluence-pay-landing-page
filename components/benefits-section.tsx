import { Check } from "lucide-react"
import Image from "next/image"

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-pink-600">
              Why Choose FluencePay
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the advantages of our influencer marketing platform
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                <Check className="h-4 w-4 text-pink-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Exclusive Brand Partnerships</h3>
                <p className="text-gray-500">Access to exclusive deals and products from top brands in your niche</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                <Check className="h-4 w-4 text-pink-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Seamless Social Sharing</h3>
                <p className="text-gray-500">
                  One-click sharing to all your social platforms with customizable templates
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                <Check className="h-4 w-4 text-pink-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Competitive Cashback Rates</h3>
                <p className="text-gray-500">Earn higher cashback percentages than standard affiliate programs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100">
                <Check className="h-4 w-4 text-pink-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Performance Analytics</h3>
                <p className="text-gray-500">Track your influence, engagement, and earnings with detailed analytics</p>
              </div>
            </div>
          </div>
          <Image
            src="/influencer-rewards.png"
            width={500}
            height={500}
            alt="FluencePay Benefits"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover md:order-first"
          />
        </div>
      </div>
    </section>
  )
}
