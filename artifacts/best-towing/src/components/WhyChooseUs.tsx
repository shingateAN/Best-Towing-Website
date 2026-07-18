import { motion } from "framer-motion";
import {
  Clock,
  Zap,
  ShieldCheck,
  DollarSign,
  Award,
  ThumbsUp,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Always on, day and night, including holidays",
  },
  {
    icon: Zap,
    title: "Fast Response Time",
    desc: "Average 20-minute arrival across California",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully certified, bonded, and insured operators",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Fair, transparent pricing with no hidden fees",
  },
  {
    icon: Award,
    title: "Experienced Drivers",
    desc: "15+ years of professional towing expertise",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    desc: "5-star rated by every customer we've served",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white mb-4"
          >
            Why Choose Best Towing?
          </motion.h2>
          <div className="w-24 h-1.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 bg-[#222222] rounded-xl hover:bg-[#2A2A2A] transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2 tracking-wide uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
