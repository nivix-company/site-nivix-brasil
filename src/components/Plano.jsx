'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  FaCheck, 
  FaUnlock, 
  FaShieldHalved, 
  FaArrowTrendUp, 
  FaUsersViewfinder, 
  FaCrown,
  FaBolt,
  FaArrowRight,
  FaBan,
  FaSliders,
  FaCircleCheck
} from "react-icons/fa6";

const defaultFeatures = [
  { title: "Tráfego de Conversão", desc: "Anúncios segmentados de alta conversão direcionados aos clientes certos." },
  { title: "Social Media Essencial", desc: "Redes sociais com acabamento profissional para gerar desejo imediato." },
  { title: "Engenharia de Cardápio", desc: "Seu cardápio reformulado como uma máquina de aumentar o ticket médio." },
  { title: "Análise de Dados & Métricas", desc: "Relatórios semanais com clareza absoluta de CAC, LTV e faturamento." },
  { title: "CRM e Recorrência", desc: "Estratégias ativas para fidelizar a base e fazer o cliente recomprar com frequência." },
  { title: "Automação de Vendas", desc: "Inteligência para evitar perda de pedidos por demora de resposta." },
  { title: "Squad Dedicado de Elite", desc: "Especialistas focados em destravar o crescimento contínuo do seu negócio." },
  { title: "Suporte VIP & Comunicação Direta", desc: "Acesso contínuo ao seu gestor via WhatsApp sem intermediários ou burocracia." }
];

