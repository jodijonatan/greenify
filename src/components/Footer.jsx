import React from "react";
import { Mail, Instagram, Twitter, Github, Leaf } from "lucide-react"; // Pastikan install lucide-react

export default function Footer() {
  return (
    <footer className="bg-[#052c22] text-green-50/90 pt-16 pb-8 border-t border-green-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-green-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Leaf className="text-white w-6 h-6" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Greenify
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs opacity-70">
              Transforming digital waste into meaningful action. <br />
              <span className="italic font-medium text-green-400">
                "Small steps, big impact."
              </span>
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Github} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Movement</h4>
            <ul className="space-y-4 text-sm font-medium">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Campaign</FooterLink>
              <FooterLink>Impact Stats</FooterLink>
              <FooterLink>Partner Program</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Layanan</h4>
            <ul className="space-y-4 text-sm font-medium">
              <FooterLink>Digital Cleanup</FooterLink>
              <FooterLink>Eco Products</FooterLink>
              <FooterLink>Workshop</FooterLink>
              <FooterLink>Consultation</FooterLink>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">Stay Sustainable</h4>
            <p className="text-sm mb-4 opacity-70">
              Dapatkan tips gaya hidup minim sampah digital tiap minggu.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email kamu..."
                className="w-full bg-green-900/40 border border-green-800 rounded-xl py-3 px-4 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all text-sm"
              />
              <button className="absolute right-2 top-1.5 bg-green-500 hover:bg-green-400 text-[#052c22] px-4 py-1.5 rounded-lg text-xs font-bold transition-colors">
                Gabung
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-green-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium opacity-50">
          <p>© 2026 Greenify Global. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-components untuk efisiensi & kerapihan
function FooterLink({ children }) {
  return (
    <li>
      <a
        href="#"
        className="hover:text-green-400 transition-all duration-300 flex items-center group"
      >
        <span className="w-0 group-hover:w-2 h-[1px] bg-green-400 mr-0 group-hover:mr-2 transition-all"></span>
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      className="p-2 bg-green-900/30 rounded-full hover:bg-green-500 hover:text-white transition-all transform hover:-translate-y-1"
    >
      <Icon size={18} />
    </a>
  );
}
