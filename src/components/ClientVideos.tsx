"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseItem } from "@/data/niches";
import { 
  FaCrown, 
  FaLocationDot, 
  FaCheck, 
  FaArrowTrendUp, 
  FaArrowRight, 
  FaShieldHalved, 
  FaUsers,
  FaWhatsapp,
  FaMicrophone,
  FaMagnifyingGlassPlus,
  FaXmark,
  FaStar,
  FaGoogle
} from "react-icons/fa6";

const defaultCases: CaseItem[] = [
  {
    id: 1,
    title: "Gratto Pizzaria",
    subtitle: "Escala acelerada e explosão de novos pedidos",
    videoSrc: "",
    poster: "/grattopv.png",
    metric: "Case de Escala & Crescimento",
    location: "Passo Fundo, RS",
    className: "md:col-span-2 md:row-span-2",
    floatDelay: 0,
  },
  {
    id: 2,
    title: "Sabores da Vila",
    subtitle: "+147% em pedidos no 1º mês",
    videoSrc: "/SaboresDaVila.webm",
    poster: "/svlogo.jpeg",
    metric: "+147% Pedidos",
    location: "São Paulo, SP",
    className: "md:col-span-1 md:row-span-2",
    floatDelay: 1,
  },
  {
    id: 3,
    title: "Vellaro Pizzaria",
    subtitle: "De salão vazio a recorde de delivery",
    videoSrc: "/VellaroCase.webm",
    poster: "/vellarologo.jpeg",
    metric: "3 Anos de Parceria",
    location: "Campinas, SP",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 0.5,
  },
  {
    id: 4,
    title: "Gambito Bar",
    subtitle: "Posicionamento e delivery lucrativo",
    videoSrc: "",
    poster: "/gamblogo.jpg",
    metric: "Parceria Estratégica",
    location: "Farroupilha, RS",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 1.5,
  },
  {
    id: 5,
    title: "Anabela - Forno a Lenha",
    subtitle: "Consolidada como maior da região",
    videoSrc: "",
    poster: "/cases/case-anabela.jpg",
    metric: "4 Anos com a Nivix",
    location: "Curitiba, PR",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 2,
  },
];

interface ClientVideosProps {
  data?: {
    title?: string;
    titleHighlight?: string;
    subtitle?: string;
    items?: CaseItem[];
  };
}

