import { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-[#111111] hover:bg-[#222] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/15597595650"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <SiWhatsapp className="w-8 h-8" />
      </a>

      {/* Phone CTA */}
      <a
        href="tel:+15597595650"
        className="group relative w-16 h-16 bg-primary hover:bg-accent text-[#111111] hover:text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-40"></span>
        <Phone className="w-8 h-8 fill-current relative z-10" />
      </a>
    </div>
  );
}
