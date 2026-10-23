'use client';

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShieldHalved, 
  FaCheck, 
  FaMagnifyingGlass, 
  FaLocationDot, 
  FaCalendarDays, 
  FaDollarSign, 
  FaBuilding, 
  FaSliders,
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaDownload,
  FaPlus,
  FaEllipsisVertical,
  FaXmark,
  FaCircleCheck,
  FaUserCheck,
  FaBriefcase,
  FaChartSimple
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
    notes: "Onboarding recente (35 dias). Já obteve o selo de Top 1 no Maps da sua região."
  }
];

export default function NivixEnterpriseCrm() {
  const [accounts] = useState<ContractorAccount[]>(accountsData);
  const [filterMode, setFilterMode] = useState<"all" | "90plus" | "6months" | "1year" | "maturing">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [selectedAccount, setSelectedAccount] = useState<ContractorAccount | null>(null);

  // Cálculos Operacionais de CRM
  const totalAccounts = accounts.length; // 46
  const accounts90Plus = accounts.filter(a => a.daysActive >= 90); // 43
  const retentionRate = ((accounts90Plus.length / totalAccounts) * 100).toFixed(1); // 93.5%
  const totalMrr = accounts.reduce((acc, a) => acc + a.monthlyPlan, 0); // Total recorrente
  const averageTenureMonths = (accounts.reduce((acc, a) => acc + a.monthsActive, 0) / totalAccounts).toFixed(1);
  const totalEstimatesCount = accounts.reduce((acc, a) => acc + a.estimatesDelivered, 0);
  const totalGmvDelivered = accounts.reduce((acc, a) => acc + a.closedRevenue, 0);

  // Filtros de Tabela
  const filteredAccounts = useMemo(() => {
    return accounts.filter(acc => {
      let matchesTenure = true;
      if (filterMode === "90plus") matchesTenure = acc.daysActive >= 90;
      else if (filterMode === "6months") matchesTenure = acc.monthsActive >= 6;
      else if (filterMode === "1year") matchesTenure = acc.monthsActive >= 12;
      else if (filterMode === "maturing") matchesTenure = acc.daysActive < 90;

      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        acc.companyName.toLowerCase().includes(query) ||
        acc.ownerName.toLowerCase().includes(query) ||
        acc.city.toLowerCase().includes(query) ||
        acc.specialty.toLowerCase().includes(query);

      const matchesState = stateFilter === "all" || acc.state === stateFilter;

      return matchesTenure && matchesSearch && matchesState;
    });
  }, [accounts, filterMode, searchQuery, stateFilter]);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e1e3ea] font-sans antialiased selection:bg-[#1a73e8] selection:text-white">
      
      {/* 1. TOP APP BAR (AUTÊNTICA DE CRM SAAS / ENTERPRISE) */}
      <header className="sticky top-0 z-40 bg-[#101216] border-b border-[#212631] px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Workspace & Breadcrumb */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-black font-black text-xs shadow-sm">
              N
            </div>
            <span className="font-semibold text-white text-sm tracking-tight">Nivix Agency OS</span>
          </div>

          <span className="text-neutral-600 font-mono text-sm">/</span>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-300">Construction Partners (USA)</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Production
            </span>
          </div>
        </div>

        {/* User & Global Actions */}
        <div className="flex items-center gap-3">
          <a 
            href="/serp" 
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181b22] border border-[#262c3a] hover:border-neutral-500 text-neutral-300 text-xs font-medium transition-all"
          >
            <span>Google SERP Tool</span>
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </a>

          <a 
            href="/builders" 
            className="text-xs text-neutral-400 hover:text-white transition-colors px-2 py-1"
          >
            Sair
          </a>

          <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-amber-300">
            GG
          </div>
        </div>

      </header>

      {/* 2. SUB-HEADER / WORKSPACE TITLE & ACTIONS */}
      <div className="border-b border-[#212631] bg-[#0e1014] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold text-white tracking-tight">
                Contas de Construtoras Ativas
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#1c212c] text-neutral-300 border border-[#2b3344]">
                {totalAccounts} contas ativas
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Gerenciamento de performance, retenção de clientes e esteira de estimates nos EUA.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button 
              onClick={() => {
                alert("Exportando relatório de retenção e faturamento das contas ativas...");
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#161a22] border border-[#2b3344] hover:bg-[#1e232e] text-neutral-300 text-xs font-medium transition-colors"
            >
              <FaDownload className="text-[11px]" />
              <span>Exportar Dados</span>
            </button>
            <button 
              onClick={() => setFilterMode("90plus")}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
                filterMode === "90plus"
                  ? "bg-amber-400 text-black hover:bg-amber-300"
                  : "bg-amber-400/10 text-amber-300 border border-amber-400/30 hover:bg-amber-400/20"
              }`}
            >
              <FaCheck className="text-[10px]" />
              <span>Filtrar Retenção &gt; 90 Dias</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. KPI METRICS STRIP (MÉTRICAS REAIS DE OPERAÇÃO SAAS) */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-3.5">
          
          {/* KPI 1: Total de Construtoras */}
          <div className="p-4 rounded-xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-1.5">
              <span>Total Contas Ativas</span>
              <FaBuilding className="text-neutral-500 text-xs" />
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">
              {totalAccounts}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-1">
              <span>+3 adicionadas este mês</span>
            </div>
          </div>

          {/* KPI 2: TAXA DE RETENÇÃO > 90 DIAS (CHAVE DA CALL) */}
          <div className="p-4 rounded-xl bg-[#12151c] border border-[#212631] relative overflow-hidden">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-1.5">
              <span>Retenção (&gt; 90 dias)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-2xl font-bold text-emerald-400 tracking-tight font-mono">
              {retentionRate}%
            </div>
            <div className="text-[11px] text-neutral-400 mt-1 font-mono">
              {accounts90Plus.length} de {totalAccounts} clientes ativos
            </div>
          </div>

          {/* KPI 3: LTV Médio em Meses */}
          <div className="p-4 rounded-xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-1.5">
              <span>Tempo Médio (LTV)</span>
              <FaCalendarDays className="text-neutral-500 text-xs" />
            </div>
            <div className="text-2xl font-bold text-white tracking-tight">
              {averageTenureMonths} <span className="text-xs font-normal text-neutral-400">meses</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-1">
              Permanência média contínua
            </div>
          </div>

          {/* KPI 4: Estimates Entregues */}
          <div className="p-4 rounded-xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-1.5">
              <span>Estimates Gerados</span>
              <FaBriefcase className="text-neutral-500 text-xs" />
            </div>
            <div className="text-2xl font-bold text-white tracking-tight font-mono">
              {totalEstimatesCount.toLocaleString()}
            </div>
            <div className="text-[11px] text-neutral-400 mt-1">
              100% Homeowners diretos
            </div>
          </div>

          {/* KPI 5: Volume de Obra Fechada (GMV) */}
          <div className="p-4 rounded-xl bg-[#12151c] border border-[#212631] col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs font-medium mb-1.5">
              <span>Volume Gerado p/ Clientes</span>
              <FaDollarSign className="text-amber-400 text-xs" />
            </div>
            <div className="text-2xl font-bold text-amber-300 tracking-tight font-mono">
              ${(totalGmvDelivered / 1000000).toFixed(1)}M
            </div>
            <div className="text-[11px] text-neutral-400 mt-1">
              Em contratos fechados sem GC
            </div>
          </div>

        </div>
      </section>

      {/* 4. SEGMENTS & FILTERS TOOLBAR */}
      <section className="px-4 sm:px-6 lg:px-8 pb-3">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-[#101216] p-3 rounded-xl border border-[#212631]">
          
          {/* Segment Tabs (LTV Selectors) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 text-xs">
            {[
              { id: "all", label: `Todas as Contas (${totalAccounts})` },
              { id: "90plus", label: `LTV > 90 Dias (${accounts90Plus.length}) • ${retentionRate}%` },
              { id: "6months", label: `> 6 Meses (${accounts.filter(a => a.monthsActive >= 6).length})` },
              { id: "1year", label: `> 1 Ano (${accounts.filter(a => a.monthsActive >= 12).length})` },
              { id: "maturing", label: `Onboarding < 90d (${accounts.filter(a => a.daysActive < 90).length})` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterMode(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  filterMode === tab.id
                    ? "bg-[#1f2533] text-white border border-[#3b4761]"
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

          {/* Search & State Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filtrar por nome, dono, cidade..."
                className="w-full pl-8 pr-3 py-1.5 bg-[#14171f] border border-[#262c3a] rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
              />
            </div>

            <select
              value={stateFilter}
              onChange={e => setStateFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-[#14171f] border border-[#262c3a] rounded-lg text-xs text-neutral-300 focus:outline-none cursor-pointer"
            >
              <option value="all">Todos Estados</option>
              <option value="FL">FL (Flórida)</option>
              <option value="MA">MA (Massachusetts)</option>
              <option value="TX">TX (Texas)</option>
              <option value="NJ">NJ (New Jersey)</option>
              <option value="CA">CA (California)</option>
              <option value="GA">GA (Georgia)</option>
              <option value="NC">NC (North Carolina)</option>
              <option value="SC">SC (South Carolina)</option>
              <option value="NY">NY (New York)</option>
            </select>
          </div>

        </div>
      </section>

      {/* 5. DATA TABLE (ESTILO LINEAR / STRIPE DASHBOARD) */}
      <main className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-[1800px] mx-auto rounded-xl border border-[#212631] bg-[#101216] overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#14171f] border-b border-[#212631] text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                <tr>
                  <th className="py-3 px-4 font-medium">Conta / Empresa</th>
                  <th className="py-3 px-4 font-medium">Responsável</th>
                  <th className="py-3 px-4 font-medium">Especialidade</th>
                  <th className="py-3 px-4 font-medium">Localização</th>
                  <th className="py-3 px-4 font-medium text-center">Início (Onboarding)</th>
                  <th className="py-3 px-4 font-medium text-center">Permanência (LTV)</th>
                  <th className="py-3 px-4 font-medium text-right">Estimates</th>
                  <th className="py-3 px-4 font-medium text-right">Volume Fechado</th>
                  <th className="py-3 px-4 font-medium text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e232e]">
                {filteredAccounts.map((account) => {
                  const isOver90Days = account.daysActive >= 90;

                  return (
                    <tr 
                      key={account.id}
                      onClick={() => setSelectedAccount(account)}
                      className="hover:bg-[#161a23] transition-colors cursor-pointer group"
                    >
                      {/* Empresa */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-[#191f2b] border border-[#2b3548] flex items-center justify-center font-bold text-amber-300 text-xs shrink-0">
                            {account.companyName.charAt(0)}
                          </div>
                          <div>
                            <span className="font-semibold text-white group-hover:text-amber-300 transition-colors block">
                              {account.companyName}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-mono">
                              {account.id}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Responsável */}
                      <td className="py-3 px-4 text-neutral-300 font-medium">
                        {account.ownerName}
                      </td>

                      {/* Especialidade */}
                      <td className="py-3 px-4 text-neutral-300">
                        <span className="truncate max-w-[200px] block">
                          {account.specialty}
                        </span>
                      </td>

                      {/* Localização */}
                      <td className="py-3 px-4 text-neutral-400">
                        <div className="flex items-center gap-1">
                          <FaLocationDot className="text-neutral-500 text-[10px]" />
                          <span>{account.city}, {account.state}</span>
                        </div>
                      </td>

                      {/* Onboarding */}
                      <td className="py-3 px-4 text-center text-neutral-400 font-mono">
                        {account.onboardingDate}
                      </td>

                      {/* LTV / Permanência */}
                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          <span className="font-bold text-white font-mono">
                            {account.monthsActive}m
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isOver90Days
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          }`}>
                            {account.daysActive}d
                          </span>
                        </div>
                      </td>

                      {/* Estimates Entregues */}
                      <td className="py-3 px-4 text-right font-mono text-neutral-300 font-medium">
                        {account.estimatesDelivered}
                      </td>

                      {/* Volume Fechado */}
                      <td className="py-3 px-4 text-right font-mono font-semibold text-amber-300">
                        ${account.closedRevenue.toLocaleString()}
                      </td>

                      {/* Health / Status */}
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Ativo</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer da Tabela com Sumário */}
          <div className="px-4 py-3 bg-[#14171f] border-t border-[#212631] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400">
            <span>Mostrando {filteredAccounts.length} de {totalAccounts} construtoras registradas</span>
            <div className="flex items-center gap-4 font-mono text-[11px]">
              <span>Retenção pós-90d: <strong className="text-emerald-400">{retentionRate}%</strong></span>
              <span>•</span>
              <span>LTV Médio: <strong className="text-white">{averageTenureMonths} meses</strong></span>
            </div>
          </div>

        </div>
      </main>

      {/* 6. DRAWER / MODAL DE DETALHES DA CONTA */}
      <AnimatePresence>
        {selectedAccount && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              className="w-full max-w-xl bg-[#12151c] border border-[#2b3548] rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              
              {/* Header do Drawer */}
              <div className="flex items-start justify-between pb-4 mb-5 border-b border-[#212631]">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold text-white tracking-tight">{selectedAccount.companyName}</h2>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                      Conta Ativa
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    ID: {selectedAccount.id} • Resp: {selectedAccount.ownerName} • {selectedAccount.city}, {selectedAccount.state}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedAccount(null)}
                  className="w-7 h-7 rounded-lg bg-[#1a1f2b] border border-[#2b3548] flex items-center justify-center text-neutral-400 hover:text-white"
                >
                  <FaXmark className="text-xs" />
                </button>
              </div>

              {/* Métricas da Conta */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-[#161a22] border border-[#212631]">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Tempo Ativo (LTV)</span>
                  <span className="text-base font-bold text-white font-mono mt-0.5 block">{selectedAccount.monthsActive} Meses</span>
                  <span className="text-[10px] text-emerald-400 font-mono">{selectedAccount.daysActive} dias contínuos</span>
                </div>
                <div className="p-3 rounded-lg bg-[#161a22] border border-[#212631]">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Estimates Entregues</span>
                  <span className="text-base font-bold text-white font-mono mt-0.5 block">{selectedAccount.estimatesDelivered}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Homeowners reais</span>
                </div>
                <div className="p-3 rounded-lg bg-[#161a22] border border-[#212631]">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Volume Fechado</span>
                  <span className="text-base font-bold text-amber-300 font-mono mt-0.5 block">${selectedAccount.closedRevenue.toLocaleString()}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">Direto no bolso</span>
                </div>
              </div>

              {/* Resumo da Operação */}
              <div className="p-3.5 rounded-lg bg-[#161a22] border border-[#212631] mb-5">
                <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-1">
                  Diagnóstico da Conta:
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedAccount.notes}
                </p>
              </div>

              {/* Status do Contrato */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-3 border-t border-[#212631]">
                <span>Início: <strong className="text-neutral-200">{selectedAccount.onboardingDate}</strong></span>
                <span className="text-emerald-400 font-mono font-medium">Retenção consolidada após 90 dias</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
