"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseItem } from "@/data/niches";
import { FaCrown, FaLocationDot, FaCheck, FaArrowTrendUp } from "react-icons/fa6";

const defaultCases: CaseItem[] = [
  {
    id: 1,
    title: "Sabores da Vila",
    subtitle: "+147% em pedidos no 1º mês",
    videoSrc: "/SaboresDaVila.webm",
    poster: "/svlogo.jpeg",
    className: "md:col-span-2 md:row-span-2",
    floatDelay: 0,
  },
  {
    id: 2,
    title: "Pizzaria Don Giovanni",
    subtitle: "ROI 8x em anúncios",
    videoSrc: "", 
    poster: "/logo-n.png",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 1,
  },
  {
    id: 3,
    title: "Burger Elite HQ",
    subtitle: "Escala Vertical Validada",
    videoSrc: "",
    poster: "/logo-n.png",
    className: "md:col-span-1 md:row-span-2",
    floatDelay: 2,
  },
  {
    id: 4,
    title: "Texas Burger House",
    subtitle: "Domínio Regional",
    videoSrc: "",
    poster: "/logo-n.png",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 0.5,
  },
  {
    id: 5,
    title: "Sua Empresa Aqui",
    subtitle: "A próxima máquina de lucro",
    videoSrc: "",
    poster: "/logo-n.png",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 1.5,
  }
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

  return (
    <section id="depoimentos" className="w-full px-4 py-24 flex flex-col items-center relative overflow-hidden">
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
              {data?.titleHighlight || "na América"}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
          >
            {data?.subtitle || "Veja como brasileiros da construção escalaram suas empresas montando uma máquina de estimates com a Nivix, fazendo serviços particulares toda semana."}
          </motion.p>
        </div>

        {/* SE FOR CASES ESTRUTURADOS (BUILDERS): GRID 2X2 LUXURY LIMPO E ORGANIZADO */}
        {isRichCases ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            {cases.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="w-full bg-neutral-900/60 border border-neutral-800 rounded-[32px] overflow-hidden flex flex-col justify-between shadow-2xl hover:border-amber-400/40 transition-all duration-500 group"
              >
                {/* TOPO: FOTO DO PROJETO COM BADGES DISCRETOS E ELEGANTES */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-950">
                  <img 
                    src={item.poster || "/cases/case-kitchen.jpg"} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105" 
                    alt={item.title} 
                  />
                  {/* Gradiente sutil da imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-black/60" />

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
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4 bg-gradient-to-b from-neutral-950/90 to-neutral-900/90">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    {item.metric && (
                      <div className="mt-1.5 text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                        {item.metric}
                      </div>
                    )}
                  </div>

                  {/* História / Depoimento limpo e legível */}
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
            ))}
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
                        <img src="/logo-n.png" className="w-16 h-16 opacity-10 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700" alt="" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
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

        {/* Botão de Ação */}
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

        {/* SOFT-BREAK (APENAS CONTINUIDADE) */}
        <div className="mt-20 w-full flex flex-col items-center">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-[1px] bg-gradient-to-b from-neutral-800 to-[#FFB400] opacity-50"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-2 h-2 rounded-full bg-[#FFB400] shadow-[0_0_15px_#FFB400] animate-pulse my-4"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-[#FFB400] text-[10px] font-black uppercase tracking-[0.4em] opacity-40"
          >
            E tem muito mais...
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ClientVideos;
