import { Button } from "@/components/ui/button"
import { Features } from "./components/features"
import { Testimonials } from "./components/testimonials"
import { Pricing } from "./components/pricing"
import { Footer } from "./components/footer"
import { Stats } from "./components/stats"
import { UtensilsCrossed, QrCode, BarChart3, Megaphone } from "lucide-react"
import Image from "next/image"
import { HeroSection } from "./components/hero-section"
import { MobileMenu } from "./components/mobile-menu"
import { FAQSection } from "./components/faq-section"
import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-[#18181B]">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-[#ffdf90]" />
            <span className="text-2xl font-bold">Rasoi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-foreground/80">
              Features
            </a>
            <a href="#testimonials" className="text-foreground hover:text-foreground/80">
              Testimonials
            </a>
            <a href="#pricing" className="text-foreground hover:text-foreground/80">
              Pricing
            </a>
            <Button className="bg-[#ffdf90] hover:bg-[#ffdf90]/90 text-black">Get Started</Button>
            <ThemeToggle />
          </div>
          <MobileMenu />
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-6 pt-12 lg:pt-24">
          <HeroSection />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQSection />
          {/* CTA Section */}
          <section className="container mx-auto px-6 py-24">
            <div className="bg-card rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of restaurants already using Rasoi to streamline their operations and delight their
                customers.
              </p>
              <Button className="bg-[#ffdf90] hover:bg-[#ffdf90]/90 text-black text-lg px-8 py-6 rounded-full">
                Get Started Now
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

