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
    <section id="google" className="w-full flex flex-col items-center relative scroll-mt-24">
      <div id="google-top1" className="absolute top-0 pointer-events-none scroll-mt-24"></div>
      {/* Glow de fundo */}
      <div className="absolute top-10 w-96 h-96 bg-amber-500/5 blur-[140px] -z-10 pointer-events-none"></div>

      {/* HEADER FORA DO CARD (PADRÃO DAS SEÇÕES ANTERIORES) */}
      <div className="text-center max-w-4xl mx-auto mb-14 px-4 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
        >
          <FaCrown className="text-amber-400 text-xs" />
          <span>Google Meu Negócio • Top 1 Garantido</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-white tracking-tight leading-tight"
        >
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight block sm:inline mb-1 sm:mb-0 mr-0 sm:mr-3 text-white">
            Garantimos
          </span>
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-200">
            você no{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] font-black">
              Top 1 do Google
            </span>
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-base sm:text-lg md:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
        >
          Ou você chega no topo do Google recebendo estimates toda semana,{" "}
          <span className="text-white font-bold underline decoration-amber-400/50 decoration-2 underline-offset-4">
            ou seu dinheiro de volta.
          </span>
        </motion.p>
      </div>

      {/* CONTAINER PRINCIPAL MINIMALISTA & DARK LUXURY (APENAS O CARD INTERATIVO) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Glow muito sutil e elegante em âmbar/dourado */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/5 blur-[120px] -z-10 pointer-events-none"></div>

        {/* GRID DE DUAS COLUNAS: GOOGLE TOP 1 + AGENDA MOTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ======================================================== */}
          {/* LADO 1: MOTION GOOGLE MEU NEGÓCIO NO TOP 1 (TOP 1 AO TOP 3) */}
          {/* ======================================================== */}
          <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div>
              {/* BARRA DE PESQUISA DO GOOGLE COM DIGITAÇÃO ANIMADA */}
              <div className="flex items-center gap-2.5 p-2.5 bg-black/60 border border-neutral-800 rounded-2xl mb-3.5">
                <FaGoogle className="text-white text-sm shrink-0 ml-1" />
                <div className="flex-1 flex items-center min-w-0">
                  <FaMagnifyingGlass className="text-neutral-500 text-xs mr-2 shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium font-mono truncate">
                    {displayedText}
                    <span className="animate-pulse text-amber-400 font-bold ml-0.5">|</span>
                  </span>
                </div>
              </div>

              {/* IDENTIFICAÇÃO DO GOOGLE MAPS / RESULTADOS LOCAIS */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2.5 px-1">
                <span className="flex items-center gap-1.5 font-semibold text-neutral-300">
                  <FaLocationDot className="text-amber-400" />
                  Empresas no Google Maps (Top 3)
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">Orlando & Região</span>
              </div>

              {/* STACK DOS PERFIS: TOP 1 ATÉ TOP 3 */}
              <div className="space-y-2.5">
                
                {/* 🥇 #1: SUA CONSTRUTORA (DESTAQUE ABSOLUTO DOURADO) */}
                <div className="p-3.5 sm:p-4 bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-amber-500/40 rounded-2xl relative shadow-[0_0_25px_rgba(245,158,11,0.1)]">
                  {/* Linha superior: #1 Dourado + Nome + Tag Top 1 */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 flex items-center justify-center text-black font-black text-[11px] shadow-sm shrink-0">
                        #1
                      </div>
                      <h4 className="text-white text-sm sm:text-base font-bold truncate">
                        Sua Construtora • General Contractor
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/25 px-2 py-0.5 rounded-full font-bold shrink-0">
                      <FaCrown className="text-[9px]" /> Top 1 Garantido
                    </span>
                  </div>

                  {/* Linha de avaliação: 5 Estrelas + 184 avaliações + Verificado */}
                  <div className="flex items-center gap-1.5 text-xs mb-2">
                    <div className="flex text-amber-400 text-[11px]">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-white font-bold text-xs">5.0</span>
                    <span className="text-neutral-400 text-[11px]">(184 reviews)</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-emerald-400 text-[11px] font-medium flex items-center gap-1">
                      <FaCheck className="text-[9px]" /> Verificado
                    </span>
                  </div>

                  {/* Detalhes de atendimento */}
                  <p className="text-[11px] text-neutral-400 mb-3 truncate">
                    📍 Orlando & Metrópole • <span className="text-emerald-400">Aberto</span> ⋅ Responde em minutos
                  </p>

                  {/* Botões de Ação Rápida */}
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/40 flex items-center justify-center gap-1.5 text-center text-neutral-200">
                      <FaPhone className="text-amber-400 text-[10px]" />
                      <span className="text-[10px] font-medium">Ligar</span>
                    </div>
                    <div className="py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/40 flex items-center justify-center gap-1.5 text-center text-neutral-200">
                      <FaRoute className="text-neutral-400 text-[10px]" />
                      <span className="text-[10px] font-medium">Rotas</span>
                    </div>
                    <div className="py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/40 flex items-center justify-center gap-1.5 text-center text-neutral-200">
                      <FaGlobe className="text-neutral-400 text-[10px]" />
                      <span className="text-[10px] font-medium">Website</span>
                    </div>
                    <div className="py-1.5 rounded-lg bg-amber-400/15 border border-amber-400/35 flex items-center justify-center gap-1.5 text-center text-amber-300 font-bold">
                      <FaCalendarCheck className="text-amber-400 text-[10px]" />
                      <span className="text-[10px]">Estimate</span>
                    </div>
                  </div>
                </div>

                {/* 🥈 #2: CONCORRENTE REALISTA LOCAL */}
                <div className="p-3 bg-neutral-900/40 border border-neutral-800/70 rounded-xl relative hover:border-neutral-700 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-5 h-5 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 font-bold text-[10px] shrink-0">
                        #2
                      </div>
                      <p className="text-neutral-300 text-xs sm:text-sm font-semibold truncate">
                        Apex Remodeling & Contractors LLC
                      </p>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono shrink-0">
                      Concorrente
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-1">
                    <div className="flex text-amber-400/70 text-[10px]">
                      <FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-neutral-300 font-medium">4.2</span>
                    <span className="text-neutral-500">(27 reviews)</span>
                    <span className="text-neutral-600">•</span>
                    <span>Fecha às 17:00</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1 border-t border-neutral-800/60">
                    <span>📍 Orlando, FL</span>
                    <span className="text-neutral-500">65% menos cliques que o #1</span>
                  </div>
                </div>

                {/* 🥉 #3: OUTRO CONCORRENTE REALISTA */}
                <div className="p-3 bg-neutral-900/30 border border-neutral-800/60 rounded-xl relative opacity-85">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-5 h-5 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 font-bold text-[10px] shrink-0">
                        #3
                      </div>
                      <p className="text-neutral-400 text-xs sm:text-sm font-medium truncate">
                        Central Florida Builders Group
                      </p>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono shrink-0">
                      Concorrente
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-1">
                    <div className="flex text-amber-400/60 text-[10px]">
                      <FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-neutral-400 font-medium">3.9</span>
                    <span className="text-neutral-500">(14 reviews)</span>
                    <span className="text-neutral-600">•</span>
                    <span>Kissimmee, FL</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1 border-t border-neutral-800/60">
                    <span>📍 Região Sul</span>
                    <span className="text-neutral-500">Quase sem ligações</span>
                  </div>
                </div>

              </div>
            </div>

            {/* RODAPÉ ESTILO GOOGLE MAPS */}
            <div className="pt-2 text-center border-t border-neutral-800/70">
              <span className="text-[11px] text-neutral-500 font-medium">
                Mais de 40 empresas locais disputam as posições invisíveis abaixo do Top 3
              </span>
            </div>
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
    </section>
  );
}
