"use client";

import React from "react";
import { motion } from "framer-motion";
import { CaseItem } from "@/data/niches";

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

  return (
    <section id="depoimentos" className="w-full px-4 py-24 flex flex-col items-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#FFB40008,transparent_50%)] -z-10"></div>

      <div className="w-full lg:w-[85%] flex flex-col items-center">
        
        {/* Header da Seção */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white tracking-tight leading-tight"
          >
            {data?.title || "Viu como é simples?"} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.5)]">
              {data?.titleHighlight || "Agora veja com quem já tem resultados:"}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-2xl mt-4 max-w-3xl px-6 text-neutral-400 font-medium"
          >
            {data?.subtitle || (
              <>
                Pare de queimar dinheiro. Veja como nossos parceiros alcançaram <span className="text-white font-bold">lucro real e domínio total</span> do mercado.
              </>
            )}
          </motion.p>
        </div>

        {/* Bento Grid High-Authority com flutuação orgânica individual */}
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
                
                {/* Video / Image Layer */}
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
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                </div>

                {/* Top: Pill Badges */}
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

                {/* Bottom: Metric, Story and Subtitle */}
                <div className="relative z-20 space-y-1.5">
                  {item.metric && (
                    <div className="inline-block text-[#FFB400] text-xs sm:text-sm font-black uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-lg border border-[#FFB400]/30 shadow-md">
                      {item.metric}
                    </div>
                  )}
                  {item.story && (
                    <p className="text-neutral-300 text-xs sm:text-sm line-clamp-3 leading-relaxed italic">
                      "{item.story}"
                    </p>
                  )}
                  <p className="text-[#FFB400] text-[11px] font-bold uppercase tracking-[0.15em]">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

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
