'use client';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaChevronUp } from "react-icons/fa6";

interface FooterProps {
    niche?: string;
}

const defaultNavItems = [
    { name: "Resultados", href: "#depoimentos" },
    { name: "Ecossistema", href: "#ecossistema" },
    { name: "Planos", href: "#planos" },
    { name: "Sobre nós", href: "#time" },
    { name: "Dúvidas", href: "#FAQ" }
];

const buildersNavItems = [
    { name: "Contato", href: "#form" },
    { name: "Google", href: "#google" },
    { name: "Cases", href: "#cases" },
    { name: "Vantagens", href: "#vantagens" },
    { name: "Dúvidas", href: "#FAQ" }
];

const Footer = ({ niche }: FooterProps) => {
    const isBuilders = niche === "builders";
    const navItems = isBuilders ? buildersNavItems : defaultNavItems;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#FFB400]/5 blur-[100px] -z-10 bottom-[-100px] left-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 items-start">
                    
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start space-y-6">
                        <img src="/logo-n.png" alt="Nivix" className="w-14 h-14 opacity-90 object-contain" />
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:border-[#FFB400]/50 hover:text-[#FFB400] transition-all">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:border-[#FFB400]/50 hover:text-[#FFB400] transition-all">
                                <FaWhatsapp size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:border-[#FFB400]/50 hover:text-[#FFB400] transition-all">
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] mb-6 opacity-50">Missão</h4>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Transformando operações comuns em <span className="text-white font-semibold">máquinas de lucro</span> através de performance.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] mb-6 opacity-50">Navegação</h4>
                        <ul className="space-y-3">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.href} className="text-neutral-500 hover:text-[#FFB400] transition-colors text-xs font-medium tracking-wide">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Block */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] mb-6 opacity-50">Suporte</h4>
                        <div className="space-y-2">
                             <p className="text-white text-xs font-medium">Atendimento prioritário 24/7</p>
                             <a href="#form" className="inline-block text-[#FFB400] text-xs font-bold uppercase tracking-widest border-b border-[#FFB400]/30 hover:border-[#FFB400] transition-all pb-1">Falar com Consultor</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                        <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
                            © {new Date().getFullYear()} NIVIX COMPANY.
                        </p>
                        <span className="hidden md:block w-1 h-1 rounded-full bg-neutral-800"></span>
                        <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest">CNPJ: 62.759.291/0001-53</span>
                    </div>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-all"
                    >
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100">Back to Top</span>
                        <FaChevronUp size={10} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
