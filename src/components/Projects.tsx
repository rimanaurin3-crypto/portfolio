'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

const projectsData: Project[] = [
  {
    title: "Brain Tumor Segmentation AI",
    description: "A deep learning clinical diagnostics platform employing 3D U-Net CNN architectures to detect, outline, and classify brain tumors from MRI scans with 98.4% validation accuracy.",
    image: "/project-1.png",
    tags: ["TensorFlow", "Keras", "Python", "OpenCV", "Flask"],
    github: "https://github.com/rimanaurin/brain-tumor-detection",
    demo: "#"
  },
  {
    title: "Predictive Churn Analytics Pipeline",
    description: "An end-to-end data pipeline analyzing telemetry. Implemented XGBoost and Random Forest algorithms with automated SMOTE sampling for handling highly skewed data distributions.",
    image: "/project-2.png",
    tags: ["Scikit-learn", "Pandas", "XGBoost", "FastAPI", "Docker"],
    github: "https://github.com/rimanaurin/telecom-churn-prediction",
    demo: "#"
  },
  {
    title: "Financial Sentiment NLP Engine",
    description: "Real-time streaming pipeline parsing transcripts and financial news. Employs fine-tuned BERT models and VADER lexicons to predict stock index sentiment changes.",
    image: "/project-3.png",
    tags: ["PyTorch", "HuggingFace", "Python", "Streamlit", "NLTK"],
    github: "https://github.com/rimanaurin/financial-sentiment-nlp",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Code2 size={12} />
            My Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Featured Engineering{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              Projects
            </span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full group"
            >
              {/* Image Header with Hover Scale */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-100 dark:text-zinc-100 mb-3 group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md border border-white/10 bg-white/5 text-zinc-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 border border-white/10 hover:border-brand-purple/50 bg-white/5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white transition-all clickable"
                    >
                      <Github size={14} /> Source
                    </a>
                    
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark py-2.5 rounded-xl text-xs font-semibold text-white transition-all clickable"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
