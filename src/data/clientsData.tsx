// data/clientsData.ts
'use client';
import React from "react";


//Instalar biblioteca FA para icones

export interface Client {
  id: number;
  companyName: string;
  description: string;
  imagePath: string;
  fireImagePath: string;
  fireText: string;
}

export const clients: Client[] = [
  {
    id: 1,
    companyName: "Gratto Pizzaria",
    description: "Referência em alta performance e delivery. Estruturação completa de funil de vendas, branding e escala diária de novos pedidos com a assessoria da Nivix.",
    imagePath: "/grattopv.png",                                                        
    fireImagePath: "/fogo.png",
    fireText: "Escala Contínua",
  },
  {
    id: 2,
    companyName: "Vellaro Pizzaria",
    description: "Desacreditado de marketing, já tinha feito serviços frustrados com outra agência, a Vellaro confiou em nós e se tornou um dos maiores cases da Nivix",
    imagePath: "/vellarologo.jpeg",
    fireImagePath: "/fogo.png",
    fireText: "3 anos",
  },
  {
    id: 3,
    companyName: "Gambito Bar",
    description: "Social media de alto padrão, drinks autorais e reconhecimento na região, com estratégias de delivery e captação de clientes que mudaram o jogo da operação.",
    imagePath: "/gamblogo.jpg",
    fireImagePath: "/fogo.png",
    fireText: "Parceria Elite",
  },
  {
    id: 4,
    companyName: "Anabela - Forno a Lenha",
    description: "Um grande desafio, problemas na frota de entregadores, demora na entrega, midia social desorganizada e marketing mal feito. Reprojetamos por completo, hoje a Anabela se consolida a maior pizzaria da cidade",
    imagePath: "/cases/case-anabela.jpg",
    fireImagePath: "/fogo.png",
    fireText: "4 anos",
  },
  {
    id: 6,
    companyName: "Restaurante Sabores da Vila",
    description: "Salão vazio sem previsibilidade, dificuldade de atrair clientes, ajustamos o posicionamento da marca junto a trafégo de reconhecimento, começamos a encher o salão e ter clientes fiéis.",
    imagePath: "/svlogo.jpeg",
    fireImagePath: "/fogo.png",
    fireText: "10 meses",
  },
];