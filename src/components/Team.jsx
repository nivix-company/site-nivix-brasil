'use client';
import React from "react";
import { motion } from "framer-motion";
import { 
    FaRocket, 
    FaUserShield, 
    FaHandshake, 
    FaUsers, 
    FaBullhorn, 
    FaClapperboard, 
    FaUtensils, 
    FaComments,
    FaCrown,
    FaCircleDot,
    FaClock,
    FaArrowTrendUp,
    FaShieldHalved,
    FaCheck,
    FaWhatsapp
} from "react-icons/fa6";

const Team = ({ data }) => {
    // 4 Especialistas do Squad Operacional
    const squadSpecialists = [
      {
        icon: <FaBullhorn className="text-amber-400 text-lg" />,
        badge: "Aquisição & Mídia Paga",
        title: "Gestor de Tráfego Dedicado",
        role: "Tráfego Pago & Otimização Diária",
        desc: "Monta, monitora e calibra suas campanhas no Meta Ads e Google Ads todos os dias. Foco em reduzir o custo por pedido e concentrar orçamento nos horários de maior fome do público.",
        deliverables: [
          "Controle rigoroso de CPA",
          "Escala em dias de pico (Qui a Dom)",
          "Segmentação hiperlocal por raio de entrega"
        ],
        telemetry: "Monitoramento Diário de Campanhas"
      },
      {
        icon: <FaClapperboard className="text-amber-400 text-lg" />,
        badge: "Conversão & Desejo",
        title: "Direção de Criativos FoodPorn",
        role: "Audiovisual & Design de Alto Impacto",
        desc: "Roteiriza e edita criativos focados em dar água na boca nos primeiros 3 segundos. Transforma quem está rolando o feed em um cliente com a comanda batendo no seu balcão.",
        deliverables: [
          "Ganchos visuais de alta retenção (3s)",
          "Edição dinâmica de pratos e pizzas",
          "Anúncios com ofertas irresistíveis"
        ],
        telemetry: "Foco Total em Despertar Fome"
      },
      {
        icon: <FaUtensils className="text-amber-400 text-lg" />,
        badge: "Margem & Ticket Médio",
        title: "Engenharia de Cardápio",
        role: "Estratégia de Produtos & Precificação",
        desc: "Reorganiza a ordem dos seus pratos, precificação estratégica e combos âncora para aumentar o Ticket Médio por comanda, garantindo mais lucro líquido em cada entrega.",
        deliverables: [
          "Criação de combos de alta margem",
          "Otimização do fluxo de compra",
          "Eliminação de gargalos que queimam margem"
        ],
        telemetry: "Aumento de Margem por Pedido"
      },
      {
        icon: <FaComments className="text-amber-400 text-lg" />,
        badge: "LTV & Base Própria",
        title: "Especialista em Retenção WhatsApp",
        role: "Automação de Recompra & Fidelização",
        desc: "Estrutura réguas automáticas no WhatsApp para reativar clientes em 30, 60 e 90 dias. Faz o mesmo cliente pedir de novo sem você pagar comissão para marketplaces.",
        deliverables: [
          "Réguas inteligentes de recompra",
          "Construção de base de clientes própria",
          "Redução da dependência do iFood"
        ],
        telemetry: "Reativação Contínua de Clientes"
      }
    ];

    // Telemetria do Compromisso Operacional
    const operationalCommitments = [
      {
        icon: <FaWhatsapp className="text-emerald-400 text-base" />,
        label: "Canal Direto no WhatsApp",
        desc: "Contato direto com os especialistas da sua conta, sem abrir ticket nem falar com robô."
      },
      {
        icon: <FaClock className="text-amber-400 text-base" />,
        label: "SLA < 15 Minutos",
        desc: "Velocidade e agilidade em horário de operação comercial quando seu salão e delivery estão rodando."
      },
      {
        icon: <FaArrowTrendUp className="text-amber-300 text-base" />,
        label: "Acompanhamento Semanal",
        desc: "Relatórios claros de quanto dinheiro entrou no caixa e métricas reais de retorno."
      },
      {
        icon: <FaShieldHalved className="text-sky-400 text-base" />,
        label: "Zero Contrato de Fidelidade",
        desc: "Trabalhamos mês a mês para merecer sua parceria, sem prender você em contratos de longo prazo."
      }
    ];

    // Os 3 Pilares Fundamentais
    const values = [
      {
        icon: <FaUserShield />,
        title: "Equipe Dedicada à Sua Operação",
        desc: "Você não divide a atenção com dezenas de clientes esquecidos. Sua conta tem profissionais dedicados monitorando sua região e concorrentes diariamente."
      },
      {
        icon: <FaRocket />,
        title: "Foco Obsessivo em Resultados",
        desc: data?.resultsValueDesc || "Nosso objetivo é sempre a performance máxima do seu negócio. Focamos em comandas batendo na cozinha e lucro no seu bolso."
      },
      {
        icon: <FaHandshake />,
        title: "União e Foco Operacional",
        desc: "Não somos apenas uma agência de posts. Entramos de cabeça na sua operação para entender suas margens, sua praça e acelerar seu faturamento."
      }
    ];

    return (
        <section id="time" className="relative flex flex-col items-center justify-center px-4 py-28 sm:py-32 w-full overflow-hidden">
            {/* Background Accent */}
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#FFB400]/5 blur-[160px] -z-10 -top-20 -right-40"></div>
            
            <div className="w-full lg:w-[85%] max-w-6xl flex flex-col items-center">
                
                {/* Storytelling Header */}
                <div className="text-center mb-16 sm:mb-20 max-w-4xl px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6 inline-flex items-center bg-amber-400/10 border rounded-full px-4 py-1.5 border-amber-400/25 text-amber-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md"
                    >
                        <FaUsers className="text-[11px] text-amber-400" />
                        <span>Squad de Performance • Sem Terceirização</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
                    >
                        A equipe de performance <br className="hidden md:block"/>
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.4)]">
                            por trás do seu negócio.
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-neutral-300 text-base sm:text-lg md:text-xl mt-6 leading-relaxed max-w-3xl mx-auto font-medium"
                    >
                        {data?.subtext || "A parceria que sua operação merece. Você não contrata freelancers soltos: ativa um squad especializado em delivery e restaurantes operando diariamente para encher seu salão e travar seu WhatsApp de pedidos."}
                    </motion.p>
                </div>

                {/* PAINEL CENTRAL DE COMANDO DA OPERAÇÃO (SQUAD DECK) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="w-full bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-neutral-950 border border-amber-400/30 rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 mb-8 shadow-[0_0_50px_rgba(255,180,0,0.06)] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/5 blur-[100px] -z-10 pointer-events-none" />

                    {/* Header do Painel */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                        <div className="space-y-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold uppercase tracking-wider">
                                <FaCrown className="text-amber-400 text-xs" />
                                <span>Centro de Comando Nivix</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                                Como o seu squad opera no dia a dia
                            </h3>
                        </div>

                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-neutral-300 text-xs font-mono">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Operação Ativa 24/7</span>
                        </div>
                    </div>

                    {/* 4 Compromissos Operacionais em Linha */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                        {operationalCommitments.map((item, idx) => (
                            <div 
                                key={idx}
                                className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col justify-between space-y-2 group hover:border-amber-400/40 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-white text-xs font-bold tracking-tight">
                                        {item.label}
                                    </span>
                                </div>
                                <p className="text-neutral-400 text-[11px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 4 CARDS DOS ESPECIALISTAS DO SQUAD (GRID 2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
                    {squadSpecialists.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-7 sm:p-8 bg-neutral-900/60 border border-neutral-800 rounded-[30px] flex flex-col justify-between shadow-xl hover:border-amber-400/40 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Glow de fundo */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/5 blur-[70px] -z-10 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                            <div>
                                {/* Topo: Badge + Ícone */}
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <span className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 text-amber-300 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                                        {item.badge}
                                    </span>
                                    <div className="w-11 h-11 rounded-2xl bg-neutral-800/80 border border-amber-400/20 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                </div>

                                <h4 className="text-white font-black text-xl sm:text-2xl tracking-tight group-hover:text-amber-300 transition-colors">
                                    {item.title}
                                </h4>
                                <div className="text-amber-400/80 font-mono text-xs font-semibold mt-1">
                                    {item.role}
                                </div>

                                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mt-4 font-normal">
                                    {item.desc}
                                </p>

                                {/* Lista de Entregas do Especialista */}
                                <div className="mt-5 pt-4 border-t border-neutral-800/80 space-y-2">
                                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                                        Entregáveis da Função:
                                    </div>
                                    {item.deliverables.map((del, dIdx) => (
                                        <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                                            <FaCheck className="text-amber-400 text-[10px] shrink-0" />
                                            <span>{del}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rodapé do Card */}
                            <div className="mt-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                                <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                                    <FaCircleDot className="text-[7px] animate-pulse" />
                                    <span>{item.telemetry}</span>
                                </span>
                                <span className="text-neutral-500 text-[10px] uppercase">
                                    Squad Ativo
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3 VALORES DA PARCERIA (MANTIDOS E REFINADOS) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                    {values.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
                            className="p-7 sm:p-8 bg-neutral-900/40 border border-neutral-800/70 backdrop-blur-xl rounded-[28px] sm:rounded-[32px] hover:border-amber-400/30 transition-all duration-500 group shadow-lg"
                        >
                            <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-neutral-800/80 flex items-center justify-center text-amber-400 text-xl sm:text-2xl mb-5 border border-amber-400/20 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-lg sm:text-xl font-bold mb-2 tracking-tight group-hover:text-amber-300 transition-colors">{item.title}</h4>
                            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Call to Action for Team Section */}
                <div className="mt-16 sm:mt-20 flex flex-col items-center">
                    <p className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8 text-center">Não jogue sozinho contra o mercado</p>
                    <motion.a 
                        href="#form" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold px-12 sm:px-20 py-4 sm:py-5 rounded-2xl shadow-[0_15px_40px_rgba(0,255,42,0.15)] text-base sm:text-lg text-center"
                    >
                        Quero esse time comigo
                    </motion.a>
                </div>

                {/* SOFT-BREAK (CONTINUIDADE PARA FAQ) */}
                <div className="mt-20 sm:mt-24 w-full flex flex-col items-center">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-[1px] bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-10 h-10 rounded-full bg-neutral-900 border border-amber-400/30 flex items-center justify-center my-3 shadow-[0_0_20px_rgba(255,180,0,0.2)] z-10"
                    >
                        <FaUsers className="text-amber-400 text-sm" />
                    </motion.div>
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: 50 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="w-[1px] bg-gradient-to-b from-amber-400/20 to-transparent"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
