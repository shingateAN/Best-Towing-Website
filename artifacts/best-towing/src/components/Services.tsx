import { motion } from "framer-motion";
import {
  Truck,
  Wrench,
  CircleDashed,
  Zap,
  BatteryCharging,
  ShieldAlert,
  Anchor,
  Droplets,
  Bike,
  Bus,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Emergency Towing",
    desc: "Fast response for breakdowns anywhere in California",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    desc: "Battery, lockout, flat tire — we handle it all",
  },
  {
    icon: CircleDashed,
    title: "Flat Tire Service",
    desc: "Quick tire changes to get you rolling again",
  },
  {
    icon: Zap,
    title: "Jump Start",
    desc: "Dead battery? We'll get your engine running",
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    desc: "On-site battery replacement, fast and affordable",
  },
  {
    icon: ShieldAlert,
    title: "Vehicle Recovery",
    desc: "Off-road or accident recovery specialists",
  },
  {
    icon: Anchor,
    title: "Winch Out",
    desc: "Stuck vehicle? Our winch gets you free",
  },
  {
    icon: Droplets,
    title: "Fuel Delivery",
    desc: "Out of gas? We'll bring fuel to you",
  },
  {
    icon: Bike,
    title: "Motorcycle Towing",
    desc: "Specialized transport for bikes and motorcycles",
  },
  {
    icon: Bus,
    title: "Heavy Duty Towing",
    desc: "Commercial trucks, buses, and large vehicles",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-[#111111] mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-medium"
          >
            Everything you need, whenever you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-primary"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-7 h-7 text-[#111111] group-hover:text-[#111111]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#111111] mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
