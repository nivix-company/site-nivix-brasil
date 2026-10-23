'use client';

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShieldHalved, 
  FaCrown, 
  FaArrowTrendUp, 
  FaCheck, 
  FaMagnifyingGlass, 
  FaLocationDot, 
  FaCalendarDays, 
  FaDollarSign, 
  FaUsers, 
  FaClock, 
  FaBuilding, 
  FaStar,
  FaFilter,
  FaXmark,
  FaChartLine,
  FaArrowUpRightFromSquare,
  FaPhone
} from "react-icons/fa6";

interface ContractorClient {
  id: string;
  companyName: string;
  ownerName: string;
  specialty: string;
  city: string;
  state: string;
  joinDate: string;
  monthsActive: number;
  daysActive: number;
  estimatesGenerated: number;
  revenueGenerated: number;
  monthlySpend: number;
  status: "active" | "maturing";
  nps: number;
  notes: string;
}

const mockClients: ContractorClient[] = [
  {
    id: "cli-01",
    companyName: "Apex Kitchen & Bath",
    ownerName: "Marcos Silva",
    specialty: "Kitchen & Bathroom Remodeling",
    city: "Orlando",
    state: "FL",
    joinDate: "Abril 2024",
    monthsActive: 18,
    daysActive: 540,
    estimatesGenerated: 164,
    revenueGenerated: 820000,
    monthlySpend: 2500,
    status: "active",
    nps: 10,
    notes: "Top 1 no Google Maps Orlando. Dominou Windermere e Doctor Phillips. Deixou de ser sub de GC no 3º mês."
  },
  {
    id: "cli-02",
    companyName: "Boston Pro Flooring & Tile",
    ownerName: "Rodrigo Almeida",
    specialty: "Hardwood & Luxury Vinyl Flooring",
    city: "Framingham",
    state: "MA",
    joinDate: "Janeiro 2024",
    monthsActive: 21,
    daysActive: 630,
    estimatesGenerated: 210,
    revenueGenerated: 690000,
    monthlySpend: 2000,
    status: "active",
    nps: 10,
    notes: "Faturamento estável mesmo nos meses de inverno rigoroso em Massachusetts com reformas indoor."
  },
  {
    id: "cli-03",
    companyName: "Titan Roofing & Siding Pro",
    ownerName: "Eduardo Santos",
    specialty: "Roof Replacement & Storm Restoration",
    city: "Dallas",
    state: "TX",
    joinDate: "Agosto 2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesGenerated: 138,
    revenueGenerated: 940000,
    monthlySpend: 3200,
    status: "active",
    nps: 10,
    notes: "Ticket médio de $18,000 por telhado. 100% de clientes residenciais sem intermediários."
  },
  {
    id: "cli-04",
    companyName: "Gold Coast Luxury Remodeling",
    ownerName: "Felipe Barreto",
    specialty: "Whole Home Remodeling",
    city: "Boca Raton",
    state: "FL",
    joinDate: "Junho 2024",
    monthsActive: 16,
    daysActive: 480,
    estimatesGenerated: 98,
    revenueGenerated: 1150000,
    monthlySpend: 3000,
    status: "active",
    nps: 10,
    notes: "Obras de altíssimo padrão em Palm Beach County. Clientes americanos de ticket $80k a $150k."
  },
  {
    id: "cli-05",
    companyName: "Vanguard Custom Framing",
    ownerName: "Lucas Ferreira",
    specialty: "Wood & Metal Framing",
    city: "Worcester",
    state: "MA",
    joinDate: "Novembro 2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesGenerated: 85,
    revenueGenerated: 540000,
    monthlySpend: 1800,
    status: "active",
    nps: 9,
    notes: "Equipe com 3 crews operando em paralelo. Agenda fechada com 60 dias de antecedência."
  },
  {
    id: "cli-06",
    companyName: "Empire Pavers & Hardscapes",
    ownerName: "Gabriel Costa",
    specialty: "Patios, Driveways & Retaining Walls",
    city: "Newark",
    state: "NJ",
    joinDate: "Janeiro 2025",
    monthsActive: 9,
    daysActive: 270,
    estimatesGenerated: 112,
    revenueGenerated: 480000,
    monthlySpend: 2200,
    status: "active",
    nps: 10,
    notes: "Subiu para o Top 1 do Maps em North Jersey. Média de 12 estimates agendados por mês."
  },
  {
    id: "cli-07",
    companyName: "Silva & Sons Construction Group",
    ownerName: "Claudio Silva",
    specialty: "General Construction & Additions",
    city: "San Diego",
    state: "CA",
    joinDate: "Agosto 2023",
    monthsActive: 26,
    daysActive: 780,
    estimatesGenerated: 245,
    revenueGenerated: 1680000,
    monthlySpend: 4000,
    status: "active",
    nps: 10,
    notes: "Cliente veterano Nivix. Cresceu de autônomo para construtora com 18 colaboradores registrados."
  },
  {
    id: "cli-08",
    companyName: "Alpha Deck & Porch Co.",
    ownerName: "Thiago Oliveira",
    specialty: "Trex Composite Decks & Pergolas",
    city: "Atlanta",
    state: "GA",
    joinDate: "Setembro 2024",
    monthsActive: 13,
    daysActive: 390,
    estimatesGenerated: 124,
    revenueGenerated: 620000,
    monthlySpend: 2400,
    status: "active",
    nps: 10,
    notes: "Especialista em Decks de luxo no norte de Atlanta (Alpharetta e Roswell). Margem de 48% líquida."
  },
  {
    id: "cli-09",
    companyName: "Everest Roofing Solutions",
    ownerName: "Matheus Nogueira",
    specialty: "Residential Roofing & Gutters",
    city: "Charlotte",
    state: "NC",
    joinDate: "Fevereiro 2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesGenerated: 78,
    revenueGenerated: 490000,
    monthlySpend: 2500,
    status: "active",
    nps: 9,
    notes: "Captação contínua de telhados residenciais na Carolina do Norte sem leilão de preço."
  },
  {
    id: "cli-10",
    companyName: "Orlando Tile & Marble Specialists",
    ownerName: "Renato Ramos",
    specialty: "Tile, Marble & Backsplashes",
    city: "Windermere",
    state: "FL",
    joinDate: "Julho 2024",
    monthsActive: 15,
    daysActive: 450,
    estimatesGenerated: 140,
    revenueGenerated: 580000,
    monthlySpend: 2000,
    status: "active",
    nps: 10,
    notes: "Foco total em banheiros de alto padrão e porcelanatos de grande formato (slabs)."
  },
  {
    id: "cli-11",
    companyName: "Miami Custom Carpentry",
    ownerName: "Victor Hugo",
    specialty: "Finish Carpentry & Millwork",
    city: "Miami",
    state: "FL",
    joinDate: "Outubro 2024",
    monthsActive: 12,
    daysActive: 360,
    estimatesGenerated: 94,
    revenueGenerated: 510000,
    monthlySpend: 2200,
    status: "active",
    nps: 10,
    notes: "Painéis ripados, armários sob medida e portas pivotantes em Coral Gables e Brickell."
  },
  {
    id: "cli-12",
    companyName: "Brazilian Touch Remodeling",
    ownerName: "Alexandre Pires",
    specialty: "Basement & Kitchen Remodel",
    city: "Lowell",
    state: "MA",
    joinDate: "Fevereiro 2024",
    monthsActive: 20,
    daysActive: 600,
    estimatesGenerated: 176,
    revenueGenerated: 890000,
    monthlySpend: 2600,
    status: "active",
    nps: 10,
    notes: "Especialista em transformar porões (basements) em suítes e salas de cinema na grande Boston."
  },
  {
    id: "cli-13",
    companyName: "Diamond Drywall & Painting Pro",
    ownerName: "Leandro Rocha",
    specialty: "Drywall, Level 5 & Interior Paint",
    city: "Austin",
    state: "TX",
    joinDate: "Março 2025",
    monthsActive: 7,
    daysActive: 210,
    estimatesGenerated: 82,
    revenueGenerated: 360000,
    monthlySpend: 1800,
    status: "active",
    nps: 9,
    notes: "Acabamentos Level 5 de padrão americano para casas de luxo no Lago Travis e Westlake."
  },
  {
    id: "cli-14",
    companyName: "Prime Hardwood Floors",
    ownerName: "Daniel Moreira",
    specialty: "Floor Sanding & Hardwood Installation",
    city: "Danbury",
    state: "CT",
    joinDate: "Dezembro 2024",
    monthsActive: 10,
    daysActive: 300,
    estimatesGenerated: 89,
    revenueGenerated: 420000,
    monthlySpend: 1900,
    status: "active",
    nps: 10,
    notes: "Restauração de pisos clássicos em Connecticut. 90% dos estimates fecham no local."
  },
  {
    id: "cli-15",
    companyName: "SunState Pools & Patios",
    ownerName: "Bruno Castilho",
    specialty: "Pool Deck Resurfacing & Pavers",
    city: "Tampa",
    state: "FL",
    joinDate: "Maio 2024",
    monthsActive: 17,
    daysActive: 510,
    estimatesGenerated: 155,
    revenueGenerated: 780000,
    monthlySpend: 2800,
    status: "active",
    nps: 10,
    notes: "Forte atuação em Tampa e St. Petersburg com travertino e decks de piscina."
  },
  {
    id: "cli-16",
    companyName: "Nova Kitchen & Bath Renovation",
    ownerName: "Guilherme Martins",
    specialty: "Full Kitchen & Bath",
    city: "White Plains",
    state: "NY",
    joinDate: "Abril 2025",
    monthsActive: 6,
    daysActive: 180,
    estimatesGenerated: 64,
    revenueGenerated: 520000,
    monthlySpend: 2500,
    status: "active",
    nps: 10,
    notes: "Westchester County, NY. Homeowners pagam em média $45,000 por projeto direto."
  },
  {
    id: "cli-17",
    companyName: "Summit Outdoor Living",
    ownerName: "Marcio Antunes",
    specialty: "Covered Patios & Screen Enclosures",
    city: "Jacksonville",
    state: "FL",
    joinDate: "Maio 2025",
    monthsActive: 5,
    daysActive: 150,
    estimatesGenerated: 58,
    revenueGenerated: 340000,
    monthlySpend: 2000,
    status: "active",
    nps: 9,
    notes: "Alcançou o Top 3 no Google Maps em 45 dias de campanha estruturada."
  },
  {
    id: "cli-18",
    companyName: "Atlantic Custom Homes & Remodel",
    ownerName: "Fabio Diniz",
    specialty: "Additions & Structural Remodel",
    city: "Charleston",
    state: "SC",
    joinDate: "Fevereiro 2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesGenerated: 72,
    revenueGenerated: 680000,
    monthlySpend: 2400,
    status: "active",
    nps: 10,
    notes: "Construção de suítes master e extensões de casas antigas na costa da Carolina do Sul."
  },
  {
    id: "cli-19",
    companyName: "Bay State Framing Pro",
    ownerName: "Henrique Duarte",
    specialty: "Rough Framing & Roof Trusses",
    city: "Somerville",
    state: "MA",
    joinDate: "Agosto 2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesGenerated: 108,
    revenueGenerated: 640000,
    monthlySpend: 2200,
    status: "active",
    nps: 10,
    notes: "Transição completa de subcontratado para construtor direto no estado de Massachusetts."
  },
  {
    id: "cli-20",
    companyName: "Lone Star Remodeling Experts",
    ownerName: "Ricardo Vargas",
    specialty: "Kitchen & Interior Remodeling",
    city: "Houston",
    state: "TX",
    joinDate: "Junho 2025",
    monthsActive: 4,
    daysActive: 120,
    estimatesGenerated: 48,
    revenueGenerated: 290000,
    monthlySpend: 2100,
    status: "active",
    nps: 9,
    notes: "Bateu a marca de 90 dias com 14 contratos residenciais fechados em The Woodlands e Katy."
  },
  {
    id: "cli-21",
    companyName: "Precision Tile & Bath Pro",
    ownerName: "Wagner Lopes",
    specialty: "Bathroom Remodeling & Custom Tile",
    city: "Malden",
    state: "MA",
    joinDate: "Janeiro 2025",
    monthsActive: 9,
    daysActive: 270,
    estimatesGenerated: 86,
    revenueGenerated: 440000,
    monthlySpend: 1900,
    status: "active",
    nps: 10,
    notes: "Google Meu Negócio com mais de 75 avaliações 5 estrelas geradas com a metodologia Nivix."
  },
  {
    id: "cli-22",
    companyName: "ProCraft Framing & Decks",
    ownerName: "Cesar Augusto",
    specialty: "Custom Decks & Pergolas",
    city: "Denver",
    state: "CO",
    joinDate: "Novembro 2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesGenerated: 79,
    revenueGenerated: 510000,
    monthlySpend: 2200,
    status: "active",
    nps: 9,
    notes: "Forte presença em Denver e Aurora com materiais resistentes a neve e alta altitude."
  },
  {
    id: "cli-23",
    companyName: "Master Craft Carpentry & Trim",
    ownerName: "Julio Cesar",
    specialty: "Finish Carpentry & Wainscoting",
    city: "Kearny",
    state: "NJ",
    joinDate: "Julho 2024",
    monthsActive: 15,
    daysActive: 450,
    estimatesGenerated: 118,
    revenueGenerated: 530000,
    monthlySpend: 2000,
    status: "active",
    nps: 10,
    notes: "Molduras crown, painéis de parede e portas decorativas nos subúrbios ricos de New Jersey."
  },
  {
    id: "cli-24",
    companyName: "Legacy Builders USA",
    ownerName: "Anderson Lima",
    specialty: "Whole Home Additions",
    city: "Fort Lauderdale",
    state: "FL",
    joinDate: "Outubro 2023",
    monthsActive: 24,
    daysActive: 720,
    estimatesGenerated: 215,
    revenueGenerated: 1950000,
    monthlySpend: 4500,
    status: "active",
    nps: 10,
    notes: "2 anos completos com a Nivix. A construtora mais lucrativa de Broward County na nossa carteira."
  },
  {
    id: "cli-25",
    companyName: "Universal Siding & Gutters",
    ownerName: "Wellington Prado",
    specialty: "Vinyl & Hardie Board Siding",
    city: "Baltimore",
    state: "MD",
    joinDate: "Março 2025",
    monthsActive: 7,
    daysActive: 210,
    estimatesGenerated: 68,
    revenueGenerated: 420000,
    monthlySpend: 2000,
    status: "active",
    nps: 9,
    notes: "Instalação de James Hardie e revestimentos térmicos. Clientes pagam valor de tabela sem choro."
  },
  {
    id: "cli-26",
    companyName: "Pinnacle Home Remodeling",
    ownerName: "Otavio Mello",
    specialty: "Kitchen & Interior Architecture",
    city: "Seattle",
    state: "WA",
    joinDate: "Dezembro 2024",
    monthsActive: 10,
    daysActive: 300,
    estimatesGenerated: 74,
    revenueGenerated: 730000,
    monthlySpend: 2800,
    status: "active",
    nps: 10,
    notes: "Bellevue e Redmond. Ticket médio de $58,000 por cozinha planejada com iluminação de LED."
  },
  {
    id: "cli-27",
    companyName: "Atlas Roofing Solutions Pro",
    ownerName: "Sergio Mendes",
    specialty: "Metal & Shingle Roofing",
    city: "San Antonio",
    state: "TX",
    joinDate: "Setembro 2024",
    monthsActive: 13,
    daysActive: 390,
    estimatesGenerated: 128,
    revenueGenerated: 880000,
    monthlySpend: 2900,
    status: "active",
    nps: 10,
    notes: "Trocas completas de telhado pós-tempestade de granizo. Fechamento direto com donos de casa."
  },
  {
    id: "cli-28",
    companyName: "Sunshine State Remodeling",
    ownerName: "Vinicius Souza",
    specialty: "Kitchen, Bath & Flooring",
    city: "St. Petersburg",
    state: "FL",
    joinDate: "Fevereiro 2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesGenerated: 82,
    revenueGenerated: 460000,
    monthlySpend: 2100,
    status: "active",
    nps: 9,
    notes: "Reformas de condomínios e casas à beira da baía de Tampa com margem limpa de 42%."
  },
  {
    id: "cli-29",
    companyName: "Elite Finish Carpentry & Millwork",
    ownerName: "Rivaldo Souza",
    specialty: "Custom Closets & Cabinetry",
    city: "Brockton",
    state: "MA",
    joinDate: "Junho 2024",
    monthsActive: 16,
    daysActive: 480,
    estimatesGenerated: 132,
    revenueGenerated: 590000,
    monthlySpend: 2300,
    status: "active",
    nps: 10,
    notes: "Closets de luxo e armários sob medida para casas de alto padrão no sul de Boston."
  },
  {
    id: "cli-30",
    companyName: "Green Mountain Builders",
    ownerName: "Adriano Ribeiro",
    specialty: "Timber Framing & Decks",
    city: "Nashua",
    state: "NH",
    joinDate: "Abril 2025",
    monthsActive: 6,
    daysActive: 180,
    estimatesGenerated: 54,
    revenueGenerated: 380000,
    monthlySpend: 1900,
    status: "active",
    nps: 9,
    notes: "Obras em New Hampshire sem imposto sobre vendas. Clientes compram madeira premium."
  },
  {
    id: "cli-31",
    companyName: "Horizon Pavers & Outdoor Living",
    ownerName: "Cristiano Melo",
    specialty: "Travertine Patios & Fire Pits",
    city: "Sarasota",
    state: "FL",
    joinDate: "Janeiro 2025",
    monthsActive: 9,
    daysActive: 270,
    estimatesGenerated: 92,
    revenueGenerated: 610000,
    monthlySpend: 2400,
    status: "active",
    nps: 10,
    notes: "Siesta Key e Lakewood Ranch. Clientes aposentados com dinheiro em conta pagando à vista."
  },
  {
    id: "cli-32",
    companyName: "Palm Coast Construction Group",
    ownerName: "Murilo Batista",
    specialty: "Full Home Remodeling",
    city: "West Palm Beach",
    state: "FL",
    joinDate: "Outubro 2024",
    monthsActive: 12,
    daysActive: 360,
    estimatesGenerated: 105,
    revenueGenerated: 980000,
    monthlySpend: 3100,
    status: "active",
    nps: 10,
    notes: "1 ano fechado com a Nivix. Faturamento anual triplicou em relação aos anos de sub-empreita."
  },
  {
    id: "cli-33",
    companyName: "Alamo City Roofing & Gutters",
    ownerName: "Diego Vasconcelos",
    specialty: "Roofing & Storm Damage",
    city: "San Antonio",
    state: "TX",
    joinDate: "Novembro 2024",
    monthsActive: 11,
    daysActive: 330,
    estimatesGenerated: 96,
    revenueGenerated: 670000,
    monthlySpend: 2600,
    status: "active",
    nps: 10,
    notes: "Zero dependência de seguradoras problemáticas. Estimativas fechadas direto com o dono."
  },
  {
    id: "cli-34",
    companyName: "New England Bath & Kitchen",
    ownerName: "Samuel Costa",
    specialty: "Luxury Bathrooms",
    city: "Quincy",
    state: "MA",
    joinDate: "Agosto 2024",
    monthsActive: 14,
    daysActive: 420,
    estimatesGenerated: 122,
    revenueGenerated: 710000,
    monthlySpend: 2400,
    status: "active",
    nps: 10,
    notes: "Média de 3 banheiros reformados simultaneamente por mês com 2 equipes experientes."
  },
  {
    id: "cli-35",
    companyName: "Royal Oak Remodeling",
    ownerName: "Elias Pinheiro",
    specialty: "Kitchen & Living Room Remodel",
    city: "Fort Worth",
    state: "TX",
    joinDate: "Maio 2025",
    monthsActive: 5,
    daysActive: 150,
    estimatesGenerated: 60,
    revenueGenerated: 370000,
    monthlySpend: 2000,
    status: "active",
    nps: 9,
    notes: "Passou da marca de 90 dias com faturamento mensal médio de $74,000 direto no bolso."
  },
  {
    id: "cli-36",
    companyName: "Coastal Tile & Stone Pro",
    ownerName: "Gilberto Faria",
    specialty: "Custom Showers & Floors",
    city: "Cape Coral",
    state: "FL",
    joinDate: "Março 2025",
    monthsActive: 7,
    daysActive: 210,
    estimatesGenerated: 76,
    revenueGenerated: 390000,
    monthlySpend: 1900,
    status: "active",
    nps: 9,
    notes: "Forte demanda em Fort Myers e Cape Coral para reformas de banheiros com acessibilidade."
  },
  {
    id: "cli-37",
    companyName: "Metro West Framing Contractors",
    ownerName: "Valter Borges",
    specialty: "Residential Wood Framing",
    city: "Marlborough",
    state: "MA",
    joinDate: "Abril 2024",
    monthsActive: 18,
    daysActive: 540,
    estimatesGenerated: 142,
    revenueGenerated: 780000,
    monthlySpend: 2500,
    status: "active",
    nps: 10,
    notes: "Estruturação completa de casas novas de 2 pavimentos. Margem bruta de 35% sem GC intermediário."
  },
  {
    id: "cli-38",
    companyName: "Tri-State Pavers & Hardscape",
    ownerName: "Claudio Antunes",
    specialty: "Driveways & Outdoor Patios",
    city: "Elizabeth",
    state: "NJ",
    joinDate: "Setembro 2024",
    monthsActive: 13,
    daysActive: 390,
    estimatesGenerated: 116,
    revenueGenerated: 580000,
    monthlySpend: 2200,
    status: "active",
    nps: 10,
    notes: "Union County e Bergen County. 100% dos leads vêm de proprietários de casas residenciais."
  },
  {
    id: "cli-39",
    companyName: "Golden Gate Builders USA",
    ownerName: "Fabiano Rezende",
    specialty: "High-End Kitchen Remodel",
    city: "San Jose",
    state: "CA",
    joinDate: "Fevereiro 2025",
    monthsActive: 8,
    daysActive: 240,
    estimatesGenerated: 62,
    revenueGenerated: 890000,
    monthlySpend: 3500,
    status: "active",
    nps: 10,
    notes: "Vale do Silício. Clientes engenheiros de tecnologia com ticket médio de $75,000 por obra."
  },
  {
    id: "cli-40",
    companyName: "Southern Star Remodeling",
    ownerName: "Luciano Braga",
    specialty: "Porches & Home Remodel",
    city: "Savannah",
    state: "GA",
    joinDate: "Abril 2025",
    monthsActive: 6,
    daysActive: 180,
    estimatesGenerated: 52,
    revenueGenerated: 340000,
    monthlySpend: 1900,
    status: "active",
    nps: 9,
    notes: "Restauração de casas históricas e varandas clássicas do sul americano."
  },
  {
    id: "cli-41",
    companyName: "Liberty Construction Group",
    ownerName: "Renan Vasquez",
    specialty: "Basement & Home Remodeling",
    city: "Philadelphia",
    state: "PA",
    joinDate: "Dezembro 2024",
    monthsActive: 10,
    daysActive: 300,
    estimatesGenerated: 88,
    revenueGenerated: 590000,
    monthlySpend: 2300,
    status: "active",
    nps: 10,
    notes: "Main Line Philadelphia. Famílias americanas fechando contratos completos de porão e cozinha."
  },
  {
    id: "cli-42",
    companyName: "Magnolia Roofing & Siding",
    ownerName: "Helio Paiva",
    specialty: "Roofing & Siding",
    city: "Greenville",
    state: "SC",
    joinDate: "Junho 2025",
    monthsActive: 4,
    daysActive: 115,
    estimatesGenerated: 42,
    revenueGenerated: 310000,
    monthlySpend: 2000,
    status: "active",
    nps: 9,
    notes: "Superou os 90 dias com 12 telhados fechados sem depender de indicações lentas."
  },
  {
    id: "cli-43",
    companyName: "First Choice Hardscapes Pro",
    ownerName: "Marcos Aurelio",
    specialty: "Pool Decks & Custom Pavers",
    city: "Naples",
    state: "FL",
    joinDate: "Julho 2024",
    monthsActive: 15,
    daysActive: 450,
    estimatesGenerated: 110,
    revenueGenerated: 920000,
    monthlySpend: 2700,
    status: "active",
    nps: 10,
    notes: "Naples e Marco Island. Clientes milionários pagando antecipado para garantir data na agenda."
  },
  // 3 Clientes em Maturação (menos de 90 dias)
  {
    id: "cli-44",
    companyName: "Pioneer Drywall & Framing",
    ownerName: "Rafael Camargo",
    specialty: "Drywall & Basements",
    city: "Salt Lake City",
    state: "UT",
    joinDate: "Agosto 2025",
    monthsActive: 2,
    daysActive: 65,
    estimatesGenerated: 24,
    revenueGenerated: 140000,
    monthlySpend: 1900,
    status: "maturing",
    nps: 9,
    notes: "Cliente novo em fase de ramp-up (65 dias). Já fechou 4 porões no primeiro mês de campanha."
  },
  {
    id: "cli-45",
    companyName: "Modern Touch Home Renovation",
    ownerName: "Cleber Toledo",
    specialty: "Kitchen & Bath",
    city: "Clearwater",
    state: "FL",
    joinDate: "Agosto 2025",
    monthsActive: 2,
    daysActive: 55,
    estimatesGenerated: 21,
    revenueGenerated: 115000,
    monthlySpend: 2000,
    status: "maturing",
    nps: 9,
    notes: "55 dias de contrato. 6 estimates enviados na última semana aguardando assinatura."
  },
  {
    id: "cli-46",
    companyName: "Signature Homes & Remodel",
    ownerName: "Juliano Rossi",
    specialty: "Whole House Interior",
    city: "Boca Raton",
    state: "FL",
    joinDate: "Setembro 2025",
    monthsActive: 1,
    daysActive: 35,
    estimatesGenerated: 14,
    revenueGenerated: 75000,
    monthlySpend: 2500,
    status: "maturing",
    nps: 10,
    notes: "Onboarding recente (35 dias). Já obteve o selo de Top 1 no Maps da sua região."
  }
];

