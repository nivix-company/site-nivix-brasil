'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  FaShieldHalved, 
  FaHandshake, 
  FaFilter, 
  FaArrowTrendUp, 
  FaCrown, 
  FaUsersGear,
  FaCheck
} from "react-icons/fa6";

const vantagens = [
  {
    icon: <FaShieldHalved className="text-amber-400 text-2xl" />,
    title: "100% Leads Exclusivos",
    desc: "Chega de disputar o mesmo cliente no Angi ou Thumbtack com outros 5 concorrentes hispanos. O homeowner liga direto para o seu telefone.",
    highlight: "Zero Leilão de Preço",
  },
  {
    icon: <FaHandshake className="text-amber-400 text-2xl" />,
    title: "Direto com o Homeowner (Zero GC)",
    desc: "Pare de deixar 30% a 50% da sua margem na mão de General Contractors. Faça metade dos serviços e fature o dobro recebendo 100% do valor.",
    highlight: "100% Margem Própria",
  },
  {
    icon: <FaFilter className="text-amber-400 text-2xl" />,
    title: "Filtro Anti-Curiosos (Tire-Kickers)",
    desc: "Nada de dirigir 45 minutos para fazer free-estimate para curioso que nunca responde. Nosso funil atrai apenas clientes com orçamento aprovado.",
    highlight: "Tempo Poupado na Obra",
  },
  {
    icon: <FaArrowTrendUp className="text-amber-400 text-2xl" />,
    title: "Previsibilidade o Ano Inteiro",
    desc: "Acabe com a montanha-russa do inverno. Estruturamos sua máquina para bater recorde de caixa na alta temporada e manter o telefone tocando no frio.",
    highlight: "Faturamento Contínuo",
  },
  {
    icon: <FaCrown className="text-amber-400 text-2xl" />,
    title: "Posicionamento de Construtora Gigante",
    desc: "Perfil no Top 1 do Google Meu Negócio, reviews qualificadas e presença visual profissional que transmitem a confiança que o americano exige.",
    highlight: "Autoridade Local Imediata",
  },
  {
    icon: <FaUsersGear className="text-amber-400 text-2xl" />,
    title: "Assessoria Completa Lado a Lado",
    desc: "Você não precisa aprender marketing nem perder tempo no computador. Cuidamos de toda a engenharia digital enquanto você foca na execução da obra.",
    highlight: "Operação 100% Feita por Nós",
  },
];

export default function BuildersVantagens() {
  return (
    <section id="vantagens" className="relative flex flex-col items-center justify-center px-4 py-24 w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[160px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

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
            <span>Por que a Nivix</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
          >
            As vantagens de jogar na <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              primeira divisão nos EUA
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg mt-6 leading-relaxed"
          >
            Não vendemos planos genéricos de anúncios. Construímos a infraestrutura que transforma construtores autônomos em referências regionais na América.
          </motion.p>
        </div>

        {/* Grid de 6 Vantagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {vantagens.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -5, borderColor: "rgba(245, 158, 11, 0.4)" }}
              className="p-7 bg-neutral-900/50 border border-neutral-800 rounded-3xl relative flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2">
                <FaCheck className="text-emerald-400 text-xs shrink-0" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Intermediário */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#form"
            className="inline-block text-black bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 font-black px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.25)] text-base transition-all transform hover:scale-105"
          >
            Quero meu diagnóstico gratuito da minha região
          </a>
        </motion.div>

      </div>
    </section>
  );
}
