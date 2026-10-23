"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire } from "react-icons/fa";

// 1. DATASET: CONSTRUTORES & CONTRACTORS NOS EUA (/builders)
const rawBuilders = [
  "Apex Kitchen & Bath (FL)",
  "Titan Roofing & Siding (TX)",
  "Empire Pavers & Hardscape (NJ)",
  "Vanguard Custom Framing (MA)",
  "Gold Coast Remodeling (FL)",
  "Boston Pro Flooring (MA)",
  "Silva & Sons Construction (CA)",
  "Premier Stone & Masonry (PA)",
  "Alpha Deck & Porch (GA)",
  "Elite Home Builders (FL)",
  "Everest Roofing Pro (NC)",
  "Orlando Tile & Marble (FL)",
  "Legacy General Contractor (SC)",
  "Miami Custom Carpentry (FL)",
  "Apex Concrete & Driveways (NJ)",
  "Brazilian Touch Remodeling (MA)",
  "Diamond Painters & Drywall (TX)",
  "Prime Hardwood Floors (CT)",
  "Universal Siding & Gutters (MD)",
  "ProCraft Framing & Decks (CO)",
  "SunState Pools & Hardscapes (FL)",
  "Nova Kitchen Renovation (NY)",
  "Pinnacle Home Remodeling (WA)",
  "Atlas Roofing Solutions (TX)",
  "Summit Pavers & Outdoor (FL)",
  "Atlantic Custom Homes (SC)",
  "Precision Tile & Bath (MA)",
  "Master Craft Framing (NJ)",
  "Bay State Flooring Pro (MA)",
  "Lone Star Remodeling (TX)"
];

const builderActions = [
  "acaba de solicitar uma análise de captação de obras na região",
  "enviou os dados para diagnóstico de estimates nos EUA",
  "solicitou o método para fechar contratos direto com homeowners",
  "acaba de travar uma vaga para escala de reformas nos EUA",
  "iniciou o contato para parar de depender de sub-empreita",
  "acaba de pedir um plano para dominar os melhores zip codes",
  "solicitou o funil de captação de obras de alto ticket",
  "enviou os dados para sair de plataformas de leads compartilhados",
  "acaba de garantir prioridade no atendimento de construtores"
];

// 2. DATASET: PIZZARIAS EXCLUSIVO (/pizzarias)
const rawPizzarias = [
  "Pizzaria Don Giovanni", "Pizzaria Monte Carlo", "Pizzaria Forno à Lenha", "Pizzaria Bella Itália",
  "Pizzaria Romana", "Pizzaria Santa Felicidade", "Pizzaria San Lorenzo", "Pizzaria Di Milano",
  "Pizzaria La Bella", "Pizzaria do Porto", "Pizzaria Veneza", "Pizzaria Florença",
  "Pizzaria Di Roma", "Pizzaria Da Vinci", "Pizzaria Michelangelo", "Pizzaria Portofino",
  "Pizzaria Toscana", "Pizzaria Capri", "Pizzaria Amalfi", "Pizzaria Sorrento",
  "Pizzaria Positano", "Pizzaria Ravello", "Pizzaria Ischia", "Pizzaria Procida",
  "Pizzaria Salerno", "Pizzaria Foggia", "Pizzaria Bari", "Pizzaria Taranto",
  "Pizzaria Lecce", "Pizzaria Brindisi", "Pizzaria Otranto", "Pizzaria Gallipoli",
  "Pizzaria Vieste", "Pizzaria Peschici", "Pizzaria Rodi", "Pizzaria Mattinata",
  "Pizzaria Forno & Sabor", "Pizzaria Bacco Napoletana", "Pizzaria Villa Real", "Pizzaria Famiglia Grando"
];

const pizzariaActions = [
  "acaba de solicitar o método para travar o forno de pedidos",
  "enviou os dados para garantir consultoria para pizzaria",
  "solicitou o plano para reduzir o CPA de pedidos para R$ 4",
  "acaba de travar uma vaga para engenharia de cardápio de pizza",
  "iniciou o contato para bater recorde de pedidos no final de semana",
  "solicitou o método para vender 10x mais fora do iFood",
  "acaba de pedir um diagnóstico completo da sua pizzaria",
  "acaba de garantir prioridade no atendimento especializado"
];

// 3. DATASET: RESTAURANTES EM GERAL, HAMBURGUERIAS, PIZZARIAS E DELIVERY (/ e /restaurantes)
const rawGeneralRestaurants = [
  "Pizzaria Monte Carlo", "Burger do Cheff", "Pizzaria Don Giovanni", "Hamburgueria Artesanal 77",
  "Vila da Pizza", "The Burger Experience", "Pizzaria Bella Itália", "Classic Burger House",
  "Pizzaria Forno à Lenha", "Smash Burger Co.", "Restaurante Sabores da Vila", "Holy Burger",
  "Texas Burger House", "Sushi Prime Delivery", "Cantina & Trattoria Roma", "Bull Burger House",
  "Steakhouse Brasil", "Pizzaria Di Milano", "Garage Burger", "Bistrô & Parrilla",
  "Pizzaria Santa Felicidade", "Pizzaria Da Vinci", "Sabor & Brasa Churrascaria", "Black Burger Co.",
  "Pizzaria Toscana", "Prime Burger Artesanal", "Pizzaria Capri", "Smash & Fries Co.",
  "Pizzaria Amalfi", "Soul Burger House", "Pizzaria Sorrento", "Deli & Gastrobar"
];

