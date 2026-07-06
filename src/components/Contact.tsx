'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background radial spotlight */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare size={12} />
            Connect
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              Touch
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="font-display font-bold text-2xl text-zinc-100 dark:text-zinc-100">
                Let's discuss intelligence.
              </h3>
              
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
                Whether you're looking to build machine learning models, analyze data patterns, or just talk neural networks, feel free to reach out.
              </p>

              {/* Direct channels list */}
              <div className="space-y-6">
                <a
                  href="mailto:rima.naurin@example.com"
                  className="flex items-center gap-4 group text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-purple/55 group-hover:bg-brand-purple/5 transition-all">
                    <Mail size={16} className="text-brand-purple" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Email</h4>
                    <p className="text-sm font-semibold">rima.naurin@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rima-naurin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/55 group-hover:bg-brand-blue/5 transition-all">
                    <Linkedin size={16} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">LinkedIn</h4>
                    <p className="text-sm font-semibold">linkedin.com/in/rima-naurin</p>
                  </div>
                </a>

                <a
                  href="https://github.com/rimanaurin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-violet-400/55 group-hover:bg-violet-400/5 transition-all">
                    <Github size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">GitHub</h4>
                    <p className="text-sm font-semibold">github.com/rimanaurin</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Location</h4>
                    <p className="text-sm font-semibold text-zinc-300">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-center">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center gap-4"
                >
                  <CheckCircle size={56} className="text-emerald-500 animate-bounce" />
                  <h3 className="font-display font-bold text-2xl text-zinc-100">Message Received!</h3>
                  <p className="text-sm text-zinc-400 max-w-xs">
                    Thank you. Your message has been sent successfully. I will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-zinc-400">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="John Doe"
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-brand-purple/50 focus:bg-brand-purple/5 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-zinc-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'sending'}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-brand-purple/50 focus:bg-brand-purple/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono text-zinc-400">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      placeholder="Opportunity / Collaboration"
                      className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-brand-purple/50 focus:bg-brand-purple/5 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-zinc-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'sending'}
                      rows={5}
                      placeholder="How can we collaborate?"
                      className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-brand-purple/50 focus:bg-brand-purple/5 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/20 transition-all disabled:opacity-50 clickable"
                  >
                    {status === 'sending' ? (
                      'Encrypting message...'
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
