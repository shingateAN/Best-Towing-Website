import { Phone, MapPin, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="inline-block bg-primary text-[#111111] p-1.5 rounded-sm transform -skew-x-12">
              <h2 className="font-heading font-extrabold text-2xl tracking-tighter uppercase transform skew-x-12">
                Best<span className="text-white">Towing</span>
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Fast, reliable, and professional towing services available 24/7
              across California. We're always ready when you need us most.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#222] hover:bg-primary text-white hover:text-[#111111] rounded-full flex items-center justify-center transition-colors"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#222] hover:bg-primary text-white hover:text-[#111111] rounded-full flex items-center justify-center transition-colors"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#222] hover:bg-primary text-white hover:text-[#111111] rounded-full flex items-center justify-center transition-colors"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "Services", "About", "Reviews", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Emergency Towing",
                "Roadside Assistance",
                "Flat Tire Service",
                "Jump Start",
                "Battery Replacement",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-6">
              Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-[#222] p-2 rounded text-primary mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
                    24/7 Dispatch
                  </div>
                  <a
                    href="tel:+15597595650"
                    className="text-white hover:text-primary font-bold text-xl transition-colors"
                  >
                    +1 (559) 759-5650
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#222] p-2 rounded text-primary mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider font-semibold">
                    Service Area
                  </div>
                  <div className="text-white">California, USA</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Best Towing. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
