import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can you arrive?",
    a: "We pride ourselves on fast response times. On average, our drivers arrive within 20-30 minutes across our California service areas, depending on traffic and exact location.",
  },
  {
    q: "Do you provide roadside assistance?",
    a: "Yes, we offer comprehensive roadside assistance including jump-starts, tire changes, fuel delivery, and lockout services.",
  },
  {
    q: "Are you available 24/7?",
    a: "Absolutely. Emergencies don't run on a 9-to-5 schedule, and neither do we. We are available 24 hours a day, 7 days a week, including all holidays.",
  },
  {
    q: "How much does towing cost?",
    a: "Our rates are competitive and transparent. Costs vary depending on distance and the type of vehicle. Give us a call with your location for an immediate, exact quote with no hidden fees.",
  },
  {
    q: "Do you tow motorcycles?",
    a: "Yes, we have specialized equipment and trained operators for safe, secure motorcycle towing.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Best Towing is fully licensed, bonded, and insured in the state of California for your complete peace of mind.",
  },
  {
    q: "Do you service all of California?",
    a: "We cover a massive area in California. Call us to confirm we can reach your exact location quickly.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111111] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100 py-2"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-lg text-[#111111] hover:text-primary transition-colors uppercase tracking-wide">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
