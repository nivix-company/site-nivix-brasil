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
  FaBullhorn, 
  FaCamera, 
  FaCalendarCheck,
  FaCheck,
  FaArrowRight
} from "react-icons/fa6";

const steps = [
  {
    step: "01",
    phase: "Fase 1 • O Gatilho",
    title: "A Necessidade Real",
    subtitle: "O Homeowner Decide Reformar",
    desc: "O americano olha para a cozinha antiga, o banheiro desgastado ou o telhado danificado e decide reformar. Ele tem entre $25,000 e $90,000+ de orçamento reservado e busca um serviço de confiança.",
    highlight: "Budget Aprovado • Alta Urgência",
    icon: <FaHouseChimney className="text-amber-400 text-lg" />,
    isFinal: false,
  },
  {
    step: "02",
    phase: "Fase 2 • A Busca Local",
    title: "Pesquisa no Google Maps",
    subtitle: "Busca de Alta Intenção",
    desc: "Ele pega o celular e digita no Google: '(Serviço) near me'. 84% ignoram anúncios comuns e plataformas como Angi, indo direto para os 3 primeiros colocados locais do Google Maps.",
    highlight: "84% Ignoram Plataformas de Leads",
    icon: <FaMagnifyingGlass className="text-amber-400 text-lg" />,
    isFinal: false,
  },
  {
    step: "03",
    phase: "Fase 3 • Autoridade Máxima",
    title: "Sua Empresa no Top 1",
    subtitle: "A Escolha Óbvia e Imediata",
    desc: "Sua construtora aparece em 1º lugar absoluto, blindada com 5 estrelas, fotos de obras de luxo e reviews impecáveis. Ele nem cogita descer para pesquisar concorrentes.",
    highlight: "Confiança Absoluta • Sem Concorrentes",
    icon: <FaCrown className="text-amber-400 text-lg" />,
    isFinal: false,
  },
  {
    step: "04",
    phase: "Fase 4 • A Vitória",
    title: "Estimate & Contrato Fechado",
    subtitle: "100% de Margem no Seu Bolso",
    desc: "O homeowner clica no botão e liga ou manda mensagem direto no seu WhatsApp. Você agenda a visita técnica e fecha a obra sem repassar comissão para General Contractor.",
    highlight: "Contrato Fechado • Margem Integral",
    icon: <FaHandshake className="text-black text-lg" />,
    isFinal: true,
  },
];

const deliverables = [
  { icon: <FaGoogle className="text-amber-400" />, label: "Google Meu Negócio Top 1" },
  { icon: <FaStar className="text-amber-400" />, label: "Sistema de Reviews Qualificadas" },
  { icon: <FaShieldHalved className="text-amber-400" />, label: "SEO Local & Domínio Regional" },
  { icon: <FaFilter className="text-amber-400" />, label: "Filtro Anti-Curiosos (Tire-Kickers)" },
  { icon: <FaMobileScreenButton className="text-amber-400" />, label: "Site Corporativo de Alta Conversão" },
  { icon: <FaCamera className="text-amber-400" />, label: "Portfólio & Fotos de Alto Padrão" },
  { icon: <FaBullhorn className="text-amber-400" />, label: "Tráfego Direto para Homeowners" },
  { icon: <FaCalendarCheck className="text-amber-400" />, label: "Esteira Previsível de Estimates" },
];

