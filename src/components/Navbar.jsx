"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Impact", href: "/impact" },
    { name: "Partners", href: "/partners" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-green-100"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-1.5 rounded-lg group-hover:rotate-[15deg] transition-transform duration-300">
            <Leaf className="text-white w-5 h-5" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-green-950">
            Greenify<span className="text-green-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-green-50/50 p-1 rounded-full border border-green-100/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-green-900/70 hover:text-green-700 hover:bg-white transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-green-200 active:scale-95">
            Join Movement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-green-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] flex flex-col p-8 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-green-950 hover:text-green-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-green-100" />
          <button className="bg-green-600 text-white w-full py-4 rounded-2xl font-bold text-lg">
            Join Movement
          </button>
        </div>
      </div>
    </nav>
  );
}
