'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 bg-zinc-950/40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center font-bold text-[10px] text-white">
              RN
            </div>
            <span className="font-sans font-bold text-xs tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              RIMA NAURIN
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-sans mt-1">
            &copy; {currentYear} Rima Naurin. All rights reserved.
          </p>
        </div>

        {/* Center: System log note */}
        <p className="text-xs text-zinc-500 font-mono hidden md:block">
          // Building the future of AI & Analytics
        </p>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rimanaurin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-purple/50 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-colors clickable"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
          <a
            href="https://linkedin.com/in/rima-naurin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-blue/50 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-colors clickable"
            aria-label="LinkedIn"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="mailto:rima.naurin@example.com"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-purple/50 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-colors clickable"
            aria-label="Email"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
