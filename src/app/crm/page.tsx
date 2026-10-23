'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlus,
  FaMagnifyingGlass,
  FaLocationDot,
  FaPhone,
  FaCalendarDays,
  FaHandshake,
  FaShieldHalved,
  FaArrowRight,
  FaArrowLeft,
  FaXmark,
  FaCheck,
  FaCommentDots,
  FaPaperPlane,
  FaArrowTrendUp,
  FaHouseChimney,
  FaDollarSign,
  FaClock,
  FaGoogle,
  FaSliders,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

export interface CrmLead {
  id: string;
  name: string;
  service: string;
  category: "kitchen" | "bathroom" | "deck" | "whole-house" | "roofing";
  city: string;
  state: string;
  value: number;
  stage: "new" | "scheduled" | "proposal" | "won";
  scheduledDate?: string;
  phone: string;
  address: string;
  responseTime: string;
  notes: string;
  source: string;
  gcCommissionSaved: number;
  messages: Array<{ sender: "homeowner" | "contractor" | "bot"; text: string; time: string }>;
}

const initialLeads: CrmLead[] = [
  {
    id: "lead-01",
    name: "Robert & Sarah Jenkins",
    service: "Full Kitchen Remodel & Island",
    category: "kitchen",
    city: "Orlando",
    state: "FL",
    value: 58000,
    stage: "new",
    phone: "(407) 582-9140",
    address: "7422 Windermere Ridge Dr, Orlando, FL",
    responseTime: "42 segundos",
    source: "Google Maps #1",
    notes: "Homeowner quer trocar bancadas para quartzo calacatta, novos armários shaker brancos e iluminação embutida. Orçamento já aprovado pelo banco.",
    gcCommissionSaved: 23200,
    messages: [
      { sender: "homeowner", text: "Hi, I found your 5-star profile on Google. We want to remodel our kitchen this month. Are you available for an on-site estimate?", time: "10:14 AM" },
      { sender: "bot", text: "Hello Sarah! Thanks for reaching out to Nivix Builders. We specialize in luxury kitchen remodeling. I have availability tomorrow at 10:30 AM or Thursday at 2:00 PM. Which works best for you?", time: "10:15 AM" },
      { sender: "homeowner", text: "Tomorrow at 10:30 AM works perfectly! Address is 7422 Windermere Ridge Dr.", time: "10:16 AM" }
    ]
  },
  {
    id: "lead-02",
    name: "David & Brenda Miller",
    service: "Master Bathroom Luxury Suite",
    category: "bathroom",
    city: "Winter Park",
    state: "FL",
    value: 36000,
    stage: "new",
    phone: "(321) 409-1823",
    address: "1250 Palmer Ave, Winter Park, FL",
    responseTime: "1 min 15s",
    source: "Google Search (Top 1)",
    notes: "Chuveiro duplo walk-in com nicho iluminado e banheira de imersão autoportante. Pagamento à vista.",
    gcCommissionSaved: 14400,
    messages: [
      { sender: "homeowner", text: "Hello! Saw your portfolio on Google. Looking to gut our master bath completely. Free for an estimate?", time: "09:30 AM" },
      { sender: "bot", text: "Hi David! Yes, absolutely. We'd love to assess your master suite. Sending our booking link right now.", time: "09:31 AM" }
    ]
  },
  {
    id: "lead-03",
    name: "Emily & Mark Watson",
    service: "Outdoor Kitchen & Trex Deck",
    category: "deck",
    city: "Windermere",
    state: "FL",
    value: 46000,
    stage: "scheduled",
    scheduledDate: "Amanhã às 10:30 AM",
    phone: "(407) 831-7729",
    address: "9100 Conroy Windermere Rd, Windermere, FL",
    responseTime: "35 segundos",
    source: "Google Maps #1",
    notes: "Deck de material composto Trex com pérgola de alumínio preto e churrasqueira embutida. Visita confirmada via SMS.",
    gcCommissionSaved: 18400,
    messages: [
      { sender: "homeowner", text: "Good morning! Can you build a 400 sqft composite deck before summer?", time: "Yesterday" },
      { sender: "bot", text: "Hi Emily! Yes, our summer schedule is filling up, but we can start within 3 weeks. Confirmed your estimate for tomorrow at 10:30 AM.", time: "Yesterday" },
      { sender: "homeowner", text: "Great, see you tomorrow!", time: "Yesterday" }
    ]
  },
  {
    id: "lead-04",
    name: "Carlos & Jessica Mendes",
    service: "Whole Home Flooring & Paint",
    category: "whole-house",
    city: "Kissimmee",
    state: "FL",
    value: 42000,
    stage: "scheduled",
    scheduledDate: "Quinta-feira às 2:00 PM",
    phone: "(407) 991-3811",
    address: "3104 Osceola Pkwy, Kissimmee, FL",
    responseTime: "50 segundos",
    source: "Google Meu Negócio",
    notes: "Casa recém-comprada de 2.800 sqft. Querem trocar todo o carpete por piso de vinil de luxo (LVP) e pintura geral interna.",
    gcCommissionSaved: 16800,
    messages: [
      { sender: "homeowner", text: "Olá! Pegamos a chave da casa ontem e precisamos trocar todo o piso antes da mudança.", time: "2 days ago" },
      { sender: "contractor", text: "Parabéns pela casa Carlos! Quinta-feira às 14h estaremos aí para medir tudo e te passar o orçamento na hora.", time: "2 days ago" }
    ]
  },
  {
    id: "lead-05",
    name: "Brandon & Nicole Clark",
    service: "Chef Kitchen & Quartz Counters",
    category: "kitchen",
    city: "Doctor Phillips",
    state: "FL",
    value: 64000,
    stage: "proposal",
    phone: "(407) 472-8801",
    address: "8820 Bay Hill Blvd, Orlando, FL",
    responseTime: "28 segundos",
    source: "Google Maps #1",
    notes: "Proposta digital enviada ontem no valor de $64,000. Homeowner visualizou o documento 3 vezes. Aguardando apenas aprovação do HOA.",
    gcCommissionSaved: 25600,
    messages: [
      { sender: "contractor", text: "Hi Brandon, just sent over your itemized estimate and 3D architectural render. Let me know if you have any questions!", time: "Yesterday 4:00 PM" },
      { sender: "homeowner", text: "Just reviewed with Nicole, looks fantastic! Just submitting the HOA permit and we will sign the deposit.", time: "Yesterday 6:30 PM" }
    ]
  },
  {
    id: "lead-06",
    name: "Patricia & Arthur Davis",
    service: "Double Bathroom Renovation",
    category: "bathroom",
    city: "Maitland",
    state: "FL",
    value: 38500,
    stage: "proposal",
    phone: "(321) 710-9284",
    address: "502 Lake Sybelia Dr, Maitland, FL",
    responseTime: "1 min",
    source: "Google Search (Top 1)",
    notes: "Proposta enviada para reforma de dois banheiros (Master + Social). Cliente já escolheu as louças.",
    gcCommissionSaved: 15400,
    messages: [
      { sender: "contractor", text: "Good afternoon Patricia! The revised contract with the custom tile allowance is ready in your portal.", time: "Oct 21" },
      { sender: "homeowner", text: "Thank you! Arthur and I will finalize this tonight.", time: "Oct 21" }
    ]
  },
  {
    id: "lead-07",
    name: "Michael & Karen Stevens",
    service: "Open-Concept Kitchen & Living",
    category: "kitchen",
    city: "Lake Mary",
    state: "FL",
    value: 72000,
    stage: "won",
    phone: "(407) 604-3319",
    address: "1840 Heathrow Pines Dr, Lake Mary, FL",
    responseTime: "18 segundos",
    source: "Google Maps #1",
    notes: "CONTRATO ASSINADO! Derrubada de parede estrutural com viga metálica (load-bearing beam) + cozinha gourmet de luxo. 40% de entrada recebido ($28,800). ZERO comissão para GC.",
    gcCommissionSaved: 28800,
    messages: [
      { sender: "homeowner", text: "Contract signed and deposit sent! Excited to start this project with your team.", time: "Oct 19" },
      { sender: "contractor", text: "Deposit confirmed Michael! Material delivery scheduled for Monday. Let's make this house incredible!", time: "Oct 19" }
    ]
  },
  {
    id: "lead-08",
    name: "Jennifer & Tom Taylor",
    service: "Covered Lanai & Outdoor Patio",
    category: "deck",
    city: "Winter Garden",
    state: "FL",
    value: 49000,
    stage: "won",
    phone: "(407) 329-8472",
    address: "14102 Stoneybrook W Pkwy, Winter Garden, FL",
    responseTime: "45 segundos",
    source: "Google Meu Negócio",
    notes: "CONTRATO ASSINADO! Extensão de telhado com forro de cedro, piso de travertino e fogueira embutida. Cliente veio direto pelo perfil 5.0 estrelas.",
    gcCommissionSaved: 19600,
    messages: [
      { sender: "homeowner", text: "You guys were the only company that replied immediately and gave a clear, professional price. Let's do it!", time: "Oct 18" },
      { sender: "contractor", text: "Thank you Jennifer! We take pride in fast, direct communication. Welcome aboard!", time: "Oct 18" }
    ]
  }
];

