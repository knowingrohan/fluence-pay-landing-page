import { ShoppingBag, Users, Share2, DollarSign } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-500">Core Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-pink-600">
              Everything You Need as an Influencer
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              FluencePay provides a complete platform for influencers to connect, shop, share, and earn.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full bg-pink-100 p-3">
              <Users className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-center">Connect</h3>
            <p className="text-sm text-center text-gray-500">
              Connect with partnered brands that match your style and audience
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full bg-pink-100 p-3">
              <ShoppingBag className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-center">Shop</h3>
            <p className="text-sm text-center text-gray-500">
              Make purchases at partnered stores with exclusive influencer perks
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full bg-pink-100 p-3">
              <Share2 className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-center">Share</h3>
            <p className="text-sm text-center text-gray-500">
              Share your purchases on social media with your audience seamlessly
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="rounded-full bg-pink-100 p-3">
              <DollarSign className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-center">Earn</h3>
            <p className="text-sm text-center text-gray-500">Get rewarded with cashback for every purchase and share</p>
          </div>
        </div>
      </div>
    </section>
  )
}
