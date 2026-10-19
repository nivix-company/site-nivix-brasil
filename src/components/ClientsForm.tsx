"use client";
import React, { useState, useEffect } from "react";
import { clients as defaultClients } from "../data/clientsData";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaArrowTrendUp } from "react-icons/fa6";
import { NicheConfig } from "@/data/niches";

export default function ClientsCarousel({ data }: { data?: NicheConfig["carousel"] }) {
  const clientsList = data?.clients || defaultClients;
  const initialCount = data?.activeClientsCount ?? 621;

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
    <section className="text-white bg-[#101010] w-full flex flex-col items-center py-24 select-none overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#FFB400]/5 blur-[120px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="mb-16 flex flex-col items-center px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center bg-neutral-900/50 border rounded-full px-4 py-2 border-[#FFB400]/30 text-[#FFB400] text-sm gap-3 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB400] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB400]"></span>
          </span>
          <p className="font-bold tracking-wide">Atualmente com: <span className="tabular-nums">{clientes}</span> Clientes Ativos</p>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          {data?.titleLine1 || "De pizzarias de bairro a"} <br className="hidden md:block" /> 
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.5)]">
            {data?.titleHighlight || "grandes franquias"}
          </span>
        </h2>
        <p className="text-lg md:text-2xl mt-4 text-neutral-400 max-w-2xl px-6">
          {data?.subtitle || "Sem depender de sorte, pessoas como você confiaram em nós para escalar sua operação."}
        </p>
      </div>

      <div className="w-full relative flex flex-col items-center">
        
        {/* Carousel Window */}
        <div className="w-full max-w-7xl overflow-visible px-4">
          <div className="relative h-[550px] flex items-center justify-center">
            
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
                    className="absolute w-[85%] md:w-[400px] h-[480px] bg-neutral-900/40 border-2 border-neutral-800/50 backdrop-blur-xl rounded-[40px] p-8 flex flex-col items-center justify-between text-center cursor-grab active:cursor-grabbing shadow-2xl"
                  >
                    <div className="relative w-full flex flex-col items-center">
                      <div className="absolute inset-0 bg-white/5 blur-[20px] rounded-full"></div>
                      <img
                        src={client.imagePath}
                        alt={client.companyName}
                        className="w-24 h-24 z-10 object-cover rounded-3xl border border-white/10 shadow-xl"
                      />
                      <h3 className="text-2xl mt-6 font-bold text-white tracking-tight">{client.companyName}</h3>
                      <div className="mt-4 flex items-center justify-center gap-2 px-4 py-1.5 bg-neutral-800/50 border border-neutral-700/30 rounded-full">
                        <FaFire className="text-[#FFB400] text-sm animate-pulse" />
                        <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#FFB400]">
                          A {client.fireText} Conosco
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-grow flex items-center">
                      <p className="text-neutral-300 text-sm md:text-base italic leading-relaxed font-medium">
                        "{client.description}"
                      </p>
                    </div>
                    <div className="mt-6 w-10 h-0.5 bg-neutral-800"></div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Minimalist Controls */}
        <div className="flex flex-col items-center gap-8 mt-4">
           <div className="flex gap-2">
              {clientsList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    i === currentIndex ? "bg-[#FFB400] w-6" : "bg-neutral-800 w-2 opacity-50"
                  }`}
                />
              ))}
           </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-12 px-4 w-full max-w-sm">
            <motion.a 
              href="#form" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold py-5 rounded-2xl shadow-[0_15px_40px_rgba(0,255,42,0.1)] text-lg"
            >
              Entrar em contato
            </motion.a>
        </div>

        {/* DIVISOR DE SEÇÃO - HARD DIVIDER (CLEAN & REFINED) */}
        <div className="w-full flex flex-col items-center mt-12 relative">
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 128 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-[1px] bg-gradient-to-b from-[#FFB400] to-transparent opacity-50"
            ></motion.div>
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
            ></motion.div>
        </div>
      </div>
    </section>
  );
}
