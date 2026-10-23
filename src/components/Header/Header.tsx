"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";

interface HeaderProps {
  homeHref?: string;
  niche?: string;
}

const defaultNavItems = [
  { name: "Resultados", href: "#depoimentos" },
  { name: "Ecossistema", href: "#ecossistema" },
  { name: "Planos", href: "#planos" },
  { name: "Sobre nós", href: "#time" },
  { name: "Dúvidas", href: "#FAQ" }
];

const buildersNavItems = [
  { name: "Resultados", href: "#depoimentos" },
  { name: "A Corrida do Ouro", href: "#metodo-corrida" },
  { name: "Vantagens", href: "#vantagens" },
  { name: "Dúvidas", href: "#FAQ" }
];

const Header = ({ homeHref = "#", niche }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isBuilders = niche === "builders";
  const navItems = isBuilders ? buildersNavItems : defaultNavItems;
  const ctaLabel = isBuilders ? "Diagnóstico" : "Contrate";

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[86px] px-6 lg:px-12 border-b border-white/5 bg-[#101010]/80 backdrop-blur-md z-[100] sticky top-0"
    >
      <nav className="w-full h-full flex items-center justify-between xl:px-16 2xl:px-24">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-start w-fit"
        >
          <a href={homeHref}>
            <img src="/logo.png" alt="Logo Nivix" className="w-36 lg:w-40" />
          </a>
        </motion.div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center space-x-10 text-white">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <a 
                href={item.href} 
                className="hover:text-[#FFBE2E] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#form"
              className="bg-[#FFB400] hover:bg-yellow-400 transition-all duration-300 text-black px-10 py-2.5 rounded-xl font-bold text-sm shadow-[0_10px_20px_rgba(255,180,0,0.15)] hover:shadow-[0_10px_25px_rgba(255,180,0,0.3)] hover:scale-[1.02]"
            >
              {ctaLabel}
            </a>
          </motion.li>
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-[86px] left-0 w-full bg-[#101010]/95 backdrop-blur-2xl border-b border-neutral-800 shadow-2xl px-6 py-6 flex flex-col space-y-4"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-amber-400 text-base font-semibold py-2 transition-colors border-b border-neutral-800/50"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#form"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FFB400] text-black text-center py-3.5 rounded-xl font-black text-sm shadow-[0_10px_20px_rgba(255,180,0,0.2)] mt-2"
            >
              {ctaLabel}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
