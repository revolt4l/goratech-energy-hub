import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { Zap } from "lucide-react";

// Animated SVG sun with rotating rays
const AnimatedSun = () => {
  const [angle, setAngle] = useState(0);
  useAnimationFrame((t) => setAngle(t * 0.025));

  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * 360 + angle;
    const rad = (a * Math.PI) / 180;
    const r1 = 38, r2 = 50;
    return {
      x1: 60 + r1 * Math.cos(rad),
      y1: 60 + r1 * Math.sin(rad),
      x2: 60 + r2 * Math.cos(rad),
      y2: 60 + r2 * Math.sin(rad),
    };
  });

  const pulseRings = [1, 2, 3];

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none pointer-events-none">
      <svg viewBox="0 0 120 120" className="w-48 h-48 sm:w-56 sm:h-56">
        {pulseRings.map((ring) => (
          <motion.circle
            key={ring}
            cx="60" cy="60"
            r={28 + ring * 10}
            fill="none"
            stroke="hsl(28 95% 60%)"
            strokeWidth="0.8"
            initial={{ opacity: 0.3, scale: 1 }}
            animate={{ opacity: [0.3, 0, 0.3], scale: [1, 1.15, 1] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: ring * 0.7,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />
        ))}

        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="hsl(43 95% 56%)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
        ))}

        <circle cx="60" cy="60" r="22" fill="hsl(28 95% 60% / 0.18)" />
        <circle cx="60" cy="60" r="16" fill="hsl(28 95% 60% / 0.35)" />
        <circle cx="60" cy="60" r="12" fill="hsl(43 95% 60%)" />
        <circle cx="60" cy="60" r="8" fill="hsl(28 95% 65%)" />
      </svg>

      <motion.div
        className="absolute bottom-4 right-4 text-orange-400"
        animate={{ y: [-4, 4, -4], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap className="h-6 w-6" fill="currentColor" />
      </motion.div>
    </div>
  );
};

export default AnimatedSun;
