'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGoogle, 
  FaMagnifyingGlass, 
  FaCalendarCheck, 
  FaCalendarDays, 
  FaShieldHalved, 
  FaStar, 
  FaLocationDot, 
  FaClock, 
  FaCircleCheck, 
  FaPhone, 
  FaHouseChimney, 
  FaHammer, 
  FaBolt,
  FaArrowTrendUp
} from "react-icons/fa6";

interface Appointment {
  id: string;
  time: string;
  service: string;
  value: string;
  homeowner: string;
  location: string;
  tag: string;
  typeIcon: "kitchen" | "roof" | "bath" | "addition" | "pavers" | "flooring";
}

const weeklyScheduleData: Record<string, { label: string; count: number; pipeline: string; appointments: Appointment[] }> = {
  seg: {
    label: "Segunda-feira",
    count: 3,
    pipeline: "$82,000",
    appointments: [
      {
        id: "seg-1",
        time: "09:30 AM",
        service: "Full Kitchen Remodel & Custom Island",
        value: "$48,000",
        homeowner: "Michael & Sarah S.",
        location: "Windermere, FL",
        tag: "Estimate Presencial Confirmado",
        typeIcon: "kitchen",
      },
      {
        id: "seg-2",
        time: "01:30 PM",
        service: "Master Bathroom Luxury Renovation",
        value: "$22,000",
        homeowner: "David R.",
        location: "Winter Garden, FL",
        tag: "Visita Técnica Agendada",
        typeIcon: "bath",
      },
      {
        id: "seg-3",
        time: "04:00 PM",
        service: "Hardwood Flooring & Baseboards",
        value: "$12,000",
        homeowner: "Patricia L.",
        location: "Dr. Phillips, FL",
        tag: "Medição no Local",
        typeIcon: "flooring",
      },
    ],
  },
  ter: {
    label: "Terça-feira",
    count: 2,
    pipeline: "$56,000",
    appointments: [
      {
        id: "ter-1",
        time: "10:00 AM",
        service: "Outdoor Kitchen & Travertine Pavers",
        value: "$38,000",
        homeowner: "Robert & Lisa K.",
        location: "Lake Nona, FL",
        tag: "Projeto 3D + Estimate",
        typeIcon: "pavers",
      },
      {
        id: "ter-2",
        time: "02:30 PM",
        service: "Roof Replacement (Architectural Shingles)",
        value: "$18,000",
        homeowner: "James M.",
        location: "Clermont, FL",
        tag: "Inspeção de Telhado",
        typeIcon: "roof",
      },
    ],
  },
  qua: {
    label: "Quarta-feira",
    count: 3,
    pipeline: "$114,000",
    appointments: [
      {
        id: "qua-1",
        time: "09:00 AM",
        service: "Complete Home Addition (Master Suite + Lanai)",
        value: "$75,000",
        homeowner: "William & Emily B.",
        location: "Winter Park, FL",
        tag: "Planta Aprovada • Estimate Final",
        typeIcon: "addition",
      },
      {
        id: "qua-2",
        time: "01:00 PM",
        service: "Kitchen Cabinet Refacing & Quartz",
        value: "$24,000",
        homeowner: "Carlos E.",
        location: "Kissimmee, FL",
        tag: "Amostras no Local",
        typeIcon: "kitchen",
      },
      {
        id: "qua-3",
        time: "04:30 PM",
        service: "Guest Bath & Walk-in Shower",
        value: "$15,000",
        homeowner: "Jennifer W.",
        location: "Oviedo, FL",
        tag: "Visita Técnica",
        typeIcon: "bath",
      },
    ],
  },
  qui: {
    label: "Quinta-feira",
    count: 3,
    pipeline: "$68,500",
    appointments: [
      {
        id: "qui-1",
        time: "10:30 AM",
        service: "Pool Deck Pavers & Screen Enclosure",
        value: "$32,000",
        homeowner: "Anthony G.",
        location: "Celebration, FL",
        tag: "Estimate Presencial Confirmado",
        typeIcon: "pavers",
      },
      {
        id: "qui-2",
        time: "02:00 PM",
        service: "Whole House Interior Painting & Trim",
        value: "$14,500",
        homeowner: "Amanda C.",
        location: "Altamonte Springs, FL",
        tag: "Medição de Metragem",
        typeIcon: "flooring",
      },
      {
        id: "qui-3",
        time: "04:45 PM",
        service: "Commercial Roofing Repair & Coat",
        value: "$22,000",
        homeowner: "Mark D.",
        location: "Orlando, FL",
        tag: "Laudo Técnico",
        typeIcon: "roof",
      },
    ],
  },
  sex: {
    label: "Sexta-feira",
    count: 2,
    pipeline: "$52,000",
    appointments: [
      {
        id: "sex-1",
        time: "09:30 AM",
        service: "Open Concept Wall Removal & Kitchen Expansion",
        value: "$38,000",
        homeowner: "Thomas & Jessica H.",
        location: "Windermere, FL",
        tag: "Engenheiro + Visita Técnica",
        typeIcon: "addition",
      },
      {
        id: "sex-2",
        time: "01:30 PM",
        service: "Double Vanity Bath Remodel",
        value: "$14,000",
        homeowner: "Kevin N.",
        location: "Sanford, FL",
        tag: "Apresentação de Orçamento",
        typeIcon: "bath",
      },
    ],
  },
  sab: {
    label: "Sábado",
    count: 1,
    pipeline: "$45,000",
    appointments: [
      {
        id: "sab-1",
        time: "10:00 AM",
        service: "Custom Patio Cover & Outdoor Fireplace",
        value: "$45,000",
        homeowner: "Brian S.",
        location: "Lake Nona, FL",
        tag: "Estimate Presencial VIP",
        typeIcon: "pavers",
      },
    ],
  },
};

