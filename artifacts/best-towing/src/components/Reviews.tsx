import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Michael Rodriguez",
    text: "My car broke down on I-5 at 2 AM. Best Towing was there in 20 minutes. The driver was incredibly professional and got me home safely. Highly recommend!",
    initials: "MR",
  },
  {
    name: "Sarah Chen",
    text: "Fastest towing service I've ever used. The dispatcher was friendly and the pricing was completely transparent with no hidden fees.",
    initials: "SC",
  },
  {
    name: "David Thompson",
    text: "Had a flat tire and didn't have a spare. They showed up quickly, loaded my truck with care, and took it to the nearest tire shop.",
    initials: "DT",
  },
  {
    name: "Maria Garcia",
    text: "Excellent service! The driver went above and beyond to make sure my family was safe while we waited for the tow. 5 stars all the way.",
    initials: "MG",
  },
  {
    name: "James Wilson",
    text: "Reliable, affordable, and professional. I run a delivery business and Best Towing is the only company I call when one of my vans has an issue.",
    initials: "JW",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-primary"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold text-lg ml-2">
              5.0 average
            </span>
            <span className="text-gray-400">from 5 reviews</span>
          </motion.div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-6 w-max">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-[350px] bg-[#1A1A1A] p-8 rounded-xl border border-gray-800 snap-center shrink-0 hover:border-primary/50 transition-colors"
              >
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic leading-relaxed min-h-[100px]">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={`https://ui-avatars.com/api/?name=${review.initials}&background=FFD400&color=111&font-size=0.4`}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-[#111111]"
                  />
                  <div>
                    <h4 className="text-white font-bold tracking-wide uppercase text-sm">
                      {review.name}
                    </h4>
                    <span className="text-gray-500 text-sm">
                      Verified Customer
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