const ClientVideos: React.FC<ClientVideosProps> = ({ data }) => {
  const cases = data?.items || defaultCases;
  const isRichCases = cases.some((c) => Boolean(c.story));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="cases" className="w-full px-4 pt-12 sm:pt-16 pb-0 flex flex-col items-center relative overflow-hidden scroll-mt-24">
      <div id="depoimentos" className="absolute top-0 pointer-events-none scroll-mt-24"></div>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#FFB40008,transparent_50%)] -z-10"></div>

      <div className="w-full lg:w-[85%] flex flex-col items-center">
        
        {/* Header da Seção Padronizado */}
        <div className="text-center mb-16 px-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
          >
            <FaCrown className="text-amber-400 text-xs" />
            <span>{isRichCases ? "Prova Social Real • Resultados Comprovados na América" : "Cases de Sucesso • Resultados Comprovados"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight leading-tight"
          >
            {data?.title || "Nossos Parceiros"}{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]">
              {data?.titleHighlight || "em Todo o Brasil"}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
          >
            {data?.subtitle || "Veja como empresas parceiras escalaram sua operação e dominaram o mercado com a assessoria da Nivix."}
          </motion.p>
        </div>

        {/* SE FOR CASES ESTRUTURADOS (BUILDERS): BENTO DESKTOP COM PROVA SOCIAL REAL E MOTIONS */}
        {isRichCases ? (
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8 w-full max-w-6xl">
            {cases.map((item, index) => {
              const isCtaCard = item.id === 5 || item.title.includes("Sua Construtora") || item.title.includes("Sua Empresa");

              // Card 5: LINHA 3 - CARD DO LEAD (FULL WIDTH, SLEEK & COMPACT)
              if (isCtaCard) {
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="w-full lg:col-span-6 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-950 border border-amber-400/40 hover:border-amber-400/70 rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between shadow-[0_0_35px_rgba(245,158,11,0.08)] transition-all duration-500 group"
                  >
                    {/* LATERAL ESQUERDA: FOTO LIMPA COM BADGES */}
                    <div className="relative w-full lg:w-[32%] h-56 sm:h-64 lg:h-auto min-h-[220px] overflow-hidden bg-neutral-950 shrink-0">
                      <img 
                        src={item.poster || "/flags-blend.jpg"} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                        alt={item.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-black/60 pointer-events-none" />

                      {/* Badges superiores */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10">
                        <span className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-neutral-200 text-xs px-3 py-1 rounded-full font-medium shadow-md">
                          <FaLocationDot className="text-amber-400 text-[11px]" />
                          <span>{item.location || "Flórida e Regiões dos EUA"}</span>
                        </span>
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs px-3 py-1 rounded-full font-black tracking-wide shadow-lg">
                          <FaCrown className="text-[11px]" />
                          <span>Vagas por Região</span>
                        </span>
                      </div>

                      {/* Tag inferior */}
                      <div className="absolute bottom-3 left-4 z-10">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-amber-300 bg-neutral-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30">
                          {item.subtitle || "Remodeling & Construction"}
                        </span>
                      </div>
                    </div>

                    {/* LADO DIREITO: CONTEÚDO ELEGANTE E PROPORCIONAL */}
                    <div className="w-full lg:w-[68%] p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-4 bg-gradient-to-b from-neutral-950/90 to-neutral-900/90">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/25 rounded-full px-3 py-0.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                            <FaCrown className="text-amber-400 text-[10px]" />
                            <span>Seu Futuro com a Nivix</span>
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight group-hover:text-amber-300 transition-colors">
                          Sua Empresa Aqui: Do Subcontrato ao Domínio Regional
                        </h3>
                        <div className="mt-1 text-lg sm:text-xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                          Estimates Semanais Direto no Seu WhatsApp
                        </div>
                      </div>

                      {/* História / Transformação do Lead */}
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                        <p className="text-neutral-300 text-sm leading-relaxed font-normal italic">
                          "Colocamos sua construtora no <strong className="text-amber-300 font-semibold not-italic">Top 1 do Google</strong> para receber estimates particulares toda semana com homeowners americanos, fechando contratos diretos sem depender de General Contractor e com <strong className="text-emerald-400 font-semibold not-italic">100% de margem própria</strong>."
                        </p>
                      </div>

                      {/* 3 Pilares compactos em linha */}
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 font-semibold text-[11px]">
                          <FaArrowTrendUp className="text-[10px]" /> Top 1 Google
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-[11px]">
                          <FaCheck className="text-[10px]" /> 100% Margem Própria
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 font-semibold text-[11px]">
                          <FaShieldHalved className="text-[10px]" /> 1 Construtora por Zip Code
                        </span>
                      </div>

                      {/* Rodapé CTA */}
                      <div className="pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                        <a 
                          href="#form" 
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(255,180,0,0.25)] hover:shadow-[0_0_30px_rgba(255,180,0,0.45)] transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                        >
                          <span>Quero Ser o Próximo Case na Minha Região</span>
                          <FaArrowRight className="text-xs" />
                        </a>

                        <span className="text-neutral-400 font-mono text-[11px] flex items-center gap-1.5 justify-center sm:justify-start">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Trava Territorial Ativa</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // CARDS 0, 1, 2, 3: PROVAS SOCIAIS REAIS COM CONVERSAS & MOTIONS
              const isFirstRowWide = index === 0;
              const colSpanClass = index === 0 
                ? "lg:col-span-4 lg:flex-row" 
                : index === 1 
                  ? "lg:col-span-2 flex-col" 
                  : "lg:col-span-3 flex-col";

              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className={`w-full ${colSpanClass} bg-neutral-900/60 border border-neutral-800 rounded-[32px] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400/50 transition-all duration-500 group`}
                >
                  {/* FOTO/PRINT DA CONVERSA & RANKING GOOGLE COM MOTIONS INTERATIVOS */}
                  <div 
                    onClick={() => item.poster && setSelectedImage(item.poster)}
                    className={`relative w-full ${isFirstRowWide ? "lg:w-[48%] h-72 sm:h-80 lg:h-auto min-h-[340px]" : "h-72 sm:h-80"} overflow-hidden bg-neutral-950 shrink-0 cursor-pointer select-none`}
                    title="Clique para ver a prova completa"
                  >
                    <img 
                      src={item.poster || "/cases/case-kitchen.jpg"} 
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100" 
                      alt={item.title} 
                    />
                    
                    {/* Gradiente sutil da imagem */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-black/60 pointer-events-none" />

                    {/* Badges superiores flutuantes */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                      {item.location && (
                        <span className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-neutral-200 text-xs px-3 py-1 rounded-full font-medium shadow-md">
                          <FaLocationDot className="text-amber-400 text-[11px]" />
                          <span className="truncate max-w-[150px]">{item.location}</span>
                        </span>
                      )}
                      
                      {/* Badge de ampliação / zoom */}
                      <span className="inline-flex items-center gap-1.5 bg-amber-400/90 text-black text-[11px] font-black px-2.5 py-1 rounded-full shadow-lg opacity-85 group-hover:opacity-100 transition-opacity">
                        <FaMagnifyingGlassPlus className="text-[10px]" />
                        <span>Ver Print</span>
                      </span>
                    </div>

                    {/* Tag de nicho/categoria */}
                    <div className="absolute top-12 left-3.5 z-10">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300 bg-neutral-950/85 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-amber-400/30">
                        {item.subtitle}
                      </span>
                    </div>

                    {/* MOTION: BALÃO ANIMADO DE CONVERSA DO WHATSAPP / AUDIO */}
                    {item.chatHighlight && (
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: (item.floatDelay || 0) * 0.5 }}
                        className="absolute bottom-3 inset-x-3 sm:bottom-3.5 sm:inset-x-3.5 z-20 bg-neutral-950/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-2.5 sm:p-3 shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-start gap-2.5 group-hover:border-emerald-400 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {item.isAudio ? (
                            <FaMicrophone className="text-emerald-400 text-xs animate-pulse" />
                          ) : (
                            <FaWhatsapp className="text-emerald-400 text-xs" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1 text-[10px]">
                            <span className="font-bold text-emerald-400 truncate">{item.chatAuthor || "Cliente Nivix"}</span>
                            <span className="font-mono text-[9px] text-neutral-400 shrink-0">{item.chatDetail || "WhatsApp VIP"}</span>
                          </div>
                          <p className="text-white text-xs font-semibold leading-snug mt-0.5 line-clamp-2">
                            "{item.chatHighlight}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* CORPO DO CARD: INFORMAÇÕES ORGANIZADAS E HIERARQUIA VISUAL CLARA */}
                  <div className={`p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4 bg-gradient-to-b from-neutral-950/90 to-neutral-900/90 ${
                    isFirstRowWide ? "lg:w-[52%] lg:p-8" : "w-full"
                  }`}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className={`font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors ${
                          isFirstRowWide ? "text-xl sm:text-2xl lg:text-3xl" : "text-xl sm:text-2xl"
                        }`}>
                          {item.title}
                        </h3>
                      </div>

                      {item.metric && (
                        <div className={`mt-1 font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-tight ${
                          isFirstRowWide ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl"
                        }`}>
                          {item.metric}
                        </div>
                      )}

                      {/* Google Ranking Badge */}
                      {item.googleRanking && (
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-[11px] font-semibold">
                          <FaGoogle className="text-[10px] text-blue-400" />
                          <span>{item.googleRanking}</span>
                        </div>
                      )}
                    </div>

                    {/* História / Depoimento limpo e legível */}
                    {item.story && (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal italic">
                          "{item.story}"
                        </p>
                      </div>
                    )}

                    {/* Rodapé: Entrega & Validação */}
                    <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        <FaCheck className="text-[10px]" />
                        <span>{item.badge || "Contratos Diretos"}</span>
                      </span>
                      <button
                        onClick={() => item.poster && setSelectedImage(item.poster)}
                        className="text-amber-400/90 hover:text-amber-300 font-mono text-[11px] flex items-center gap-1 transition-colors"
                      >
                        <span>Ver conversa real</span>
                        <FaArrowRight className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* BENTO GRID PADRÃO PARA OUTROS NICHOS (FOOD) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl auto-rows-[220px]">
            {cases.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ 
                  y: [0, -12, 0],
                }}
                transition={{ 
                  scale: { duration: 0.5 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.floatDelay || 0 }
                }}
                whileHover={{ scale: 1.02, zIndex: 50 }}
                className={`relative rounded-[40px] p-[1px] bg-gradient-to-br from-neutral-700/50 via-neutral-900/50 to-neutral-800 shadow-2xl overflow-hidden group 
                  ${item.className || "md:col-span-1 md:row-span-1"}
                `}
              >
                <div className="relative w-full h-full rounded-[39px] overflow-hidden bg-neutral-950/40 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-8">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    {item.videoSrc ? (
                      <video
                        controls
                        playsInline
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        src={item.videoSrc}
                        poster={item.poster}
                      />
                    ) : item.poster ? (
                      <img 
                        src={item.poster} 
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" 
                        alt={item.title} 
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-900/80 flex items-center justify-center">
                        <img src="/N-Amarelo.png" className="w-12 h-14 opacity-15 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700 object-contain" alt="" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
                  </div>

                  <div className="relative z-20 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00ff2a] animate-pulse"></span>
                      <p className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase truncate">
                        {item.title}
                      </p>
                    </div>
                    {item.location && (
                      <span className="text-[10px] text-neutral-300 font-mono bg-black/60 px-2.5 py-0.5 rounded-full border border-neutral-700/60 shrink-0">
                        {item.location}
                      </span>
                    )}
                  </div>

                  <div className="relative z-20 space-y-1.5">
                    {item.metric && (
                      <div className="inline-block text-[#FFB400] text-xs sm:text-sm font-black uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-lg border border-[#FFB400]/30 shadow-md">
                        {item.metric}
                      </div>
                    )}
                    <p className="text-[#FFB400] text-[11px] font-bold uppercase tracking-[0.15em]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Botão de Ação apenas para nichos food/padrão (builders já tem o CTA no card) */}
        {!isRichCases && (
          <motion.div className="mt-20 flex flex-col items-center">
            <motion.a 
              href="#form" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold px-20 py-5 rounded-2xl shadow-xl text-lg"
            >
              Quero esses resultados
            </motion.a>
          </motion.div>
        )}

        {/* SOFT-BREAK (CONTINUIDADE DE SUB-SEÇÃO: CASES -> CARROSSEL) */}
        <div className="mt-14 sm:mt-16 w-full flex flex-col items-center relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-[1px] bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-400/30 flex items-center justify-center my-3 shadow-[0_0_20px_rgba(255,180,0,0.2)] z-10"
          >
            <FaUsers className="text-amber-400 text-sm" />
          </motion.div>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-[1px] bg-gradient-to-b from-amber-400/20 to-transparent"
          />
        </div>
      </div>

      {/* LIGHTBOX MODAL: VISUALIZAÇÃO EM ALTA RESOLUÇÃO DAS CONVERSAS E RESULTADOS */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-4 sm:p-6 flex flex-col items-center justify-center cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-md w-full max-h-[92vh] bg-neutral-950 border border-neutral-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="px-5 py-3.5 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Comprovante Real • WhatsApp & Google</span>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label="Fechar"
                >
                  <FaXmark className="text-xs" />
                </button>
              </div>

              {/* Imagem do Print em Alta Resolução com Scroll Suave */}
              <div className="overflow-y-auto p-3 sm:p-4 bg-neutral-950 flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Conversa e Prova Social Completa" 
                  className="w-full h-auto max-h-[78vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Rodapé do Modal */}
              <div className="px-5 py-3 bg-neutral-900/70 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 shrink-0">
                <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                  <FaCheck className="text-[10px]" />
                  <span>Histórico Autêntico Nivix</span>
                </span>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientVideos;
