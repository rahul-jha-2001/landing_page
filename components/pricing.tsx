import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Rs 500",
      description: "Perfect for small restaurants",
      features: ["Digital QR Menu", "Basic POS Features", "Email Support", "1 Staff Account"],
    },
    {
      name: "Professional",
      price: "Rs 1000",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced POS & Analytics",
        "Kitchen Display System",
        "Priority Support",
        "5 Staff Accounts",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large restaurant chains",
      features: [
        "Everything in Professional",
        "Custom Integration",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Unlimited Staff Accounts",
      ],
    },
  ]

  return (
    <section id="pricing" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Choose the perfect plan for your restaurant's needs</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="bg-[#1C1C1F] border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
              </div>
              <p className="text-gray-400 mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-[#ffdf90] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6 bg-[#ffdf90] hover:bg-[#ffdf90]/90 text-black">Get Started</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

