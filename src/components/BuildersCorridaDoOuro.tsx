'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  FaMagnifyingGlass, 
  FaHouseChimney, 
  FaCrown, 
  FaPhoneVolume, 
  FaGoogle, 
  FaStar, 
  FaShieldHalved, 
  FaFilter, 
  FaMobileScreenButton, 
  FaBullhorn, 
  FaCamera, 
  FaCalendarCheck,
  FaCheck
} from "react-icons/fa6";

const steps = [
  {
    step: "01",
    icon: <FaHouseChimney className="text-amber-400 text-xl" />,
    title: "A Necessidade Real",
    desc: "O homeowner americano decide reformar a cozinha, trocar o telhado ou ampliar a casa. Ele tem orçamento reservado e busca qualidade.",
  },
  {
    step: "02",
    icon: <FaMagnifyingGlass className="text-amber-400 text-xl" />,
    title: "A Pesquisa Local",
    desc: "Ele pega o celular e digita no Google: '(Serviço) near me'. 84% ignoram anúncios e vão direto para a seção de empresas locais do Maps.",
  },
  {
    step: "03",
    icon: <FaCrown className="text-amber-400 text-xl" />,
    title: "O Top 1 Irrecusável",
    desc: "Sua construtora aparece em 1º lugar com 5 estrelas, fotos profissionais e reviews qualificadas. Ele nem cogita descer para ver concorrentes.",
  },
  {
    step: "04",
    icon: <FaPhoneVolume className="text-amber-400 text-xl" />,
    title: "O Estimate Fechado",
    desc: "78% dos cliques são '0-click': ele liga direto para o seu telefone, agenda a visita técnica e fecha com você pelo valor integral.",
  },
];

const deliverables = [
  { icon: <FaGoogle className="text-amber-400" />, label: "Google Meu Negócio Top 1" },
  { icon: <FaStar className="text-amber-400" />, label: "Sistema de Reviews Qualificadas" },
  { icon: <FaShieldHalved className="text-amber-400" />, label: "SEO Local & Domínio Regional" },
  { icon: <FaFilter className="text-amber-400" />, label: "Filtro Anti-Curiosos (Tire-Kickers)" },
  { icon: <FaMobileScreenButton className="text-amber-400" />, label: "Site Corporativo de Alta Conversão" },
  { icon: <FaCamera className="text-amber-400" />, label: "Portfólio & Fotos de Alto Padrão" },
  { icon: <FaBullhorn className="text-amber-400" />, label: "Tráfego Direto para Homeowners" },
  { icon: <FaCalendarCheck className="text-amber-400" />, label: "Esteira Previsível de Estimates" },
];

export default function BuildersCorridaDoOuro() {
  return (
    <section id="metodo-corrida" className="relative flex flex-col items-center justify-center px-4 py-24 w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[160px] -z-10 top-0 left-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="w-full lg:w-[85%] max-w-6xl flex flex-col items-center">
        
        {/* Header da Seção */}
        <div className="text-center mb-16 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-widest gap-2 backdrop-blur-md"
          >
            <FaCrown className="text-amber-400 text-xs" />
            <span>Metodologia Contractor Boost</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
          >
            A Corrida do Ouro: <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              como o americano escolhe você
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg mt-6 leading-relaxed"
          >
            O trajeto exato que o homeowner faz desde o momento da necessidade até ligar para a sua empresa e fechar o contrato.
          </motion.p>
        </div>

        {/* 4 Passos da Corrida do Ouro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 rounded-3xl relative flex flex-col justify-between transition-all duration-300 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-neutral-600 group-hover:text-amber-400/50 font-mono text-2xl font-black transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-white text-lg font-bold mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-Header: O que entregamos para você dominar a corrida */}
        <div className="text-center mb-8">
          <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em]">
            O que entregamos para sua construtora vencer a corrida:
          </p>
        </div>

        {/* Badges de Entregáveis */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mb-16">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3, borderColor: "rgba(245, 158, 11, 0.4)" }}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-900/60 border border-neutral-800 rounded-2xl text-xs font-semibold text-neutral-300 backdrop-blur-md transition-all shadow-sm"
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Soft Break Visual */}
        <div className="w-full flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-800 to-amber-500/30"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse my-3"></div>
        </div>

      </div>
    </section>
  );
}
