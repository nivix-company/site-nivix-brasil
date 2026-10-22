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
  FaBolt,
  FaCheck
} from "react-icons/fa6";

const raceKit = [
  "Google Maps Top 1",
  "Tráfego Direto para Homeowners",
  "Reputação 5.0 Estrelas",
  "Filtro Anti-Curiosos",
  "Esteira Previsível de Estimates"
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
            <FaFlagCheckered className="text-amber-400 text-xs" />
            <span>Circuito de Decisão nos EUA</span>
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
        <div className="w-full max-w-6xl mb-12 p-6 sm:p-8 lg:p-10 rounded-[36px] bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 border border-neutral-800/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
          
          {/* Telemetria / Barra de Pista Topo */}
          <div className="flex items-center justify-between pb-5 mb-8 border-b border-neutral-800/80 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-mono font-bold tracking-wider uppercase text-neutral-300 text-[11px] sm:text-xs">
                Telemetria de Pista: Trajeto até o Contrato
              </span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 font-mono text-[11px]">
              <FaGaugeHigh className="text-amber-400" />
              <span>Decisão em Segundos</span>
            </div>
          </div>

          {/* Grid dos 4 Checkpoints da Corrida com Pista Conectora */}
          <div className="relative">
            {/* Pista de corrida (Linha conectora horizontal luminosa no Desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-12 right-12 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400/80 to-amber-500/20 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent blur-sm"></div>
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
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-4 group-hover:border-amber-400/40 group-hover:scale-105 transition-all">
                    <FaGaugeHigh className="text-emerald-400 text-lg" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">O Gatilho</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Homeowner decide reformar com orçamento pronto.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center">
                    <span className="text-[11px] font-mono font-bold text-neutral-300">
                      Budget: $35k – $85k
                    </span>
                  </div>
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
                    <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-4 group-hover:border-blue-400/40 group-hover:scale-105 transition-all">
                    <FaGoogle className="text-blue-400 text-lg" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">A Disputa no Maps</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Pesquisa no celular. 84% ligam só para o Top 3.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-center truncate">
                    <span className="text-[11px] font-mono font-bold text-blue-300">
                      "contractor near me"
                    </span>
                  </div>
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
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]"></span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <FaCrown className="text-amber-400 text-lg" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">Liderança Isolada</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Sua empresa no Top 1. Concorrência ignorada.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80">
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-amber-400/30 flex items-center justify-center gap-1.5">
                    <div className="flex text-amber-400 text-xs">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-white">5.0 Top 1</span>
                  </div>
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
                    <FaFlagCheckered className="text-amber-400 text-xs animate-bounce" />
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-all">
                    <FaTrophy className="text-black text-lg" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">Contrato Fechado</h3>
                  <p className="text-xs text-amber-300/90 mt-1 leading-relaxed">
                    100% no seu bolso. Sem General Contractor.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-amber-400/30">
                  <div className="p-2.5 rounded-xl bg-black/80 border border-emerald-500/40 text-center">
                    <span className="text-[11px] font-mono font-black text-emerald-400 uppercase tracking-wide">
                      $0 Comissão GC • 100% Seu
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* PIT STOP / O QUE ENTREGAMOS (ENXUTO E DIRETO) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mb-12 px-4">
          <span className="text-neutral-400 text-xs font-mono font-bold uppercase tracking-wider mr-1 sm:mr-2 flex items-center gap-1.5">
            <FaBolt className="text-amber-400 text-xs" /> O Seu Carro na Pista:
          </span>
          {raceKit.map((item, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-[11px] font-semibold"
            >
              <FaCheck className="text-amber-400 text-[10px]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Botão de Ação CTA Tematizado */}
        <div className="text-center mb-16 px-4 w-full max-w-md">
          <motion.a 
            href="#form" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(255,180,0,0.35)] hover:shadow-[0_0_40px_rgba(255,180,0,0.55)] text-base sm:text-lg transition-all"
          >
            <FaFlagCheckered className="text-black text-base" />
            <span>Colocar Minha Construtora na Pole Position</span>
          </motion.a>
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
