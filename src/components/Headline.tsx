'use client'
import { motion } from "framer-motion";

interface HeadlineProps {
    data: {
        highlight: string;
        locationSuffix?: string;
        subtext: string;
    }
}

const transitionObj = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const Headline = ({ data }: HeadlineProps) => {
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                }
            }}
            className="w-full h-fit mt-16 flex justify-center flex-col items-center"
        >
           <motion.div 
               variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: transitionObj } }}
               className="mb-6 flex items-center relative justify-center border rounded-full px-4 py-1.5 border-[#FFB400]/30 text-[#FFB400] text-[10px] font-black uppercase tracking-[0.2em] gap-2 bg-[#FFB400]/5 backdrop-blur-md"
           >
            <img className="w-3 opacity-80" src="/cadeado-aberto.png" alt="" />
            <span>Contrato livre de amarras</span>
           </motion.div>

            <motion.h1 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: transitionObj } }}
                className="text-5xl [line-height:1.1] font-black text-center md:text-6xl max-w-6xl tracking-tight text-white"
            >
             A melhor equipe de <br className="md:hidden" />
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]">
                    {data.highlight}
                </span> <br className="md:hidden" />
                {data.locationSuffix || "do Brasil"}
            </motion.h1>

            <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: transitionObj } }}
                className="text-center text-lg md:text-2xl mt-6 max-w-4xl px-6 text-neutral-400 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: data.subtext }}
            />

            <motion.a 
                href="#form" 
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: transitionObj } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] mt-12 px-16 py-5 md:px-24 md:py-6 rounded-2xl font-black text-lg shadow-[0_20px_50px_rgba(0,255,42,0.2)] hover:shadow-[0_20px_60px_rgba(0,255,42,0.4)] transition-all duration-500"
            >
                Entrar em Contato
            </motion.a>

            <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1, duration: 1 } } }}
                className="w-full h-fit flex justify-center mt-12"
            >
                <a href="#form">
                    <img src="/down-arrow.png" className="w-6 h-6 animate-bounce opacity-50 hover:opacity-100 transition-opacity" />
                </a>
            </motion.div>
        </motion.div> 
    );
}
 
export default Headline;