import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Rasoi?",
    answer:
      "Rasoi is a comprehensive digital solution for restaurants, offering features like digital menus, smart POS systems, and AI-powered recommendations to streamline operations and enhance customer experience.",
  },
  {
    question: "How can Rasoi help my restaurant?",
    answer:
      "Rasoi can help your restaurant by digitizing your menu, optimizing your point of sale system, providing valuable insights through analytics, and enhancing customer engagement through personalized recommendations and marketing tools.",
  },
  {
    question: "Is Rasoi suitable for all types of restaurants?",
    answer:
      "Yes, Rasoi is designed to cater to various types of restaurants, from small cafes to large chains. Our flexible plans allow you to choose the features that best suit your needs.",
  },
  {
    question: "How difficult is it to implement Rasoi in my restaurant?",
    answer:
      "Implementing Rasoi is straightforward. Our team provides full support during the onboarding process, including staff training. Most restaurants can be up and running with Rasoi within a few days.",
  },
]

export function FAQSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

