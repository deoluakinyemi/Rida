"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, DollarSign, Award, Zap } from "lucide-react"

export default function GoogleFormEmbedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-600">RIDA</div>
            <div className="text-sm text-gray-600">Distributor Opportunity</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Own the Rida Hair Shampoo Opportunity in Your City.
          </h1>
          <p className="text-xl md:text-2xl text-green-600 font-semibold mb-8">
            Turn ₦100,000 into ₦2M+ within 12 months.
          </p>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-12">
            Join the Waitlist to Become a Rida Black Hair Shampoo Distributor in Your Local Government Area.
          </h2>
        </div>
      </section>

      {/* Opening Paragraph */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Rida is expanding — and we're looking for entrepreneurial, forward-thinking partners to lead the movement
            across cities and local governments. If you've ever dreamed of building a real business, growing real
            wealth, and distributing products that people already love, this is your opportunity. With a proven product
            range and massive demand, Rida distributors are positioned for high-profit, high-impact returns.
            <span className="font-semibold text-green-600"> Slots are limited by location. Reserve your spot now.</span>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join the Rida Distribution Network?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <Award className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Established Brand</h4>
                <p className="text-gray-600">Proven products with high demand.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Low Barrier, High Upside</h4>
                <p className="text-gray-600">Invest from ₦100,000 to ₦1,000,000+</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <DollarSign className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Real ROI Potential</h4>
                <p className="text-gray-600">Earn ₦500,000 – ₦22 Million+ within 12 months.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Local Territory Advantage</h4>
                <p className="text-gray-600">First come, first served per local government.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Zap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Marketing Support</h4>
                <p className="text-gray-600">Starter kits, training, and marketing assets provided.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">National Movement</h4>
                <p className="text-gray-600">Expand with a brand committed to empowerment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">The Numbers That Matter:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">₦100k - ₦1M+</div>
              <p className="text-gray-300">Starting Investment Range</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">Up to 500%+</div>
              <p className="text-gray-300">Potential Return in 12 Months</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2,000,000+</div>
              <p className="text-gray-300">Active Customers Love Rida</p>
            </div>
          </div>
          <p className="text-xl mt-12 text-green-400">Build a business you can be proud of. Start with Rida.</p>
        </div>
      </section>

      {/* Embedded Google Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900">
                Join the Rida Black Hair Shampoo Distributor Waitlist Now
              </CardTitle>
              <CardDescription className="text-lg">
                Reserve your spot and secure your territory before it's taken.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Replace this URL with your actual Google Form embed URL */}
              <iframe
                src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold text-green-400 mb-4">RIDA</div>
          <p className="text-gray-400">Building wealth through proven products and partnerships.</p>
        </div>
      </footer>
    </div>
  )
}
