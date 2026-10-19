'use client';
import { motion } from "framer-motion";
import { FaUsersViewfinder, FaRocket, FaUserShield, FaHandshake, FaUsers } from "react-icons/fa6";

const Team = ({ data }) => {
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
        title: "União",
        desc: "Não brincamos em serviço. Entramos na sua operação de cabeça para entender cada ponto e escalar juntos."
      }
    ];

    return (
        <section id="time" className="relative flex flex-col items-center justify-center px-4 py-32 w-full overflow-hidden">
            {/* Background Accent */}
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#FFB400]/5 blur-[160px] -z-10 -top-20 -right-40"></div>
            
            <div className="w-full lg:w-[75%] flex flex-col items-center">
                
                {/* Storytelling Header */}
                <div className="text-center mb-20 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6 inline-flex items-center bg-neutral-900/50 border rounded-full px-4 py-1.5 border-[#FFB400]/30 text-[#FFB400] text-[10px] font-black uppercase tracking-[0.2em] gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,180,0,0.1)]"
                    >
                        <FaUsers className="text-[9px]" />
                        <span className="font-black">Onde o trabalho acontece por você</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-5xl"
                    >
                        A equipe de performance <br className="hidden md:block"/>
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.4)]">
                            por trás do seu negócio.
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-neutral-400 text-lg md:text-2xl mt-8 leading-relaxed max-w-4xl mx-auto"
                    >
                        {data.subtext}
                    </motion.p>
                </div>

                {/* Team Visual / Placeholder for Office Photo */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    className="relative w-full aspect-[21/9] bg-neutral-900/60 border-2 border-neutral-800 rounded-[40px] overflow-hidden group shadow-2xl mb-20"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    {/* Placeholder content - representativo do escritório/time */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center group-hover:scale-105 transition-transform duration-700">
                             <img src="/logo.png" className="w-48 opacity-20 grayscale mb-4 mx-auto" alt="" />
                             <p className="text-neutral-500 font-bold tracking-[0.3em] uppercase text-xs">
                                {data.description}
                             </p>
                        </div>
                    </div>
                    
                    {/* Floating Info Badge over photo */}
                    <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-2">
                        <div className="bg-[#FFB400] text-black text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider w-fit">QG NIVIX</div>
                        <h4 className="text-white font-bold text-xl md:text-2xl tracking-tight">Onde a mágica acontece.</h4>
                    </div>
                </motion.div>

                {/* Values/Exclusivity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {values.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                            className="p-8 bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-xl rounded-[32px] hover:border-[#FFB400]/20 transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-[#FFB400] text-2xl mb-6 border border-neutral-700/50 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xl font-bold mb-3 tracking-tight">{item.title}</h4>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Call to Action for Team Section */}
                <div className="mt-20 flex flex-col items-center">
                    <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-8">Não jogue sozinho contra o mercado</p>
                    <motion.a 
                        href="#form" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold px-20 py-5 rounded-2xl shadow-[0_15px_40px_rgba(0,255,42,0.1)] text-lg"
                    >
                        Quero esse time comigo
                    </motion.a>
                </div>

                {/* SOFT-BREAK (CONTINUIDADE PARA FAQ) */}
                <div className="mt-24 w-full flex flex-col items-center">
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
                        ...Dúvidas?
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

export default Team;
