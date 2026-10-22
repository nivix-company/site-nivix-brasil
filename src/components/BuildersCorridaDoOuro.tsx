'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  FaGaugeHigh,
  FaGoogle, 
  FaCrown, 
  FaTrophy,
  FaFlagCheckered,
  FaStar,
  FaShieldHalved,
  FaFilter,
  FaMobileScreenButton,
  FaCamera,
  FaBullhorn,
  FaCalendarCheck,
  FaMagnifyingGlass,
  FaCheck
} from "react-icons/fa6";

const deliverables = [
  { icon: <FaGoogle className="text-amber-400" />, label: "Google Meu Negócio Top 1" },
  { icon: <FaStar className="text-amber-400" />, label: "Sistema de Reviews Qualificadas" },
  { icon: <FaShieldHalved className="text-amber-400" />, label: "SEO Local & Domínio Regional" },
  { icon: <FaFilter className="text-amber-400" />, label: "Filtro Anti-Curiosos" },
  { icon: <FaMobileScreenButton className="text-amber-400" />, label: "Site Corporativo de Alta Conversão" },
  { icon: <FaCamera className="text-amber-400" />, label: "Portfólio & Fotos de Alto Padrão" },
  { icon: <FaBullhorn className="text-amber-400" />, label: "Tráfego Direto para Homeowners" },
  { icon: <FaCalendarCheck className="text-amber-400" />, label: "Esteira Previsível de Estimates" },
];

