"use client";
import React from "react";
import { motion } from "framer-motion";

const Header = ({ homeHref = "#" }: { homeHref?: string }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[86px] px-6 lg:px-12 mt-3 lg:mt-0 border-b border-white/5 bg-[#101010]/50 backdrop-blur-md z-[100] sticky top-0"
    >
      <nav className=" w-full h-full flex items-center justify-between xl:px-50">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-start w-full lg:w-fit"
        >
          <a href={homeHref}>
            <img src="/logo.png" alt="Logo Nivix" className="w-40 lg:w-34" />
          </a>
        </motion.div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center space-x-10 text-white">
          {[
            { name: "Resultados", href: "#depoimentos" },
            { name: "Ecossistema", href: "#ecossistema" },
            { name: "Planos", href: "#planos" },
            { name: "Sobre nós", href: "#time" },
            { name: "Dúvidas", href: "#FAQ" }
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <a href={item.href} className="hover:text-[#FFBE2E] transition-colors duration-300 text-sm font-medium tracking-wide">{item.name}</a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#form"
              className="bg-[#FFB400] hover:bg-yellow-400 transition-all duration-300 text-black px-12 py-2.5 rounded-xl font-bold text-sm shadow-[0_10px_20px_rgba(255,180,0,0.1)]"
            >
              Contrate
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
