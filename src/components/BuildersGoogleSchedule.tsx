'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGoogle, 
  FaMagnifyingGlass, 
  FaStar, 
  FaLocationDot, 
  FaPhone, 
  FaClock, 
  FaCrown,
  FaCheck,
  FaCalendarCheck,
  FaGlobe,
  FaRoute
} from "react-icons/fa6";

interface EstimateCard {
  id: string;
  timeLabel: string;
  service: string;
  value: string;
  homeowner: string;
  location: string;
  type: string;
}

const ALL_ESTIMATES: EstimateCard[] = [
  {
    id: "est-1",
    timeLabel: "Hoje • 09:30 AM",
    service: "Full Kitchen Remodel & Custom Island",
    value: "$ 48,000",
    homeowner: "Michael & Sarah S.",
    location: "Windermere, FL",
    type: "Visita Presencial",
  },
  {
    id: "est-2",
    timeLabel: "Hoje • 02:00 PM",
    service: "Master Bathroom Luxury Renovation",
    value: "$ 22,500",
    homeowner: "David R.",
    location: "Winter Garden, FL",
    type: "Visita Presencial",
  },
  {
    id: "est-3",
    timeLabel: "Amanhã • 10:00 AM",
    service: "Outdoor Kitchen & Travertine Pavers",
    value: "$ 38,000",
    homeowner: "Robert & Lisa K.",
    location: "Lake Nona, FL",
    type: "Projeto 3D + Estimate",
  },
  {
    id: "est-4",
    timeLabel: "Amanhã • 02:30 PM",
    service: "Complete Home Addition (Suite + Lanai)",
    value: "$ 75,000",
    homeowner: "William B.",
    location: "Winter Park, FL",
    type: "Visita Técnica",
  },
  {
    id: "est-5",
    timeLabel: "Quarta • 11:00 AM",
    service: "Pool Deck Pavers & Screen Enclosure",
    value: "$ 32,000",
    homeowner: "Anthony G.",
    location: "Celebration, FL",
    type: "Visita Presencial",
  },
  {
    id: "est-6",
    timeLabel: "Quarta • 03:30 PM",
    service: "Open Concept Wall Removal & Kitchen",
    value: "$ 42,000",
    homeowner: "Thomas & Jessica H.",
    location: "Windermere, FL",
    type: "Visita Técnica",
  },
  {
    id: "est-7",
    timeLabel: "Quinta • 09:30 AM",
    service: "Roof Replacement (Architectural Shingles)",
    value: "$ 26,500",
    homeowner: "James M.",
    location: "Clermont, FL",
    type: "Inspeção de Telhado",
  },
  {
    id: "est-8",
    timeLabel: "Quinta • 01:30 PM",
    service: "Whole House Flooring & Baseboards",
    value: "$ 16,800",
    homeowner: "Patricia L.",
    location: "Dr. Phillips, FL",
    type: "Medição no Local",
  },
];

const searchQueries = [
  "kitchen remodeling contractor near me",
  "general contractor in orlando fl",
  "licensed bathroom renovation near me",
  "best custom home builders near me"
];

