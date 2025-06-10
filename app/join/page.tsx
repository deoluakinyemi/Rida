"use client"

import { useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function JoinRedirectPage() {
  // Replace this with your actual Google Form URL when you have it
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform"

  useEffect(() => {
    // Redirect to Google Form after a short delay
    const timer = setTimeout(() => {
      window.location.href = GOOGLE_FORM_URL
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirecting you to the waitlist form...</h1>
        <p className="text-gray-600">Please wait a moment</p>
      </div>
    </div>
  )
}