export default function BuildersCorridaDoOuro() {
  return (
    <section id="metodo-corrida" className="relative flex flex-col items-center justify-center px-4 pt-16 pb-20 w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[600px] rounded-full bg-amber-500/5 blur-[160px] -z-10 top-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="w-full lg:w-[85%] max-w-6xl flex flex-col items-center">
        
        {/* Header da Seção Padronizado */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl px-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
          >
            <FaCrown className="text-amber-400 text-xs" />
            <span>A Jornada de Decisão Americana</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight leading-tight"
          >
            A Corrida do Ouro:{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]">
              como o americano escolhe você
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
          >
            Nós sabemos o trajeto exato que o homeowner faz desde o momento da necessidade até ligar para a sua empresa e fechar o contrato.
          </motion.p>
        </div>

        {/* CIRCUITO VISUAL DA CORRIDA (PISTA & CHECKPOINTS) */}
        <div className="w-full max-w-6xl mb-14 p-6 sm:p-8 lg:p-10 rounded-[36px] bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 border border-neutral-800/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
          
          {/* Telemetria / Barra de Pista Topo */}
          <div className="flex items-center justify-between pb-5 mb-8 border-b border-neutral-800/80 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-mono font-bold tracking-wider uppercase text-neutral-300 text-[11px] sm:text-xs">
                O Trajeto da Decisão Americana
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-[11px]">
              <FaGaugeHigh className="text-amber-400" />
              <span>Do Clique ao Contrato Fechado</span>
            </div>
          </div>

          {/* Grid dos 4 Checkpoints da Corrida com Pista Conectora */}
          <div className="relative">
            {/* Pista de corrida (Linha conectora horizontal luminosa no Desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400/80 to-amber-500/20 z-0 overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "500%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-full bg-gradient-to-r from-transparent via-amber-200 to-transparent blur-[1px]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              
              {/* CHECKPOINT 01: LARGADA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] p-6 bg-neutral-900/95 border border-neutral-800 hover:border-amber-400/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-800/80 text-neutral-400 group-hover:text-amber-300 transition-colors">
                      01 • Largada
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                  </div>

                  <motion.div 
                    animate={{ rotate: [-6, 10, -6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-4 group-hover:border-amber-400/40 group-hover:scale-105 transition-all"
                  >
                    <FaGaugeHigh className="text-emerald-400 text-lg" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white tracking-tight">O Gatilho</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Homeowner decide reformar com orçamento pronto.
                  </p>
                </div>

                {/* Motion Scenario Box 01 */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <motion.div 
                    animate={{ 
                      borderColor: ["rgba(38,38,38,0.9)", "rgba(16,185,129,0.5)", "rgba(38,38,38,0.9)"],
                      boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 16px rgba(16,185,129,0.18)", "0 0 0px rgba(16,185,129,0)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center relative overflow-hidden"
                  >
                    <motion.div 
                      animate={{ x: ["-100%", "220%"] }}
                      transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent skew-x-12 pointer-events-none"
                    />
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-[11px] font-mono font-bold text-neutral-200">
                        Budget: $35k – $85k
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* CHECKPOINT 02: O SPRINT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] p-6 bg-neutral-900/95 border border-neutral-800 hover:border-amber-400/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-800/80 text-neutral-400 group-hover:text-blue-400 transition-colors">
                      02 • O Sprint
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] animate-pulse"></span>
                  </div>

                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-4 group-hover:border-blue-400/40 group-hover:scale-105 transition-all"
                  >
                    <FaGoogle className="text-blue-400 text-lg" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white tracking-tight">A Disputa no Maps</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Pesquisa no celular. 84% ligam só para o Top 3.
                  </p>
                </div>

                {/* Motion Scenario Box 02 */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <motion.div 
                    animate={{ 
                      borderColor: ["rgba(38,38,38,0.9)", "rgba(96,165,250,0.5)", "rgba(38,38,38,0.9)"],
                      boxShadow: ["0 0 0px rgba(96,165,250,0)", "0 0 16px rgba(96,165,250,0.18)", "0 0 0px rgba(96,165,250,0)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                    className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center flex items-center justify-center gap-1.5 relative overflow-hidden"
                  >
                    <motion.span
                      animate={{ rotate: [0, 16, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaMagnifyingGlass className="text-blue-400 text-[10px]" />
                    </motion.span>
                    <span className="text-[11px] font-mono font-bold text-blue-300 flex items-center">
                      "contractor near me"
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-1 h-3 bg-blue-400 ml-1 rounded-sm"
                      />
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* CHECKPOINT 03: POLE POSITION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] p-6 bg-neutral-900/95 border border-neutral-800 hover:border-amber-400/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      03 • Pole Position
                    </span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse"></span>
                  </div>

                  <motion.div 
                    animate={{ y: [0, -4, 0], rotate: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,180,0,0.15)]"
                  >
                    <FaCrown className="text-amber-400 text-lg" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white tracking-tight">Liderança Isolada</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Sua empresa no Top 1. Concorrência ignorada.
                  </p>
                </div>

                {/* Motion Scenario Box 03 */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <motion.div 
                    animate={{ 
                      borderColor: ["rgba(245,158,11,0.25)", "rgba(245,158,11,0.7)", "rgba(245,158,11,0.25)"],
                      boxShadow: ["0 0 0px rgba(245,158,11,0)", "0 0 18px rgba(245,158,11,0.25)", "0 0 0px rgba(245,158,11,0)"]
                    }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                    className="p-2.5 rounded-xl bg-neutral-950/80 border border-amber-400/30 flex items-center justify-center gap-2 relative overflow-hidden"
                  >
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[0, 1, 2, 3, 4].map((starIdx) => (
                        <motion.span
                          key={starIdx}
                          animate={{ scale: [1, 1.25, 1], opacity: [0.75, 1, 0.75] }}
                          transition={{ 
                            duration: 1.6, 
                            repeat: Infinity, 
                            delay: starIdx * 0.18,
                            ease: "easeInOut" 
                          }}
                        >
                          <FaStar />
                        </motion.span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono font-black text-white">5.0 Top 1</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* CHECKPOINT 04: A BANDEIRADA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] p-6 bg-gradient-to-b from-amber-950/40 via-neutral-900 to-neutral-950 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm">
                      04 • Bandeirada
                    </span>
                    <motion.div
                      animate={{ rotate: [-8, 8, -8], scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaFlagCheckered className="text-amber-400 text-xs" />
                    </motion.div>
                  </div>

                  <motion.div 
                    animate={{ scale: [1, 1.06, 1], rotate: [-2, 2, -2] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-all"
                  >
                    <FaTrophy className="text-black text-lg" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white tracking-tight">Contrato Fechado</h3>
                  <p className="text-xs text-amber-300/90 mt-1 leading-relaxed">
                    100% no seu bolso. Sem General Contractor.
                  </p>
                </div>

                {/* Motion Scenario Box 04 */}
                <div className="mt-5 pt-4 border-t border-amber-400/30">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.02, 1],
                      borderColor: ["rgba(16,185,129,0.3)", "rgba(16,185,129,0.85)", "rgba(16,185,129,0.3)"],
                      boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 22px rgba(16,185,129,0.3)", "0 0 0px rgba(16,185,129,0)"]
                    }}
                    transition={{ duration: 2.6, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                    className="p-2.5 rounded-xl bg-black/90 border border-emerald-500/40 text-center relative overflow-hidden"
                  >
                    <motion.div 
                      animate={{ x: ["-100%", "220%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent skew-x-12 pointer-events-none"
                    />
                    <div className="flex items-center justify-center gap-1.5 px-1">
                      <motion.span
                        animate={{ rotate: [-6, 6, -6] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="shrink-0"
                      >
                        <FaCheck className="text-emerald-400 text-xs" />
                      </motion.span>
                      <span className="text-[10.5px] sm:text-[11px] font-mono font-black text-emerald-400 tracking-tight whitespace-nowrap">
                        100% do dinheiro no seu bolso
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Sub-Header: O que a Nivix faz para você vencer a corrida do ouro */}
        <div className="text-center mb-8 px-4">
          <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,180,0,0.35)]">
            O que a Nivix faz para você vencer a corrida do ouro:
          </p>
        </div>

        {/* Badges de Entregáveis */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mb-16 px-4">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ y: -3, borderColor: "rgba(245, 158, 11, 0.4)" }}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-900/60 border border-neutral-800 hover:border-amber-400/40 rounded-2xl text-xs font-semibold text-neutral-200 backdrop-blur-md transition-all shadow-sm group"
            >
              <span className="text-amber-400 text-sm group-hover:scale-110 transition-transform">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* SOFT-BREAK (CONTINUIDADE DE SUB-SEÇÃO) */}
        <div className="w-full flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-800 to-amber-500/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse my-3"></div>
        </div>

      </div>
    </section>
  );
}
