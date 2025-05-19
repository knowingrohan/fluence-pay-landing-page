import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// Type definition for our subscribers table
export type Subscriber = {
  id?: number
  name: string
  email: string
  instagram: string
  followers: string
  niche: string
  created_at?: string
}
