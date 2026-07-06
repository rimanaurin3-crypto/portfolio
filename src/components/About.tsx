'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Code, ShieldAlert, GraduationCap, Flame } from 'lucide-react';

const focusAreas = [
  {
    icon: <Brain className="w-6 h-6 text-brand-purple" />,
    title: 'Machine Learning',
    description: 'Developing predictive algorithms and regression models. Experience with classical classifiers, clustering, and ensemble methods.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-brand-blue" />,
    title: 'Deep Learning',
    description: 'Studying neural networks, CNNs for computer vision, and recurrent systems for sequence analysis. Experimenting with PyTorch and TensorFlow.',
  },
  {
    icon: <Database className="w-6 h-6 text-violet-400" />,
    title: 'Data Science',
    description: 'Analyzing structured datasets, performing statistical analyses, and drawing insights. Passionate about storytelling with data.',
  },
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    title: 'Software Development',
    description: 'Engineering modular systems and clean code. Experienced in Python, Java, and modern web application frameworks like React.',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 16 } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Flame size={12} />
            My Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Decoding Challenges,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              Coding Solutions
            </span>
          </motion.h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="font-sans font-bold text-2xl text-zinc-100 dark:text-zinc-100">
              Passionate about bridging human curiosity and machine capability.
            </h3>
            
            <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am an undergraduate student pursuing a **B.Tech in Artificial Intelligence and Data Science** at APJ Abdul Kalam Technological University (KTU). From my first code compilation, I became fascinated by how raw data could be transformed into predictive models that solve complex, real-world problems.
            </p>
            
            <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My learning philosophy revolves around **continuous iteration and foundational depth**. I don't just import packages; I enjoy digging into the mathematical operations that drive backpropagation, loss optimization, and feature scaling. I believe in hands-on building—whether it's tuning hyperparameters or constructing responsive client architectures.
            </p>

            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Degree</h4>
                  <p className="text-sm font-bold text-zinc-200">B.Tech AI & Data Science</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">University</h4>
                  <p className="text-sm font-bold text-zinc-200">KTU Affiliate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Graphical Dashboard Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full glass-panel rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Header info */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <span className="text-xs font-mono text-zinc-400">rima-naurin ~ system-info</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* Simulated Specs */}
            <div className="space-y-4 font-mono text-sm text-zinc-400">
              <div className="flex justify-between">
                <span>Core Focus:</span>
                <span className="text-brand-purple font-semibold">AI Models & Analytics</span>
              </div>
              <div className="flex justify-between">
                <span>Preferred Stack:</span>
                <span className="text-brand-blue font-semibold">Python + PyTorch + React</span>
              </div>
              <div className="flex justify-between">
                <span>Mathematical Core:</span>
                <span className="text-zinc-200">Linear Algebra & Stats</span>
              </div>
              <div className="flex justify-between">
                <span>Learning Curve:</span>
                <span className="text-emerald-400">Exponential</span>
              </div>
            </div>

            {/* Decorative charts */}
            <div className="mt-6 pt-6 border-t border-white/5 flex gap-2 items-end h-16">
              {[40, 75, 55, 90, 60, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                  className="flex-1 bg-gradient-to-t from-brand-purple/40 to-brand-purple rounded-t-sm"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Focus Areas cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 flex items-center justify-center mb-5 border border-white/10">
                {area.icon}
              </div>
              <h4 className="font-display font-bold text-lg text-zinc-100 dark:text-zinc-100 mb-2">
                {area.title}
              </h4>
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
