'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Zap, Code, ShieldCheck } from 'lucide-react';

type Stat = {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  sub: string;
};

const statsData: Stat[] = [
  {
    icon: <Award className="w-5 h-5 text-brand-purple" />,
    value: 9.1,
    suffix: "",
    decimals: 1,
    label: "Academic CGPA",
    sub: "Top tier rank in AI curriculum"
  },
  {
    icon: <Code className="w-5 h-5 text-brand-blue" />,
    value: 12,
    suffix: "+",
    decimals: 0,
    label: "AI & ML Projects",
    sub: "End-to-end models built & deployed"
  },
  {
    icon: <Zap className="w-5 h-5 text-violet-400" />,
    value: 500,
    suffix: "+",
    decimals: 0,
    label: "LeetCode & Hackathons",
    sub: "Complex programming problems solved"
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    value: 3,
    suffix: "",
    decimals: 0,
    label: "Credentials & Honors",
    sub: "Industry recognized certifications"
  }
];

function CountUp({ value, suffix, decimals = 0, duration = 1.5 }: { value: number; suffix: string; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const totalFrames = duration * 60;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * (end - start) + start;
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="py-20 relative overflow-hidden bg-zinc-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid of stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between items-start text-left relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-xl pointer-events-none transition-transform duration-500 group-hover:scale-150" />
              
              {/* Header Icon */}
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-brand-purple/35 transition-all">
                {stat.icon}
              </div>

              {/* Number and Label */}
              <div>
                <div className="mb-2">
                  <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                
                <h4 className="font-sans font-bold text-base text-zinc-100 mb-1">
                  {stat.label}
                </h4>
                
                <p className="font-sans text-xs text-zinc-500">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
