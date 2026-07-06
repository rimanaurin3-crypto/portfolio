'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';

type JourneyItem = {
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string[];
};

const journeyData: JourneyItem[] = [
  {
    type: 'experience',
    title: "Machine Learning Intern",
    subtitle: "AI Research & Analytics Lab",
    date: "Dec 2025 - Present",
    location: "Kochi, India",
    description: [
      "Collaborating on custom semantic search integrations using vector databases (Pinecone).",
      "Fine-tuning Sentence-Transformer models on domain-specific text corpora.",
      "Optimizing model inference time by 25% through quantization and ONNX conversions."
    ]
  },
  {
    type: 'experience',
    title: "Data Science Intern",
    subtitle: "Smart Solutions Co.",
    date: "June 2025 - Aug 2025",
    location: "Remote",
    description: [
      "Preprocessed messy transactional data using Pandas and NumPy, boosting pipeline efficiency.",
      "Performed exploratory data analysis (EDA) to locate key factors driving subscriber attrition.",
      "Built interactive Streamlit dashboards mapping real-time predictive classifications."
    ]
  },
  {
    type: 'education',
    title: "B.Tech in Artificial Intelligence & Data Science",
    subtitle: "APJ Abdul Kalam Technological University (KTU)",
    date: "2023 - 2027 (Expected)",
    location: "Kerala, India",
    description: [
      "Current CGPA: 9.1/10",
      "Relevant Coursework: Neural Networks, Probability & Statistics, Design & Analysis of Algorithms, Databases, Big Data.",
      "Active participant in University AI/ML hackathons and coding societies."
    ]
  }
];

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
};

const certificationsData: Certification[] = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "Nov 2025",
    link: "#"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow Network",
    date: "Aug 2025",
    link: "#"
  },
  {
    title: "Advanced Data Analytics Professional",
    issuer: "Google Career Certificates",
    date: "April 2025",
    link: "#"
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative grid-bg">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <GraduationCap size={12} />
            My Journey
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Education &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              Professional Path
            </span>
          </motion.h2>
        </div>

        {/* Education & Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Experience / Education Column */}
          <div className="lg:col-span-8 space-y-12">
            <h3 className="text-xl font-bold font-display text-zinc-100 flex items-center gap-2 mb-8">
              <Briefcase size={20} className="text-brand-purple" /> History & Studies
            </h3>

            <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-3 space-y-10">
              {journeyData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline point indicator */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-brand-purple group-hover:bg-brand-blue transition-colors flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover:bg-brand-blue animate-ping absolute" />
                  </span>

                  <div className="glass-panel p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:border-brand-purple/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-display font-bold text-lg text-zinc-100 dark:text-zinc-100">
                          {item.title}
                        </h4>
                        <p className="text-sm font-semibold text-brand-purple">
                          {item.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:items-end text-xs text-zinc-400 font-mono gap-1">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-sm text-zinc-400 font-sans pl-1">
                      {item.description.map((bullet, i) => (
                        <li key={i} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-xl font-bold font-display text-zinc-100 flex items-center gap-2 mb-8">
              <Award size={20} className="text-brand-blue" /> Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-5 rounded-2xl border border-white/5 flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-sans font-bold text-sm text-zinc-100 group-hover:text-brand-blue transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">{cert.issuer}</p>
                    <span className="inline-block text-[10px] text-zinc-500 font-mono mt-2 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {cert.date}
                    </span>
                  </div>
                  
                  <a
                    href={cert.link}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-brand-blue transition-all clickable"
                    aria-label="View credential details"
                  >
                    <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
