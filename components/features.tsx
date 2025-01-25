import { QrCode, BarChart3, MessageSquare, Bell, Utensils, TrendingUp, Smartphone, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Digital Menu System",
      description:
        "Create and update QR-based digital menus instantly. Add photos, descriptions, and seasonal specials with ease.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Smart POS",
      description: "Streamline orders, payments, and inventory management with our intelligent point of sale system.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Recommendations",
      description:
        "Boost sales with AI-powered dish recommendations based on customer preferences and ordering patterns.",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Marketing Tools",
      description: "Engage customers with automated email campaigns, loyalty programs, and social media integration.",
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Kitchen Display",
      description: "Optimize kitchen operations with real-time order tracking and preparation timers.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics",
      description: "Make data-driven decisions with comprehensive reports on sales, inventory, and customer behavior.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App",
      description: "Manage your restaurant on the go with our powerful mobile application.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Staff Management",
      description: "Handle scheduling, permissions, and performance tracking all in one place.",
    },
  ]

  return (
    <section id="features" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Run Your Restaurant</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive tools and features designed specifically for the food service industry
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#1C1C1F] p-6 rounded-xl hover:bg-[#1C1C1F]/80 transition-colors">
            <div className="text-[#ffdf90] mb-4">{feature.icon}</div>
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

