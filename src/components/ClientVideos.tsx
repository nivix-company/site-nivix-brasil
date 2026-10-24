"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseItem } from "@/data/niches";
import { FaCrown, FaLocationDot, FaCheck, FaArrowTrendUp, FaArrowRight, FaShieldHalved, FaUsers } from "react-icons/fa6";

const defaultCases: CaseItem[] = [
  {
    id: 1,
    title: "Gratto Pizzaria",
    subtitle: "Saindo de 20K para 50K faturados no período inicial",
    videoSrc: "",
    poster: "/grattopv.png",
    metric: "8 Meses com a Nivix",
    location: "Farroupilha, RS",
    className: "md:col-span-2 md:row-span-2",
    floatDelay: 0,
  },
  {
    id: 2,
    title: "Sabores da Vila",
    subtitle: "Salão cheio com previsibilidade e clientes fiéis",
    videoSrc: "/SaboresDaVila.webm",
    poster: "/svlogo.jpeg",
    metric: "10 Meses com a Nivix",
    location: "São Paulo, SP",
    className: "md:col-span-1 md:row-span-2",
    floatDelay: 1,
  },
  {
    id: 3,
    title: "Vellaro Pizzaria",
    subtitle: "Recorde de delivery e maior case da Nivix",
    videoSrc: "/VellaroCase.webm",
    poster: "/vellarologo.jpeg",
    metric: "3 Anos com a Nivix",
    location: "Campinas, SP",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 0.5,
  },
  {
    id: 4,
    title: "Gambito Bar",
    subtitle: "Estrutura social e delivery",
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
    subtitle: "Consolidada como maior pizzaria da cidade",
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
  const isRichCases = cases.some((c) => Boolean(c.story)) && !cases.some((c) => c.title.includes("Gratto") || c.title.includes("Sabores da Vila"));

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
            <span>Cases de Sucesso • Resultados Comprovados</span>
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

        {/* SE FOR CASES ESTRUTURADOS (BUILDERS): BENTO DESKTOP (L1: WIDE + COMPACT, L2: 50/50, L3: LEAD CARD ELEGANTE) */}
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

              // CARDS 0, 1, 2, 3: BENTO ELEGANTE E LIMPO
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
                  className={`w-full ${colSpanClass} bg-neutral-900/60 border border-neutral-800 rounded-[32px] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400/40 transition-all duration-500 group`}
                >
                  {/* FOTO DO PROJETO COM BADGES DISCRETOS E ELEGANTES */}
                  <div className={`relative w-full ${isFirstRowWide ? "lg:w-[46%] h-56 sm:h-64 lg:h-auto min-h-[280px]" : "h-56 sm:h-64"} overflow-hidden bg-neutral-950 shrink-0`}>
                    <img 
                      src={item.poster || "/cases/case-kitchen.jpg"} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105" 
                      alt={item.title} 
                    />
                    {/* Gradiente sutil da imagem */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-black/60 pointer-events-none" />

                    {/* Badges superiores flutuantes */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10">
                      {item.location && (
                        <span className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/10 text-neutral-200 text-xs px-3 py-1 rounded-full font-medium shadow-md">
                          <FaLocationDot className="text-amber-400 text-[11px]" />
                          <span>{item.location}</span>
                        </span>
                      )}
                      {item.subMetric && (
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs px-3 py-1 rounded-full font-black tracking-wide shadow-lg">
                          <FaArrowTrendUp className="text-[11px]" />
                          <span>{item.subMetric}</span>
                        </span>
                      )}
                    </div>

                    {/* Tag inferior na foto: Nicho / Categoria */}
                    <div className="absolute bottom-3 left-4 z-10">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-amber-300 bg-neutral-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* CORPO DO CARD: INFORMAÇÕES ORGANIZADAS E HIERARQUIA VISUAL CLARA */}
                  <div className={`p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4 bg-gradient-to-b from-neutral-950/90 to-neutral-900/90 ${
                    isFirstRowWide ? "lg:w-[54%] lg:p-8" : "w-full"
                  }`}>
                    <div>
                      <h3 className={`font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors ${
                        isFirstRowWide ? "text-xl sm:text-2xl lg:text-3xl" : "text-xl sm:text-2xl"
                      }`}>
                        {item.title}
                      </h3>
                      {item.metric && (
                        <div className={`mt-1.5 font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-tight ${
                          isFirstRowWide ? "text-2xl sm:text-3xl lg:text-4xl" : "text-2xl sm:text-3xl"
                        }`}>
                          {item.metric}
                        </div>
                      )}
                    </div>

                    {/* História / Resumo do ganho e parceria */}
                    {item.story && (
                      <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                        <p className="text-neutral-300 text-sm leading-relaxed font-normal italic">
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
                      <span className="text-neutral-500 font-mono text-[11px]">
                        Case Verificado Nivix
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* BENTO GRID PADRÃO PARA OUTROS NICHOS (FOOD) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl auto-rows-[220px]">
            {cases.map((item) => {
              const isGratto = item.title.includes("Gratto") || item.poster?.includes("gratto");

              return (
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
                  <div className={`relative w-full h-full rounded-[39px] overflow-hidden ${isGratto ? "bg-black" : "bg-neutral-950/40 backdrop-blur-3xl"} flex flex-col justify-between p-6 sm:p-8`}>
                    <div className={`absolute inset-0 z-0 overflow-hidden ${isGratto ? "bg-black flex items-center justify-center p-6" : ""}`}>
                      {item.videoSrc ? (
                        <video
                          controls
                          playsInline
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                          src={item.videoSrc}
                          poster={item.poster}
                        />
                      ) : item.poster ? (
                        isGratto ? (
                          <div className="w-full h-full bg-black flex items-center justify-center p-6">
                            <img 
                              src={item.poster} 
                              className="w-36 sm:w-44 max-h-36 sm:max-h-44 object-contain group-hover:scale-105 transition-all duration-700" 
                              alt={item.title} 
                            />
                          </div>
                        ) : (
                          <img 
                            src={item.poster} 
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" 
                            alt={item.title} 
                          />
                        )
                      ) : (
                        <div className="w-full h-full bg-neutral-900/80 flex items-center justify-center">
                          <img src="/N-Amarelo.png" className="w-12 h-14 opacity-15 grayscale group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-700 object-contain" alt="" />
                        </div>
                      )}
                      {!isGratto && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
                      )}
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
              );
            })}
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
    </section>
  );
};

export default ClientVideos;