import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="border-green-200">
          <CardHeader className="pb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-4xl text-gray-900 mb-4">You're Officially on the Radar!</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Congratulations! You've taken the first step toward becoming a distributor of Nigeria's favorite Black
              Shampoo haircare solution.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Our team will review your application based on your city/LGA and reach out to you with the next steps
                for onboarding.
              </p>
              <p className="text-green-700 font-semibold mt-4">
                <strong>Note:</strong> Due to high demand and location exclusivity, early action will be prioritized.
              </p>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-800 font-semibold mb-2">Stay tuned — we'll be reaching out soon!</p>
              <p className="text-gray-600">(You'll also receive an email confirming your registration.)</p>
            </div>

            <div className="pt-6">
              <Link href="/opportunity">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Learn More About the Opportunity
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t">
              <Link href="/" className="text-green-600 hover:text-green-700 underline">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
