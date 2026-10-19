'use client';
import { motion } from "framer-motion";
import { 
    FaHubspot, 
    FaRobot, 
    FaChartLine, 
    FaPenNib, 
    FaMobileScreenButton, 
    FaArrowsSpin,
    FaCubesStacked,
    FaCirclePlay,
    FaBullhorn,
    FaEnvelopeOpenText,
    FaWhatsapp,
    FaInstagram,
    FaGoogle,
    FaStore,
    FaMagnifyingGlassChart,
    FaRocket,
    FaShieldHalved,
    FaCompass,
    FaLightbulb
} from "react-icons/fa6";

const Ecosystem360 = ({ data }) => {
    const solutions = [
        { icon: <FaBullhorn />, title: "Tráfego Pago" },
        { icon: <FaInstagram />, title: "Social Media" },
        { icon: <FaHubspot />, title: "CRM Pro" },
        { icon: <FaRobot />, title: "Automações" },
        { icon: <FaChartLine />, title: "Growth" },
        { icon: <FaPenNib />, title: "Copywriting" },
        { icon: <FaMobileScreenButton />, title: "UX Design" },
        { icon: <FaCubesStacked />, title: data?.specialCardTitle || "Menu Eng." },
        { icon: <FaWhatsapp />, title: "Sales Chat" },
        { icon: <FaEnvelopeOpenText />, title: "E-mail Mkt" },
        { icon: <FaGoogle />, title: "Google Ads" },
        { icon: <FaStore />, title: "Local SEO" },
        { icon: <FaMagnifyingGlassChart />, title: "Analytics" },
        { icon: <FaRocket />, title: "Escala" },
        { icon: <FaShieldHalved />, title: "Branding" },
        { icon: <FaCompass />, title: "Estratégia" },
        { icon: <FaLightbulb />, title: "Inovação" },
        { icon: <FaArrowsSpin />, title: "Recorrência" },
    ];

    return (
        <section id="ecossistema" className="relative flex flex-col items-center justify-center px-4 py-24 w-full overflow-hidden">
            {/* Background Glow */}
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#FFB400]/5 blur-[160px] -z-10 top-0 left-0 animate-pulse"></div>

            <div className="w-full lg:w-[90%] flex flex-col items-center">
                
                {/* Header da Seção */}
                <div className="text-center mb-20 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6 inline-flex items-center bg-[#FFB400]/10 border border-[#FFB400]/30 rounded-full px-5 py-2 text-[#FFB400] text-[11px] font-black uppercase tracking-[0.2em] gap-3 backdrop-blur-md"
                    >
                        <FaArrowsSpin className="animate-spin-slow" />
                        <span>{data.badge}</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        Tudo que você precisa <br />
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.4)]">
                            em um único lugar.
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-neutral-400 text-lg md:text-xl mt-8 leading-relaxed max-w-3xl"
                    >
                        {data.desc}
                    </motion.p>
                </div>

                {/* High-Density Small Card Grid */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mb-12">
                    {solutions.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                delay: index * 0.05,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ 
                                y: -5, 
                                borderColor: "rgba(255, 180, 0, 0.4)",
                                backgroundColor: "rgba(255, 180, 0, 0.05)" 
                            }}
                            className="flex items-center gap-3 px-4 py-3 bg-neutral-900/40 border border-neutral-800 rounded-2xl backdrop-blur-md transition-all duration-300 group"
                        >
                            <span className="text-[#FFB400] text-sm group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.title}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Card Especial: Futuro SaaS / Plataforma (Mantido conforme solicitado) */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="w-full max-w-6xl p-8 md:p-12 bg-gradient-to-br from-[#FFB400]/10 via-neutral-900/60 to-neutral-900 border-2 border-[#FFB400]/30 backdrop-blur-2xl rounded-[40px] relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB400]/5 blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                    
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-neutral-900/80 px-4 py-1.5 rounded-full border border-white/5">
                                <span className="w-2 h-2 rounded-full bg-[#00ff2a] animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/70 italic">Disponível em breve para parceiros</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                O Hub de Inteligência <br />
                                <span className="text-[#FFB400]">Lead Elite Plataform</span>
                            </h3>
                            <p className="text-neutral-400 text-base md:text-xl leading-relaxed max-w-2xl">
                                {data.platformDesc || `Imagine ter o CRM, o Cardápio Digital, a Automação e suas Métricas de Growth em um único dashboard exclusivo. Estamos construindo o futuro da ${data.platformTitle}.`}
                            </p>
                        </div>
                        
                        <div className="w-full lg:w-[350px] aspect-square rounded-[32px] bg-neutral-800/80 border border-white/5 shadow-3xl flex items-center justify-center group-hover:rotate-2 transition-transform duration-700">
                            <div className="text-center space-y-4">
                                <FaCirclePlay className="text-[#FFB400] text-7xl mx-auto opacity-30 animate-pulse" />
                                <p className="text-[10px] text-neutral-500 font-black uppercase tracking-[0.3em]">[ Interface em Desenvolvimento ]</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final Call to Action */}
                <div className="mt-20 flex flex-col items-center">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Pare de gerir retalhos. Tenha um sistema.</p>
                    <motion.a 
                        href="#form" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold px-20 py-5 rounded-2xl shadow-xl text-lg"
                    >
                        Quero fazer parte
                    </motion.a>
                </div>

                {/* SOFT-BREAK (APENAS CONTINUIDADE) */}
                <div className="mt-20 w-full flex flex-col items-center">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-[1px] bg-gradient-to-b from-neutral-800 to-[#FFB400] opacity-50"
                    ></motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="w-2 h-2 rounded-full bg-[#FFB400] shadow-[0_0_15px_#FFB400] animate-pulse my-4"
                    ></motion.div>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-[#FFB400]/50 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        TUDO ISSO EM UM...
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default Ecosystem360;
