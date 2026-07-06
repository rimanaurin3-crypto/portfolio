'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Brain, Cpu, Database } from 'lucide-react';

const words = ["AI Engineer", "Data Scientist", "Machine Learning Engineer"];

export default function Hero() {
  // Typing animation state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // Spotlight mouse effect
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { left, top } = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useEffect(() => {
    if (heroRef.current) {
      const target = heroRef.current;
      const updateMouse = (e: MouseEvent) => {
        const { left, top } = target.getBoundingClientRect();
        target.style.setProperty('--x', `${e.clientX - left}px`);
        target.style.setProperty('--y', `${e.clientY - top}px`);
      };
      target.addEventListener('mousemove', updateMouse);
      return () => target.removeEventListener('mousemove', updateMouse);
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg spotlight"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-purple/20 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-blob [animation-delay:4s] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            AI & Data Science Student @ KTU
          </motion.div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-violet-400 to-brand-blue font-extrabold block mt-2">
              Rima Naurin
            </span>
          </h1>

          {/* Subheading / Typing text */}
          <h2 className="font-sans font-semibold text-xl sm:text-2xl text-zinc-300 dark:text-zinc-300 min-h-[40px] mb-6 flex items-center">
            Designing systems as a&nbsp;
            <span className="text-brand-purple font-mono typing-cursor">{currentText}</span>
          </h2>

          {/* Brief Intro */}
          <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
            An undergraduate student specializing in Artificial Intelligence and Data Science. I bridge the gap between complex algorithms and practical applications, creating models that reveal insights and engineering clean, efficient pipelines.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-purple/20 transition-all cursor-pointer"
            >
              View Projects <ArrowRight size={16} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center justify-center gap-2 border border-white/10 dark:border-white/10 hover:border-brand-purple/50 bg-white/5 backdrop-blur-md font-semibold px-8 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              Contact Me <Mail size={16} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 text-sm text-zinc-400 hover:text-white font-medium py-3.5 sm:px-4 transition-colors"
            >
              <Download size={15} /> Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Orbital sphere */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center">
            {/* Spinning orbits */}
            <div className="absolute inset-0 border border-brand-purple/20 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-brand-blue/25 rounded-full animate-spin-slow [animation-direction:reverse] pointer-events-none" />
            <div className="absolute inset-10 border border-brand-purple/10 rounded-full animate-spin-slow [animation-duration:15s] pointer-events-none" />

            {/* Glowing neural center core */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 40px 10px rgba(139, 92, 246, 0.3)",
                  "0 0 60px 20px rgba(59, 130, 246, 0.4)",
                  "0 0 40px 10px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-32 h-32 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center shadow-2xl relative z-10"
            >
              <Brain size={48} className="text-white animate-pulse" />
            </motion.div>

            {/* Floating satellite nodes with icons */}
            {/* Node 1: CPU */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-2 left-10 w-12 h-12 rounded-xl bg-zinc-900/80 border border-brand-purple/40 backdrop-blur-md flex items-center justify-center text-brand-purple shadow-lg"
            >
              <Cpu size={20} />
            </motion.div>

            {/* Node 2: Database */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute bottom-6 right-8 w-12 h-12 rounded-xl bg-zinc-900/80 border border-brand-blue/40 backdrop-blur-md flex items-center justify-center text-brand-blue shadow-lg"
            >
              <Database size={20} />
            </motion.div>

            {/* Node 3: Coding Pill */}
            <motion.div
              animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
              className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-violet-500/30 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono font-medium text-violet-300 shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
              <span>model.fit()</span>
            </motion.div>

            {/* Node 4: Neural Pill */}
            <motion.div
              animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, delay: 0.2, ease: "easeInOut" }}
              className="absolute bottom-12 -left-4 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-blue-500/30 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono font-medium text-blue-300 shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span>data.parse()</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