const generalActions = [
  "acaba de solicitar uma análise estratégica da região",
  "enviou os dados para garantir a consultoria gratuita",
  "solicitou o plano para dobrar o faturamento",
  "acaba de travar uma vaga para análise de cardápio",
  "iniciou o contato para escalar o seu delivery",
  "acaba de pedir um diagnóstico completo de tráfego",
  "enviou o formulário para parar de queimar dinheiro",
  "solicitou o método para dominar o iFood da cidade",
  "acaba de garantir prioridade no atendimento especializado"
];

export default function SocialProof() {
  const pathname = usePathname() || "";
  const isExcludedRoute = pathname.startsWith("/serp") || pathname.startsWith("/google-search-engine") || pathname.startsWith("/crm");

  const [currentNotification, setCurrentNotification] = useState<{
    id: number;
    name: string;
    action: string;
    badge: string;
    time: string;
  } | null>(null);

  // Determina qual dataset usar com base na rota atual
  const getNicheData = () => {
    if (pathname.startsWith("/builders")) {
      return {
        names: rawBuilders,
        actions: builderActions,
        badge: "Oportunidade Ativa • USA",
      };
    }
    if (pathname.startsWith("/pizzarias")) {
      return {
        names: rawPizzarias,
        actions: pizzariaActions,
        badge: "Oportunidade Ativa • Pizzarias",
      };
    }
    return {
      names: rawGeneralRestaurants,
      actions: generalActions,
      badge: "Oportunidade Ativa",
    };
  };

  const formatName = (name: string, isBuilder: boolean) => {
    if (isBuilder) return name; // Manter nome da construtora com estado limpo
    const rand = Math.random();
    if (rand < 0.8) return name;
    const subRand = Math.random();
    if (subRand < 0.4) return name.toLowerCase();
    if (subRand < 0.8) return `@${name.replace(/\s+/g, '').toLowerCase()}`;
    return name.replace(/\s+/g, '.').toLowerCase();
  };

  const showNotification = () => {
    const isBuilder = pathname.startsWith("/builders");
    const { names, actions, badge } = getNicheData();

    const rawName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const eventId = Date.now();
    
    setCurrentNotification({
      id: eventId,
      name: formatName(rawName, isBuilder),
      action: randomAction,
      badge,
      time: "agora mesmo",
    });

    // Disparar o evento para o contador de escassez da página
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("nivix-lead-event", { detail: { id: eventId } }));
    }

    setTimeout(() => {
      setCurrentNotification(null);
    }, 6000);
  };

  useEffect(() => {
    if (isExcludedRoute) return;

    const firstTimer = setTimeout(showNotification, 4000);

    const triggerNext = () => {
      const delay = Math.floor(Math.random() * (40000 - 16000) + 16000);
      return setTimeout(() => {
        showNotification();
        triggerNext();
      }, delay);
    };

    const loopTimer = setTimeout(triggerNext, 10000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(loopTimer);
    };
  }, [pathname]);

  if (isExcludedRoute) return null;

  return (
    <div className="fixed bottom-6 z-[99999] w-full lg:w-fit lg:left-6 flex justify-center lg:block pointer-events-none px-4">
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            key={currentNotification.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="flex items-center gap-4 bg-[#1a1a1a]/95 backdrop-blur-xl border border-[#FFB400]/30 p-4 rounded-2xl shadow-[0_20px_60px_rgba(255,180,0,0.2)] max-w-[340px] pointer-events-auto relative"
          >
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#00ff2a] rounded-full">
              <span className="absolute inset-0 rounded-full bg-[#00ff2a] animate-ping opacity-75"></span>
            </span>

            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFB400] to-[#cb8e00] rounded-full flex items-center justify-center text-black text-2xl shadow-[0_0_15px_rgba(255,180,0,0.4)]">
              <FaFire className="animate-pulse" />
            </div>

            <div className="flex flex-col pr-4">
              <p className="text-white text-[14px] font-extrabold leading-tight tracking-tight">
                {currentNotification.name}
              </p>
              <p className="text-neutral-200 text-[12px] mt-0.5 font-medium leading-snug">
                {currentNotification.action}
              </p>
              <div className="flex items-center mt-1">
                <p className="text-[#00ff2a] text-[10px] font-black uppercase tracking-widest">
                  {currentNotification.badge}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
