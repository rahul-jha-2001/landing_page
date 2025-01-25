import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Rasoi has completely transformed how we manage our restaurant. The digital menu system alone has increased our sales by 25%.",
      author: "Sarah Chen",
      role: "Owner, Asian Fusion Restaurant",
    },
    {
      quote:
        "The AI recommendations have helped us optimize our menu and increase customer satisfaction. It's like having a data scientist on staff.",
      author: "Michael Rodriguez",
      role: "Manager, Fine Dining Restaurant",
    },
    {
      quote: "Their POS system is intuitive and reliable. Training new staff takes minutes instead of hours now.",
      author: "David Smith",
      role: "Operations Director, Restaurant Chain",
    },
  ]

  return (
    <section id="testimonials" className="container mx-auto px-6 py-24 bg-[#1C1C1F]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Restaurant Owners</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          See what our customers have to say about their experience with Rasoi
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-[#18181B] border-none">
            <CardContent className="p-6">
              <Quote className="h-8 w-8 text-[#ffdf90] mb-4" />
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

