import { Button } from "@/components/ui/button"
import { Stats } from "./stats"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Transform Your Restaurant with Digital Solutions
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg">
          Streamline your restaurant operations with our comprehensive digital suite - from QR menus to smart POS
          systems and AI-powered recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#ffdf90] hover:bg-[#ffdf90]/90 text-black text-lg px-8 py-6 rounded-full">
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            className="border-[#ffdf90] text-[#ffdf90] hover:bg-[#ffdf90]/10 text-lg px-8 py-6 rounded-full"
          >
            Book Demo
          </Button>
        </div>
        <Stats />
      </div>
      <div className="relative h-[400px] lg:h-[600px]">
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Restaurant management illustration"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}

