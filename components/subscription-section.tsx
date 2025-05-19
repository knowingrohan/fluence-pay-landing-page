"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function SubscriptionSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string | null
  }>({ type: null, message: null })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    followers: "",
    niche: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, niche: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setFormStatus({ type: null, message: null })

    try {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        setFormStatus({
          type: "success",
          message: result.message || "Thank you for subscribing to FluencePay. We'll be in touch soon!",
        })

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          instagram: "",
          followers: "",
          niche: "",
        })

        toast({
          title: "Success!",
          description: result.message || "Thank you for subscribing to FluencePay!",
        })
      } else {
        setFormStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })

        toast({
          title: "Submission failed",
          description: result.message || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      setFormStatus({
        type: "error",
        message: error.message || "An unexpected error occurred. Please try again.",
      })

      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="subscribe" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-pink-600">
              Join FluencePay Today
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up to get early access and exclusive perks when we launch
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6 py-8">
          {formStatus.type && (
            <Alert
              variant={formStatus.type === "success" ? "default" : "destructive"}
              className={formStatus.type === "success" ? "bg-green-50 border-green-200" : ""}
            >
              {formStatus.type === "success" ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>{formStatus.type === "success" ? "Success!" : "Error!"}</AlertTitle>
              <AlertDescription>{formStatus.message}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram Handle</Label>
              <Input
                id="instagram"
                name="instagram"
                placeholder="@yourusername"
                required
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="followers">Number of Followers</Label>
              <Input
                id="followers"
                name="followers"
                placeholder="e.g. 10000"
                required
                value={formData.followers}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="niche">Content Niche</Label>
              <Select onValueChange={handleSelectChange} value={formData.niche}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your content niche" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="beauty">Beauty</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Subscribe Now"
              )}
            </Button>
            <p className="text-xs text-center text-gray-500">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
