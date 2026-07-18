import { motion } from "framer-motion";
import { Phone, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100dvh] min-h-[600px] flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549317336-206569e8475c?w=1920&q=80"
          alt="Tow truck on highway at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 border border-red-500/30 px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            24/7 Emergency Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.1] tracking-tighter uppercase mb-6"
          >
            Fast, Reliable <br className="hidden md:block" />
            <span className="text-primary">24/7 Towing</span>
            <br />
            in California
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Professional towing services available anytime, anywhere in
            California. One call away.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <a
              href="tel:+15597595650"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary hover:bg-accent text-primary-foreground font-heading font-bold px-8 py-4 rounded-sm text-lg uppercase tracking-wider transition-all transform hover:scale-105"
            >
              <Phone className="w-6 h-6 fill-current" />
              Call Now
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-heading font-bold px-8 py-4 rounded-sm text-lg uppercase tracking-wider transition-colors"
            >
              Get Assistance
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl"
          >
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <div className="text-white font-medium">
              <span className="font-bold text-lg">5.0</span> Rating{" "}
              <span className="text-gray-400 mx-1">·</span> 5 Reviews
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
