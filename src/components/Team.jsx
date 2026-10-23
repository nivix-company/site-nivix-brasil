'use client';
import { motion } from "framer-motion";
import { 
    FaRocket, 
    FaUserShield, 
    FaHandshake, 
    FaUsers, 
    FaBullhorn, 
    FaVideo, 
    FaChartLine, 
    FaCrown,
    FaCircleDot
} from "react-icons/fa6";

const Team = ({ data }) => {
    const squadCards = [
      {
        image: "/team/traffic-squad.jpg",
        tag: "Tráfego & Performance",
        title: "Gestor Dedicado de Mídia",
        desc: "Otimização diária de campanhas no Meta Ads e Google Ads, buscando o menor CPA e maximizando o volume de pedidos diários.",
        icon: <FaBullhorn className="text-amber-400 text-xs" />
      },
      {
        image: "/team/creative-food.jpg",
        tag: "Audiovisual & FoodPorn",
        title: "Direção de Criativos de Desejo",
        desc: "Captação e edição profissional focada em dar água na boca, transformando visualizações em clientes pedindo no cardápio.",
        icon: <FaVideo className="text-amber-400 text-xs" />
      },
      {
        image: "/team/growth-meeting.jpg",
        tag: "Growth & Engenharia de Cardápio",
        title: "Estratégia de LTV & Retenção",
        desc: "Análise constante de ticket médio, precificação estratégica e réguas de relacionamento no WhatsApp para fidelizar sua base.",
        icon: <FaChartLine className="text-amber-400 text-xs" />
      }
    ];

    const values = [
      {
        icon: <FaUserShield />,
        title: "Equipe Dedicada",
        desc: "Você terá um gestor e uma equipe dedicada ao seu negócio, 24/7. Parceria direta e sem intermediários."
      },
      {
        icon: <FaRocket />,
        title: "Resultados e Escala",
        desc: data?.resultsValueDesc || "Nosso objetivo é sempre a performance máxima do seu negócio. Focamos em lotar o seu app de pedidos!"
      },
      {
        icon: <FaHandshake />,
        title: "União e Foco Operacional",
        desc: "Não brincamos em serviço. Entramos na sua operação de cabeça para entender cada ponto e escalar juntos."
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
                        <span>Onde o trabalho acontece por você</span>
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
                        {data?.subtext || "A parceria que sua operação merece. Faça parte do ecossistema que respira o mercado de delivery e escala de pedidos 24h por dia."}
                    </motion.p>
                </div>

                {/* Main Hero Shot: QG Nivix Command Center */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[320px] bg-neutral-950 border border-amber-400/30 rounded-[32px] sm:rounded-[40px] overflow-hidden group shadow-[0_0_50px_rgba(255,180,0,0.08)] mb-8"
                >
                    <img 
                        src="/team/qg-warroom.jpg" 
                        alt="QG Nivix - War Room de Performance" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-95 group-hover:brightness-100"
                    />
                    {/* Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/40 z-10 pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-5 sm:top-6 inset-x-5 sm:inset-x-8 flex items-center justify-between gap-3 z-20">
                        <span className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-lg">
                            <FaCrown className="text-amber-400 text-xs" />
                            <span>QG NIVIX • Centro de Comando</span>
                        </span>

                        <span className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 text-neutral-200 text-xs px-3.5 py-1.5 rounded-full font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="hidden sm:inline">Operação Ativa</span>
                            <span>24/7</span>
                        </span>
                    </div>
                    
                    {/* Floating Info Bottom */}
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                        <div className="space-y-1.5 max-w-xl">
                            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-amber-400/20">
                                Squad Multidisciplinar
                            </span>
                            <h3 className="text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-tight drop-shadow-md">
                                Onde sua escala é construída.
                            </h3>
                            <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-lg drop-shadow">
                                {data?.description || "Ative o QG que entende tudo sobre atração de clientes, retenção e escala de pedidos diários."}
                            </p>
                        </div>

                        <div className="hidden sm:flex items-center gap-3 bg-black/80 backdrop-blur-md border border-neutral-800 px-4 py-2.5 rounded-2xl shrink-0">
                            <div className="text-right font-mono">
                                <div className="text-xs font-bold text-amber-300">+620 Clientes</div>
                                <div className="text-[10px] text-neutral-400">Escalados no Brasil</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3 Squad Specialists / Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
                    {squadCards.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
                            whileHover={{ y: -6 }}
                            className="bg-neutral-900/60 border border-neutral-800 rounded-[28px] overflow-hidden flex flex-col justify-between shadow-xl hover:border-amber-400/40 transition-all duration-500 group"
                        >
                            {/* Card Image */}
                            <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-950 shrink-0">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />
                                
                                {/* Tag Top-Left */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                                        {item.icon}
                                        <span>{item.tag}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-neutral-950/90 to-neutral-900/90 space-y-3">
                                <div>
                                    <h4 className="text-white font-bold text-lg sm:text-xl tracking-tight group-hover:text-amber-300 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                                    <span className="flex items-center gap-1 text-[11px] text-emerald-400">
                                        <FaCircleDot className="text-[8px] animate-pulse" /> Dedicado à sua operação
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Values/Exclusivity Grid */}
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
}

export default Team;
