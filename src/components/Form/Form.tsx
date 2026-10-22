'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

const defaultValoresPermitidos = [
  "Até R$ 20 mil",
  "De R$ 20 mil a R$ 40 mil",
  "De R$ 40 mil a R$ 60 mil",
  "De R$ 60 mil a R$ 80 mil",
  "De R$ 80 mil a R$ 100 mil",
  "De R$ 100 mil a R$ 150 mil",
  "De R$ 150 mil a R$ 250 mil",
  "De R$ 250 mil a R$ 400 mil",
  "De R$ 400 mil a R$ 600 mil",
  "Acima de R$ 1 milhão",
];

const defaultInvestimentosPermitidos = [
  "Nada",
  "Até R$ 1.000",
  "De R$ 1.000 a R$ 5.000",
  "De R$ 5.000 a R$ 10.000",
  "De R$ 10.000 a R$ 20.000",
  "De R$ 20.000 a R$ 30.000",
  "Acima de R$ 30.000",
];

const baseSchema = z.object({
  nome: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
  telefone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length >= 8 && val.length <= 15, {
      message: "Digite um telefone válido (8 a 15 dígitos)",
    }),
  empresa: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
  faturamento: z.string().min(1, "Selecione uma opção válida"),
  investimento: z.string().optional(),
});

type FormData = z.infer<typeof baseSchema>;

const transitionObj = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export interface ContactFormConfig {
  phonePlaceholder?: string;
  companyPlaceholder?: string;
  revenueOptions?: string[];
  investmentOptions?: string[];
  leadSourceTag?: string;
  routePath?: string;
  hideInvestment?: boolean;
}

export default function ContactForm({ config }: { config?: ContactFormConfig }) {
  const hideInvestment = Boolean(config?.hideInvestment ?? (config?.routePath === "/builders"));
  const revenueOptions = config?.revenueOptions || defaultValoresPermitidos;
  const investmentOptions = config?.investmentOptions || defaultInvestimentosPermitidos;
  const phonePlaceholder = config?.phonePlaceholder || "WhatsApp (ex: 11999999999)";
  const companyPlaceholder = config?.companyPlaceholder || "Nome do seu Negócio";
  const leadSourceTag = config?.leadSourceTag || "Landing Page Elite";
  const routePath = config?.routePath || "/restaurantes";

  const formSchema = React.useMemo(() => {
    return z.object({
      nome: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
      telefone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => val.length >= 8 && val.length <= 15, {
          message: "Digite um telefone válido (8 a 15 dígitos)",
        }),
      empresa: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
      faturamento: z.string().min(1, "Selecione uma opção válida"),
      investimento: hideInvestment
        ? z.string().optional()
        : z.string().min(1, "Selecione uma opção válida"),
    });
  }, [hideInvestment]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Número do WhatsApp da Nivix
    const whatsappNumber = "5554999656522"; 
    
    // Formatação da mensagem para o WhatsApp
    const investmentPart = data.investimento
      ? `*Investimento em Marketing:* ${data.investimento}%0A%0A`
      : `%0A`;

    const message = `Olá, tenho interesse na consultoria gratuita para meu negócio! Seguem meus dados:%0A%0A` +
      `*Nome:* ${data.nome}%0A` +
      `*Telefone:* ${data.telefone}%0A` +
      `*Empresa:* ${data.empresa}%0A` +
      `*Faturamento:* ${data.faturamento}%0A` +
      investmentPart +
      `_Lead vindo da ${leadSourceTag}_`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      window.open(whatsappUrl, "_blank");
      window.location.replace(`/CadastroConcluido?from=${encodeURIComponent(routePath)}`);
      reset();
    } catch (error) {
      console.error("Erro ao processar redirecionamento:", error);
    }
  };

  const inputStyle = "w-full rounded-2xl bg-neutral-800/50 border-2 border-neutral-700/50 placeholder-neutral-500 text-white text-start px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50 transition-all backdrop-blur-sm";

  const formFields = [
    { name: "nome", placeholder: "Nome Completo", type: "input" },
    { name: "telefone", placeholder: phonePlaceholder, type: "input" },
    { name: "empresa", placeholder: companyPlaceholder, type: "input" },
    { 
      name: "faturamento", 
      placeholder: "Qual seu faturamento mensal?", 
      type: "select", 
      options: revenueOptions 
    },
    ...(!hideInvestment
      ? [
          {
            name: "investimento",
            placeholder: "Quanto investe em marketing hoje?",
            type: "select",
            options: investmentOptions,
          },
        ]
      : []),
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        {formFields.map((field, index) => (
          <motion.div 
            key={field.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.1, ...transitionObj }}
            className="relative group"
          >
            {field.type === "input" ? (
              <input
                {...register(field.name as any)}
                className={inputStyle}
                placeholder={field.placeholder}
              />
            ) : (
              <div className="relative">
                <select
                  {...register(field.name as any)}
                  className={inputStyle + ` appearance-none cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options?.map((valor) => (
                    <option key={valor} value={valor} className="bg-neutral-900 text-white">
                      {valor}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                </div>
              </div>
            )}
            {(errors as any)[field.name] && (
              <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{(errors as any)[field.name].message}</p>
            )}
          </motion.div>
        ))}

        {/* Botão */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, ...transitionObj }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#FFB400] to-[#cb8e00] hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-50 text-black font-black py-5 rounded-2xl transition-all shadow-xl shadow-yellow-900/20 text-sm"
        >
          {isSubmitting ? "Enviando..." : "Entrar em Contato Agora"}
        </motion.button>

        {isSubmitSuccessful && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-green-400 font-bold text-center text-xs animate-pulse"
          >
            Redirecionando para nossa equipe de elite...
          </motion.p>
        )}
      </form>
    </div>
  );
}