export default function BuildersCorridaDoOuro() {
  return (
    <section id="metodo-corrida" className="relative flex flex-col items-center justify-center px-4 pt-16 pb-20 w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[160px] -z-10 top-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>

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

        {/* TIMELINE DESKTOP: HORIZONTAL COM TRILHO DOURADO E CONECTORES */}
        <div className="hidden lg:block w-full relative mb-16">
          {/* Linha horizontal do trilho dourado passando por trás dos números */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/40 via-amber-400 to-yellow-400 z-0">
            <div className="absolute inset-0 bg-amber-400/30 blur-[3px]" />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 shadow-2xl relative group ${
                  item.isFinal
                    ? "bg-gradient-to-b from-amber-950/40 via-neutral-900/90 to-neutral-950 border-2 border-amber-400/80 shadow-[0_0_45px_rgba(245,158,11,0.2)]"
                    : "bg-neutral-900/60 border border-neutral-800 hover:border-amber-400/40"
                }`}
              >
                {/* Topo: Node / Marcador Numerado no Trilho */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-base shadow-xl transition-transform group-hover:scale-110 ${
                    item.isFinal
                      ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow-amber-500/40"
                      : "bg-neutral-950 border border-amber-400/40 text-amber-300"
                  }`}>
                    {item.step}
                  </div>

                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all ${
                    item.isFinal 
                      ? "bg-gradient-to-br from-amber-400 to-yellow-500 border-amber-400 shadow-md" 
                      : "bg-neutral-900/80 border-neutral-800 group-hover:border-amber-400/30"
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full inline-block mb-2 ${
                      item.isFinal
                        ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                        : "bg-neutral-800/80 text-neutral-400"
                    }`}>
                      {item.phase}
                    </span>
                    <h3 className="text-white text-xl font-bold tracking-tight group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-amber-400 text-xs font-semibold mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Badge de Status / Highlight */}
                  <div className="pt-4 border-t border-neutral-800/80 mt-4">
                    <span className={`text-[11px] font-bold inline-flex items-center gap-1.5 ${
                      item.isFinal ? "text-emerald-400" : "text-amber-300/90"
                    }`}>
                      <FaCheck className="text-[10px]" />
                      <span>{item.highlight}</span>
                    </span>
                  </div>
                </div>

                {/* Seta indicativa para o próximo passo no Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-neutral-900 border border-amber-400/40 items-center justify-center text-amber-400 text-xs shadow-md z-20 pointer-events-none group-hover:translate-x-1 transition-transform">
                    <FaArrowRight className="text-[10px]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIMELINE MOBILE: VERTICAL COM LINHA CONTÍNUA E NODES ILUMINADOS */}
        <div className="lg:hidden w-full relative mb-16 pl-6">
          {/* Linha vertical contínua conectando todos os passos */}
          <div className="absolute left-6 top-8 bottom-12 w-[2px] bg-gradient-to-b from-amber-400 via-yellow-400 to-amber-500 z-0">
            <div className="absolute inset-0 bg-amber-400/30 blur-[2px]" />
          </div>

          <div className="flex flex-col space-y-6 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-4"
              >
                {/* Node indicador sobre a linha vertical */}
                <div className={`-ml-6 w-12 h-12 rounded-full flex items-center justify-center font-mono font-black text-sm shrink-0 border-2 shadow-xl z-10 ${
                  item.isFinal
                    ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-black border-amber-200 shadow-amber-500/40"
                    : "bg-neutral-950 border-amber-400 text-amber-300"
                }`}>
                  {item.step}
                </div>

                {/* Card da etapa */}
                <div className={`flex-1 rounded-[28px] p-6 shadow-xl transition-all ${
                  item.isFinal
                    ? "bg-gradient-to-b from-amber-950/30 via-neutral-900/90 to-neutral-950 border-2 border-amber-400/70 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                    : "bg-neutral-900/70 border border-neutral-800"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                      item.isFinal
                        ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                        : "bg-neutral-800/80 text-neutral-400"
                    }`}>
                      {item.phase}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${
                      item.isFinal
                        ? "bg-amber-400 text-black border-amber-300"
                        : "bg-neutral-900/80 border-neutral-800 text-amber-400"
                    }`}>
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-white text-lg font-bold tracking-tight mt-1">
                    {item.title}
                  </h3>
                  <p className="text-amber-400 text-xs font-semibold mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-neutral-800/80 mt-3 flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                    <FaCheck className="text-[10px] text-emerald-400" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sub-Header: O que entregamos para você dominar a corrida */}
        <div className="text-center mb-8 px-4">
          <p className="text-amber-300/80 text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
            O que a Nivix entrega para sua construtora vencer a corrida:
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

        {/* SOFT-BREAK (CONTINUIDADE DE SUB-SEÇÃO PARA NOSSAS VANTAGENS) */}
        <div className="w-full flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-800 to-amber-500/30"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse my-3"></div>
        </div>

      </div>
    </section>
  );
}