export default function ConstructionCrmMock() {
  const [leads, setLeads] = useState<CrmLead[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<CrmLead | null>(null);
  const [mobileActiveStage, setMobileActiveStage] = useState<CrmLead["stage"]>("new");
  const [newSimulatedCount, setNewSimulatedCount] = useState(0);

  // Filtros
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || lead.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Métricas Totais
  const totalPipeline = leads.reduce((acc, curr) => acc + curr.value, 0);
  const totalWon = leads.filter(l => l.stage === "won").reduce((acc, curr) => acc + curr.value, 0);
  const totalGcSaved = leads.reduce((acc, curr) => acc + curr.gcCommissionSaved, 0);

  // Mover etapa
  const moveLeadStage = (leadId: string, direction: "forward" | "backward") => {
    const stages: CrmLead["stage"][] = ["new", "scheduled", "proposal", "won"];
    setLeads(prev => prev.map(lead => {
      if (lead.id !== leadId) return lead;
      const currentIndex = stages.indexOf(lead.stage);
      const nextIndex = direction === "forward" 
        ? Math.min(stages.length - 1, currentIndex + 1)
        : Math.max(0, currentIndex - 1);
      const updated = { ...lead, stage: stages[nextIndex] };
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead(updated);
      }
      return updated;
    }));
  };

  // Simular Novo Lead do Google
  const handleSimulateInboundLead = () => {
    const names = [
      { name: "Anthony & Linda Rossi", service: "Full Kitchen & Walk-in Pantry", category: "kitchen" as const, city: "Windermere, FL", val: 56000 },
      { name: "George & Patricia Wright", service: "Master Bath & Steam Shower", category: "bathroom" as const, city: "Winter Park, FL", val: 34000 },
      { name: "Brian Kowalski", service: "Screened Lanai & Summer Kitchen", category: "deck" as const, city: "Orlando, FL", val: 48000 },
    ];
    const pick = names[newSimulatedCount % names.length];
    setNewSimulatedCount(prev => prev + 1);

    const newLead: CrmLead = {
      id: `lead-sim-${Date.now()}`,
      name: pick.name,
      service: pick.service,
      category: pick.category,
      city: pick.city.split(",")[0],
      state: "FL",
      value: pick.val,
      stage: "new",
      phone: "(407) 555-0199",
      address: `10${Math.floor(Math.random() * 90) + 10} Royal Palm Ave, ${pick.city}`,
      responseTime: "32 segundos",
      source: "Google Maps #1",
      notes: "Lead acabou de ligar através do anúncio e perfil 5 estrelas do Google Maps. Cliente quer orçamento para início imediato.",
      gcCommissionSaved: Math.round(pick.val * 0.4),
      messages: [
        { sender: "homeowner", text: `Hi! Just found your company on Google Maps while looking for ${pick.service.toLowerCase()}. Can someone come over for a quote?`, time: "Agora" },
        { sender: "bot", text: "Hello! Thank you for contacting Nivix Builders. Our estimator can visit your home this week. What day is best for you?", time: "Agora" }
      ]
    };

    setLeads(prev => [newLead, ...prev]);
  };

  const columns: Array<{ id: CrmLead["stage"]; title: string; color: string; badgeBg: string; dotColor: string; description: string }> = [
    {
      id: "new",
      title: "Novos Leads",
      color: "border-purple-500/30",
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      dotColor: "bg-purple-400",
      description: "Homeowners que buscaram no Google Maps e ligaram direto"
    },
    {
      id: "scheduled",
      title: "Estimate Agendado",
      color: "border-blue-500/30",
      badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      dotColor: "bg-blue-400",
      description: "Visita técnica confirmada na casa do cliente"
    },
    {
      id: "proposal",
      title: "Proposta Enviada",
      color: "border-amber-500/30",
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      dotColor: "bg-amber-400",
      description: "Orçamento entregue aguardando assinatura"
    },
    {
      id: "won",
      title: "Contrato Fechado ($0 GC)",
      color: "border-emerald-500/40",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      dotColor: "bg-emerald-400",
      description: "100% de margem no seu bolso sem comissão de GC"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0e12] text-neutral-100 font-sans flex flex-col selection:bg-amber-500 selection:text-black">
      
      {/* TOPBAR / APP HEADER */}
      <header className="sticky top-0 z-40 bg-[#121318]/90 backdrop-blur-xl border-b border-neutral-800/80 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <a href="/builders" className="flex items-center gap-2 group">
                <img src="/logo.png" alt="Nivix Logo" className="w-28 sm:w-32 object-contain" />
              </a>
              <span className="hidden sm:inline-block w-px h-5 bg-neutral-800"></span>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-mono font-bold text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Nivix Construction OS</span>
              </div>
            </div>

            {/* Link de Retorno / Toggle para o SERP Mock */}
            <a 
              href="/serp" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 text-xs font-bold transition-all"
            >
              <FaGoogle className="text-[11px]" />
              <span className="hidden sm:inline">Ver Planejador</span> SERP
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
          </div>

          {/* Ações Centrais / Botão de Simulação de Lead Inbound */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={handleSimulateInboundLead}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(255,180,0,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <FaPlus className="text-xs" />
              <span>Simular Novo Lead do Google</span>
            </button>
            <a
              href="/builders#form"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 text-white font-bold text-xs transition-all"
            >
              <span>Voltar para Landing Page</span>
            </a>
          </div>

        </div>
      </header>

      {/* PAINEL DE TELEMETRIA & MÉTRICAS DE IMPACTO ($0 GC) */}
      <section className="bg-gradient-to-b from-[#121318] to-transparent px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            
            {/* Métrica 01: Pipeline Ativo */}
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-mono font-medium mb-1">
                <span>Pipeline em Aberto</span>
                <FaDollarSign className="text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                ${totalPipeline.toLocaleString()}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                {leads.length} obras em andamento
              </p>
            </div>

            {/* Métrica 02: Contratos Fechados */}
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.08)] relative overflow-hidden">
              <div className="flex items-center justify-between text-emerald-400 text-xs font-mono font-bold mb-1">
                <span>Contratos Fechados (Mês)</span>
                <FaCheck className="text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                ${totalWon.toLocaleString()}
              </div>
              <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                100% margem do contractor
              </p>
            </div>

            {/* Métrica 03: Comissão de GC Poupada */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-amber-950/20 via-neutral-900 to-neutral-900 border border-amber-400/40 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between text-amber-300 text-xs font-mono font-bold mb-1">
                <span>Comissão GC Economizada</span>
                <FaShieldHalved className="text-amber-400" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-300 tracking-tight">
                +${totalGcSaved.toLocaleString()}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Lucro extra que não foi para intermediários
              </p>
            </div>

            {/* Métrica 04: Speed-to-Lead Médio */}
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-mono font-medium mb-1">
                <span>Speed-to-Lead Médio</span>
                <FaClock className="text-blue-400" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                42s
              </div>
              <p className="text-[11px] text-blue-400 font-semibold mt-1">
                ⚡ Resposta instantânea via SMS
              </p>
            </div>

          </div>

          {/* BARRA DE FILTRO E PESQUISA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-2xl bg-[#14151b] border border-neutral-800">
            
            {/* Input de Busca */}
            <div className="relative w-full md:w-96">
              <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar por homeowner, cidade ou serviço..."
                className="w-full pl-9 pr-4 py-2 bg-neutral-900/90 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
            </div>

            {/* Categorias de Obra */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none text-xs">
              {[
                { id: "all", label: "Todas as Obras" },
                { id: "kitchen", label: "Cozinhas" },
                { id: "bathroom", label: "Banheiros" },
                { id: "deck", label: "Decks & Pátios" },
                { id: "whole-house", label: "Reformas Completas" }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-amber-400 text-black font-bold shadow-sm"
                      : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* SELETOR MOBILE DE ETAPA */}
          <div className="flex lg:hidden items-center justify-between gap-1.5 mt-3 overflow-x-auto pb-1">
            {columns.map(col => {
              const count = filteredLeads.filter(l => l.stage === col.id).length;
              return (
                <button
                  key={col.id}
                  onClick={() => setMobileActiveStage(col.id)}
                  className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center justify-center gap-1.5 transition-all ${
                    mobileActiveStage === col.id 
                      ? "bg-neutral-800 text-white border border-amber-400/50" 
                      : "bg-neutral-900/60 text-neutral-400"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${col.dotColor}`}></span>
                  <span>{col.title.split(" ")[0]}</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-neutral-950 rounded-full font-mono">{count}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* KANBAN BOARD */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
          
          {columns.map(col => {
            const colLeads = filteredLeads.filter(l => l.stage === col.id);
            const colTotalValue = colLeads.reduce((acc, curr) => acc + curr.value, 0);
            
            // No mobile, exibe apenas a coluna ativa selecionada
            const isVisibleOnMobile = mobileActiveStage === col.id;

            return (
              <div 
                key={col.id}
                className={`rounded-3xl bg-[#121318]/90 border ${col.color} p-4 flex flex-col min-h-[580px] shadow-xl ${
                  isVisibleOnMobile ? "flex" : "hidden lg:flex"
                }`}
              >
                
                {/* Header da Coluna */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/80">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${col.dotColor} ${col.id === "new" ? "animate-ping" : ""}`}></span>
                    <h2 className="font-bold text-sm text-white tracking-tight">{col.title}</h2>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {colLeads.length}
                  </span>
                </div>

                {/* Sub-header com Valor Acumulado */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-4 px-1">
                  <span>Subtotal:</span>
                  <span className="text-white font-bold">${colTotalValue.toLocaleString()}</span>
                </div>

                {/* Cards List */}
                <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                  {colLeads.length === 0 ? (
                    <div className="h-40 rounded-2xl border border-dashed border-neutral-800 flex flex-col items-center justify-center text-center p-4 text-neutral-600">
                      <p className="text-xs">Nenhuma obra nesta etapa</p>
                    </div>
                  ) : (
                    colLeads.map(lead => (
                      <motion.div
                        key={lead.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedLead(lead)}
                        className="p-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-900 border border-neutral-800/80 hover:border-amber-400/40 transition-all cursor-pointer shadow-md group relative flex flex-col justify-between"
                      >
                        <div>
                          {/* Top Row: Tag & Valor */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/60 truncate">
                              {lead.service}
                            </span>
                            <span className="text-sm font-black font-mono text-white tabular-nums shrink-0">
                              ${lead.value.toLocaleString()}
                            </span>
                          </div>

                          {/* Homeowner Name */}
                          <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                            {lead.name}
                          </h3>

                          {/* Location & Speed */}
                          <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-1 mb-2.5">
                            <span className="flex items-center gap-1 truncate">
                              <FaLocationDot className="text-neutral-500 text-[10px] shrink-0" />
                              <span className="truncate">{lead.city}, {lead.state}</span>
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-semibold shrink-0">
                              {lead.responseTime}
                            </span>
                          </div>

                          {/* Scheduled date banner if any */}
                          {lead.scheduledDate && (
                            <div className="mb-2.5 p-2 rounded-xl bg-blue-950/30 border border-blue-500/30 text-blue-300 text-[11px] font-mono font-medium flex items-center gap-1.5">
                              <FaCalendarDays className="text-xs text-blue-400 shrink-0" />
                              <span className="truncate">{lead.scheduledDate}</span>
                            </div>
                          )}

                          {/* Notes preview */}
                          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                            {lead.notes}
                          </p>
                        </div>

                        {/* Card Footer: Ações de Avanço / GC Saved */}
                        <div className="mt-3 pt-2.5 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                          <span className="text-[10px] font-mono text-amber-300 font-bold">
                            +$ {lead.gcCommissionSaved.toLocaleString()} sem GC
                          </span>
                          
                          {/* Botões de Mover Etapa */}
                          <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                            {lead.stage !== "new" && (
                              <button
                                onClick={() => moveLeadStage(lead.id, "backward")}
                                title="Voltar etapa"
                                className="w-6 h-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors text-[10px]"
                              >
                                <FaArrowLeft />
                              </button>
                            )}
                            {lead.stage !== "won" && (
                              <button
                                onClick={() => moveLeadStage(lead.id, "forward")}
                                title="Avançar etapa"
                                className="w-6 h-6 rounded-lg bg-amber-400/20 hover:bg-amber-400 hover:text-black text-amber-300 flex items-center justify-center transition-all text-[10px]"
                              >
                                <FaArrowRight />
                              </button>
                            )}
                          </div>
                        </div>

                      </motion.div>
                    ))
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </main>

      {/* MODAL DETALHADO DO LEAD / SPEED-TO-LEAD & CONVERSA */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl max-h-[90vh] bg-[#14151b] border border-neutral-800 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl relative flex flex-col justify-between"
            >
              
              {/* Header do Modal */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
                      <FaHouseChimney />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">{selectedLead.name}</h2>
                      <p className="text-xs text-neutral-400">{selectedLead.address}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedLead(null)}
                    className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <FaXmark />
                  </button>
                </div>

                {/* Grid de Informações Chave */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] uppercase font-mono font-bold text-neutral-500 block">Valor do Projeto</span>
                    <span className="text-base sm:text-lg font-black text-white font-mono mt-0.5 block">${selectedLead.value.toLocaleString()}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] uppercase font-mono font-bold text-neutral-500 block">Canal Inbound</span>
                    <span className="text-xs sm:text-sm font-bold text-blue-400 mt-1 block truncate">{selectedLead.source}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <span className="text-[10px] uppercase font-mono font-bold text-neutral-500 block">Tempo Resposta</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-1 block">{selectedLead.responseTime}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-neutral-900 border border-amber-400/30">
                    <span className="text-[10px] uppercase font-mono font-bold text-amber-300 block">Margem s/ GC</span>
                    <span className="text-base sm:text-lg font-black text-amber-400 font-mono mt-0.5 block">+${selectedLead.gcCommissionSaved.toLocaleString()}</span>
                  </div>
                </div>

                {/* Comparativo de Lucro Direto vs GC */}
                <div className="p-4 rounded-2xl bg-black/60 border border-neutral-800 mb-6">
                  <h4 className="text-xs font-bold text-neutral-300 mb-2 uppercase tracking-wider font-mono">
                    Engenharia Financeira da Obra:
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex-1 w-full p-2.5 rounded-xl bg-red-950/20 border border-red-500/20 text-neutral-400">
                      <span className="block text-[10px] font-mono text-neutral-500 uppercase">Se fosse subcontrato de General Contractor:</span>
                      <span className="text-sm font-bold text-red-400 mt-0.5 block">
                        Receberia ~${Math.round(selectedLead.value * 0.6).toLocaleString()} (GC embolsa ${selectedLead.gcCommissionSaved.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex-1 w-full p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-neutral-200">
                      <span className="block text-[10px] font-mono text-emerald-400 uppercase">Cliente Direto Nivix (Você no Top 1):</span>
                      <span className="text-sm font-black text-emerald-300 mt-0.5 block">
                        Você recebe 100% (${selectedLead.value.toLocaleString()}) direto na sua conta
                      </span>
                    </div>
                  </div>
                </div>

                {/* Histórico de Mensagens / Speed to Lead */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 font-mono">
                      <FaCommentDots className="text-amber-400" /> Histórico Automático de Contato (Speed-to-Lead):
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono">Inglês Nativo Americano</span>
                  </div>

                  <div className="space-y-2.5 p-4 rounded-2xl bg-neutral-950 border border-neutral-800/90 max-h-52 overflow-y-auto">
                    {selectedLead.messages.map((msg, idx) => (
                      <div 
                        key={idx}
                        className={`flex flex-col ${msg.sender === "homeowner" ? "items-start" : "items-end"}`}
                      >
                        <div 
                          className={`max-w-[85%] p-3 rounded-2xl text-xs ${
                            msg.sender === "homeowner"
                              ? "bg-neutral-800 text-neutral-200 rounded-tl-sm"
                              : msg.sender === "bot"
                              ? "bg-blue-600/90 text-white rounded-tr-sm"
                              : "bg-amber-400 text-black font-medium rounded-tr-sm"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <span className={`text-[9px] mt-1 block opacity-60 text-right`}>{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Ações do Rodapé do Modal */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span>Etapa atual:</span>
                  <span className="font-bold text-amber-300 uppercase">{selectedLead.stage}</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {selectedLead.stage !== "new" && (
                    <button
                      onClick={() => moveLeadStage(selectedLead.id, "backward")}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2"
                    >
                      <FaArrowLeft className="text-[10px]" />
                      <span>Voltar Etapa</span>
                    </button>
                  )}
                  {selectedLead.stage !== "won" ? (
                    <button
                      onClick={() => moveLeadStage(selectedLead.id, "forward")}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 hover:scale-105 transition-all"
                    >
                      <span>Avançar para Próxima Etapa</span>
                      <FaArrowRight className="text-[10px]" />
                    </button>
                  ) : (
                    <div className="px-5 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-1.5">
                      <FaCheck />
                      <span>Contrato Ganho & Margem 100% Protegida</span>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
