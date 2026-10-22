'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  FaShieldHalved, 
  FaHandshake, 
  FaFilter, 
  FaArrowTrendUp, 
  FaCrown, 
  FaUsersGear,
  FaCheck,
  FaBan,
  FaCircleQuestion,
  FaArrowRight,
  FaSnowflake,
  FaSun,
  FaHammer,
  FaBolt
} from "react-icons/fa6";

export default function BuildersVantagens() {
  return (
    <section id="vantagens" className="relative flex flex-col items-center justify-center px-4 pt-12 sm:pt-16 pb-20 w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[600px] rounded-full bg-amber-500/5 blur-[160px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

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
            <span>O Padrão da Primeira Divisão</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight leading-tight max-w-5xl"
          >
            As vantagens de jogar na{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]">
              primeira divisão nos EUA
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
          >
            Não vendemos planos genéricos de anúncios. Construímos a infraestrutura que transforma construtores autônomos em referências regionais na América.
          </motion.p>
        </div>

        {/* BENTO GRID DA PRIMEIRA DIVISÃO (DESIGN MODERNO E PERSONALIZADO) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full mb-16">
          
          {/* MÓDULO 1: 100% MARGEM PRÓPRIA (ZERO GC) - DESTAQUE 7 COLS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-7 rounded-[32px] p-6 sm:p-8 bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/25">
                  100% Margem Própria
                </span>
                <span className="text-[11px] font-mono text-neutral-500">Adeus General Contractor</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <FaHandshake className="text-amber-400 text-lg" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Direto com o Homeowner (Zero GC)
                </h3>
              </div>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                Pare de deixar 30% a 50% do seu faturamento na mão de General Contractors. Ao ser a escolha direta do americano, você executa metade dos serviços e lucra o dobro.
              </p>

              {/* Comparador Visual de Margem */}
              <div className="p-4 rounded-2xl bg-black/60 border border-neutral-800/90 space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] mb-1.5 font-mono">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <FaBan className="text-red-400 text-[10px]" /> Subcontratado de GC:
                    </span>
                    <span className="text-neutral-500 line-through">$22,000 (Margem Cortada)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="w-[45%] h-full bg-neutral-600 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1.5 font-mono">
                    <span className="text-amber-300 font-bold flex items-center gap-1.5">
                      <FaCheck className="text-emerald-400 text-[10px]" /> Primeira Divisão Nivix:
                    </span>
                    <span className="text-emerald-400 font-bold">$48,000 (100% no seu bolso)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MÓDULO 2: LEADS EXCLUSIVOS (SEM LEILÃO) - 5 COLS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 rounded-[32px] p-6 sm:p-8 bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/25">
                  100% Exclusividade
                </span>
                <span className="text-[11px] font-mono text-neutral-500">Sem Angi / Thumbtack</span>
              </div>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <FaShieldHalved className="text-blue-400 text-lg" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Leads 100% Exclusivos
                </h3>
              </div>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                O homeowner liga diretamente para o seu telefone. Chega de disputar o mesmo lead com outros 5 concorrentes hispanos leiloando centavos.
              </p>

              {/* Visual Box: Leilão vs Exclusivo */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-black/60 border border-neutral-800/90 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded-xl bg-red-950/20 border border-red-500/20 text-neutral-400">
                  <span>Angi / Thumbtack:</span>
                  <span className="text-red-400 font-bold">1 Lead p/ 5 Concorrentes</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-neutral-200">
                  <span>Canal Privado Nivix:</span>
                  <span className="text-emerald-400 font-bold">1 Lead = Só a Sua Construtora</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MÓDULO 3: FILTRO ANTI-CURIOSOS - 4 COLS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-[32px] p-6 sm:p-7 bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  Anti Tire-Kickers
                </span>
                <FaFilter className="text-amber-400/70 text-xs" />
              </div>

              <div className="w-11 h-11 rounded-2xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FaFilter className="text-amber-400 text-base" />
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Filtro Anti-Curiosos
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-5">
                Chega de dirigir 45 minutos para fazer free-estimate em vão. Nosso funil qualifica e atrai apenas clientes com orçamento aprovado.
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <FaCheck className="text-[10px]" />
                <span>Budget Confirmado: &gt; $35,000</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <FaCheck className="text-[10px]" />
                <span>Homeowner Legítimo Verificado</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <FaBan className="text-red-400 text-[10px]" />
                <span>Curiosos & Bico: Bloqueados</span>
              </div>
            </div>
          </motion.div>

          {/* MÓDULO 4: PREVISIBILIDADE NO INVERNO - 4 COLS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-[32px] p-6 sm:p-7 bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  4 Estações Ativas
                </span>
                <FaArrowTrendUp className="text-cyan-400/70 text-xs" />
              </div>

              <div className="w-11 h-11 rounded-2xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FaArrowTrendUp className="text-cyan-400 text-base" />
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Previsibilidade o Ano Todo
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-5">
                Acabe com o desespero do inverno. Direcionamos as campanhas para projetos indoor (kitchens, basements, bathrooms), mantendo o faturamento contínuo.
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-[11px] font-mono">
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <FaSun className="text-xs" /> Verão / Primavera:
                </span>
                <span className="font-bold text-neutral-400">Decks & Exteriores</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <FaSnowflake className="text-xs" /> Inverno / Frio:
                </span>
                <span className="font-bold text-neutral-400">Kitchens & Basements</span>
              </div>
            </div>
          </motion.div>

          {/* MÓDULO 5: OPERAÇÃO HANDS-OFF (LADO A LADO) - 4 COLS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 rounded-[32px] p-6 sm:p-7 bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Zero Estresse Digital
                </span>
                <FaUsersGear className="text-purple-400/70 text-xs" />
              </div>

              <div className="w-11 h-11 rounded-2xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FaUsersGear className="text-purple-400 text-base" />
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Assessoria Total Lado a Lado
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-5">
                Você não precisa aprender marketing nem ficar na frente do computador. Cuidamos de 100% da engenharia digital enquanto você foca na execução da obra.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 text-[11px] font-mono space-y-1">
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <FaHammer className="text-xs text-amber-400" /> Sua Função:
                </span>
                <span className="font-bold text-white">Liderar a Obra</span>
              </div>
              <div className="flex items-center justify-between text-neutral-300">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <FaBolt className="text-xs text-amber-400" /> Time Nivix:
                </span>
                <span className="font-bold text-amber-300">Máquina 24/7 Ativa</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA Intermediário Padronizado */}
        <div className="text-center mb-16 px-4 w-full max-w-md">
          <motion.a 
            href="#form" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(255,180,0,0.35)] hover:shadow-[0_0_40px_rgba(255,180,0,0.55)] text-base sm:text-lg transition-all"
          >
            <span>Quero Jogar na Primeira Divisão</span>
            <FaArrowRight className="text-sm" />
          </motion.a>
        </div>

        {/* DIVISOR DE SEÇÃO - HARD DIVIDER (TRANSIÇÃO PARA O FAQ / DÚVIDAS) */}
        <div className="w-full flex flex-col items-center mt-8 relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 110 }}
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
            <FaCircleQuestion className="text-[#FFB400] text-sm" />
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent top-14 -z-0"
          />
        </div>

      </div>
    </section>
  );
}
