'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Terminal, Database, Sparkles, Cpu, BarChart2, Blocks, 
  Settings, Table, Grid, Globe, Palette, Laptop, BookOpen, 
  GitBranch, Github, Layers, Award
} from 'lucide-react';

type Skill = {
  name: string;
  category: 'programming' | 'ai-ml' | 'web' | 'tools';
  proficiency: number; // percentage
  icon: React.ReactNode;
};

const skillsData: Skill[] = [
  // Programming
  { name: 'Python', category: 'programming', proficiency: 92, icon: <Terminal size={18} /> },
  { name: 'C', category: 'programming', proficiency: 75, icon: <Code size={18} /> },
  { name: 'Java', category: 'programming', proficiency: 80, icon: <Layers size={18} /> },
  { name: 'SQL', category: 'programming', proficiency: 85, icon: <Database size={18} /> },
  
  // AI / ML
  { name: 'Machine Learning', category: 'ai-ml', proficiency: 90, icon: <Sparkles size={18} /> },
  { name: 'Deep Learning', category: 'ai-ml', proficiency: 82, icon: <Cpu size={18} /> },
  { name: 'Data Analysis', category: 'ai-ml', proficiency: 88, icon: <BarChart2 size={18} /> },
  { name: 'TensorFlow', category: 'ai-ml', proficiency: 80, icon: <Blocks size={18} /> },
  { name: 'Scikit-learn', category: 'ai-ml', proficiency: 88, icon: <Settings size={18} /> },
  { name: 'Pandas', category: 'ai-ml', proficiency: 90, icon: <Table size={18} /> },
  { name: 'NumPy', category: 'ai-ml', proficiency: 88, icon: <Grid size={18} /> },
  
  // Web
  { name: 'HTML5', category: 'web', proficiency: 95, icon: <Globe size={18} /> },
  { name: 'CSS3', category: 'web', proficiency: 90, icon: <Palette size={18} /> },
  { name: 'JavaScript', category: 'web', proficiency: 85, icon: <Code size={18} /> },
  { name: 'React', category: 'web', proficiency: 80, icon: <Layers size={18} /> },
  { name: 'Tailwind CSS', category: 'web', proficiency: 88, icon: <Palette size={18} /> },
  
  // Tools
  { name: 'Git', category: 'tools', proficiency: 85, icon: <GitBranch size={18} /> },
  { name: 'GitHub', category: 'tools', proficiency: 90, icon: <Github size={18} /> },
  { name: 'VS Code', category: 'tools', proficiency: 92, icon: <Laptop size={18} /> },
  { name: 'Jupyter Notebook', category: 'tools', proficiency: 95, icon: <BookOpen size={18} /> },
];

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'programming', label: 'Programming' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'web', label: 'Web Dev' },
  { id: 'tools', label: 'Tools' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative grid-bg">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Award size={12} />
            My Capability
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Core Competencies &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              Tech Stack
            </span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 clickable ${
                activeCategory === category.id
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-zinc-200 border border-white/5 bg-white/5'
              }`}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl z-[-1]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-5 border border-white/5 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                    {skill.icon}
                  </div>
                  <span className="font-sans font-bold text-sm text-zinc-100 dark:text-zinc-100">
                    {skill.name}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  
                  {/* Skill bar track */}
                  <div className="h-1.5 w-full bg-white/10 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-brand-purple to-brand-blue rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