export default function BuildersGoogleSchedule() {
  // Estado para a busca do Google (efeito de digitação)
  const [displayedText, setDisplayedText] = useState(searchQueries[0]);

  // Estado para a agenda com cards subindo continuamente
  const [estimateQueue, setEstimateQueue] = useState<EstimateCard[]>([
    ALL_ESTIMATES[0],
    ALL_ESTIMATES[1],
    ALL_ESTIMATES[2],
  ]);
  const [nextIndex, setNextIndex] = useState(3);
  const [lastBookedNotice, setLastBookedNotice] = useState<string>("Novo estimate agendado agora mesmo");

  // Efeito de digitação suave no Google Search
  useEffect(() => {
    let queryIdx = 0;
    const interval = setInterval(() => {
      queryIdx = (queryIdx + 1) % searchQueries.length;
      const target = searchQueries[queryIdx];
      let charIdx = 0;
      setDisplayedText("");

      const typing = setInterval(() => {
        if (charIdx <= target.length) {
          setDisplayedText(target.slice(0, charIdx));
          charIdx++;
        } else {
          clearInterval(typing);
        }
      }, 40);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Motion da agenda: novos estimates entrando por baixo e subindo suavemente
  useEffect(() => {
    const timer = setInterval(() => {
      setEstimateQueue((prev) => {
        const nextItem = ALL_ESTIMATES[nextIndex];
        setLastBookedNotice(`Novo estimate agendado: ${nextItem.service.slice(0, 24)}... (${nextItem.value})`);
        setNextIndex((curr) => (curr + 1) % ALL_ESTIMATES.length);
        // Remove o mais antigo do topo e insere o novo na base
        return [...prev.slice(1), nextItem];
      });
    }, 3800);

    return () => clearInterval(timer);
  }, [nextIndex]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* CONTAINER PRINCIPAL MINIMALISTA & DARK LUXURY */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden"
      >
        {/* Glow muito sutil e elegante em âmbar/dourado */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/5 blur-[120px] -z-10 pointer-events-none"></div>

        {/* HEADER: COPY LIMPA, DIRETA E SEM POLUIÇÃO */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
            <FaCrown className="text-amber-400 text-xs" />
            <span>Google Meu Negócio • Top 1 Garantido</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Garantimos você no{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Top 1 do Google
            </span>{" "}
            recebendo estimates toda semana.
          </h2>

          <p className="text-neutral-300 text-lg sm:text-xl font-semibold">
            Já imaginou sua agenda assim toda semana?{" "}
            <span className="text-neutral-400 font-normal text-base block mt-1">
              (Agenda lotada de estimates com homeowners qualificados buscando sua empresa)
            </span>
          </p>
        </div>

        {/* GRID DE DUAS COLUNAS: GOOGLE TOP 1 + AGENDA MOTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ======================================================== */}
          {/* LADO 1: MOTION GOOGLE MEU NEGÓCIO NO TOP 1 */}
          {/* ======================================================== */}
          <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              {/* BARRA DE PESQUISA DO GOOGLE */}
              <div className="flex items-center gap-3 p-3 bg-black/60 border border-neutral-800 rounded-2xl mb-5">
                <FaGoogle className="text-white text-base shrink-0 ml-1" />
                <div className="flex-1 flex items-center min-w-0">
                  <FaMagnifyingGlass className="text-neutral-500 text-xs mr-2 shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium font-mono truncate">
                    {displayedText}
                    <span className="animate-pulse text-amber-400 font-bold ml-0.5">|</span>
                  </span>
                </div>
              </div>

              {/* IDENTIFICAÇÃO DO GOOGLE MAPS / RESULTADOS LOCAIS */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-3 px-1">
                <span className="flex items-center gap-1.5">
                  <FaLocationDot className="text-amber-400" />
                  Google Meu Negócio • Empresas em Destaque
                </span>
                <span className="text-neutral-500">Perto de Orlando, FL</span>
              </div>

              {/* CARD #1: PERFIL DO GOOGLE MEU NEGÓCIO NO TOP 1 DOURADO */}
              <div className="p-5 bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-amber-500/30 rounded-2xl relative shadow-[0_0_30px_rgba(245,158,11,0.08)]">
                
                {/* TOPO COM EMBLEMA DOURADO #1 */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {/* Badge Dourado de #1 Lugar */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(245,158,11,0.35)] shrink-0">
                      #1
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] font-black uppercase tracking-wider">
                        <FaCrown className="text-[10px]" />
                        <span>Top 1 no Google Maps</span>
                      </div>
                      <h4 className="text-white text-base sm:text-lg font-bold leading-tight">
                        Sua Construtora • General Contractor
                      </h4>
                    </div>
                  </div>

                  {/* Selo sutil verificado */}
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium shrink-0">
                    <FaCheck className="text-[9px]" /> Verificado
                  </span>
                </div>

                {/* AVALIAÇÃO COM 5 ESTRELAS DOURADAS */}
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <div className="flex text-amber-400 text-xs">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="text-white font-bold">5.0</span>
                  <span className="text-neutral-400">(184 avaliações reais)</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-300">Empresa de Construção</span>
                </div>

                {/* INFORMAÇÕES DO PERFIL LOCAL */}
                <div className="space-y-1.5 text-xs text-neutral-400 py-3 border-y border-neutral-800/80">
                  <p className="flex items-center gap-2">
                    <FaLocationDot className="text-neutral-500 shrink-0 text-[11px]" />
                    <span>Atende toda a Região Metropolitana (Orlando & Cidades Vizinhas)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-neutral-500 shrink-0 text-[11px]" />
                    <span className="text-emerald-400 font-medium">Aberto agora</span>
                    <span className="text-neutral-500">⋅ Responde em menos de 15 minutos</span>
                  </p>
                  <p className="text-[11px] text-neutral-400 pt-1">
                    Serviços: <strong className="text-neutral-200">Kitchens, Bathrooms, Flooring, Additions & Roofing</strong>
                  </p>
                </div>

                {/* BOTÕES DE AÇÃO RÁPIDA (GOOGLE BUSINESS PROFILE) */}
                <div className="grid grid-cols-4 gap-2 pt-3">
                  <div className="py-2 px-1 rounded-xl bg-neutral-800/60 border border-neutral-700/40 flex flex-col items-center justify-center text-center">
                    <FaPhone className="text-amber-400 text-xs mb-1" />
                    <span className="text-[10px] text-white font-medium">Ligar</span>
                  </div>
                  <div className="py-2 px-1 rounded-xl bg-neutral-800/60 border border-neutral-700/40 flex flex-col items-center justify-center text-center">
                    <FaRoute className="text-neutral-300 text-xs mb-1" />
                    <span className="text-[10px] text-white font-medium">Rotas</span>
                  </div>
                  <div className="py-2 px-1 rounded-xl bg-neutral-800/60 border border-neutral-700/40 flex flex-col items-center justify-center text-center">
                    <FaGlobe className="text-neutral-300 text-xs mb-1" />
                    <span className="text-[10px] text-white font-medium">Website</span>
                  </div>
                  <div className="py-2 px-1 rounded-xl bg-amber-400/15 border border-amber-400/30 flex flex-col items-center justify-center text-center">
                    <FaCalendarCheck className="text-amber-400 text-xs mb-1" />
                    <span className="text-[10px] text-amber-300 font-bold">Estimate</span>
                  </div>
                </div>
              </div>

              {/* CONCORRENTE #2 ABAIXO (MINIMALISTA E ESMAECIDO) */}
              <div className="mt-3 p-3 bg-neutral-900/30 border border-neutral-800/50 rounded-xl flex items-center justify-between opacity-40 select-none">
                <div className="flex items-center gap-2.5">
                  <span className="text-neutral-500 font-bold text-xs">#2</span>
                  <div>
                    <p className="text-neutral-300 text-xs font-medium">Concorrente Local B</p>
                    <p className="text-neutral-500 text-[10px]">4.1 ★ (14 avaliações)</p>
                  </div>
                </div>
                <span className="text-[10px] text-neutral-500">80% menos visibilidade</span>
              </div>
            </div>

            {/* NOTA DE RODAPÉ DO BLOCO GOOGLE */}
            <p className="text-[11px] text-neutral-500 mt-4 text-center">
              Quem pesquisa no Google está com o dinheiro na mão pronto para iniciar a obra.
            </p>
          </div>

          {/* ======================================================== */}
          {/* LADO 2: MOTION DA AGENDA COM ESTIMATES SUBINDO SUAVEMENTE */}
          {/* ======================================================== */}
          <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              {/* TOPO DA AGENDA */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <FaCalendarCheck className="text-amber-400 text-sm" />
                  <span className="text-white text-sm font-bold tracking-tight">
                    Agenda Semanal de Estimates
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Recebendo ao vivo
                </span>
              </div>

              {/* FEED MOTION: CARDS SUBINDO SUAVEMENTE */}
              <div className="space-y-3 min-h-[300px] relative overflow-hidden flex flex-col justify-end">
                <AnimatePresence initial={false} mode="popLayout">
                  {estimateQueue.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 35, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -25, scale: 0.96 }}
                      transition={{ 
                        duration: 0.55, 
                        ease: [0.16, 1, 0.3, 1],
                        layout: { duration: 0.45, ease: "easeOut" }
                      }}
                      className="p-4 bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-2xl transition-colors shadow-sm"
                    >
                      {/* Linha superior: Horário e Status */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-neutral-400">
                          {item.timeLabel}
                        </span>
                        <span className="text-[10px] font-medium text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                          {item.type}
                        </span>
                      </div>

                      {/* Serviço e Valor de Alto Ticket */}
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-white text-sm font-semibold leading-snug">
                          {item.service}
                        </p>
                        <span className="text-amber-400 font-black text-base tabular-nums shrink-0">
                          {item.value}
                        </span>
                      </div>

                      {/* Localização e Homeowner */}
                      <div className="flex items-center gap-1.5 mt-2 text-[11px] text-neutral-400">
                        <FaLocationDot className="text-neutral-500 text-[10px]" />
                        <span>{item.location}</span>
                        <span className="text-neutral-600">•</span>
                        <span>{item.homeowner}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* AVISO DISCRETO DE NOVO ESTIMATE AGENDADO */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 truncate text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                <span className="truncate">{lastBookedNotice}</span>
              </span>
              <span className="text-[10px] text-neutral-500 font-mono shrink-0 pl-2">
                Atualizado ao vivo
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
