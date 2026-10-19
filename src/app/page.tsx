"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaUtensils, FaPizzaSlice, FaHelmetSafety, FaArrowRight, FaGlobe } from "react-icons/fa6";

const VALID_VERTICALS = ["/restaurantes", "/pizzarias", "/builders"];

export default function GlobalHubPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // Permite visualizar o Hub sem redirecionar se passar ?hub=1 na URL
    if (params.has("hub")) {
      setIsRedirecting(false);
      return;
    }

    // 1. Verifica se o usuário já estava em uma página (/builders, /pizzarias, /restaurantes) e caiu na /
    const savedVertical = localStorage.getItem("nivix_vertical");
    if (savedVertical && VALID_VERTICALS.includes(savedVertical)) {
      router.replace(savedVertical);
      return;
    }

    // 2. Fallback Client-Side de Geolocalização (Fuso Horário + API de GeoIP caso sem cabeçalho da Vercel em dev)
    const detectGeoAndRedirect = async () => {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        const usTimezones = [
          "America/New_York",
          "America/Chicago",
          "America/Denver",
          "America/Los_Angeles",
          "America/Phoenix",
          "America/Detroit",
          "America/Indiana",
          "America/Kentucky",
          "America/Anchorage",
          "Pacific/Honolulu",
        ];
        const brTimezones = [
          "America/Sao_Paulo",
          "America/Fortaleza",
          "America/Recife",
          "America/Bahia",
          "America/Belem",
          "America/Manaus",
          "America/Cuiaba",
          "America/Campo_Grande",
          "America/Porto_Velho",
          "America/Boa_Vista",
          "America/Maceio",
          "America/Araguaina",
        ];

        // Tenta confirmar via GeoIP leve (timeout 1.2s)
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 1200);
        const res = await fetch("https://ipapi.co/json/", { signal: controller.signal }).catch(() => null);
        clearTimeout(timeout);

        if (res && res.ok) {
          const geo = await res.json();
          if (geo?.country_code === "US") {
            router.replace("/builders");
            return;
          }
          if (geo?.country_code === "BR") {
            router.replace("/restaurantes");
            return;
          }
        }

        // Fallback imediato pelo Timezone do sistema
        if (usTimezones.some((u) => tz.startsWith(u))) {
          router.replace("/builders");
          return;
        }
        if (brTimezones.some((b) => tz.startsWith(b))) {
          router.replace("/restaurantes");
          return;
        }

        // Default padrão: /restaurantes
        router.replace("/restaurantes");
      } catch {
        router.replace("/restaurantes");
      }
    };

    detectGeoAndRedirect();
  }, [router]);

  const verticals = [
    {
      title: "Nivix Food Service",
      subtitle: "Restaurantes & Delivery (Brasil)",
      desc: "Escala previsível de pedidos, engenharia de cardápio e gestão 360º para operações gastronômicas.",
      href: "/restaurantes",
      badge: "BRASIL • FOOD SERVICE",
      icon: <FaUtensils />,
    },
    {
      title: "Nivix Pizzarias",
      subtitle: "Especialistas em Pizzarias (Brasil)",
      desc: "O método validado para travar o forno de pedidos todos os dias com CPA médio de R$ 4 a R$ 6.",
      href: "/pizzarias",
      badge: "BRASIL • PIZZARIAS",
      icon: <FaPizzaSlice />,
    },
    {
      title: "Nivix Builders USA",
      subtitle: "Builders & Contractors (Estados Unidos)",
      desc: "Captação de homeowners qualificados e contratos de alto ticket em dólar para construtores nos EUA.",
      href: "/builders",
      badge: "USA • CONSTRUCTION",
      icon: <FaHelmetSafety />,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#101010] text-white flex flex-col items-center justify-between px-6 py-12 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#FFB400]/10 blur-[160px] -top-40 left-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Top Logo */}
      <header className="w-full max-w-6xl flex items-center justify-between z-10">
        <img src="/logo.png" alt="Logo Nivix" className="w-36" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 text-xs text-neutral-400">
          <FaGlobe className="text-[#FFB400]" />
          <span>Global Performance Ecosystem</span>
        </div>
      </header>

      {/* Center Content */}
      <div className="w-full max-w-6xl my-auto py-16 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFB400]/30 bg-[#FFB400]/10 text-[#FFB400] text-[10px] font-black uppercase tracking-[0.25em]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFB400] animate-ping" />
          <span>{isRedirecting ? "Redirecionando para sua região..." : "Selecione sua Divisão"}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-[1.1]"
        >
          Ecossistema de Escala e <br />
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent">
            Performance Nivix Company
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-base md:text-xl max-w-2xl mt-4"
        >
          Escolha abaixo a divisão especializada no seu mercado para acessar nosso diagnóstico estratégico:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          {verticals.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => {
                try {
                  localStorage.setItem("nivix_vertical", item.href);
                  document.cookie = `nivix_vertical=${encodeURIComponent(item.href)}; path=/; max-age=2592000; SameSite=Lax`;
                } catch {}
              }}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group text-left p-8 rounded-[36px] bg-neutral-900/50 border-2 border-neutral-800/80 hover:border-[#FFB400]/50 backdrop-blur-2xl flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#FFB400] text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-neutral-800/80 text-[#FFB400] border border-[#FFB400]/20">
                    {item.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-[#FFB400] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs font-bold text-neutral-300 mt-1">{item.subtitle}</p>
                <p className="text-sm text-neutral-400 mt-4 leading-relaxed">{item.desc}</p>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-black uppercase tracking-widest text-[#FFB400]">
                <span>Acessar Página</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest z-10">
        © {new Date().getFullYear()} NIVIX COMPANY • BRASIL & USA
      </footer>
    </main>
  );
}
