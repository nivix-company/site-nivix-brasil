'use client';

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMagnifyingGlass, 
  FaLocationDot, 
  FaCalendarDays, 
  FaDollarSign, 
  FaBuilding, 
  FaSliders,
  FaDownload,
  FaXmark,
  FaCircleCheck,
  FaBriefcase,
  FaTableList,
  FaTableCellsLarge,
  FaRotateRight,
  FaCheck
} from "react-icons/fa6";

interface ContractorAccount {
  id: string;
  companyName: string;
  ownerName: string;
  specialty: string;
  city: string;
  state: string;
  onboardingDate: string;
  monthsActive: number;
  daysActive: number;
  estimatesDelivered: number;
  closedRevenue: number;
  monthlyPlan: number;
  status: "ativo" | "encerrado";
  healthScore: "excelente" | "estavel";
  nps: number;
  notes: string;
}

const accountsData: ContractorAccount[] = [
  {
    id: "ACC-101",
    companyName: "Apex Kitchen & Bath",
    ownerName: "Marcos Silva",
    specialty: "Kitchen & Bath Remodeling",
    city: "Orlando",
    state: "FL",
    onboardingDate: "15/04/2024",
    monthsActive: 18,
    daysActive: 540,
    estimatesDelivered: 164,
    closedRevenue: 820000,
    monthlyPlan: 2500,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Top 1 GMB Orlando/Windermere. Operação consolidada com 3 equipes de execução."
  },
  {
    id: "ACC-102",
    companyName: "Boston Pro Flooring & Tile",
    ownerName: "Rodrigo Almeida",
    specialty: "Hardwood & LVP Flooring",
    city: "Framingham",
    state: "MA",
    onboardingDate: "10/01/2024",
    monthsActive: 21,
    daysActive: 630,
    estimatesDelivered: 210,
    closedRevenue: 690000,
    monthlyPlan: 2000,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Grande Boston. Faturamento contínuo de reformas indoor durante o inverno."
  },
  {
    id: "ACC-103",
    companyName: "Titan Roofing & Siding Pro",
    ownerName: "Eduardo Santos",
    specialty: "Roofing & Storm Restoration",
    city: "Dallas",
    state: "TX",
    onboardingDate: "05/08/2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesDelivered: 138,
    closedRevenue: 940000,
    monthlyPlan: 3200,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Ticket médio de $18,000 por telhado residencial direto com proprietários."
  },
  {
    id: "ACC-104",
    companyName: "Gold Coast Luxury Remodeling",
    ownerName: "Felipe Barreto",
    specialty: "Whole Home Remodeling",
    city: "Boca Raton",
    state: "FL",
    onboardingDate: "18/06/2024",
    monthsActive: 16,
    daysActive: 480,
    estimatesDelivered: 98,
    closedRevenue: 1150000,
    monthlyPlan: 3000,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Palm Beach County. Foco em residências de alto padrão com projetos de $80k a $150k."
  },
  {
    id: "ACC-105",
    companyName: "Vanguard Custom Framing",
    ownerName: "Lucas Ferreira",
    specialty: "Wood & Metal Framing",
    city: "Worcester",
    state: "MA",
    onboardingDate: "02/11/2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesDelivered: 85,
    closedRevenue: 540000,
    monthlyPlan: 1800,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "3 crews operando em paralelo. Agenda fechada com 60 dias de antecedência."
  },
  {
    id: "ACC-106",
    companyName: "Empire Pavers & Hardscapes",
    ownerName: "Gabriel Costa",
    specialty: "Patios, Pavers & Retaining Walls",
    city: "Newark",
    state: "NJ",
    onboardingDate: "20/01/2025",
    monthsActive: 9,
    daysActive: 270,
    estimatesDelivered: 112,
    closedRevenue: 480000,
    monthlyPlan: 2200,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "North Jersey. Média de 12 estimates presenciais qualificados por mês."
  },
  {
    id: "ACC-107",
    companyName: "Silva & Sons Construction Group",
    ownerName: "Claudio Silva",
    specialty: "General Construction & Additions",
    city: "San Diego",
    state: "CA",
    onboardingDate: "12/08/2023",
    monthsActive: 26,
    daysActive: 780,
    estimatesDelivered: 245,
    closedRevenue: 1680000,
    monthlyPlan: 4000,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Cliente veterano. Transição de sub-empreiteiro para construtora estruturada."
  },
  {
    id: "ACC-108",
    companyName: "Alpha Deck & Porch Co.",
    ownerName: "Thiago Oliveira",
    specialty: "Composite Decks & Pergolas",
    city: "Atlanta",
    state: "GA",
    onboardingDate: "14/09/2024",
    monthsActive: 13,
    daysActive: 390,
    estimatesDelivered: 124,
    closedRevenue: 620000,
    monthlyPlan: 2400,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Alpharetta e Roswell. Margem líquida média de 48% em decks de luxo."
  },
  {
    id: "ACC-109",
    companyName: "Everest Roofing Solutions",
    ownerName: "Matheus Nogueira",
    specialty: "Residential Roofing",
    city: "Charlotte",
    state: "NC",
    onboardingDate: "22/02/2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesDelivered: 78,
    closedRevenue: 490000,
    monthlyPlan: 2500,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Captação contínua de trocas de telhado na Carolina do Norte."
  },
  {
    id: "ACC-110",
    companyName: "Orlando Tile & Marble Specialists",
    ownerName: "Renato Ramos",
    specialty: "Custom Bathrooms & Tile",
    city: "Windermere",
    state: "FL",
    onboardingDate: "19/07/2024",
    monthsActive: 15,
    daysActive: 450,
    estimatesDelivered: 140,
    closedRevenue: 580000,
    monthlyPlan: 2000,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Especialista em porcelanatos de grande formato e banheiros master."
  },
  {
    id: "ACC-111",
    companyName: "Miami Custom Carpentry",
    ownerName: "Victor Hugo",
    specialty: "Finish Carpentry & Millwork",
    city: "Miami",
    state: "FL",
    onboardingDate: "05/10/2024",
    monthsActive: 12,
    daysActive: 360,
    estimatesDelivered: 94,
    closedRevenue: 510000,
    monthlyPlan: 2200,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Painéis e marcenaria sob medida em Coral Gables e Brickell."
  },
  {
    id: "ACC-112",
    companyName: "Brazilian Touch Remodeling",
    ownerName: "Alexandre Pires",
    specialty: "Basement & Kitchen Remodel",
    city: "Lowell",
    state: "MA",
    onboardingDate: "16/02/2024",
    monthsActive: 20,
    daysActive: 600,
    estimatesDelivered: 176,
    closedRevenue: 890000,
    monthlyPlan: 2600,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Transformação de porões (basements) em suítes e áreas de lazer."
  },
  {
    id: "ACC-113",
    companyName: "Diamond Drywall & Painting Pro",
    ownerName: "Leandro Rocha",
    specialty: "Drywall, Level 5 & Paint",
    city: "Austin",
    state: "TX",
    onboardingDate: "11/03/2025",
    monthsActive: 7,
    daysActive: 210,
    estimatesDelivered: 82,
    closedRevenue: 360000,
    monthlyPlan: 1800,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Acabamentos Level 5 de padrão americano para casas de luxo no Lago Travis."
  },
  {
    id: "ACC-114",
    companyName: "Prime Hardwood Floors",
    ownerName: "Daniel Moreira",
    specialty: "Hardwood Restoration & Install",
    city: "Danbury",
    state: "CT",
    onboardingDate: "08/12/2024",
    monthsActive: 10,
    daysActive: 300,
    estimatesDelivered: 89,
    closedRevenue: 420000,
    monthlyPlan: 1900,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Restauração de pisos clássicos em Connecticut. 90% dos estimates fecham no local."
  },
  {
    id: "ACC-115",
    companyName: "SunState Pools & Patios",
    ownerName: "Bruno Castilho",
    specialty: "Pool Decks & Travertine",
    city: "Tampa",
    state: "FL",
    onboardingDate: "27/05/2024",
    monthsActive: 17,
    daysActive: 510,
    estimatesDelivered: 155,
    closedRevenue: 780000,
    monthlyPlan: 2800,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Forte atuação em Tampa e St. Petersburg com travertino e decks de piscina."
  },
  {
    id: "ACC-116",
    companyName: "Nova Kitchen & Bath Renovation",
    ownerName: "Guilherme Martins",
    specialty: "Full Kitchen & Bath",
    city: "White Plains",
    state: "NY",
    onboardingDate: "14/04/2025",
    monthsActive: 6,
    daysActive: 180,
    estimatesDelivered: 64,
    closedRevenue: 520000,
    monthlyPlan: 2500,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Westchester County, NY. Homeowners pagam em média $45,000 por projeto direto."
  },
  {
    id: "ACC-117",
    companyName: "Summit Outdoor Living",
    ownerName: "Marcio Antunes",
    specialty: "Covered Patios & Enclosures",
    city: "Jacksonville",
    state: "FL",
    onboardingDate: "18/05/2025",
    monthsActive: 5,
    daysActive: 150,
    estimatesDelivered: 58,
    closedRevenue: 340000,
    monthlyPlan: 2000,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Alcançou o Top 3 no Google Maps em 45 dias de campanha estruturada."
  },
  {
    id: "ACC-118",
    companyName: "Atlantic Custom Homes & Remodel",
    ownerName: "Fabio Diniz",
    specialty: "Additions & Remodel",
    city: "Charleston",
    state: "SC",
    onboardingDate: "03/02/2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesDelivered: 72,
    closedRevenue: 680000,
    monthlyPlan: 2400,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Construção de suítes master e extensões de casas antigas na costa da Carolina do Sul."
  },
  {
    id: "ACC-119",
    companyName: "Bay State Framing Pro",
    ownerName: "Henrique Duarte",
    specialty: "Rough Framing & Trusses",
    city: "Somerville",
    state: "MA",
    onboardingDate: "12/08/2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesDelivered: 108,
    closedRevenue: 640000,
    monthlyPlan: 2200,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Transição completa de subcontratado para construtor direto no estado de Massachusetts."
  },
  {
    id: "ACC-120",
    companyName: "Lone Star Remodeling Experts",
    ownerName: "Ricardo Vargas",
    specialty: "Kitchen & Interior Remodeling",
    city: "Houston",
    state: "TX",
    onboardingDate: "20/06/2025",
    monthsActive: 4,
    daysActive: 120,
    estimatesDelivered: 48,
    closedRevenue: 290000,
    monthlyPlan: 2100,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Bateu a marca de 90 dias com 14 contratos residenciais fechados em The Woodlands e Katy."
  },
  {
    id: "ACC-121",
    companyName: "Precision Tile & Bath Pro",
    ownerName: "Wagner Lopes",
    specialty: "Custom Showers & Tile",
    city: "Malden",
    state: "MA",
    onboardingDate: "15/01/2025",
    monthsActive: 9,
    daysActive: 270,
    estimatesDelivered: 86,
    closedRevenue: 440000,
    monthlyPlan: 1900,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Google Meu Negócio com mais de 75 avaliações 5 estrelas geradas com a metodologia Nivix."
  },
  {
    id: "ACC-122",
    companyName: "ProCraft Framing & Decks",
    ownerName: "Cesar Augusto",
    specialty: "Custom Decks & Pergolas",
    city: "Denver",
    state: "CO",
    onboardingDate: "05/11/2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesDelivered: 79,
    closedRevenue: 510000,
    monthlyPlan: 2200,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Forte presença em Denver e Aurora com materiais resistentes a neve e alta altitude."
  },
  {
    id: "ACC-123",
    companyName: "Master Craft Carpentry & Trim",
    ownerName: "Julio Cesar",
    specialty: "Finish Carpentry & Wainscoting",
    city: "Kearny",
    state: "NJ",
    onboardingDate: "18/07/2024",
    monthsActive: 15,
    daysActive: 450,
    estimatesDelivered: 118,
    closedRevenue: 530000,
    monthlyPlan: 2000,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Molduras crown, painéis de parede e portas decorativas nos subúrbios ricos de New Jersey."
  },
  {
    id: "ACC-124",
    companyName: "Legacy Builders USA",
    ownerName: "Anderson Lima",
    specialty: "Whole Home Additions",
    city: "Fort Lauderdale",
    state: "FL",
    onboardingDate: "14/10/2023",
    monthsActive: 24,
    daysActive: 720,
    estimatesDelivered: 215,
    closedRevenue: 1950000,
    monthlyPlan: 4500,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "2 anos completos com a Nivix. A construtora mais lucrativa de Broward County na nossa carteira."
  },
  {
    id: "ACC-125",
    companyName: "Universal Siding & Gutters",
    ownerName: "Wellington Prado",
    specialty: "Hardie Board & Siding",
    city: "Baltimore",
    state: "MD",
    onboardingDate: "08/03/2025",
    monthsActive: 7,
    daysActive: 210,
    estimatesDelivered: 68,
    closedRevenue: 420000,
    monthlyPlan: 2000,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Instalação de James Hardie e revestimentos térmicos. Clientes pagam valor de tabela sem choro."
  },
  {
    id: "ACC-126",
    companyName: "Pinnacle Home Remodeling",
    ownerName: "Otavio Mello",
    specialty: "Kitchen & Interior Remodel",
    city: "Seattle",
    state: "WA",
    onboardingDate: "01/12/2024",
    monthsActive: 10,
    daysActive: 300,
    estimatesDelivered: 74,
    closedRevenue: 730000,
    monthlyPlan: 2800,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Bellevue e Redmond. Ticket médio de $58,000 por cozinha planejada com iluminação de LED."
  },
  {
    id: "ACC-127",
    companyName: "Atlas Roofing Solutions Pro",
    ownerName: "Sergio Mendes",
    specialty: "Metal & Shingle Roofing",
    city: "San Antonio",
    state: "TX",
    onboardingDate: "15/09/2024",
    monthsActive: 13,
    daysActive: 390,
    estimatesDelivered: 128,
    closedRevenue: 880000,
    monthlyPlan: 2900,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Trocas completas de telhado pós-tempestade de granizo. Fechamento direto com donos de casa."
  },
  {
    id: "ACC-128",
    companyName: "Sunshine State Remodeling",
    ownerName: "Vinicius Souza",
    specialty: "Kitchen & Flooring",
    city: "St. Petersburg",
    state: "FL",
    onboardingDate: "10/02/2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesDelivered: 82,
    closedRevenue: 460000,
    monthlyPlan: 2100,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Reformas de condomínios e casas à beira da baía de Tampa com margem limpa de 42%."
  },
  {
    id: "ACC-129",
    companyName: "Elite Finish Carpentry & Millwork",
    ownerName: "Rivaldo Souza",
    specialty: "Custom Closets & Cabinets",
    city: "Brockton",
    state: "MA",
    onboardingDate: "20/06/2024",
    monthsActive: 16,
    daysActive: 480,
    estimatesDelivered: 132,
    closedRevenue: 590000,
    monthlyPlan: 2300,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Closets de luxo e armários sob medida para casas de alto padrão no sul de Boston."
  },
  {
    id: "ACC-130",
    companyName: "Green Mountain Builders",
    ownerName: "Adriano Ribeiro",
    specialty: "Timber Framing & Decks",
    city: "Nashua",
    state: "NH",
    onboardingDate: "12/04/2025",
    monthsActive: 6,
    daysActive: 180,
    estimatesDelivered: 54,
    closedRevenue: 380000,
    monthlyPlan: 1900,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Obras em New Hampshire sem imposto sobre vendas. Clientes compram madeira premium."
  },
  {
    id: "ACC-131",
    companyName: "Horizon Pavers & Outdoor Living",
    ownerName: "Cristiano Melo",
    specialty: "Travertine Patios & Fire Pits",
    city: "Sarasota",
    state: "FL",
    onboardingDate: "05/01/2025",
    monthsActive: 9,
    daysActive: 270,
    estimatesDelivered: 92,
    closedRevenue: 610000,
    monthlyPlan: 2400,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Siesta Key e Lakewood Ranch. Clientes aposentados com dinheiro em conta pagando à vista."
  },
  {
    id: "ACC-132",
    companyName: "Palm Coast Construction Group",
    ownerName: "Murilo Batista",
    specialty: "Full Home Remodeling",
    city: "West Palm Beach",
    state: "FL",
    onboardingDate: "01/10/2024",
    monthsActive: 12,
    daysActive: 360,
    estimatesDelivered: 105,
    closedRevenue: 980000,
    monthlyPlan: 3100,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "1 ano fechado com a Nivix. Faturamento anual triplicou em relação aos anos de sub-empreita."
  },
  {
    id: "ACC-133",
    companyName: "Alamo City Roofing & Gutters",
    ownerName: "Diego Vasconcelos",
    specialty: "Roofing & Storm Damage",
    city: "San Antonio",
    state: "TX",
    onboardingDate: "14/11/2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesDelivered: 96,
    closedRevenue: 670000,
    monthlyPlan: 2600,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Zero dependência de seguradoras problemáticas. Estimativas fechadas direto com o dono."
  },
  {
    id: "ACC-134",
    companyName: "New England Bath & Kitchen",
    ownerName: "Samuel Costa",
    specialty: "Luxury Bathrooms",
    city: "Quincy",
    state: "MA",
    onboardingDate: "17/08/2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesDelivered: 122,
    closedRevenue: 710000,
    monthlyPlan: 2400,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Média de 3 banheiros reformados simultaneamente por mês com 2 equipes experientes."
  },
  {
    id: "ACC-135",
    companyName: "Royal Oak Remodeling",
    ownerName: "Elias Pinheiro",
    specialty: "Kitchen & Living Room Remodel",
    city: "Fort Worth",
    state: "TX",
    onboardingDate: "21/05/2025",
    monthsActive: 5,
    daysActive: 150,
    estimatesDelivered: 60,
    closedRevenue: 370000,
    monthlyPlan: 2000,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Passou da marca de 90 dias com faturamento mensal médio de $74,000 direto no bolso."
  },
  {
    id: "ACC-136",
    companyName: "Coastal Tile & Stone Pro",
    ownerName: "Gilberto Faria",
    specialty: "Custom Showers & Floors",
    city: "Cape Coral",
    state: "FL",
    onboardingDate: "04/03/2025",
    monthsActive: 7,
    daysActive: 210,
    estimatesDelivered: 76,
    closedRevenue: 390000,
    monthlyPlan: 1900,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Forte demanda em Fort Myers e Cape Coral para reformas de banheiros com acessibilidade."
  },
  {
    id: "ACC-137",
    companyName: "Metro West Framing Contractors",
    ownerName: "Valter Borges",
    specialty: "Wood Framing & Structure",
    city: "Marlborough",
    state: "MA",
    onboardingDate: "11/04/2024",
    monthsActive: 18,
    daysActive: 540,
    estimatesDelivered: 142,
    closedRevenue: 780000,
    monthlyPlan: 2500,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Estruturação completa de casas novas de 2 pavimentos. Margem bruta de 35% sem GC intermediário."
  },
  {
    id: "ACC-138",
    companyName: "Tri-State Pavers & Hardscape",
    ownerName: "Claudio Antunes",
    specialty: "Driveways & Outdoor Patios",
    city: "Elizabeth",
    state: "NJ",
    onboardingDate: "09/09/2024",
    monthsActive: 13,
    daysActive: 390,
    estimatesDelivered: 116,
    closedRevenue: 580000,
    monthlyPlan: 2200,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Union County e Bergen County. 100% dos leads vêm de proprietários de casas residenciais."
  },
  {
    id: "ACC-139",
    companyName: "Golden Gate Builders USA",
    ownerName: "Fabiano Rezende",
    specialty: "High-End Kitchen Remodel",
    city: "San Jose",
    state: "CA",
    onboardingDate: "15/02/2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesDelivered: 62,
    closedRevenue: 890000,
    monthlyPlan: 3500,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Vale do Silício. Clientes engenheiros de tecnologia com ticket médio de $75,000 por obra."
  },
  {
    id: "ACC-140",
    companyName: "Southern Star Remodeling",
    ownerName: "Luciano Braga",
    specialty: "Porches & Home Remodel",
    city: "Savannah",
    state: "GA",
    onboardingDate: "19/04/2025",
    monthsActive: 6,
    daysActive: 180,
    estimatesDelivered: 52,
    closedRevenue: 340000,
    monthlyPlan: 1900,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Restauração de casas históricas e varandas clássicas do sul americano."
  },
  {
    id: "ACC-141",
    companyName: "Liberty Construction Group",
    ownerName: "Renan Vasquez",
    specialty: "Basement & Home Remodeling",
    city: "Philadelphia",
    state: "PA",
    onboardingDate: "08/12/2024",
    monthsActive: 10,
    daysActive: 300,
    estimatesDelivered: 88,
    closedRevenue: 590000,
    monthlyPlan: 2300,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Main Line Philadelphia. Famílias americanas fechando contratos completos de porão e cozinha."
  },
  {
    id: "ACC-142",
    companyName: "Magnolia Roofing & Siding",
    ownerName: "Helio Paiva",
    specialty: "Roofing & Siding",
    city: "Greenville",
    state: "SC",
    onboardingDate: "25/06/2025",
    monthsActive: 4,
    daysActive: 115,
    estimatesDelivered: 42,
    closedRevenue: 310000,
    monthlyPlan: 2000,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Superou os 90 dias com 12 telhados fechados sem depender de indicações lentas."
  },
  {
    id: "ACC-143",
    companyName: "First Choice Hardscapes Pro",
    ownerName: "Marcos Aurelio",
    specialty: "Pool Decks & Custom Pavers",
    city: "Naples",
    state: "FL",
    onboardingDate: "14/07/2024",
    monthsActive: 15,
    daysActive: 450,
    estimatesDelivered: 110,
    closedRevenue: 920000,
    monthlyPlan: 2700,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Naples e Marco Island. Clientes milionários pagando antecipado para garantir data na agenda."
  },
  // 3 Contas em Fase de Onboarding / Maturação (< 90 dias)
  {
    id: "ACC-144",
    companyName: "Pioneer Drywall & Framing",
    ownerName: "Rafael Camargo",
    specialty: "Drywall & Basements",
    city: "Salt Lake City",
    state: "UT",
    onboardingDate: "18/08/2025",
    monthsActive: 2,
    daysActive: 65,
    estimatesDelivered: 24,
    closedRevenue: 140000,
    monthlyPlan: 1900,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "Fase de ramp-up (65 dias). 4 projetos fechados no primeiro mês de campanha."
  },
  {
    id: "ACC-145",
    companyName: "Modern Touch Home Renovation",
    ownerName: "Cleber Toledo",
    specialty: "Kitchen & Bath",
    city: "Clearwater",
    state: "FL",
    onboardingDate: "29/08/2025",
    monthsActive: 2,
    daysActive: 55,
    estimatesDelivered: 21,
    closedRevenue: 115000,
    monthlyPlan: 2000,
    healthScore: "estavel",
    nps: 9,
    status: "ativo",
    notes: "55 dias de contrato. 6 estimates enviados na última semana aguardando assinatura."
  },
  {
    id: "ACC-146",
    companyName: "Signature Homes & Remodel",
    ownerName: "Juliano Rossi",
    specialty: "Whole House Interior",
    city: "Boca Raton",
    state: "FL",
    onboardingDate: "18/09/2025",
    monthsActive: 1,
    daysActive: 35,
    estimatesDelivered: 14,
    closedRevenue: 75000,
    monthlyPlan: 2500,
    healthScore: "excelente",
    nps: 10,
    status: "ativo",
    notes: "Onboarding recente (35 dias). Já obteve o selo de Top 1 no Maps da sua região."
  }
,
  {
    id: "ACC-147",
    companyName: "Apex Granite & Countertops",
    ownerName: "Carlos Andrade",
    specialty: "Granite & Marble Fabrication",
    city: "Orlando",
    state: "FL",
    onboardingDate: "12/03/2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesDelivered: 126,
    closedRevenue: 640000,
    monthlyPlan: 2200,
    healthScore: "estavel",
    nps: 9,
    status: "encerrado",
    notes: "Operação encerrada após venda da marmoraria pelo proprietário para se aposentar."
  },
  {
    id: "ACC-148",
    companyName: "Tri-State Framing Pros",
    ownerName: "Marcelo Rezende",
    specialty: "Wood Framing & Drywall",
    city: "Charlotte",
    state: "NC",
    onboardingDate: "08/07/2025",
    monthsActive: 2,
    daysActive: 60,
    estimatesDelivered: 18,
    closedRevenue: 85000,
    monthlyPlan: 1800,
    healthScore: "estavel",
    nps: 8,
    status: "encerrado",
    notes: "Dificuldade em contratar equipes próprias de montagem; optou por pausar marketing temporariamente."
  },
  {
    id: "ACC-149",
    companyName: "North Star Custom Painting",
    ownerName: "Luciano Mendes",
    specialty: "Interior & Exterior Painting",
    city: "Newark",
    state: "NJ",
    onboardingDate: "15/11/2024",
    monthsActive: 8,
    daysActive: 240,
    estimatesDelivered: 72,
    closedRevenue: 310000,
    monthlyPlan: 1900,
    healthScore: "estavel",
    nps: 9,
    status: "encerrado",
    notes: "Família mudou-se para Austin, Texas; encerrou a operação em New Jersey."
  },
  {
    id: "ACC-150",
    companyName: "Coastal Outdoor & Pavers",
    ownerName: "Fabio Vasconcelos",
    specialty: "Travertine & Patios",
    city: "Tampa",
    state: "FL",
    onboardingDate: "10/04/2024",
    monthsActive: 16,
    daysActive: 480,
    estimatesDelivered: 148,
    closedRevenue: 920000,
    monthlyPlan: 2600,
    healthScore: "estavel",
    nps: 10,
    status: "encerrado",
    notes: "Capacidade operacional 100% esgotada com fila de espera de 10 meses; pausou captação externa."
  },
  {
    id: "ACC-151",
    companyName: "Sunline Metal Roofing LLC",
    ownerName: "Gilberto Ramos",
    specialty: "Commercial & Metal Roofs",
    city: "Dallas",
    state: "TX",
    onboardingDate: "20/09/2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesDelivered: 96,
    closedRevenue: 590000,
    monthlyPlan: 2500,
    healthScore: "estavel",
    nps: 9,
    status: "encerrado",
    notes: "Migrou o foco operacional para subcontratação governamental exclusiva."
  },
  {
    id: "ACC-152",
    companyName: "Metro Interior Drywallers",
    ownerName: "Gustavo Pinho",
    specialty: "Drywall Hanging & Taping",
    city: "Framingham",
    state: "MA",
    onboardingDate: "05/08/2025",
    monthsActive: 1,
    daysActive: 40,
    estimatesDelivered: 11,
    closedRevenue: 42000,
    monthlyPlan: 1800,
    healthScore: "estavel",
    nps: 8,
    status: "encerrado",
    notes: "Sócio fundador com problema cirúrgico na coluna logo no primeiro mês; contrato cancelado amigavelmente."
  }
];
export default function NivixEnterpriseCrm() {
  const [accounts] = useState<ContractorAccount[]>(accountsData);
  const [statusFilter, setStatusFilter] = useState<"all" | "ativo" | "encerrado">("all");
  const [tenureFilter, setTenureFilter] = useState<"all" | "90plus" | "6months" | "1year" | "maturing">("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [selectedAccount, setSelectedAccount] = useState<ContractorAccount | null>(null);

  // 1. FILTRAGEM DINÂMICA
  const filteredAccounts = useMemo(() => {
    return accounts.filter(acc => {
      // Filtro de Status (Ativo vs Encerrado)
      if (statusFilter !== "all" && acc.status !== statusFilter) return false;

      // Filtro de Permanência (LTV)
      if (tenureFilter === "90plus" && acc.monthsActive < 3) return false;
      if (tenureFilter === "6months" && acc.monthsActive < 6) return false;
      if (tenureFilter === "1year" && acc.monthsActive < 12) return false;
      if (tenureFilter === "maturing" && acc.monthsActive >= 3) return false;

      // Filtro de Estado
      if (stateFilter !== "all" && acc.state !== stateFilter) return false;

      // Busca por texto
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          acc.companyName.toLowerCase().includes(q) ||
          acc.ownerName.toLowerCase().includes(q) ||
          acc.city.toLowerCase().includes(q) ||
          acc.specialty.toLowerCase().includes(q) ||
          acc.id.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [accounts, statusFilter, tenureFilter, stateFilter, searchQuery]);

  // 2. MÉTRICAS DINÂMICAS DO TOPO (REAGEM DIRETAMENTE AOS FILTROS ATIVOS)
  const totalFiltered = filteredAccounts.length;
  const activeFilteredCount = filteredAccounts.filter(a => a.status === "ativo").length;
  const churnedFilteredCount = filteredAccounts.filter(a => a.status === "encerrado").length;

  // Clientes com >= 90 dias (3+ meses)
  const over90dCount = filteredAccounts.filter(a => a.monthsActive >= 3).length;
  const retentionRate = totalFiltered > 0 
    ? ((over90dCount / totalFiltered) * 100).toFixed(1) 
    : "0.0";

  // LTV Médio em meses
  const averageTenureMonths = totalFiltered > 0 
    ? (filteredAccounts.reduce((acc, a) => acc + a.monthsActive, 0) / totalFiltered).toFixed(1) 
    : "0.0";

  // Total de Estimates
  const totalEstimatesCount = filteredAccounts.reduce((acc, a) => acc + a.estimatesDelivered, 0);

  // GMV / Volume Fechado
  const totalGmvDelivered = filteredAccounts.reduce((acc, a) => acc + a.closedRevenue, 0);

  // Total de ativas na base geral
  const totalAgencyActive = accounts.filter(a => a.status === "ativo").length;

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e1e3ea] font-sans antialiased selection:bg-[#1a73e8] selection:text-white">
      
      {/* 1. TOP APP BAR (SaaS Enterprise Interno - SEM links externos desnecessários) */}
      <header className="sticky top-0 z-40 bg-[#101216] border-b border-[#212631] px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Workspace & Identificador */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-black font-black text-xs shadow-sm">
              N
            </div>
            <span className="font-semibold text-white text-sm sm:text-base tracking-tight">Nivix Agency OS</span>
          </div>

          <span className="text-neutral-600 font-mono text-sm hidden sm:inline">/</span>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-neutral-300">Construction Partners (USA)</span>
            <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Production
            </span>
          </div>
        </div>

        {/* User Profile & Exit */}
        <div className="flex items-center gap-3">
          <a 
            href="/builders" 
            className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors px-2.5 py-1 rounded-md hover:bg-[#1a1f2c]"
          >
            Sair
          </a>
          <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-amber-300">
            GG
          </div>
        </div>

      </header>

      {/* 2. SUB-HEADER / WORKSPACE TITLE & AÇÕES */}
      <div className="border-b border-[#212631] bg-[#0e1014] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Contas de Construtoras Parceiras
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#1c212c] text-neutral-300 border border-[#2b3344]">
                {totalAgencyActive} ativas • {accounts.length} cadastradas
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Gerenciamento de performance, LTV e histórico operacional de construtoras nos EUA.
            </p>
          </div>

          {/* Ação de Exportar */}
          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => {
                alert("Exportando relatório completo de retenção e faturamento em formato CSV...");
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#161a22] border border-[#2b3344] hover:bg-[#1e232e] text-neutral-300 text-xs sm:text-sm font-medium transition-colors"
            >
              <FaDownload className="text-xs" />
              <span>Exportar CSV</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. KPI METRICS (DINÂMICOS CONFORME OS FILTROS SELECIONADOS) */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          
          {/* KPI 1: Contas Filtradas */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Contas Filtradas</span>
              <FaBuilding className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {totalFiltered}
            </div>
            <div className="text-xs text-neutral-400 mt-1.5">
              <span className="text-emerald-400 font-semibold">{activeFilteredCount} ativas</span> • {churnedFilteredCount} encerradas
            </div>
          </div>

          {/* KPI 2: TAXA DE RETENÇÃO > 90 DIAS (CHAVE DA CALL) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-[#212631] relative overflow-hidden">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Retenção (&gt; 90 dias)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight font-mono">
              {retentionRate}%
            </div>
            <div className="text-xs text-neutral-300 mt-1.5 font-medium">
              {over90dCount} de {totalFiltered} construtoras &gt; 90d
            </div>
          </div>

          {/* KPI 3: LTV Médio em Meses */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Permanência Média</span>
              <FaCalendarDays className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {averageTenureMonths} <span className="text-sm font-normal text-neutral-400">meses</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1.5">
              Tempo médio de contrato
            </div>
          </div>

          {/* KPI 4: Estimates Entregues */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Estimates Gerados</span>
              <FaBriefcase className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {totalEstimatesCount.toLocaleString()}
            </div>
            <div className="text-xs text-neutral-400 mt-1.5">
              Direto com proprietários
            </div>
          </div>

          {/* KPI 5: Volume de Obra Fechada (GMV) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-[#212631] col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Volume Fechado</span>
              <FaDollarSign className="text-amber-400 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-tight font-mono">
              ${(totalGmvDelivered / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-neutral-400 mt-1.5">
              Obras fechadas sem GC
            </div>
          </div>

        </div>
      </section>

      {/* 4. FILTROS NA TABELA (STATUS + RETENÇÃO/LTV + BUSCA + ESTADO) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-[1800px] mx-auto bg-[#101216] p-3.5 sm:p-4 rounded-xl border border-[#212631] flex flex-col gap-3.5">
          
          {/* Linha 1: Status (Todos / Ativos / Encerrados) + Filtros de LTV */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3">
            
            {/* Status Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#161a22] rounded-lg border border-[#262c3a] text-xs sm:text-sm overflow-x-auto w-full sm:w-auto">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                  statusFilter === "all"
                    ? "bg-[#252c3c] text-white shadow-sm font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Todos ({accounts.length})
              </button>
              <button
                onClick={() => setStatusFilter("ativo")}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  statusFilter === "ativo"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                    : "text-neutral-400 hover:text-emerald-400"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Clientes Ativos ({accounts.filter(a => a.status === "ativo").length})
              </button>
              <button
                onClick={() => setStatusFilter("encerrado")}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  statusFilter === "encerrado"
                    ? "bg-neutral-700 text-neutral-200 border border-neutral-600 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
                Encerrados ({accounts.filter(a => a.status === "encerrado").length})
              </button>
            </div>

            {/* Filtros de LTV / Retenção */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full xl:w-auto pb-1 xl:pb-0 text-xs sm:text-sm">
              <span className="text-neutral-500 text-xs font-mono uppercase tracking-wider hidden lg:inline mr-1">
                Filtro LTV:
              </span>
              {[
                { id: "all", label: "Todos os Períodos" },
                { id: "90plus", label: "LTV > 90 Dias (3+ meses)" },
                { id: "6months", label: "> 6 Meses" },
                { id: "1year", label: "> 1 Ano" },
                { id: "maturing", label: "Onboarding (< 90d)" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setTenureFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    tenureFilter === tab.id
                      ? "bg-[#1f2533] text-amber-300 border border-amber-400/40 font-semibold"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-[#161a22]"
                  }`}
                >
                  {tab.id === "90plus" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Linha 2: Busca por texto + Seleção de Estado + Alternar Tabela / Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2.5 border-t border-[#1c212c]">
            
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-xs sm:text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filtrar por construtora, responsável, especialidade, cidade..."
                className="w-full pl-9 pr-3.5 py-2 bg-[#14171f] border border-[#262c3a] rounded-lg text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
              
              {/* Select Estado */}
              <select
                value={stateFilter}
                onChange={e => setStateFilter(e.target.value)}
                className="px-3 py-2 bg-[#14171f] border border-[#262c3a] rounded-lg text-xs sm:text-sm text-neutral-300 focus:outline-none cursor-pointer"
              >
                <option value="all">Todos Estados</option>
                <option value="FL">FL (Flórida)</option>
                <option value="MA">MA (Massachusetts)</option>
                <option value="TX">TX (Texas)</option>
                <option value="NJ">NJ (New Jersey)</option>
                <option value="CA">CA (Califórnia)</option>
                <option value="GA">GA (Georgia)</option>
                <option value="NC">NC (North Carolina)</option>
                <option value="SC">SC (South Carolina)</option>
                <option value="NY">NY (New York)</option>
                <option value="CT">CT (Connecticut)</option>
                <option value="NH">NH (New Hampshire)</option>
                <option value="UT">UT (Utah)</option>
                <option value="MD">MD (Maryland)</option>
                <option value="WA">WA (Washington)</option>
              </select>

              {/* Toggle Modo Tabela / Modo Cards (Para visualização nítida no Celular) */}
              <div className="flex items-center p-1 bg-[#161a22] rounded-lg border border-[#262c3a]">
                <button
                  onClick={() => setViewMode("table")}
                  title="Visualização em Tabela"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors ${
                    viewMode === "table"
                      ? "bg-[#252c3c] text-white shadow-sm font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <FaTableList className="text-xs" />
                  <span>Tabela</span>
                </button>
                <button
                  onClick={() => setViewMode("cards")}
                  title="Visualização em Cards (Excelente para Celular)"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors ${
                    viewMode === "cards"
                      ? "bg-[#252c3c] text-white shadow-sm font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <FaTableCellsLarge className="text-xs" />
                  <span>Cards</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. ÁREA DE DADOS (TABELA OU CARDS RESPONSIVOS) */}
      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1800px] mx-auto">
          
          {/* SELEÇÃO 1: MODO TABELA */}
          {viewMode === "table" ? (
            <div className="rounded-xl border border-[#212631] bg-[#101216] overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm min-w-[950px]">
                  <thead className="bg-[#14171f] border-b border-[#212631] text-xs font-mono uppercase tracking-wider text-neutral-400">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold">Conta / Empresa</th>
                      <th className="py-3.5 px-4 font-semibold">Responsável</th>
                      <th className="py-3.5 px-4 font-semibold">Especialidade</th>
                      <th className="py-3.5 px-4 font-semibold">Localização</th>
                      <th className="py-3.5 px-4 font-semibold text-center">Início (Onboarding)</th>
                      <th className="py-3.5 px-4 font-semibold text-center">Permanência (LTV)</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Estimates</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Volume Fechado</th>
                      <th className="py-3.5 px-4 font-semibold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e232e]">
                    {filteredAccounts.map((account) => {
                      return (
                        <tr 
                          key={account.id}
                          onClick={() => setSelectedAccount(account)}
                          className="hover:bg-[#161a23] transition-colors cursor-pointer group"
                        >
                          {/* Empresa */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-md bg-[#191f2b] border border-[#2b3548] flex items-center justify-center font-bold text-amber-300 text-xs sm:text-sm shrink-0">
                                {account.companyName.charAt(0)}
                              </div>
                              <div>
                                <span className="font-bold text-white group-hover:text-amber-300 transition-colors block text-sm sm:text-base">
                                  {account.companyName}
                                </span>
                                <span className="text-xs text-neutral-500 font-mono">
                                  {account.id}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Responsável */}
                          <td className="py-3.5 px-4 text-neutral-200 font-medium">
                            {account.ownerName}
                          </td>

                          {/* Especialidade */}
                          <td className="py-3.5 px-4 text-neutral-300">
                            <span className="truncate max-w-[220px] block">
                              {account.specialty}
                            </span>
                          </td>

                          {/* Localização */}
                          <td className="py-3.5 px-4 text-neutral-300">
                            <div className="flex items-center gap-1.5">
                              <FaLocationDot className="text-neutral-500 text-xs" />
                              <span>{account.city}, {account.state}</span>
                            </div>
                          </td>

                          {/* Onboarding */}
                          <td className="py-3.5 px-4 text-center text-neutral-400 font-mono text-xs sm:text-sm">
                            {account.onboardingDate}
                          </td>

                          {/* LTV / Permanência - APENAS EM MESES CONFORME SOLICITADO */}
                          <td className="py-3.5 px-4 text-center font-mono">
                            <span className="font-bold text-white text-sm sm:text-base">
                              {account.monthsActive} {account.monthsActive === 1 ? "mês" : "meses"}
                            </span>
                          </td>

                          {/* Estimates Entregues */}
                          <td className="py-3.5 px-4 text-right font-mono text-neutral-200 font-semibold text-sm sm:text-base">
                            {account.estimatesDelivered}
                          </td>

                          {/* Volume Fechado */}
                          <td className="py-3.5 px-4 text-right font-mono font-bold text-amber-300 text-sm sm:text-base">
                            ${account.closedRevenue.toLocaleString()}
                          </td>

                          {/* Status (Cliente Ativo vs Encerrado) */}
                          <td className="py-3.5 px-4 text-center">
                            {account.status === "ativo" ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Cliente Ativo
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700 whitespace-nowrap">
                                <span className="w-2 h-2 rounded-full bg-neutral-500"></span>
                                Encerrado
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Rodapé da Tabela com Resumo */}
              <div className="px-4 py-3.5 bg-[#14171f] border-t border-[#212631] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-neutral-400">
                <span>Mostrando {filteredAccounts.length} de {accounts.length} construtoras</span>
                <div className="flex items-center gap-4 font-mono text-xs sm:text-sm">
                  <span>Retenção &gt; 90d: <strong className="text-emerald-400">{retentionRate}%</strong></span>
                  <span>•</span>
                  <span>LTV Médio: <strong className="text-white">{averageTenureMonths} meses</strong></span>
                </div>
              </div>
            </div>
          ) : (
            /* SELEÇÃO 2: MODO CARDS (OTIMIZADO PARA CELULAR E TELAS TOUCH) */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredAccounts.map((account) => (
                <div
                  key={account.id}
                  onClick={() => setSelectedAccount(account)}
                  className="p-4 sm:p-5 rounded-xl bg-[#12151c] border border-[#212631] hover:border-neutral-500 transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Empresa + Status */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#191f2b] border border-[#2b3548] flex items-center justify-center font-bold text-amber-300 text-sm shrink-0">
                          {account.companyName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-amber-300 transition-colors leading-tight">
                            {account.companyName}
                          </h3>
                          <span className="text-xs text-neutral-500 font-mono">
                            {account.id} • {account.ownerName}
                          </span>
                        </div>
                      </div>

                      {account.status === "ativo" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Cliente Ativo
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                          Encerrado
                        </span>
                      )}
                    </div>

                    {/* Especialidade e Local */}
                    <div className="text-xs sm:text-sm text-neutral-300 mb-4 flex items-center justify-between">
                      <span className="truncate max-w-[200px] text-neutral-200">{account.specialty}</span>
                      <span className="text-neutral-400 font-medium">{account.city}, {account.state}</span>
                    </div>
                  </div>

                  {/* 3 Blocos de Métricas Grandes */}
                  <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-[#1e232e]">
                    <div className="bg-[#161a22] p-2.5 rounded-lg border border-[#212631]">
                      <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-0.5">Permanência</span>
                      <span className="text-sm sm:text-base font-bold text-white font-mono block">
                        {account.monthsActive} {account.monthsActive === 1 ? "mês" : "meses"}
                      </span>
                    </div>
                    <div className="bg-[#161a22] p-2.5 rounded-lg border border-[#212631]">
                      <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-0.5">Estimates</span>
                      <span className="text-sm sm:text-base font-bold text-white font-mono block">
                        {account.estimatesDelivered}
                      </span>
                    </div>
                    <div className="bg-[#161a22] p-2.5 rounded-lg border border-[#212631]">
                      <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-0.5">Volume</span>
                      <span className="text-sm sm:text-base font-bold text-amber-300 font-mono block">
                        ${(account.closedRevenue / 1000).toFixed(0)}k
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      {/* 6. MODAL / DRAWER DE INSPEÇÃO DA CONTA */}
      <AnimatePresence>
        {selectedAccount && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              className="w-full max-w-xl bg-[#12151c] border border-[#2b3548] rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              
              {/* Header do Drawer */}
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-[#212631]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">{selectedAccount.companyName}</h2>
                    {selectedAccount.status === "ativo" ? (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-medium">
                        Cliente Ativo
                      </span>
                    ) : (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 font-mono font-medium">
                        Contrato Encerrado
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    ID: {selectedAccount.id} • Responsável: {selectedAccount.ownerName} • {selectedAccount.city}, {selectedAccount.state}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedAccount(null)}
                  className="w-8 h-8 rounded-lg bg-[#1a1f2b] border border-[#2b3548] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                >
                  <FaXmark className="text-sm" />
                </button>
              </div>

              {/* Métricas Principais da Conta */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3.5 rounded-lg bg-[#161a22] border border-[#212631]">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Permanência (LTV)</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono mt-1 block">
                    {selectedAccount.monthsActive} {selectedAccount.monthsActive === 1 ? "mês" : "meses"}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono mt-0.5 block">
                    {selectedAccount.daysActive} dias contínuos
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#161a22] border border-[#212631]">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Estimates</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono mt-1 block">
                    {selectedAccount.estimatesDelivered}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono mt-0.5 block">Homeowners</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#161a22] border border-[#212631]">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Volume Fechado</span>
                  <span className="text-base sm:text-lg font-bold text-amber-300 font-mono mt-1 block">
                    ${selectedAccount.closedRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono mt-0.5 block">Contratos</span>
                </div>
              </div>

              {/* Diagnóstico / Histórico */}
              <div className="p-4 rounded-lg bg-[#161a22] border border-[#212631] mb-5">
                <span className="text-xs font-mono uppercase font-bold text-neutral-400 block mb-1.5">
                  Diagnóstico e Histórico Operacional:
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {selectedAccount.notes}
                </p>
              </div>

              {/* Status do Contrato */}
              <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 pt-3 border-t border-[#212631]">
                <span>Início: <strong className="text-neutral-200">{selectedAccount.onboardingDate}</strong></span>
                <span className="text-emerald-400 font-mono font-medium">
                  {selectedAccount.monthsActive >= 3 ? "Retenção consolidada (+90 dias)" : "Período de onboarding"}
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
