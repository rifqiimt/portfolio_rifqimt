import React from 'react';
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-black text-white border-t-8 border-yellow-400">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-8 uppercase tracking-widest">Ready to Collaborate?</h2>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
                { icon: <Github size={20}/>, href: "https://github.com/rifqiimt" },
                { icon: <Instagram size={20}/>, href: "https://www.instagram.com/rifqiimt/" },
                { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/rifqiimt/" },
                { icon: <Mail size={20}/>, href: "mailto:tampengrifqmubarak@gmail.com" },
                { icon: <Phone size={20}/>, href: "https://wa.me/85214006701" }
            ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-12 h-12 bg-white text-black border-2 border-white flex items-center justify-center rounded hover:bg-black hover:text-white hover:border-white transition-colors">
                    {social.icon}
                </a>
            ))}
        </div>
        <div className="w-24 h-2 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-gray-400 text-xs sm:text-sm font-mono">© {new Date().getFullYear()} Rifqi Mubarak Tampeng. All rights reserved</p>
      </div>
    </footer>
  );
};