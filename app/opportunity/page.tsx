import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, DollarSign, TrendingUp, Users, Zap } from "lucide-react"

export default function OpportunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600">
              RIDA
            </Link>
            <div className="text-sm text-gray-600">Opportunity Explainer</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Here's How Rida Distributors Are Winning Across Nigeria
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            This isn't just buying products. It's building a scalable business.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Invest</h3>
              <p className="text-gray-600">Choose your starting level between ₦100k and ₦1M+</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sell</h3>
              <p className="text-gray-600">Sell at retail prices OR build networks under you</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grow</h3>
              <p className="text-gray-600">Expand your territory with bonuses and brand support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Earn</h3>
              <p className="text-gray-600">Generate substantial returns and build lasting wealth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">What You're Getting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Distributor access to Rida Hair Shampoo at wholesale rates, giving you the foundation to build a
                  profitable business in your territory.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">How You Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sell at retail prices for immediate profits OR build networks under you for recurring income and
                  exponential growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Your Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Choose a starting level between ₦100k and ₦1M+ based on your capacity and growth ambitions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Your Growth Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sell, restock, and expand your territory with bonuses and brand support to maximize your earning
                  potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Rida Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful distributors building wealth with Rida products.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Join the Waitlist Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-2xl font-bold text-green-400 mb-4">RIDA</div>
          <p className="text-gray-400">Building wealth through proven products and partnerships.</p>
        </div>
      </footer>
    </div>
  )
}