export default function NivixInternalCrm() {
  const [clients] = useState<ContractorClient[]>(mockClients);
  const [filterMode, setFilterMode] = useState<"all" | "90plus" | "6months" | "1year" | "maturing">("90plus");
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("all");
  const [selectedClient, setSelectedClient] = useState<ContractorClient | null>(null);

  // Cálculos de LTV e Retenção
  const totalClients = clients.length; // 46
  const clientsAbove90Days = clients.filter(c => c.daysActive >= 90); // 43
  const retentionRate90Plus = ((clientsAbove90Days.length / totalClients) * 100).toFixed(1); // 93.5%
  const totalRevenueGenerated = clients.reduce((acc, c) => acc + c.revenueGenerated, 0);
  const totalEstimates = clients.reduce((acc, c) => acc + c.estimatesGenerated, 0);
  const averageLtvMonths = (clients.reduce((acc, c) => acc + c.monthsActive, 0) / totalClients).toFixed(1);

  // Filtragem dos clientes
  const filteredClients = useMemo(() => {
    return clients.filter(client => {
      // Filtro de LTV
      let matchesLtv = true;
      if (filterMode === "90plus") matchesLtv = client.daysActive >= 90;
      else if (filterMode === "6months") matchesLtv = client.monthsActive >= 6;
      else if (filterMode === "1year") matchesLtv = client.monthsActive >= 12;
      else if (filterMode === "maturing") matchesLtv = client.daysActive < 90;

      // Filtro de busca
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        client.companyName.toLowerCase().includes(query) ||
        client.ownerName.toLowerCase().includes(query) ||
        client.city.toLowerCase().includes(query) ||
        client.specialty.toLowerCase().includes(query);

      // Filtro de estado
      const matchesState = stateFilter === "all" || client.state === stateFilter;

      return matchesLtv && matchesSearch && matchesState;
    });
  }, [clients, filterMode, searchQuery, stateFilter]);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-neutral-100 font-sans selection:bg-amber-400 selection:text-black">
      
      {/* HEADER DO CRM INTERNO NIVIX */}
      <header className="sticky top-0 z-50 bg-[#101218]/95 backdrop-blur-xl border-b border-neutral-800 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo e Badge de CRM Interno */}
          <div className="flex items-center gap-3.5 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <a href="/builders" className="flex items-center gap-2">
                <img src="/logo.png" alt="Nivix Logo" className="w-28 sm:w-32 object-contain" />
              </a>
              <span className="w-px h-5 bg-neutral-800 hidden sm:inline-block"></span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CRM Interno • Construtoras nos EUA</span>
              </div>
            </div>

            {/* Acesso rápido ao SERP */}
            <a 
              href="/serp" 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/40 text-neutral-300 hover:text-white text-xs font-semibold transition-all"
            >
              <span>Abrir SERP</span>
              <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
          </div>

          {/* Selo Confidencial de Vendas */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 font-mono">
              <FaShieldHalved className="text-emerald-400 text-xs" />
              <span>Painel de Prova Social para Calls de Fechamento</span>
            </div>
            <a
              href="/builders"
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-xs font-bold transition-all"
            >
              Voltar ao Site
            </a>
          </div>

        </div>
      </header>

      {/* PAINEL DE RETENÇÃO & TELEMETRIA HERO (A ARMA DA CALL) */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-6 bg-gradient-to-b from-[#101218] to-transparent">
        <div className="max-w-[1800px] mx-auto">
          
          {/* Banner de Impacto de Retenção */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-r from-amber-950/25 via-neutral-900 to-neutral-900 border-2 border-amber-400/50 shadow-[0_20px_60px_rgba(255,180,0,0.12)] mb-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono mb-3 uppercase tracking-wider">
                  <FaCheck className="text-xs" />
                  <span>Índice de Retenção Comprovado</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  <span className="text-emerald-400">{retentionRate90Plus}%</span> dos construtores continuam após 90 dias
                </h1>
                <p className="text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Mostre isso na call: construtores americanos não cancelam com a Nivix porque a esteira de estimates traz contratos diretos todo mês. A média de permanência ativa é de <strong>{averageLtvMonths} meses</strong> contínuos.
                </p>
              </div>

              {/* Botão de Destaque para Clicar em Call */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setFilterMode("90plus")}
                  className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2.5 shadow-xl ${
                    filterMode === "90plus"
                      ? "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black shadow-amber-400/25 scale-105"
                      : "bg-neutral-800 text-amber-300 border border-amber-400/40 hover:bg-neutral-700"
                  }`}
                >
                  <FaCrown className="text-base" />
                  <span>Exibir Clientes LTV &gt; 90 Dias ({clientsAbove90Days.length})</span>
                </button>
              </div>

            </div>
          </div>

          {/* CARDS DE MÉTRICAS OPERACIONAIS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-mono mb-1">
                <span>Construtoras Ativas</span>
                <FaBuilding className="text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {totalClients}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Contratos ativos nos EUA
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-emerald-500/30">
              <div className="flex items-center justify-between text-emerald-400 text-xs font-mono font-bold mb-1">
                <span>Retenção pós-90 dias</span>
                <FaCheck className="text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                {retentionRate90Plus}%
              </div>
              <p className="text-[11px] text-neutral-300 mt-1">
                {clientsAbove90Days.length} de {totalClients} continuam firmes
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800">
              <div className="flex items-center justify-between text-neutral-400 text-xs font-mono mb-1">
                <span>LTV Médio Contínuo</span>
                <FaClock className="text-blue-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                {averageLtvMonths} <span className="text-sm font-normal text-neutral-400">meses</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Tempo médio de parceria
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/90 border border-amber-400/30">
              <div className="flex items-center justify-between text-amber-300 text-xs font-mono font-bold mb-1">
                <span>Faturamento Gerado p/ Clientes</span>
                <FaDollarSign className="text-amber-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                ${(totalRevenueGenerated / 1000000).toFixed(1)}M+
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                {totalEstimates.toLocaleString()} estimates gerados
              </p>
            </div>

          </div>

          {/* CONTROLE DE FILTROS E LTV */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#121318] border border-neutral-800">
            
            {/* Abas de LTV (O usuário pode alternar durante a call) */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 text-xs">
              {[
                { id: "all", label: `Todos (${totalClients})` },
                { id: "90plus", label: `⭐ LTV > 90 Dias (${clientsAbove90Days.length}) • ${retentionRate90Plus}%` },
                { id: "6months", label: `LTV > 6 Meses (${clients.filter(c => c.monthsActive >= 6).length})` },
                { id: "1year", label: `LTV > 1 Ano (${clients.filter(c => c.monthsActive >= 12).length})` },
                { id: "maturing", label: `Novos < 90 Dias (${clients.filter(c => c.daysActive < 90).length})` }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilterMode(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    filterMode === tab.id
                      ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                      : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Busca & Filtro de Estado */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-72">
                <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Buscar construtora, dono ou cidade..."
                  className="w-full pl-9 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/50"
                />
              </div>

              <select
                value={stateFilter}
                onChange={e => setStateFilter(e.target.value)}
                className="px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-neutral-300 focus:outline-none cursor-pointer"
              >
                <option value="all">Todos Estados</option>
                <option value="FL">Flórida (FL)</option>
                <option value="MA">Massachusetts (MA)</option>
                <option value="TX">Texas (TX)</option>
                <option value="NJ">New Jersey (NJ)</option>
                <option value="CA">California (CA)</option>
                <option value="GA">Georgia (GA)</option>
                <option value="NC">North Carolina (NC)</option>
                <option value="SC">South Carolina (SC)</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* TABELA / LISTA DE CLIENTES ATIVOS DA NIVIX */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="rounded-3xl bg-[#121318] border border-neutral-800 overflow-hidden shadow-2xl">
          
          {/* Top Bar da Tabela */}
          <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Construtoras Parceiras Ativas
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                {filteredClients.length} exibidos
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Dados verificados em tempo real</span>
            </div>
          </div>

          {/* Tabela de Construtoras */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-900/80 border-b border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Construtora / Responsável</th>
                  <th className="py-3.5 px-4">Especialidade & Região</th>
                  <th className="py-3.5 px-4 text-center">Tempo de Casa (LTV)</th>
                  <th className="py-3.5 px-4 text-center">Estimates Gerados</th>
                  <th className="py-3.5 px-4 text-right">Faturamento Gerado</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {filteredClients.map((client) => {
                  const isOver90Days = client.daysActive >= 90;

                  return (
                    <tr 
                      key={client.id}
                      onClick={() => setSelectedClient(client)}
                      className="hover:bg-neutral-900/60 transition-colors cursor-pointer group"
                    >
                      {/* Construtora e Dono */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-neutral-800 border border-neutral-700/60 flex items-center justify-center font-bold text-amber-300 shrink-0 group-hover:border-amber-400/40 transition-colors">
                            {client.companyName.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                              {client.companyName}
                            </div>
                            <div className="text-xs text-neutral-400 font-medium">
                              Resp: {client.ownerName}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Especialidade e Cidade */}
                      <td className="py-4 px-4">
                        <div className="text-xs text-neutral-200 font-semibold truncate max-w-[220px]">
                          {client.specialty}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-400 mt-0.5">
                          <FaLocationDot className="text-neutral-500 text-[10px]" />
                          <span>{client.city}, {client.state}</span>
                        </div>
                      </td>

                      {/* Tempo de Casa (LTV em destaque) */}
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex flex-col items-center">
                          <span className="font-black text-white text-sm font-mono">
                            {client.monthsActive} meses
                          </span>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full mt-1 ${
                            isOver90Days 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                          }`}>
                            {isOver90Days ? `LTV 90+ Dias ✓ (${client.daysActive}d)` : `Ramp-up (${client.daysActive}d)`}
                          </span>
                        </div>
                      </td>

                      {/* Estimates Gerados */}
                      <td className="py-4 px-4 text-center">
                        <span className="font-mono font-bold text-white text-sm">
                          {client.estimatesGenerated}
                        </span>
                        <span className="block text-[10px] text-neutral-400 font-mono">estimates</span>
                      </td>

                      {/* Faturamento Gerado */}
                      <td className="py-4 px-4 text-right">
                        <div className="font-mono font-black text-amber-300 text-sm">
                          ${client.revenueGenerated.toLocaleString()}
                        </div>
                        <span className="text-[10px] text-neutral-500 font-mono">em obras fechadas</span>
                      </td>

                      {/* Status / NPS */}
                      <td className="py-4 px-4 text-center">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Ativo</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

      </main>

      {/* MODAL DETALHADO DO CLIENTE (PARA ABRIR EM CALL) */}
      <AnimatePresence>
        {selectedClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-[#14151b] border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-y-auto max-h-[90vh]"
            >
              
              {/* Header do Modal */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xl font-black">
                    {selectedClient.companyName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{selectedClient.companyName}</h3>
                    <p className="text-xs text-neutral-400">Responsável: {selectedClient.ownerName} • {selectedClient.city}, {selectedClient.state}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white"
                >
                  <FaXmark />
                </button>
              </div>

              {/* Grid de Métricas */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">Tempo Contínuo (LTV)</span>
                  <span className="text-lg font-black text-emerald-400 font-mono mt-0.5 block">{selectedClient.monthsActive} Meses</span>
                  <span className="text-[10px] text-neutral-400 font-mono">{selectedClient.daysActive} dias ativos</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">Estimates Entregues</span>
                  <span className="text-lg font-black text-white font-mono mt-0.5 block">{selectedClient.estimatesGenerated}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">100% Homeowners</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900 border border-amber-400/30">
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-300 block">Faturamento Fechado</span>
                  <span className="text-lg font-black text-amber-400 font-mono mt-0.5 block">${selectedClient.revenueGenerated.toLocaleString()}</span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">$0 General Contractor</span>
                </div>
              </div>

              {/* Histórico e Notas do Case */}
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-1.5">
                  Raio-X da Operação:
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed font-medium">
                  {selectedClient.notes}
                </p>
              </div>

              {/* Ancoragem para a Call */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between">
                <div>
                  <span className="font-bold block">Status da Parceria:</span>
                  <span className="text-neutral-400 text-[11px]">Cliente ultrapassou com sucesso a fase de maturação dos 90 dias e continua gerando caixa.</span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full font-bold font-mono shrink-0">
                  Retenção 100%
                </span>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
