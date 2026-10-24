"use client";
import React, { useState, useEffect } from "react";
import { clients as defaultClients } from "../data/clientsData";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaArrowTrendUp, FaCrown, FaArrowRight } from "react-icons/fa6";
import { NicheConfig } from "@/data/niches";

export default function ClientsCarousel({ data }: { data?: NicheConfig["carousel"] }) {
  const clientsList = data?.clients || defaultClients;
  const initialCount = data?.activeClientsCount ?? 26;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientes, setClientes] = useState(initialCount);

  useEffect(() => {
    setClientes(initialCount);
    const timer = setTimeout(() => {
      setClientes(initialCount + 1);
    }, 40000); 
    return () => clearTimeout(timer);
  }, [initialCount]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientsList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientsList.length) % clientsList.length);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, clientsList.length]);

  // Handler para o gesto de drag
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      prevSlide();
    }
  };

  return (
    <section className="text-white bg-[#101010] w-full flex flex-col items-center pt-8 sm:pt-10 pb-20 select-none overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#FFB400]/5 blur-[120px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Header Padronizado */}
      <div className="mb-14 sm:mb-16 flex flex-col items-center px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2.5 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
        >
          <FaCrown className="text-amber-400 text-xs" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Atualmente com: <strong className="text-white tabular-nums">{clientes}</strong> Parceiros Ativos</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight leading-tight max-w-5xl"
        >
          {data?.titleLine1 || "De contractors autônomos a"}{" "}
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]">
            {data?.titleHighlight || "grandes construtoras nos EUA"}
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
        >
          {data?.subtitle || "Sem depender de Angi, HomeAdvisor ou sorte: brasileiros nos EUA confiaram na Nivix para escalar seus contratos."}
        </motion.p>
      </div>

      <div className="w-full relative flex flex-col items-center">
        
        {/* Carousel Window */}
        <div className="w-full max-w-7xl overflow-visible px-4">
          <div className="relative h-[560px] flex items-center justify-center">
            
            <AnimatePresence mode="popLayout" initial={false}>
              {clientsList.map((client, index) => {
                let position = index - currentIndex;
                if (position < -1) position += clientsList.length;
                if (position > (clientsList.length - 2)) position -= clientsList.length;
                if (position < -1 || position > 1) return null;

                const isCenter = position === 0;

                return (
                  <motion.div
                    key={client.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, scale: 0.8, x: position * 400 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.3,
                      scale: isCenter ? 1 : 0.8,
                      x: position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 320 : 450),
                      zIndex: isCenter ? 30 : 10,
                      filter: isCenter ? "blur(0px)" : "blur(2px)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className="absolute w-[88%] md:w-[420px] h-[510px] bg-neutral-900/70 border border-neutral-800 hover:border-amber-400/40 backdrop-blur-xl rounded-[32px] p-6 sm:p-7 flex flex-col items-center justify-between text-center cursor-grab active:cursor-grabbing shadow-2xl transition-colors duration-300"
                  >
                    <div className="relative w-full flex flex-col items-center">
                      <div className="absolute inset-0 bg-amber-400/5 blur-[20px] rounded-full"></div>
                      <div className="w-24 h-24 z-10 rounded-2xl bg-white p-2.5 border border-amber-400/25 shadow-xl flex items-center justify-center overflow-hidden">
                        <img
                          src={client.imagePath}
                          alt={client.companyName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl mt-5 font-bold text-white tracking-tight">{client.companyName}</h3>
                      <div className="mt-3 flex items-center justify-center gap-1.5 px-4 py-1.5 bg-amber-400/10 border border-amber-400/25 rounded-full">
                        <FaArrowTrendUp className="text-amber-400 text-xs shrink-0" />
                        <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                          {client.fireText}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 relative flex-grow flex items-center px-1">
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic font-normal line-clamp-6">
                        "{client.description}"
                      </p>
                    </div>
                    <div className="mt-4 w-12 h-0.5 bg-neutral-800 rounded-full"></div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Minimalist Controls */}
        <div className="flex flex-col items-center gap-8 mt-4">
           <div className="flex items-center gap-2">
              {clientsList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    i === currentIndex ? "bg-amber-400 w-8 shadow-[0_0_10px_rgba(255,180,0,0.5)]" : "bg-neutral-800 w-2.5 opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
           </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-12 px-4 w-full max-w-md">
            <motion.a 
              href="#form" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(255,180,0,0.35)] hover:shadow-[0_0_40px_rgba(255,180,0,0.55)] text-base sm:text-lg transition-all"
            >
              <span>Quero Escalar Minha Empresa</span>
              <FaArrowRight className="text-sm" />
            </motion.a>
        </div>

        {/* DIVISOR DE SEÇÃO - HARD DIVIDER (TRANSIÇÃO DE PROVA SOCIAL PARA A METODOLOGIA) */}
        <div className="w-full flex flex-col items-center mt-16 relative">
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-[1px] bg-gradient-to-b from-[#FFB400] to-transparent opacity-50"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-[#FFB400]/30 flex items-center justify-center my-4 shadow-[0_0_20px_rgba(255,180,0,0.2)] z-10"
            >
                <FaArrowTrendUp className="text-[#FFB400] text-sm" />
            </motion.div>
            <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent top-16 -z-0"
            />
        </div>
      </div>
    </section>
  );
}
