import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111111] mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-medium"
          >
            Available 24/7. One call gets you help fast.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="w-full lg:w-5/12 space-y-6">
            <motion.a
              href="tel:+15597595650"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 bg-primary rounded-xl text-[#111111] hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 block group"
            >
              <div className="bg-[#111111] text-primary group-hover:bg-white group-hover:text-accent p-4 rounded-full transition-colors">
                <Phone className="w-8 h-8 fill-current" />
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-wider opacity-80 mb-1">
                  Call Us 24/7
                </div>
                <div className="font-heading font-extrabold text-xl md:text-2xl tracking-tight">
                  +1 (559) 759-5650
                </div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-6 p-8 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="bg-[#111111] text-white p-4 rounded-full">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-1">
                  Location
                </div>
                <div className="font-heading font-bold text-lg text-[#111111]">
                  California, USA
                </div>
                <div className="text-gray-600">
                  Serving major highways & cities
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 p-8 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="bg-[#111111] text-white p-4 rounded-full">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <div className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-1">
                  Hours
                </div>
                <div className="font-heading font-bold text-lg text-[#111111]">
                  24 Hours
                </div>
                <div className="text-gray-600">
                  7 Days a Week, 365 Days a Year
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 bg-[#1A1A1A] rounded-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            <h3 className="text-3xl font-heading font-bold text-white mb-8 uppercase tracking-wide relative z-10">
              Send a Message
            </h3>

            <form
              className="space-y-6 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="bg-[#222] border-gray-700 text-white focus:border-primary focus:ring-primary placeholder:text-gray-600 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-[#222] border-gray-700 text-white focus:border-primary focus:ring-primary placeholder:text-gray-600 h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Message / Location Details
                </label>
                <Textarea
                  placeholder="I need a tow from..."
                  className="bg-[#222] border-gray-700 text-white focus:border-primary focus:ring-primary placeholder:text-gray-600 min-h-[150px] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-[#111111] font-heading font-bold px-8 py-4 rounded-sm text-lg uppercase tracking-wider transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
