import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Vehicles Towed" },
  { value: 24, suffix: "/7", label: "Availability" },
  { value: 5, suffix: "★", label: "Customer Rating" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#111111] mb-2 tracking-tighter">
        {count}
        {suffix}
      </div>
      <div className="text-lg font-bold uppercase tracking-wider text-[#111111]/70">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
