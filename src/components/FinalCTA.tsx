'use client';
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa6";

interface FinalCTAProps {
    data: {
        title: string;
        highlight: string;
        subtitle: string;
    };
    niche?: string;
}

const FinalCTA = ({ data, niche }: FinalCTAProps) => {
    const pathname = usePathname();
    const isBuilders = niche === "builders" || pathname?.startsWith("/builders");
    const whatsappUrl = isBuilders 
        ? "https://wa.me/17044254698" 
        : "https://wa.me/5554999656522";
    return (
        <section className="w-full py-32 px-4 flex justify-center relative overflow-hidden">
            {/* Massive Background Glow */}
            <div className="absolute w-[1000px] h-[600px] rounded-full bg-[#FFB400]/10 blur-[180px] -z-10 bottom-[-20%] left-1/2 -translate-x-1/2"></div>
            
            <div className="w-full lg:w-[70%] max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-2xl rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden group hover:border-[#FFB400]/30 transition-all duration-700 shadow-2xl"
                >
                    {/* Interior Design Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB400]/20 to-transparent"></div>
                    
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-[#FFB400]/10 px-4 py-1.5 rounded-full border border-[#FFB400]/20 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB400] animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFB400]">Chegou a hora!</span>
                        </motion.div>

                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="text-3xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4"
                        >
                            {data.title} <br/>
                            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.4)]">
                                {data.highlight}
                            </span>
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                            className="text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            {data.subtitle}
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                            className="pt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
                        >
                            <motion.a 
                                href="#form" 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full md:w-auto px-12 py-6 bg-gradient-to-r from-[#00ff2a] to-[#003f17] rounded-2xl text-white font-black text-xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(0,255,42,0.3)] hover:shadow-[0_20px_60px_rgba(0,255,42,0.5)] transition-all"
                            >
                                Contratar a Nivix
                                <FaArrowRight className="text-lg" />
                            </motion.a>

                            <motion.a 
                                href={whatsappUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full md:w-auto px-12 py-6 bg-neutral-800/80 border border-neutral-700 rounded-2xl text-white font-bold text-xl flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all"
                            >
                                <FaWhatsapp className="text-2xl text-[#00ff2a]" />
                                Falar com Especialista
                            </motion.a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="pt-12"
                        >
                             <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Agradecemos o seu tempo. — Nivix Company</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default FinalCTA;
