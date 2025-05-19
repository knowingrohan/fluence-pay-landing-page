"use server"

import { supabase } from "@/lib/supabase"

interface SubscriptionData {
  name: string
  email: string
  instagram: string
  followers: string
  niche: string
}

export async function subscribeToNewsletter(data: SubscriptionData) {
  try {
    // Validate the data
    if (!data.name || !data.email || !data.instagram || !data.followers || !data.niche) {
      throw new Error("All fields are required")
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format")
    }

    // Insert the data into Supabase
    const { data: insertedData, error } = await supabase
      .from("subscribers")
      .insert([
        {
          name: data.name,
          email: data.email,
          instagram: data.instagram,
          followers: data.followers,
          niche: data.niche,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)

      // Check for duplicate email error
      if (error.code === "23505") {
        throw new Error("This email is already subscribed")
      }

      throw new Error(error.message)
    }

    return {
      success: true,
      message: "Successfully subscribed to FluencePay!",
    }
  } catch (error: any) {
    console.error("Error saving subscription:", error)
    return {
      success: false,
      message: error.message || "Failed to save subscription",
    }
  }
}