const Plano = ({ data }) => {
  const features = data?.features || defaultFeatures;
  const currency = data?.currency || "R$";
  const marketAnchor = data?.marketAnchor || "R$ 2.600/mês";
  const price = data?.price || "800";
  const annualSavings = data?.annualSavings || "R$ 21.600/ano";
  const desc = data?.desc || "Garantimos mais entrega e resultado real que as agências tradicionais do mercado.";

  return (
    <section id="planos" className="relative flex flex-col items-center justify-center px-4 pt-12 sm:pt-16 pb-20 w-full overflow-hidden scroll-mt-24">
      {/* Background Radial Glow */}
      <div className="absolute w-[800px] h-[600px] rounded-full bg-amber-500/5 blur-[160px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="w-full lg:w-[85%] max-w-6xl flex flex-col items-center">
        
        {/* Header da Seção */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl px-4 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.12)]"
          >
            <FaCrown className="text-amber-400 text-xs" />
            <span>Infraestrutura Completa • Sem Pegadinhas</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white tracking-tight leading-tight max-w-4xl"
          >
            Plano Único,{" "}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]">
              Resultado Real
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl px-4 text-neutral-300 leading-relaxed font-medium"
          >
            {desc}
          </motion.p>
        </div>

        {/* Card Principal de Preço com Motions Inspirados no Builders */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-[36px] bg-gradient-to-b from-neutral-900/95 via-neutral-950/98 to-neutral-900/95 border border-neutral-800/90 shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden p-6 sm:p-10 lg:p-12 group"
        >
          {/* Top Horizontal Luminous Energy Beam (Motion Padrão Builders) */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-full bg-gradient-to-r from-transparent via-amber-200 to-transparent blur-[1px]"
            />
          </div>

          {/* Ambient Scanning Diagonal Shimmer Beam */}
          <motion.div 
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent skew-x-12 pointer-events-none"
          />

          {/* Telemetria / Barra de Exclusividade Superior */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 sm:mb-10 border-b border-neutral-800/80 gap-3 relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono font-bold tracking-wider uppercase text-emerald-400 text-[11px] sm:text-xs">
                Capacidade Limitada: 1 Parceiro por Raio de Entrega
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
              <FaBolt className="text-amber-400 text-xs" />
              <span>Squad All-Inclusive</span>
            </div>
          </div>

          {/* Grid Principal: Coluna de Preço vs Coluna de Entregáveis */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 relative z-10">
            
            {/* Coluna da Esquerda: Preço, Comparador Visual de Mercado & Economia */}
            <div className="w-full lg:w-[38%] flex flex-col justify-between lg:border-r border-neutral-800/80 lg:pr-10">
              <div>
                {/* Comparador Visual de Investimento (Motion Padrão Builders) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-neutral-800/90 space-y-3.5 mb-8">
                  <div>
                    <div className="flex justify-between items-center text-[11px] mb-1.5 font-mono">
                      <span className="text-neutral-400 flex items-center gap-1.5">
                        <FaBan className="text-red-400 text-[10px]" /> Agência Convencional:
                      </span>
                      <span className="text-neutral-500 line-through font-semibold">{marketAnchor}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="w-[40%] h-full bg-neutral-600 rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-1">Exigem fidelidade de 6 a 12 meses sob multa.</p>
                  </div>

                  <div className="pt-2 border-t border-neutral-800/60">
                    <div className="flex justify-between items-center text-[11px] mb-1.5 font-mono">
                      <span className="text-amber-300 font-bold flex items-center gap-1.5">
                        <FaCircleCheck className="text-emerald-400 text-[10px]" /> Parceria Nivix:
                      </span>
                      <span className="text-emerald-400 font-bold">{currency} {price}/mês</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                      />
                    </div>
                    <p className="text-[10px] text-emerald-400/90 font-medium mt-1">Sem fidelidade forçada. Cancele quando quiser.</p>
                  </div>
                </div>

                {/* Bloco de Preço Principal */}
                <div className="text-center lg:text-left">
                  <span className="text-neutral-400 text-xs font-mono uppercase tracking-widest block mb-2">
                    Investimento Mensal Fixo
                  </span>
                  
                  <div className="flex items-baseline justify-center lg:justify-start gap-2">
                    <span className="text-white text-3xl font-extrabold tracking-tight">{currency}</span>
                    <span className="text-8xl sm:text-9xl font-black bg-gradient-to-b from-white via-neutral-100 to-neutral-500 bg-clip-text text-transparent tracking-tighter leading-none">
                      {price}
                    </span>
                    <span className="text-emerald-400 font-bold text-xl sm:text-2xl">/mês</span>
                  </div>

                  {/* Economia Anual Destacada */}
                  <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/25">
                    <FaArrowTrendUp className="text-amber-400 text-xs animate-bounce" />
                    <span className="text-amber-300 text-xs font-bold font-mono">
                      Economia real de {annualSavings}
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefícios Rápidos de Confiança */}
              <div className="mt-8 pt-6 border-t border-neutral-800/70 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                  <FaCircleCheck className="text-emerald-400 text-sm shrink-0" />
                  <span>Sem amarras ou multas de rescisão</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                  <FaCircleCheck className="text-emerald-400 text-sm shrink-0" />
                  <span>Relatórios semanais com números reais</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                  <FaCircleCheck className="text-emerald-400 text-sm shrink-0" />
                  <span>Implementação e alinhamento em 48h</span>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Bento de Entregáveis + Garantia de Performance */}
            <div className="w-full lg:w-[62%] flex flex-col justify-between">
              
              {/* Grid de Entregáveis Técnicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-400/35 hover:bg-neutral-850/60 transition-all flex flex-col justify-start group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 text-xs shrink-0 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all">
                        <FaCheck />
                      </div>
                      <span className="text-white text-sm font-bold tracking-tight group-hover:text-amber-300 transition-colors">
                        {feature.title}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-xs leading-relaxed pl-10 group-hover:text-neutral-300 transition-colors">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Box de Personalização com Micro-Interação */}
              <div className="mb-6 p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/70 flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0">
                  <FaSliders className="text-amber-400 text-xs" />
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Precisa de algo sob medida? <span className="text-white font-semibold">Adaptamos a esteira e os criativos</span> de acordo com a meta imediata do seu negócio.
                </p>
              </div>

              {/* Cards de Risco Zero e Garantia */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-neutral-800/70">
                <div className="p-4 sm:p-5 rounded-2xl bg-red-950/20 border border-red-500/30 relative overflow-hidden flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <FaShieldHalved className="text-red-400 text-sm" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-300">
                      Garantia Blindada
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Se em 30 dias não provarmos que o resultado paga com folga nosso investimento, <span className="text-white font-bold underline decoration-red-400">devolvemos seu dinheiro</span>.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUnlock className="text-amber-400 text-sm" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
                      Liberdade Contratual
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Permanecemos juntos pelos clientes e faturamento que entram, e não por uma cláusula de fidelidade.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CTA Principal com Motion e Shimmer */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center border-t border-neutral-800/80 pt-8 sm:pt-10 relative z-10">
            <motion.a 
              href="#form" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden w-full max-w-xl py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 text-white font-black text-lg sm:text-xl tracking-wide uppercase text-center shadow-[0_15px_45px_rgba(16,185,129,0.25)] hover:shadow-[0_20px_55px_rgba(16,185,129,0.45)] transition-all flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Contratar Parceria Nivix</span>
              <FaArrowRight className="relative z-10 text-base group-hover:translate-x-1.5 transition-transform" />
              
              {/* Shimmer interno do botão */}
              <div className="absolute inset-0 w-1/2 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            </motion.a>
            
            <div className="mt-8 flex flex-wrap gap-6 sm:gap-8 items-center justify-center">
              <span className="flex items-center gap-2 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                <FaShieldHalved className="text-amber-400 text-xs" /> Risco Zero Garantido
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></span>
              <span className="flex items-center gap-2 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                <FaUnlock className="text-amber-400 text-xs" /> Sem Multas de Fidelidade
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></span>
              <span className="flex items-center gap-2 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                <FaBolt className="text-amber-400 text-xs" /> Início em 48 Horas
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Inferior: Copys de Segurança e Posicionamento (Estilo Builders) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex items-start gap-5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-14 h-14 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-amber-400/40 transition-all shadow-inner">
              <img src="/alerta.png" className="w-7 opacity-50 group-hover:opacity-100 transition-all brightness-110" alt="" />
            </div>
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-white font-bold text-lg sm:text-xl leading-tight group-hover:text-amber-300 transition-colors">
                Chega de contratos abusivos
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                Você não precisa ficar preso por meses pagando <span className="text-white font-semibold">{marketAnchor}</span> em agências lentas para ter marketing e tráfego profissional.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-neutral-900/90 via-neutral-950/95 to-neutral-900/90 border border-neutral-800 hover:border-amber-400/40 transition-all flex items-start gap-5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-14 h-14 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-amber-400/40 transition-all shadow-inner">
              <img src="/mais.png" className="w-7 opacity-50 group-hover:opacity-100 transition-all brightness-110" alt="" />
            </div>

            <div className="space-y-2 relative z-10">
              <h3 className="text-white font-bold text-lg sm:text-xl leading-tight group-hover:text-amber-300 transition-colors">
                Entrega além da média
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                Receba esteira de tráfego, criativos, engenharia de cardápio, CRM e inteligência estratégica com velocidade que nenhuma agência tradicional acompanha.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* DIVISOR DE SEÇÃO - HARD DIVIDER COM MOTION LUMINOSO */}
      <div className="w-full flex flex-col items-center mt-20 sm:mt-24 relative">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-[1px] bg-gradient-to-b from-amber-400 to-transparent opacity-50"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-400/30 flex items-center justify-center my-4 shadow-[0_0_20px_rgba(245,158,11,0.25)] z-10"
        >
          <FaUsersViewfinder className="text-amber-400 text-sm" />
        </motion.div>
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent top-14 -z-0"
        ></motion.div>
      </div>
    </section>
  );
};

export default Plano;