const searchQueries = [
  "kitchen remodeling contractor near me",
  "luxury custom home builder estimates",
  "licensed bathroom renovation orlando",
  "roof replacement quote top rated"
];

export default function BuildersGoogleSchedule() {
  const [activeDay, setActiveDay] = useState<string>("seg");
  const [queryIndex, setQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(searchQueries[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [toastNotification, setToastNotification] = useState<{
    show: boolean;
    name: string;
    city: string;
    job: string;
    value: string;
  }>({
    show: true,
    name: "Michael S.",
    city: "Windermere, FL",
    job: "Kitchen Remodel",
    value: "$48,000",
  });

  // Efeito de digitação suave da barra de busca do Google
  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx = (currentIdx + 1) % searchQueries.length;
      setQueryIndex(currentIdx);
      setIsTyping(true);

      const targetText = searchQueries[currentIdx];
      let charIdx = 0;
      setDisplayedText("");

      const typingTimer = setInterval(() => {
        if (charIdx <= targetText.length) {
          setDisplayedText(targetText.slice(0, charIdx));
          charIdx++;
        } else {
          clearInterval(typingTimer);
          setIsTyping(false);
        }
      }, 40);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Notificações periódicas de novos agendamentos na agenda
  useEffect(() => {
    const notificationsList = [
      { name: "David R.", city: "Winter Garden, FL", job: "Master Bathroom", value: "$22,000" },
      { name: "Robert K.", city: "Lake Nona, FL", job: "Travertine Pavers", value: "$38,000" },
      { name: "William B.", city: "Winter Park, FL", job: "Home Addition", value: "$75,000" },
      { name: "Anthony G.", city: "Celebration, FL", job: "Pool Deck", value: "$32,000" },
      { name: "Thomas H.", city: "Windermere, FL", job: "Full Remodel", value: "$38,000" },
    ];

    let notifIdx = 0;
    const notifTimer = setInterval(() => {
      notifIdx = (notifIdx + 1) % notificationsList.length;
      setToastNotification({
        show: true,
        ...notificationsList[notifIdx],
      });
    }, 6000);

    return () => clearInterval(notifTimer);
  }, []);

  const currentSchedule = weeklyScheduleData[activeDay];

  const renderIcon = (type: Appointment["typeIcon"]) => {
    switch (type) {
      case "kitchen":
      case "bath":
        return <FaHammer className="text-[#FFB400]" />;
      case "roof":
        return <FaShieldHalved className="text-[#00ff2a]" />;
      case "addition":
        return <FaHouseChimney className="text-[#FFB400]" />;
      case "pavers":
        return <FaBolt className="text-[#00ff2a]" />;
      case "flooring":
      default:
        return <FaHammer className="text-[#00ff2a]" />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* CARD PRINCIPAL COM EFEITO DE GLASSMORPHISM E BORDA LUMINOSA */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-neutral-900/70 border-2 border-neutral-700/60 backdrop-blur-3xl rounded-[40px] p-6 sm:p-8 lg:p-14 shadow-2xl relative overflow-hidden"
      >
        {/* Glows de fundo temáticos USA / High Tech */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff2a]/10 blur-[130px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB400]/10 blur-[130px] -z-10 pointer-events-none"></div>

        {/* HEADER DA SEÇÃO: COPY DIRETA E IMPACTANTE */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-[#00ff2a]/10 border border-[#00ff2a]/30 rounded-full px-5 py-2 text-[#00ff2a] text-[11px] font-black uppercase tracking-[0.25em] gap-2 shadow-[0_0_20px_rgba(0,255,42,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff2a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff2a]"></span>
            </span>
            <span>Domínio Regional • Google Guaranteed & Performance Ads</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
            Garantimos você no{" "}
            <span className="bg-gradient-to-r from-[#00ff2a] via-[#48ff6a] to-[#a8ffb8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,42,0.4)] whitespace-nowrap">
              Top 1 do Google
            </span>{" "}
            recebendo estimates toda semana.
          </h2>

          <p className="text-[#FFB400] text-xl sm:text-2xl font-black tracking-tight leading-snug">
            Já imaginou sua agenda assim toda semana?{" "}
            <span className="text-white/80 font-medium text-lg sm:text-xl block mt-1">
              (Agenda lotada de estimates com homeowners reais, sem intermediários)
            </span>
          </p>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Chega de queimar dinheiro com leads compartilhados no Thumbtack ou Angi que são vendidos para 5 empreiteiros ao mesmo tempo. 
            Colocamos a sua marca no lugar onde os americanos mais ricos contratam obras: <strong>no topo absoluto das buscas locais.</strong>
          </p>
        </div>

        {/* GRID PRINCIPAL: LADO 1 (MOTION GOOGLE TOP 1) + LADO 2 (AGENDA MOTION SEMANAL) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* ======================================================== */}
          {/* LADO 1: O DESIGN MOTION DO GOOGLE TOP 1 */}
          {/* ======================================================== */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-black/60 border border-neutral-700/60 rounded-[32px] p-5 sm:p-7 shadow-inner relative overflow-hidden group">
              {/* Luz sutil no topo do card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff2a]/40 to-transparent"></div>

              {/* BARRA DE PESQUISA SIMULADA DO GOOGLE */}
              <div className="flex items-center gap-3 p-3.5 bg-neutral-900/90 border border-neutral-700/80 rounded-2xl mb-5 shadow-lg">
                <div className="flex items-center gap-1.5 shrink-0 pl-1">
                  <FaGoogle className="text-white text-lg" />
                </div>
                <div className="flex-1 flex items-center min-w-0">
                  <FaMagnifyingGlass className="text-neutral-500 text-xs mr-2 shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium truncate font-mono">
                    {displayedText}
                    <span className="animate-pulse text-[#00ff2a] font-bold">|</span>
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 bg-neutral-800 px-2 py-1 rounded-md shrink-0">
                  Buscar
                </span>
              </div>

              {/* BADGE DE RESULTADOS GOOGLE */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-4 px-1">
                <span className="font-mono">Aproximadamente 4.820.000 resultados (0,31s)</span>
                <span className="text-[#00ff2a] font-bold flex items-center gap-1">
                  <FaCircleCheck className="text-[11px]" /> 1º Lugar Garantido
                </span>
              </div>

              {/* CARD DE ANÚNCIO #1: SUA CONSTRUTORA (DESTAQUE ABSOLUTO) */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-5 sm:p-6 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 border-2 border-[#00ff2a]/60 rounded-2xl shadow-[0_0_35px_rgba(0,255,42,0.18)] relative overflow-hidden transition-all duration-300"
              >
                {/* Faixa superior do anúncio */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#00ff2a] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
                      Patrocinado
                    </span>
                    <div className="inline-flex items-center gap-1 bg-[#00ff2a]/15 text-[#00ff2a] border border-[#00ff2a]/40 text-[10px] font-bold px-2 py-0.5 rounded">
                      <FaShieldHalved className="text-[10px]" />
                      <span>Google Guaranteed</span>
                    </div>
                  </div>
                  <span className="text-[#00ff2a] text-[10px] font-bold tracking-wide flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#00ff2a] animate-ping"></span>
                    87% dos cliques locais
                  </span>
                </div>

                {/* Nome da Construtora e URL */}
                <p className="text-neutral-400 text-xs font-mono mb-1 truncate">
                  https://suaconstrutora.com/estimates-orlando
                </p>
                <h4 className="text-white text-lg sm:text-xl font-black leading-snug hover:underline cursor-pointer">
                  Sua Construtora nos EUA | Estimates de Obras & Reformas de Alto Padrão
                </h4>

                {/* Estrelas e Reviews */}
                <div className="flex items-center gap-2 my-2 text-xs">
                  <div className="flex text-[#FFB400] text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <span className="text-white font-black">5.0</span>
                  <span className="text-neutral-400">(184 avaliações reais no Google)</span>
                </div>

                {/* Snippet de descrição */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Licenciados e Segurados (Licensed & Insured). Especialistas em Kitchens, Bathrooms, Flooring e Additions. Visita técnica em 24h com orçamento transparente e sem compromisso.
                </p>

                {/* Sitelinks / Botões rápidos de alta conversão */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800">
                  <div className="p-2.5 bg-neutral-800/60 border border-neutral-700/40 rounded-xl flex items-center gap-2 text-left">
                    <FaPhone className="text-[#00ff2a] text-xs shrink-0" />
                    <div>
                      <p className="text-white text-[11px] font-bold leading-none">Ligar Agora</p>
                      <p className="text-neutral-400 text-[9px] mt-0.5">Atendimento em minutos</p>
                    </div>
                  </div>
                  <div className="p-2.5 bg-[#00ff2a]/15 border border-[#00ff2a]/40 rounded-xl flex items-center gap-2 text-left">
                    <FaCalendarCheck className="text-[#00ff2a] text-xs shrink-0" />
                    <div>
                      <p className="text-[#00ff2a] text-[11px] font-black leading-none">Book an Estimate</p>
                      <p className="text-white/70 text-[9px] mt-0.5">Visita no local grátis</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CONCORRENTES ESMAECIDOS (DEMONSTRANDO O ABISMO DE QUEM NÃO ESTÁ NO TOPO) */}
              <div className="mt-4 space-y-2 opacity-35 select-none pointer-events-none">
                <div className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                  <p className="text-[10px] text-neutral-500 font-mono">Concorrente B (Posição #3 • Quase zero cliques)</p>
                  <p className="text-neutral-400 text-xs font-semibold">General Contractor Local • 3.8 ★★★ (11 reviews)</p>
                </div>
                <div className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl">
                  <p className="text-[10px] text-neutral-500 font-mono">Plataforma de Leads Compartilhados (Disputa de leilão)</p>
                  <p className="text-neutral-400 text-xs font-semibold">1 lead vendido para 5 empresas ao mesmo tempo</p>
                </div>
              </div>

              {/* RODAPÉ DO BLOCO GOOGLE */}
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5 text-white/80 font-medium">
                  <FaShieldHalved className="text-[#FFB400]" /> Configuração e Verificação Completa da Conta
                </span>
                <span className="text-[#00ff2a] font-bold">100% Leads Exclusivos</span>
              </div>
            </div>

            {/* CARD DE BENEFÍCIO RÁPIDO DO TOP 1 */}
            <div className="p-5 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00ff2a]/10 border border-[#00ff2a]/30 flex items-center justify-center text-[#00ff2a] text-xl shrink-0">
                <FaArrowTrendUp />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Você não corre atrás do cliente. O cliente te encontra.</p>
                <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                  Quem procura por uma obra no Google já tem a casa comprada, o dinheiro em mãos e precisa do serviço agora.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* LADO 2: O DESIGN MOTION DA AGENDA SEMANAL DE ESTIMATES */}
          {/* ======================================================== */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="bg-black/60 border border-neutral-700/60 rounded-[32px] p-5 sm:p-7 shadow-inner relative overflow-hidden flex flex-col h-full">
              {/* Luz sutil no topo do card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB400]/40 to-transparent"></div>

              {/* TOPO DA AGENDA: RESUMO DA SEMANA E PIPELINE */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-neutral-800">
                <div>
                  <div className="flex items-center gap-2">
                    <FaCalendarDays className="text-[#FFB400]" />
                    <span className="text-white text-sm font-black uppercase tracking-wider">
                      Agenda Semanal de Estimates
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    14 Visitas Técnicas Confirmadas nesta semana
                  </p>
                </div>
                <div className="bg-[#00ff2a]/10 border border-[#00ff2a]/30 px-3.5 py-1.5 rounded-xl self-start sm:self-auto">
                  <p className="text-neutral-400 text-[9px] font-bold uppercase tracking-widest">Pipeline Estimado</p>
                  <p className="text-[#00ff2a] text-lg font-black leading-none mt-0.5">$ 248,500</p>
                </div>
              </div>

              {/* SELETOR MOTION DOS DIAS DA SEMANA */}
              <div className="grid grid-cols-6 gap-1.5 my-4">
                {Object.entries(weeklyScheduleData).map(([key, data]) => {
                  const isActive = activeDay === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveDay(key)}
                      className={`py-2 px-1 rounded-xl text-center transition-all duration-200 relative flex flex-col items-center justify-center cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-b from-[#FFB400] to-[#E69500] text-black font-black shadow-[0_0_15px_rgba(255,180,0,0.35)] scale-105"
                          : "bg-neutral-800/50 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700/40"
                      }`}
                    >
                      <span className="text-[10px] font-extrabold uppercase">{key}</span>
                      <span className={`text-[11px] font-black leading-tight ${isActive ? "text-black" : "text-[#00ff2a]"}`}>
                        {data.count} est.
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* STATUS DO DIA ATUAL */}
              <div className="flex items-center justify-between px-1 mb-3 text-xs">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <FaClock className="text-[#FFB400]" /> {currentSchedule.label}
                </span>
                <span className="text-neutral-400 font-mono text-[11px]">
                  Pipeline do dia: <strong className="text-[#00ff2a]">{currentSchedule.pipeline}</strong>
                </span>
              </div>

              {/* LISTA DE ESTIMATES DO DIA SELECIONADO (COM FRAMER MOTION) */}
              <div className="space-y-3 flex-1 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    {currentSchedule.appointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="p-3.5 sm:p-4 bg-neutral-900/80 border border-neutral-800 hover:border-[#00ff2a]/40 rounded-2xl transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform">
                            {renderIcon(apt.typeIcon)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-white text-xs sm:text-sm font-bold">
                                {apt.service}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-400">
                              <span className="flex items-center gap-1 text-white/90 font-medium">
                                <FaLocationDot className="text-[#FFB400] text-[10px]" /> {apt.location}
                              </span>
                              <span>•</span>
                              <span>{apt.homeowner}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-neutral-800/80 shrink-0">
                          <span className="text-[#00ff2a] text-base sm:text-lg font-black leading-none tabular-nums">
                            {apt.value}
                          </span>
                          <div className="flex items-center gap-1 mt-1 text-[10px] text-white/80 bg-neutral-800 px-2 py-0.5 rounded-full font-mono font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff2a] animate-pulse"></span>
                            {apt.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* NOTIFICAÇÃO MOTION FLUTUANTE (NOVO ESTIMATE AGENDADO) */}
              <div className="mt-4 pt-3 border-t border-neutral-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={toastNotification.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 bg-[#00ff2a]/10 border border-[#00ff2a]/30 rounded-xl flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00ff2a] animate-ping shrink-0"></span>
                      <p className="text-white text-xs truncate">
                        <strong>Novo Estimate Solicitado:</strong> {toastNotification.job} ({toastNotification.value}) • {toastNotification.city}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-black text-[#00ff2a] shrink-0 font-mono">
                      Agora mesmo
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* CARD DE BENEFÍCIO RÁPIDO DA AGENDA */}
            <div className="p-5 bg-neutral-950/60 border border-neutral-800/80 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFB400]/10 border border-[#FFB400]/30 flex items-center justify-center text-[#FFB400] text-xl shrink-0">
                <FaCalendarCheck />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Você foca na obra e nas medições. Nós lotamos sua agenda.</p>
                <p className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                  Estimates pré-qualificados pelo nosso time ou pelo funil direto no seu WhatsApp e calendário.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* COMPARATIVO FINAL: ANTES DA NIVIX vs. COM A NIVIX */}
        <div className="mt-12 pt-10 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl space-y-2.5">
            <p className="text-red-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <span>✕</span> Como a maioria dos construtores vive nos EUA:
            </p>
            <ul className="text-neutral-400 text-xs sm:text-sm space-y-1.5 list-disc list-inside">
              <li>Paga $60 por lead compartilhado no Angi/Thumbtack já disputado com 5 pessoas.</li>
              <li>Guerra de preços que corrói sua margem com clientes que só querem o mais barato.</li>
              <li>Semanas de silêncio absoluto rezando por indicações de conhecidos.</li>
            </ul>
          </div>

          <div className="p-6 bg-[#00ff2a]/10 border border-[#00ff2a]/30 rounded-2xl space-y-2.5 shadow-[0_0_25px_rgba(0,255,42,0.08)]">
            <p className="text-[#00ff2a] text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <FaCircleCheck /> Com a Máquina de Escala Nivix:
            </p>
            <ul className="text-white text-xs sm:text-sm space-y-1.5 list-disc list-inside font-medium">
              <li>Leads 100% exclusivos ligando direto para a sua construtora.</li>
              <li>Homeowners com alto poder aquisitivo buscando acabamento premium e garantia.</li>
              <li>Previsibilidade semanal de estimates fechando contratos de $15,000 a mais de $100,000.</li>
            </ul>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
