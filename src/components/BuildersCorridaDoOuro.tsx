'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  FaMagnifyingGlass, 
  FaHouseChimney, 
  FaCrown, 
  FaHandshake,
  FaGoogle, 
  FaStar, 
  FaShieldHalved, 
  FaFilter, 
  FaMobileScreenButton, 
  FaCamera, 
  FaBullhorn, 
  FaCalendarCheck,
  FaArrowRight,
  FaArrowDown
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
        <div className="text-center mb-14 sm:mb-16 max-w-4xl px-4 flex flex-col items-center">
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

        {/* COMPONENTE MODERNO: O FUNIL VISUAL DA CORRIDA DO OURO */}
        <div className="w-full max-w-6xl mb-16 p-5 sm:p-7 lg:p-8 rounded-[36px] bg-gradient-to-b from-neutral-900/80 via-neutral-950/90 to-neutral-900/80 border border-neutral-800/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden">
          
          {/* Top Bar da Interface */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800/80 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-neutral-300">O Trajeto da Decisão Americana</span>
            </div>
            <span className="hidden sm:inline font-mono text-neutral-500 text-[11px]">Do Primeiro Clique ao Contrato Fechado</span>
          </div>

          {/* Grid dos 4 Módulos Visuais: Horizontal no Desktop, Vertical no Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5 relative">
            
            {/* ETAPA 01: A NECESSIDADE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-[28px] p-5 sm:p-6 bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/30 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase">Passo 01</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">O Gatilho</span>
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FaHouseChimney className="text-amber-400 text-xl" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">A Necessidade</h3>
                <p className="text-xs text-neutral-400 mt-1">Homeowner decide reformar</p>

                {/* Mock Visual: Orçamento Disponível */}
                <div className="mt-4 p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Budget Reservado</div>
                  <div className="text-sm font-black text-white mt-0.5">$ 35,000 – $ 85,000</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px]">
                <span className="text-neutral-400">Intenção:</span>
                <span className="font-bold text-amber-300">Imediata</span>
              </div>

              {/* Seta indicativa para desktop */}
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-900 border border-amber-400/30 items-center justify-center text-amber-400 text-[10px] shadow-md z-20 pointer-events-none">
                <FaArrowRight />
              </div>
            </motion.div>

            {/* Seta no mobile entre 1 e 2 */}
            <div className="lg:hidden flex justify-center py-0.5">
              <FaArrowDown className="text-amber-400/50 text-xs" />
            </div>

            {/* ETAPA 02: A BUSCA NO GOOGLE MAPS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="rounded-[28px] p-5 sm:p-6 bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/30 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase">Passo 02</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">Google Maps</span>
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FaGoogle className="text-blue-400 text-xl" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">A Pesquisa Local</h3>
                <p className="text-xs text-neutral-400 mt-1">Busca no Maps do celular</p>

                {/* Mock Visual: Barra de Busca */}
                <div className="mt-4 p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex items-center gap-2">
                  <FaMagnifyingGlass className="text-neutral-500 text-xs shrink-0" />
                  <span className="text-xs font-mono text-neutral-200 truncate">"remodeling near me"</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px]">
                <span className="text-neutral-400">Comportamento:</span>
                <span className="font-bold text-blue-400">84% no Top 3</span>
              </div>

              {/* Seta indicativa para desktop */}
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-900 border border-amber-400/30 items-center justify-center text-amber-400 text-[10px] shadow-md z-20 pointer-events-none">
                <FaArrowRight />
              </div>
            </motion.div>

            {/* Seta no mobile entre 2 e 3 */}
            <div className="lg:hidden flex justify-center py-0.5">
              <FaArrowDown className="text-amber-400/50 text-xs" />
            </div>

            {/* ETAPA 03: SUA EMPRESA NO TOP 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="rounded-[28px] p-5 sm:p-6 bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase">Passo 03</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">Posição #1</span>
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <FaCrown className="text-amber-400 text-xl" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">Sua Empresa no Top 1</h3>
                <p className="text-xs text-neutral-400 mt-1">A escolha imediata e óbvia</p>

                {/* Mock Visual: 5 Estrelas Google */}
                <div className="mt-4 p-3 rounded-2xl bg-neutral-950/80 border border-amber-400/20">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="font-bold text-white text-[11px] ml-1">5.0 (120+)</span>
                  </div>
                  <div className="text-[11px] font-semibold text-neutral-300 mt-1 truncate">Sua Construtora • Verificado</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px]">
                <span className="text-neutral-400">Concorrência:</span>
                <span className="font-bold text-amber-300">Ignorada</span>
              </div>

              {/* Seta indicativa para desktop */}
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-900 border border-amber-400/30 items-center justify-center text-amber-400 text-[10px] shadow-md z-20 pointer-events-none">
                <FaArrowRight />
              </div>
            </motion.div>

            {/* Seta no mobile entre 3 e 4 */}
            <div className="lg:hidden flex justify-center py-0.5">
              <FaArrowDown className="text-amber-400/50 text-xs" />
            </div>

            {/* ETAPA 04: O ESTIMATE & CONTRATO FECHADO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="rounded-[28px] p-5 sm:p-6 bg-gradient-to-b from-amber-950/35 via-neutral-900/90 to-neutral-950 border-2 border-amber-400/70 shadow-[0_0_35px_rgba(245,158,11,0.15)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-amber-300 uppercase">Passo 04</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-gradient-to-r from-amber-400 to-yellow-500 text-black">A Vitória</span>
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                  <FaHandshake className="text-black text-xl" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">Estimate Fechado</h3>
                <p className="text-xs text-amber-300/90 mt-1">100% de margem no seu bolso</p>

                {/* Mock Visual: Notificação de Fechamento */}
                <div className="mt-4 p-3 rounded-2xl bg-black/80 border border-emerald-500/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">Contrato Direto</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <div className="text-sm font-black text-white mt-0.5">$ 48,000 fechado</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-400/20 flex items-center justify-between text-[11px]">
                <span className="text-neutral-400">Comissão GC:</span>
                <span className="font-black text-emerald-400">$ 0 (Zero)</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Sub-Header: O que entregamos para você dominar a corrida */}
        <div className="text-center mb-8 px-4">
          <p className="text-amber-300/80 text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
            O que a Nivix entrega para sua construtora vencer a corrida:
          </p>
        </div>

        {/* Badges de Entregáveis */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mb-12 px-4">
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

        {/* Botão de Ação CTA */}
        <div className="text-center mb-16 px-4 w-full max-w-md">
          <motion.a 
            href="#form" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(255,180,0,0.35)] hover:shadow-[0_0_40px_rgba(255,180,0,0.55)] text-base sm:text-lg transition-all"
          >
            <span>Quero Vencer a Corrida na Minha Região</span>
            <FaArrowRight className="text-sm" />
          </motion.a>
        </div>

        {/* SOFT-BREAK (CONTINUIDADE DE SUB-SEÇÃO PARA NOSSAS VANTAGENS) */}
        <div className="w-full flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-800 to-amber-500/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse my-3"></div>
        </div>

      </div>
    </section>
  );
}
