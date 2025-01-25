"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          <a href="#features" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#testimonials" onClick={() => setOpen(false)}>
            Testimonials
          </a>
          <a href="#pricing" onClick={() => setOpen(false)}>
            Pricing
          </a>
          <Button className="bg-[#ffdf90] hover:bg-[#ffdf90]/90 text-black">Get Started</Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

