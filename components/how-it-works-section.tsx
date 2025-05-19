import Image from "next/image"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-pink-600">
              How FluencePay Works
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple four-step process to start earning while shopping
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
          <Image
            src="/influencer-marketing-dashboard.png"
            width={500}
            height={500}
            alt="FluencePay Platform"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                1
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-gray-500">Create your influencer profile and connect your social media accounts</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                2
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Browse Brands</h3>
                <p className="text-gray-500">
                  Discover and connect with brands that align with your audience and style
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                3
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Shop & Share</h3>
                <p className="text-gray-500">Make purchases and share them directly to your social media platforms</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                4
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Earn Rewards</h3>
                <p className="text-gray-500">Get cashback and exclusive perks based on your purchases and engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
