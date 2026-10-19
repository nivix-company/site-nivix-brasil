import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaChartLine, FaRocket, FaMoneyBillTrendUp, FaStore, FaChevronDown } from "react-icons/fa6";
import { NicheConfig } from "@/data/niches";

const iconMap = {
    store: <FaStore />,
    money: <FaMoneyBillTrendUp />,
    rocket: <FaRocket />,
    chart: <FaChartLine />,
};

const defaultMainQuestions = [
    {
        id: 1,
        iconKey: "store" as const,
        title: 'Meu restaurante é pequeno ou está "bagunçado", serve para mim?',
        answer: 'Sim. Não somos apenas tráfego; ajudamos a organizar sua Engenharia de Cardápio e Fluxo de Atendimento. Preparamos sua casa para receber a demanda e escalar sem que o marketing se torne um balde furado.',
        size: 'md:col-span-2',
        color: '#FFB400'
    },
    {
        id: 2,
        iconKey: "money" as const,
        title: 'É um gasto ou investimento?',
        answer: 'Você não precisa de post bonitinho, precisa de mesa cheia. A Nivix foca em ROI real. Se não entregarmos resultado, seu dinheiro volta.',
        size: 'md:col-span-1',
        color: '#00ff2a'
    },
    {
        id: 3,
        iconKey: "rocket" as const,
        title: 'Quanto investir?',
        answer: 'Temos cases de faturamento de 30k com 1.5k de tráfego. Com a Nivix, cada real vai para onde traz retorno real.',
        size: 'md:col-span-1',
        color: '#FFB400'
    },
    {
        id: 4,
        iconKey: "chart" as const,
        title: 'Vai aumentar o número de pedidos?',
        answer: 'Não somos agência de curtida. Somos agência de comanda batendo. Já fizemos pizzarias saltarem de 12 para 97 pedidos em 21 dias com estratégias validadas de performance.',
        size: 'md:col-span-2',
        color: '#FFEA00'
    }
];

const defaultTechnicalQuestions = [
    {
        id: 5,
        question: 'O que exatamente a Nivix faz no dia a dia do meu negócio?',
        answer: 'Cuidamos de toda a inteligência de crescimento: gestão de tráfego (Meta/Google), criação de artes e vídeos para anúncios, otimização do seu cardápio digital e análise semanal de métricas para garantir que o lucro esteja subindo.'
    },
    {
        id: 6,
        question: 'Preciso assinar um contrato de fidelidade de longo prazo?',
        answer: 'Não. Nosso contrato é livre de amarras porque acreditamos no resultado. Se você está lucrando e satisfeito com o serviço, você fica. Você tem total liberdade para cancelar quando quiser, sem multas abusivas.'
    },
    {
        id: 7,
        question: 'Como eu acompanho os resultados e o que está sendo feito?',
        answer: 'Transparência total. Você terá acesso a um grupo exclusivo no WhatsApp com seu gestor e receberá relatórios semanais e mensais detalhando cada centavo investido e o retorno em pedidos gerado.'
    },
    {
        id: 8,
        question: 'Além do valor da Nivix, quanto devo investir em anúncios?',
        answer: 'O investimento em anúncios (Meta/Google) é pago diretamente às plataformas. Recomendamos começar com um valor que faça sentido para sua realidade atual e escalar conforme o lucro for voltando para o caixa.'
    }
];

const OurWork = ({ data }: { data?: NicheConfig["faq"] }) => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const mainQuestions = data?.mainQuestions || defaultMainQuestions;
    const technicalQuestions = data?.technicalQuestions || defaultTechnicalQuestions;

    return (
        <motion.section id="FAQ" className="w-full h-full flex flex-col justify-center items-center pb-16 pt-4">  
            <div className="w-full lg:w-[70%] flex flex-col items-center">
                
                {/* Header Principal */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-4 inline-flex items-center bg-neutral-900/50 border rounded-full px-4 py-1.5 border-[#FFB400]/30 text-[#FFB400] text-[10px] font-black uppercase tracking-[0.2em] gap-2 backdrop-blur-md"
                    >
                        <img className="w-4" src="/diamond.png" alt="" />
                        <span>Respostas Diretas</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-4xl md:text-5xl font-semibold text-center text-white tracking-tight mx-auto"
                    >
                        Nós matamos todas as <span> </span>
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.7)]">
                            suas dúvidas
                        </span>
                    </motion.h2>
                </div>

                {/* Grid Bento Box (Principais Dúvidas + Técnicas) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-2">
                    {mainQuestions.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                            className={`${item.size} group relative p-8 rounded-[32px] bg-neutral-900/40 border border-neutral-800/60 hover:border-[#FFB400]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-xl mb-6 border border-neutral-700/50 group-hover:scale-110 transition-transform duration-500 ease-out" style={{ color: item.color }}>
                                    {iconMap[item.iconKey] || <FaStore />}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#FFB400] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-base md:text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {item.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Card de Dúvidas Técnicas - Full Width Bento */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="md:col-span-3 relative p-8 rounded-[32px] bg-neutral-900/20 border border-neutral-800/40 hover:border-[#FFB400]/20 transition-all duration-500 overflow-hidden"
                    >
                        <h4 className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-6 ml-1">Outras perguntas</h4>
                        <div className="flex flex-col gap-1 w-full">
                            {technicalQuestions.map((item) => (
                                <div key={item.id} className="flex flex-col w-full"> 
                                    <button 
                                        onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)} 
                                        className="w-full text-left transition-all duration-300 py-2.5 px-2 rounded-xl flex justify-between items-center bg-transparent hover:bg-white/5 group"
                                    >
                                        <span className="text-white/30 group-hover:text-white/50 transition-colors font-medium text-xs md:text-sm">
                                            {item.question}
                                        </span>
                                        <span className={`text-[10px] transition-transform duration-300 ${openQuestion === item.id ? "text-[#FFB400] rotate-180" : "text-white/20"}`}>
                                            <FaChevronDown />
                                        </span>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {openQuestion === item.id && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }} 
                                                animate={{ opacity: 1, height: "auto" }} 
                                                exit={{ opacity: 0, height: 0 }} 
                                                className="overflow-hidden"
                                            >
                                                <div className="px-2 pb-4 pt-1 text-white/30 text-[11px] md:text-xs leading-relaxed w-full">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-white">Pronto para ser o próximo case?</h3>
                    <motion.a 
                        href="#form" 
                        whileHover={{ scale: 1.003 }}
                        className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] mt-8 transition font-semibold px-24 py-5 rounded-2xl text-lg shadow-[0_15px_40px_rgba(0,255,42,0.15)]"
                    >
                        Iniciar Diagnóstico Gratuito
                    </motion.a>
                </div>
            </div>

            {/* DIVISOR DE SEÇÃO - HARD DIVIDER (TRANSICAO PARA DECISÃO FINAL) */}
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
                    <FaArrowRight className="text-[#FFB400] text-sm" />
                </motion.div>
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent top-16 -z-0"
                ></motion.div>
            </div>
        </motion.section>
    );
}
 
export default OurWork;
