import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
              alt="Tow truck on the road"
              className="relative z-10 w-full h-auto object-cover rounded-xl shadow-2xl"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-[#111111] text-white p-6 rounded-xl shadow-xl hidden md:block border-l-4 border-primary">
              <div className="text-3xl font-heading font-extrabold text-primary mb-1">
                15+ Years
              </div>
              <div className="text-sm uppercase tracking-wider font-semibold text-gray-300">
                Of Trusted Service
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111111] mb-6">
              About Best Towing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are California's most trusted towing company, founded on a
              simple premise: reliability, speed, and honesty. When you're
              stranded on the side of the road, you don't just need a tow
              truck—you need a team that cares about getting you safely back on
              your way.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Fully Licensed & Insured Operators",
                "24/7 Emergency Service Availability",
                "Competitive & Transparent Rates",
                "Friendly, Professional Drivers",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+15597595650"
              className="inline-flex items-center gap-3 bg-[#111111] hover:bg-primary text-white hover:text-[#111111] font-heading font-bold px-8 py-4 rounded-sm text-lg uppercase tracking-wider transition-all transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
