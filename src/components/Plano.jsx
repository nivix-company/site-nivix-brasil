'use client';
import { motion } from "framer-motion";
import { FaCheck, FaUnlock, FaShieldHalved, FaArrowTrendUp, FaUsersViewfinder } from "react-icons/fa6";

const defaultFeatures = [
    { title: "Tráfego de Conversão", desc: "Anúncios segmentados de alta conversão." },
    { title: "Social Media Essencial", desc: "Suas redes sociais profissionais que vão dar água na boca." },
    { title: "Engenharia de Cardápio", desc: "Seu cardápio vira uma máquina de pedidos." },
    { title: "Análise de Dados", desc: "Relatórios semanais e mensal pra você ver o progresso." },
    { title: "CRM e Recorrência", desc: "Estratégias para reter a base de clientes e fazê-los pedir sempre." },
    { title: "Automação de Vendas", desc: "IA e Chatbots para não perder pedidos por demora." },
    { title: "Consultoria de Elite", desc: "Squad dedicado para otimizar toda sua operação." },
    { title: "Suporte VIP 24/7", desc: "Acesso direto ao seu gestor via WhatsApp a qualquer hora." }
];

const Plano = ({ data }) => {
    const features = data?.features || defaultFeatures;
    const currency = data?.currency || "R$";
    const marketAnchor = data?.marketAnchor || "R$ 2.600/mês";
    const price = data?.price || "800";
    const annualSavings = data?.annualSavings || "R$ 21.600/ano";

    return (
        <section id="planos" className="relative flex flex-col items-center justify-center px-4 py-12 w-full overflow-hidden">
            {/* Background Glow */}
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#FFB400]/5 blur-[150px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="w-full lg:w-[80%] flex flex-col items-center">
                {/* Header da Seção */}
                <div className="text-center mb-16 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-4 inline-flex items-center bg-neutral-900/50 border rounded-full px-4 py-1.5 border-[#FFB400]/30 text-[#FFB400] text-[10px] font-black uppercase tracking-[0.2em] gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,180,0,0.1)]"
                    >
                        <FaUnlock className="text-[9px]" />
                        <span>Sem Amarras, Sem Pegadinhas</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
                    >
                        Plano <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.5)]">Único</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg md:text-2xl mt-4 leading-relaxed"
                    >
                        {data.desc}
                    </motion.p>
                </div>

                {/* Card Principal de Preço */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full bg-neutral-900/60 border-2 border-neutral-700/50 backdrop-blur-3xl rounded-[40px] p-8 lg:p-14 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-[#FFB400] text-black font-black text-[10px] uppercase tracking-widest px-10 py-2 rotate-45 translate-x-[35px] translate-y-[25px] shadow-xl z-20 flex justify-center items-center text-center">
                        Plano Essential
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Coluna de Preço - Foco Total na Âncora */}
                        <div className="w-full lg:w-[35%] flex flex-col items-center justify-center lg:border-r border-neutral-800 lg:pr-12">
                            <div className="text-center w-full">
                                <div className="relative inline-block mb-4">
                                    <span className="text-red-500/80 text-sm font-black line-through block uppercase tracking-widest">Mercado: {marketAnchor}</span>
                                    <div className="absolute -right-16 -top-2 bg-red-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full rotate-12 shadow-lg animate-pulse">
                                        ARMADILHA
                                    </div>
                                </div>

                                <div className="flex items-end gap-1 justify-center relative">
                                    <span className="text-white text-3xl font-bold mb-6">{currency}</span>
                                    <span className="text-9xl md:text-[10rem] font-black bg-gradient-to-b from-white via-white to-neutral-600 bg-clip-text text-transparent tracking-tighter leading-none">
                                        {price}
                                    </span>
                                    <div className="flex flex-col items-start mb-6">
                                        <span className="text-[#00ff2a] text-xl font-bold leading-none">/mês</span>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-neutral-900/50 border border-neutral-800 rounded-2xl">
                                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest leading-relaxed">
                                        Nosso plano é único. <br/>
                                        <span className="text-white">O preço não muda, sem pegadinhas.</span>
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col items-center gap-2">
                                    <p className="text-[#FFB400] text-xs font-black tracking-[0.2em] uppercase flex items-center gap-2">
                                        <FaArrowTrendUp className="animate-bounce" /> Economia de {annualSavings}
                                    </p>
                                    <div className="h-0.5 w-12 bg-neutral-800 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna de Entregáveis + Copys de Segurança */}
                        <div className="w-full lg:w-[65%] flex flex-col justify-between">
                            {/* Grid de Entregáveis */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                                {features.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex flex-col group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#FFB400]/10 flex items-center justify-center text-[#FFB400] text-[10px] shrink-0 group-hover:bg-[#FFB400] group-hover:text-black transition-all">
                                                <FaCheck />
                                            </div>
                                            <span className="text-white text-base font-bold tracking-tight group-hover:text-[#FFB400] transition-colors">{feature.title}</span>
                                        </div>
                                        <p className="text-neutral-500 text-xs leading-relaxed ml-8 group-hover:text-neutral-300 transition-colors -mt-0.5">
                                            {feature.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Aviso de Personalização */}
                            <div className="mb-6 px-4 py-3 bg-neutral-900/30 border border-neutral-800 rounded-2xl flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FFB400] animate-pulse"></div>
                                <p className="text-[10px] md:text-xs text-neutral-400 font-medium">
                                    Precisa de algo mais específico? <span className="text-white font-bold">Personalizamos o plano conforme a necessidade do seu negócio.</span>
                                </p>
                            </div>

                            {/* Copys de Segurança e Risco Zero Rebaixadas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-neutral-800/50">
                                <div className="p-5 bg-red-950/20 border border-red-500/30 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none"></div>
                                    <p className="text-xs text-red-200 leading-relaxed font-bold text-center relative z-10">
                                        "Se não dermos um resultado de no mínimo que pague seu custo, <span className="text-white underline decoration-red-500">fechamos as portas e devolvemos seu dinheiro!</span>"
                                    </p>
                                </div>

                                <div className="p-5 bg-neutral-800/40 border border-neutral-700/30 rounded-3xl flex items-center justify-center">
                                    <p className="text-[11px] text-neutral-400 leading-relaxed text-center italic">
                                        Só ganhamos se você ganhar. Por isso <span className="text-white font-bold">não temos contratos amarrados</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="mt-12 flex flex-col items-center border-t border-neutral-800 pt-10">
                        <motion.a 
                            href="#form" 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full max-w-lg text-center text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-black py-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,255,42,0.2)] text-xl"
                        >
                            Contratar Nivix
                        </motion.a>
                        
                        <div className="mt-10 flex flex-col md:flex-row gap-8 items-center justify-center">
                            <span className="flex items-center gap-2 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">
                                <FaShieldHalved className="text-[#FFB400] text-sm" /> Risco Zero Garantido
                            </span>
                            <span className="hidden md:block w-1 h-1 rounded-full bg-neutral-800"></span>
                            <span className="flex items-center gap-2 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">
                                <FaUnlock className="text-[#FFB400] text-sm" /> Sem Multas de Rescisão
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Badges */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <motion.div 
                        initial={{ opacity: 0, x: -20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-[40px] backdrop-blur-xl flex items-center gap-6 group hover:border-[#FFB400]/30 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="w-16 h-16 rounded-[22px] bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#FFB400]/40 transition-all duration-500 shadow-inner">
                            <img src="/alerta.png" className="w-8 opacity-40 group-hover:opacity-100 transition-all duration-500 brightness-110" alt="" />
                        </div>
                        
                        <div className="space-y-1.5 relative z-10">
                             <p className="text-white font-bold text-xl leading-tight group-hover:text-[#FFB400] transition-colors">Chega de contratos abusivos</p>
                             <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                                Você não precisa ficar preso a contratos de 6 meses pagando <span className="text-white font-semibold">{marketAnchor}</span> para ter um marketing de elite.
                             </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-[40px] backdrop-blur-xl flex items-center gap-6 group hover:border-[#FFB400]/30 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="w-16 h-16 rounded-[22px] bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#FFB400]/40 transition-all duration-500 shadow-inner">
                            <img src="/mais.png" className="w-8 opacity-40 group-hover:opacity-100 transition-all duration-500 brightness-110" alt="" />
                        </div>

                        <div className="space-y-1.5 relative z-10">
                             <p className="text-white font-bold text-xl leading-tight group-hover:text-[#FFB400] transition-colors">Entrega além da média</p>
                             <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                                Receba mais entregáveis técnicos e estratégicos que <span className="text-white font-semibold">qualquer outra agência</span> do mercado.
                             </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* DIVISOR DE SEÇÃO - HARD DIVIDER (TRANSICAO PARA TIME) */}
            <div className="w-full flex flex-col items-center mt-24 relative">
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 128 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[1px] bg-gradient-to-b from-[#FFB400] to-transparent opacity-50"
                ></motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-[#FFB400]/30 flex items-center justify-center my-4 shadow-[0_0_20px_rgba(255,180,0,0.2)] z-10"
                >
                    <FaUsersViewfinder className="text-[#FFB400] text-sm" />
                </motion.div>
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent top-16 -z-0"
                ></motion.div>
            </div>
        </section>
    );
}

export default Plano;
