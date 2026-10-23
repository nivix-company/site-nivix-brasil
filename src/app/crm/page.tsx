'use client';

import React, { useState, useMemo, useEffect } from "react";
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
  FaBriefcase, 
  FaTableList, 
  FaTableCellsLarge, 
  FaChevronDown, 
  FaRotateLeft, 
  FaCheck, 
  FaHammer, 
  FaHelmetSafety 
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
  status: "ativo" | "socio" | "churned";
  healthScore: "excelente" | "estavel";
  nps: number;
  notes: string;
}

const accountsData: ContractorAccount[] = [
  {
    "id": "ACC-001",
    "companyName": "Vanguard Builders Syndicate",
    "ownerName": "Rodrigo Almeida",
    "specialty": "General Contractor & Framing",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "10/01/2023",
    "monthsActive": 28,
    "daysActive": 840,
    "estimatesDelivered": 342,
    "closedRevenue": 2680000,
    "monthlyPlan": 4500,
    "status": "socio",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Conta S\u00f3cia / Equity Partner. Opera\u00e7\u00e3o integrada de capta\u00e7\u00e3o e execu\u00e7\u00e3o em Greater Boston com 5 crews."
  },
  {
    "id": "ACC-002",
    "companyName": "Apex Luxury Remodeling Group",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "15/04/2023",
    "monthsActive": 25,
    "daysActive": 750,
    "estimatesDelivered": 298,
    "closedRevenue": 2350000,
    "monthlyPlan": 4200,
    "status": "socio",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Conta S\u00f3cia. Dom\u00ednio de buscas e capta\u00e7\u00e3o de reformas de alto padr\u00e3o em Windermere e Winter Park."
  },
  {
    "id": "ACC-003",
    "companyName": "Titan Storm & Roofing Ventures",
    "ownerName": "Eduardo Santos",
    "specialty": "Commercial & Residential Roofing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "05/08/2023",
    "monthsActive": 22,
    "daysActive": 660,
    "estimatesDelivered": 274,
    "closedRevenue": 2100000,
    "monthlyPlan": 4000,
    "status": "socio",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Conta S\u00f3cia. Estrutura de sinistros e trocas de telhados p\u00f3s-tempestade no norte do Texas."
  },
  {
    "id": "ACC-004",
    "companyName": "Empire Hardscapes & Outdoor Syndicate",
    "ownerName": "Gabriel Costa",
    "specialty": "Patios, Travertine & Pools",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "20/01/2024",
    "monthsActive": 18,
    "daysActive": 540,
    "estimatesDelivered": 215,
    "closedRevenue": 1580000,
    "monthlyPlan": 3500,
    "status": "socio",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Conta S\u00f3cia. Especialista em pavimenta\u00e7\u00e3o de travertino e cozinhas externas em North Jersey."
  },
  {
    "id": "ACC-005",
    "companyName": "Empire Interior Concepts",
    "ownerName": "Flavio Neves",
    "specialty": "Commercial & Residential Roofing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "24/07/2025",
    "monthsActive": 2,
    "daysActive": 72,
    "estimatesDelivered": 13,
    "closedRevenue": 73359,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-006",
    "companyName": "Heritage Custom Homes",
    "ownerName": "Flavio Neves",
    "specialty": "Commercial & Residential Roofing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "01/09/2025",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 18,
    "closedRevenue": 169758,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-007",
    "companyName": "Silva & Sons Builders LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "Commercial & Residential Roofing",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "05/07/2025",
    "monthsActive": 1,
    "daysActive": 48,
    "estimatesDelivered": 15,
    "closedRevenue": 101640,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-008",
    "companyName": "Empire Framing Contractors",
    "ownerName": "Paulo Henrique",
    "specialty": "Commercial & Residential Roofing",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "15/09/2024",
    "monthsActive": 14,
    "daysActive": 439,
    "estimatesDelivered": 158,
    "closedRevenue": 1734366,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-009",
    "companyName": "Metro Renovations Co.",
    "ownerName": "Claudio Silva",
    "specialty": "Commercial & Residential Roofing",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "28/04/2025",
    "monthsActive": 5,
    "daysActive": 151,
    "estimatesDelivered": 58,
    "closedRevenue": 327874,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-010",
    "companyName": "Miami Hardscapes & Pavers",
    "ownerName": "Cristiano Melo",
    "specialty": "Commercial & Residential Roofing",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "21/03/2024",
    "monthsActive": 14,
    "daysActive": 426,
    "estimatesDelivered": 159,
    "closedRevenue": 1588410,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-011",
    "companyName": "SunState Interior Concepts",
    "ownerName": "Lucas Ferreira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "11/07/2024",
    "monthsActive": 10,
    "daysActive": 301,
    "estimatesDelivered": 104,
    "closedRevenue": 1205776,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-012",
    "companyName": "Sterling Renovations Co.",
    "ownerName": "Rogerio Maciel",
    "specialty": "Commercial & Metal Roofs",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/04/2024",
    "monthsActive": 18,
    "daysActive": 552,
    "estimatesDelivered": 258,
    "closedRevenue": 1849602,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-013",
    "companyName": "Orlando Painting & Drywall",
    "ownerName": "Thiago Oliveira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "03/01/2024",
    "monthsActive": 15,
    "daysActive": 457,
    "estimatesDelivered": 147,
    "closedRevenue": 1329174,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-014",
    "companyName": "Highline Framing Contractors",
    "ownerName": "Thiago Oliveira",
    "specialty": "Commercial & Residential Roofing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "18/01/2024",
    "monthsActive": 15,
    "daysActive": 462,
    "estimatesDelivered": 222,
    "closedRevenue": 1567098,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-015",
    "companyName": "Craftsman Builders LLC",
    "ownerName": "Alexandre Pires",
    "specialty": "Commercial & Metal Roofs",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "24/05/2024",
    "monthsActive": 16,
    "daysActive": 485,
    "estimatesDelivered": 228,
    "closedRevenue": 2488620,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-016",
    "companyName": "Apex Interior Concepts",
    "ownerName": "Andre Guimaraes",
    "specialty": "Commercial & Residential Roofing",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "06/09/2024",
    "monthsActive": 19,
    "daysActive": 576,
    "estimatesDelivered": 180,
    "closedRevenue": 2024280,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-017",
    "companyName": "Vanguard Outdoor Living",
    "ownerName": "Carlos Andrade",
    "specialty": "Commercial & Metal Roofs",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "19/02/2024",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 144,
    "closedRevenue": 1004112,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-018",
    "companyName": "Sterling Outdoor Living",
    "ownerName": "Daniel Moreira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "28/10/2024",
    "monthsActive": 18,
    "daysActive": 557,
    "estimatesDelivered": 170,
    "closedRevenue": 1584740,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-019",
    "companyName": "Supreme Framing Contractors",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Roofing & Storm Restoration",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "08/02/2024",
    "monthsActive": 15,
    "daysActive": 464,
    "estimatesDelivered": 215,
    "closedRevenue": 1511450,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-020",
    "companyName": "Green Mountain Renovations Co.",
    "ownerName": "Roberto Faria",
    "specialty": "Commercial & Metal Roofs",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "02/06/2023",
    "monthsActive": 23,
    "daysActive": 691,
    "estimatesDelivered": 235,
    "closedRevenue": 2917995,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-021",
    "companyName": "Silva & Sons Painting & Drywall",
    "ownerName": "Claudio Silva",
    "specialty": "Commercial & Residential Roofing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "16/07/2025",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 105,
    "closedRevenue": 1199835,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-022",
    "companyName": "Green Mountain Custom Homes",
    "ownerName": "Claudio Silva",
    "specialty": "Roofing & Storm Restoration",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "24/06/2024",
    "monthsActive": 17,
    "daysActive": 511,
    "estimatesDelivered": 140,
    "closedRevenue": 1161720,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-023",
    "companyName": "Silva & Sons Remodeling Group",
    "ownerName": "Rogerio Maciel",
    "specialty": "Commercial & Metal Roofs",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "03/08/2025",
    "monthsActive": 8,
    "daysActive": 248,
    "estimatesDelivered": 119,
    "closedRevenue": 1447397,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-024",
    "companyName": "Miami Roofing Solutions",
    "ownerName": "Felipe Barreto",
    "specialty": "Roofing & Storm Restoration",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "28/07/2024",
    "monthsActive": 10,
    "daysActive": 313,
    "estimatesDelivered": 151,
    "closedRevenue": 1019401,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-025",
    "companyName": "Pinnacle Custom Homes",
    "ownerName": "Leandro Rocha",
    "specialty": "Roofing & Storm Restoration",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "23/08/2024",
    "monthsActive": 17,
    "daysActive": 519,
    "estimatesDelivered": 233,
    "closedRevenue": 2428326,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-026",
    "companyName": "Empire Restorations",
    "ownerName": "Roberto Faria",
    "specialty": "Roofing & Storm Restoration",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "17/03/2025",
    "monthsActive": 4,
    "daysActive": 138,
    "estimatesDelivered": 68,
    "closedRevenue": 814980,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-027",
    "companyName": "Titan Interior Concepts",
    "ownerName": "Cleber Toledo",
    "specialty": "Roofing & Storm Restoration",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "19/04/2023",
    "monthsActive": 24,
    "daysActive": 727,
    "estimatesDelivered": 317,
    "closedRevenue": 3896881,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-028",
    "companyName": "Modern Touch Flooring Specialists",
    "ownerName": "Otavio Mello",
    "specialty": "Roofing & Storm Restoration",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "09/07/2024",
    "monthsActive": 19,
    "daysActive": 578,
    "estimatesDelivered": 199,
    "closedRevenue": 1384045,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-029",
    "companyName": "Vanguard Custom Homes",
    "ownerName": "Rivaldo Souza",
    "specialty": "Commercial & Residential Roofing",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "17/05/2024",
    "monthsActive": 21,
    "daysActive": 633,
    "estimatesDelivered": 180,
    "closedRevenue": 1214280,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-030",
    "companyName": "Elite Builders LLC",
    "ownerName": "Matheus Nogueira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "22/02/2024",
    "monthsActive": 20,
    "daysActive": 609,
    "estimatesDelivered": 152,
    "closedRevenue": 1132704,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-031",
    "companyName": "Elite Restorations",
    "ownerName": "Carlos Andrade",
    "specialty": "Roofing & Storm Restoration",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "21/05/2023",
    "monthsActive": 22,
    "daysActive": 666,
    "estimatesDelivered": 271,
    "closedRevenue": 2881001,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-032",
    "companyName": "United Carpentry & Design",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Commercial & Residential Roofing",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "09/03/2024",
    "monthsActive": 11,
    "daysActive": 330,
    "estimatesDelivered": 138,
    "closedRevenue": 1410222,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-033",
    "companyName": "Titan Renovations Co.",
    "ownerName": "Matheus Nogueira",
    "specialty": "Commercial & Residential Roofing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "18/03/2025",
    "monthsActive": 7,
    "daysActive": 227,
    "estimatesDelivered": 58,
    "closedRevenue": 566718,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-034",
    "companyName": "Green Mountain Restorations",
    "ownerName": "Renato Ramos",
    "specialty": "Roofing & Storm Restoration",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "28/07/2025",
    "monthsActive": 9,
    "daysActive": 273,
    "estimatesDelivered": 120,
    "closedRevenue": 1469040,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-035",
    "companyName": "Titan Restorations",
    "ownerName": "Paulo Henrique",
    "specialty": "Commercial & Residential Roofing",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "06/12/2025",
    "monthsActive": 3,
    "daysActive": 100,
    "estimatesDelivered": 46,
    "closedRevenue": 330510,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-036",
    "companyName": "Summit Renovations Co.",
    "ownerName": "Fernando Dias",
    "specialty": "Roofing & Storm Restoration",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "01/11/2024",
    "monthsActive": 17,
    "daysActive": 521,
    "estimatesDelivered": 194,
    "closedRevenue": 1324244,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-037",
    "companyName": "Titan Builders LLC",
    "ownerName": "Murilo Batista",
    "specialty": "Commercial & Metal Roofs",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "09/03/2024",
    "monthsActive": 19,
    "daysActive": 582,
    "estimatesDelivered": 232,
    "closedRevenue": 1379008,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-038",
    "companyName": "Palm Coast Roofing Solutions",
    "ownerName": "Eduardo Santos",
    "specialty": "Roofing & Storm Restoration",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "19/04/2024",
    "monthsActive": 13,
    "daysActive": 403,
    "estimatesDelivered": 114,
    "closedRevenue": 1409952,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-039",
    "companyName": "Precision Roofing Solutions",
    "ownerName": "Marcelo Rezende",
    "specialty": "Commercial & Metal Roofs",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "10/09/2025",
    "monthsActive": 5,
    "daysActive": 160,
    "estimatesDelivered": 65,
    "closedRevenue": 708240,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-040",
    "companyName": "Apex Renovations Co.",
    "ownerName": "Rogerio Maciel",
    "specialty": "Commercial & Residential Roofing",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "19/05/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 123,
    "closedRevenue": 1235166,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-041",
    "companyName": "Signature Outdoor Living",
    "ownerName": "Roberto Faria",
    "specialty": "Commercial & Metal Roofs",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "15/11/2024",
    "monthsActive": 21,
    "daysActive": 649,
    "estimatesDelivered": 263,
    "closedRevenue": 2266797,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-042",
    "companyName": "Horizon Outdoor Living",
    "ownerName": "Otavio Mello",
    "specialty": "Roofing & Storm Restoration",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "25/04/2024",
    "monthsActive": 12,
    "daysActive": 380,
    "estimatesDelivered": 149,
    "closedRevenue": 1743896,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-043",
    "companyName": "Patriot Roofing Solutions",
    "ownerName": "Paulo Henrique",
    "specialty": "Roofing & Storm Restoration",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "21/10/2024",
    "monthsActive": 10,
    "daysActive": 315,
    "estimatesDelivered": 91,
    "closedRevenue": 763945,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-044",
    "companyName": "Gold Coast Framing Contractors",
    "ownerName": "Gilberto Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "26/09/2025",
    "monthsActive": 1,
    "daysActive": 48,
    "estimatesDelivered": 13,
    "closedRevenue": 77220,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-045",
    "companyName": "Paramount Restorations",
    "ownerName": "Roberto Faria",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "11/08/2025",
    "monthsActive": 2,
    "daysActive": 81,
    "estimatesDelivered": 18,
    "closedRevenue": 168786,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-046",
    "companyName": "Patriot Painting & Drywall",
    "ownerName": "Andre Guimaraes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "27/09/2025",
    "monthsActive": 2,
    "daysActive": 73,
    "estimatesDelivered": 22,
    "closedRevenue": 143550,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-047",
    "companyName": "Horizon Roofing Solutions",
    "ownerName": "Renato Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "18/02/2024",
    "monthsActive": 12,
    "daysActive": 367,
    "estimatesDelivered": 141,
    "closedRevenue": 1074279,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-048",
    "companyName": "Bluewater Remodeling Group",
    "ownerName": "Rafael Camargo",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "07/07/2024",
    "monthsActive": 16,
    "daysActive": 490,
    "estimatesDelivered": 234,
    "closedRevenue": 1289340,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-049",
    "companyName": "Horizon Hardscapes & Pavers",
    "ownerName": "Cleber Toledo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "24/12/2024",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 192,
    "closedRevenue": 1806528,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-050",
    "companyName": "NextGen Framing Contractors",
    "ownerName": "Matheus Nogueira",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "06/08/2025",
    "monthsActive": 3,
    "daysActive": 102,
    "estimatesDelivered": 46,
    "closedRevenue": 502872,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-051",
    "companyName": "Elite Roofing Solutions",
    "ownerName": "Felipe Barreto",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "28/08/2023",
    "monthsActive": 24,
    "daysActive": 720,
    "estimatesDelivered": 202,
    "closedRevenue": 1234422,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-052",
    "companyName": "Lone Star Framing Contractors",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "27/02/2024",
    "monthsActive": 13,
    "daysActive": 402,
    "estimatesDelivered": 153,
    "closedRevenue": 1081098,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-053",
    "companyName": "Green Mountain Construction Pro",
    "ownerName": "Renato Ramos",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "07/01/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 39,
    "closedRevenue": 273975,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-054",
    "companyName": "All-Star Restorations",
    "ownerName": "Thiago Oliveira",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "20/10/2025",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 108,
    "closedRevenue": 688392,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-055",
    "companyName": "Silva & Sons Carpentry & Design",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "07/02/2025",
    "monthsActive": 3,
    "daysActive": 99,
    "estimatesDelivered": 49,
    "closedRevenue": 531993,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-056",
    "companyName": "Heritage Restorations",
    "ownerName": "Marcos Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "17/11/2025",
    "monthsActive": 4,
    "daysActive": 137,
    "estimatesDelivered": 61,
    "closedRevenue": 339404,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-057",
    "companyName": "NextGen Outdoor Living",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "06/12/2024",
    "monthsActive": 14,
    "daysActive": 440,
    "estimatesDelivered": 202,
    "closedRevenue": 1730534,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-058",
    "companyName": "Green Mountain Outdoor Living",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "03/05/2024",
    "monthsActive": 21,
    "daysActive": 638,
    "estimatesDelivered": 259,
    "closedRevenue": 3057495,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-059",
    "companyName": "ProCraft Carpentry & Design",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "12/05/2024",
    "monthsActive": 18,
    "daysActive": 550,
    "estimatesDelivered": 173,
    "closedRevenue": 1165501,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-060",
    "companyName": "Stonegate Carpentry & Design",
    "ownerName": "Gustavo Pinho",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "18/04/2025",
    "monthsActive": 9,
    "daysActive": 272,
    "estimatesDelivered": 100,
    "closedRevenue": 900200,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-061",
    "companyName": "United Framing Contractors",
    "ownerName": "Gustavo Pinho",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "22/10/2025",
    "monthsActive": 5,
    "daysActive": 157,
    "estimatesDelivered": 72,
    "closedRevenue": 540576,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-062",
    "companyName": "Precision Builders LLC",
    "ownerName": "Leandro Rocha",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "08/02/2024",
    "monthsActive": 13,
    "daysActive": 404,
    "estimatesDelivered": 151,
    "closedRevenue": 1065909,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-063",
    "companyName": "Diamond Renovations Co.",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "07/05/2024",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 203,
    "closedRevenue": 2399460,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-064",
    "companyName": "First Choice Renovations Co.",
    "ownerName": "Marcos Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "28/08/2025",
    "monthsActive": 4,
    "daysActive": 137,
    "estimatesDelivered": 50,
    "closedRevenue": 511250,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-065",
    "companyName": "Vanguard Interior Concepts",
    "ownerName": "Carlos Andrade",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "27/02/2025",
    "monthsActive": 8,
    "daysActive": 241,
    "estimatesDelivered": 99,
    "closedRevenue": 587466,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-066",
    "companyName": "NextGen Custom Homes",
    "ownerName": "Cleber Toledo",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "18/07/2024",
    "monthsActive": 21,
    "daysActive": 639,
    "estimatesDelivered": 175,
    "closedRevenue": 1044750,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-067",
    "companyName": "Ironwood Custom Homes",
    "ownerName": "Daniel Moreira",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "24/02/2024",
    "monthsActive": 12,
    "daysActive": 373,
    "estimatesDelivered": 136,
    "closedRevenue": 1359184,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-068",
    "companyName": "Signature Renovations Co.",
    "ownerName": "Cleber Toledo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "14/08/2025",
    "monthsActive": 8,
    "daysActive": 257,
    "estimatesDelivered": 70,
    "closedRevenue": 351470,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-069",
    "companyName": "Paramount Builders LLC",
    "ownerName": "Leandro Rocha",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "26/11/2024",
    "monthsActive": 12,
    "daysActive": 374,
    "estimatesDelivered": 103,
    "closedRevenue": 738201,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-070",
    "companyName": "Legacy Builders LLC",
    "ownerName": "Wellington Prado",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "24/10/2025",
    "monthsActive": 7,
    "daysActive": 211,
    "estimatesDelivered": 71,
    "closedRevenue": 701054,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-071",
    "companyName": "Lone Star Flooring Specialists",
    "ownerName": "Luciano Mendes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "20/01/2024",
    "monthsActive": 11,
    "daysActive": 347,
    "estimatesDelivered": 165,
    "closedRevenue": 933570,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-072",
    "companyName": "Stonegate Hardscapes & Pavers",
    "ownerName": "Andre Guimaraes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "02/03/2023",
    "monthsActive": 24,
    "daysActive": 738,
    "estimatesDelivered": 176,
    "closedRevenue": 1710720,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-073",
    "companyName": "Miami Flooring Specialists",
    "ownerName": "Claudio Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "11/06/2024",
    "monthsActive": 16,
    "daysActive": 482,
    "estimatesDelivered": 233,
    "closedRevenue": 1944385,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-074",
    "companyName": "All-Star Roofing Solutions",
    "ownerName": "Thiago Oliveira",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/05/2024",
    "monthsActive": 15,
    "daysActive": 467,
    "estimatesDelivered": 116,
    "closedRevenue": 663636,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-075",
    "companyName": "United Construction Pro",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "15/01/2025",
    "monthsActive": 9,
    "daysActive": 286,
    "estimatesDelivered": 119,
    "closedRevenue": 1204637,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-076",
    "companyName": "Empire Custom Homes",
    "ownerName": "Marcelo Rezende",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "18/01/2024",
    "monthsActive": 18,
    "daysActive": 540,
    "estimatesDelivered": 186,
    "closedRevenue": 1403370,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-077",
    "companyName": "United Construction Pro",
    "ownerName": "Gilberto Ramos",
    "specialty": "Luxury Bathroom Renovations",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "16/08/2025",
    "monthsActive": 7,
    "daysActive": 219,
    "estimatesDelivered": 87,
    "closedRevenue": 1029906,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-078",
    "companyName": "Pinnacle Carpentry & Design",
    "ownerName": "Marcos Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "26/09/2024",
    "monthsActive": 19,
    "daysActive": 572,
    "estimatesDelivered": 219,
    "closedRevenue": 1704696,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-079",
    "companyName": "Precision Restorations",
    "ownerName": "Gilberto Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "25/09/2024",
    "monthsActive": 17,
    "daysActive": 525,
    "estimatesDelivered": 213,
    "closedRevenue": 2027973,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-080",
    "companyName": "Metro Painting & Drywall",
    "ownerName": "Paulo Henrique",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "16/12/2024",
    "monthsActive": 10,
    "daysActive": 313,
    "estimatesDelivered": 79,
    "closedRevenue": 876900,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-081",
    "companyName": "Modern Touch Remodeling Group",
    "ownerName": "Andre Guimaraes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "28/08/2025",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 89,
    "closedRevenue": 1082329,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-082",
    "companyName": "Summit Restorations",
    "ownerName": "Gabriel Costa",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "23/07/2025",
    "monthsActive": 7,
    "daysActive": 225,
    "estimatesDelivered": 86,
    "closedRevenue": 869030,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-083",
    "companyName": "Horizon Carpentry & Design",
    "ownerName": "Wellington Prado",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "21/11/2024",
    "monthsActive": 18,
    "daysActive": 557,
    "estimatesDelivered": 131,
    "closedRevenue": 906913,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-084",
    "companyName": "Granite State Roofing Solutions",
    "ownerName": "Rivaldo Souza",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "11/01/2025",
    "monthsActive": 6,
    "daysActive": 185,
    "estimatesDelivered": 70,
    "closedRevenue": 376320,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-085",
    "companyName": "Patriot Interior Concepts",
    "ownerName": "Cristiano Melo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "20/07/2024",
    "monthsActive": 21,
    "daysActive": 635,
    "estimatesDelivered": 195,
    "closedRevenue": 1100970,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-086",
    "companyName": "Highline Framing Contractors",
    "ownerName": "Wellington Prado",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "26/08/2025",
    "monthsActive": 2,
    "daysActive": 79,
    "estimatesDelivered": 14,
    "closedRevenue": 64064,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-087",
    "companyName": "Prime Roofing Solutions",
    "ownerName": "Otavio Mello",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "23/08/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 14,
    "closedRevenue": 111650,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-088",
    "companyName": "Apex Interior Concepts",
    "ownerName": "Diego Antunes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "01/09/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 14,
    "closedRevenue": 96852,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-089",
    "companyName": "Ironwood Builders LLC",
    "ownerName": "Matheus Nogueira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "07/10/2024",
    "monthsActive": 12,
    "daysActive": 379,
    "estimatesDelivered": 151,
    "closedRevenue": 1542465,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-090",
    "companyName": "Diamond Custom Homes",
    "ownerName": "Marcelo Rezende",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "10/06/2025",
    "monthsActive": 4,
    "daysActive": 131,
    "estimatesDelivered": 41,
    "closedRevenue": 510491,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-091",
    "companyName": "Alpha Hardscapes & Pavers",
    "ownerName": "Vinicius Souza",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "10/12/2024",
    "monthsActive": 11,
    "daysActive": 335,
    "estimatesDelivered": 132,
    "closedRevenue": 1531992,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-092",
    "companyName": "Alpha Hardscapes & Pavers",
    "ownerName": "Flavio Neves",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "13/01/2024",
    "monthsActive": 10,
    "daysActive": 317,
    "estimatesDelivered": 125,
    "closedRevenue": 1434625,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-093",
    "companyName": "Precision Interior Concepts",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "01/10/2023",
    "monthsActive": 23,
    "daysActive": 701,
    "estimatesDelivered": 191,
    "closedRevenue": 1692642,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-094",
    "companyName": "Alpha Builders LLC",
    "ownerName": "Carlos Andrade",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "02/01/2024",
    "monthsActive": 17,
    "daysActive": 530,
    "estimatesDelivered": 226,
    "closedRevenue": 1388770,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-095",
    "companyName": "NextGen Roofing Solutions",
    "ownerName": "Carlos Andrade",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "14/11/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 188,
    "closedRevenue": 2303564,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-096",
    "companyName": "Gold Coast Roofing Solutions",
    "ownerName": "Rivaldo Souza",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "22/06/2025",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 99,
    "closedRevenue": 575487,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-097",
    "companyName": "SunState Builders LLC",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "11/04/2024",
    "monthsActive": 17,
    "daysActive": 516,
    "estimatesDelivered": 123,
    "closedRevenue": 1407735,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-098",
    "companyName": "Diamond Builders LLC",
    "ownerName": "Murilo Batista",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "05/03/2024",
    "monthsActive": 10,
    "daysActive": 304,
    "estimatesDelivered": 78,
    "closedRevenue": 938496,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-099",
    "companyName": "Sovereign Builders LLC",
    "ownerName": "Marcelo Rezende",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "09/01/2024",
    "monthsActive": 10,
    "daysActive": 318,
    "estimatesDelivered": 124,
    "closedRevenue": 796948,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-100",
    "companyName": "Universal Hardscapes & Pavers",
    "ownerName": "Andre Guimaraes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "08/10/2024",
    "monthsActive": 14,
    "daysActive": 436,
    "estimatesDelivered": 123,
    "closedRevenue": 1122621,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-101",
    "companyName": "Vanguard Construction Pro",
    "ownerName": "Renato Ramos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "03/06/2024",
    "monthsActive": 15,
    "daysActive": 453,
    "estimatesDelivered": 221,
    "closedRevenue": 1238042,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-102",
    "companyName": "Stonegate Painting & Drywall",
    "ownerName": "Thiago Oliveira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "20/07/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 253,
    "closedRevenue": 2312673,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-103",
    "companyName": "Paramount Flooring Specialists",
    "ownerName": "Sergio Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "14/12/2024",
    "monthsActive": 10,
    "daysActive": 313,
    "estimatesDelivered": 131,
    "closedRevenue": 1082846,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-104",
    "companyName": "Everest Framing Contractors",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "04/12/2024",
    "monthsActive": 18,
    "daysActive": 542,
    "estimatesDelivered": 149,
    "closedRevenue": 1272013,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-105",
    "companyName": "Craftsman Custom Homes",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "10/06/2024",
    "monthsActive": 16,
    "daysActive": 493,
    "estimatesDelivered": 120,
    "closedRevenue": 1190160,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-106",
    "companyName": "United Outdoor Living",
    "ownerName": "Luciano Mendes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "09/10/2025",
    "monthsActive": 6,
    "daysActive": 191,
    "estimatesDelivered": 77,
    "closedRevenue": 866019,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-107",
    "companyName": "Vanguard Construction Pro",
    "ownerName": "Fernando Dias",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "06/03/2024",
    "monthsActive": 11,
    "daysActive": 339,
    "estimatesDelivered": 141,
    "closedRevenue": 712050,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-108",
    "companyName": "All-Star Interior Concepts",
    "ownerName": "Sergio Mendes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "12/05/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 135,
    "closedRevenue": 849015,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-109",
    "companyName": "Legacy Roofing Solutions",
    "ownerName": "Cleber Toledo",
    "specialty": "Granite & Quartz Fabrication",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "22/07/2023",
    "monthsActive": 22,
    "daysActive": 661,
    "estimatesDelivered": 184,
    "closedRevenue": 1587736,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-110",
    "companyName": "Oakridge Renovations Co.",
    "ownerName": "Andre Guimaraes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "22/10/2025",
    "monthsActive": 6,
    "daysActive": 193,
    "estimatesDelivered": 56,
    "closedRevenue": 591080,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-111",
    "companyName": "Pinnacle Flooring Specialists",
    "ownerName": "Murilo Batista",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "07/03/2023",
    "monthsActive": 22,
    "daysActive": 661,
    "estimatesDelivered": 161,
    "closedRevenue": 1202509,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-112",
    "companyName": "Oakridge Outdoor Living",
    "ownerName": "Rogerio Maciel",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "23/04/2024",
    "monthsActive": 16,
    "daysActive": 485,
    "estimatesDelivered": 154,
    "closedRevenue": 1441748,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-113",
    "companyName": "First Choice Roofing Solutions",
    "ownerName": "Luciano Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "28/06/2025",
    "monthsActive": 4,
    "daysActive": 133,
    "estimatesDelivered": 39,
    "closedRevenue": 219843,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-114",
    "companyName": "Silva & Sons Custom Homes",
    "ownerName": "Luciano Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "23/06/2025",
    "monthsActive": 3,
    "daysActive": 100,
    "estimatesDelivered": 38,
    "closedRevenue": 448970,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-115",
    "companyName": "Ironwood Builders LLC",
    "ownerName": "Roberto Faria",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "25/03/2024",
    "monthsActive": 15,
    "daysActive": 459,
    "estimatesDelivered": 187,
    "closedRevenue": 1445136,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-116",
    "companyName": "Orlando Outdoor Living",
    "ownerName": "Cleber Toledo",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "09/04/2023",
    "monthsActive": 23,
    "daysActive": 694,
    "estimatesDelivered": 235,
    "closedRevenue": 1456765,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-117",
    "companyName": "Vanguard Hardscapes & Pavers",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "21/06/2024",
    "monthsActive": 18,
    "daysActive": 558,
    "estimatesDelivered": 261,
    "closedRevenue": 3152619,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-118",
    "companyName": "Pinnacle Builders LLC",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "15/01/2025",
    "monthsActive": 4,
    "daysActive": 136,
    "estimatesDelivered": 40,
    "closedRevenue": 351280,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-119",
    "companyName": "Gold Coast Hardscapes & Pavers",
    "ownerName": "Renato Ramos",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "20/08/2024",
    "monthsActive": 20,
    "daysActive": 601,
    "estimatesDelivered": 287,
    "closedRevenue": 2190671,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-120",
    "companyName": "Sovereign Interior Concepts",
    "ownerName": "Andre Guimaraes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "23/08/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 49,
    "closedRevenue": 344421,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-121",
    "companyName": "Vanguard Flooring Specialists",
    "ownerName": "Vinicius Souza",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "20/01/2024",
    "monthsActive": 12,
    "daysActive": 372,
    "estimatesDelivered": 165,
    "closedRevenue": 1742565,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-122",
    "companyName": "Universal Painting & Drywall",
    "ownerName": "Rivaldo Souza",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "19/11/2023",
    "monthsActive": 24,
    "daysActive": 739,
    "estimatesDelivered": 225,
    "closedRevenue": 1275075,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-123",
    "companyName": "Empire Painting & Drywall",
    "ownerName": "Andre Guimaraes",
    "specialty": "Timber Framing & Decks",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "27/07/2025",
    "monthsActive": 2,
    "daysActive": 82,
    "estimatesDelivered": 16,
    "closedRevenue": 115040,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-124",
    "companyName": "Everest Construction Pro",
    "ownerName": "Bruno Castilho",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "25/08/2025",
    "monthsActive": 2,
    "daysActive": 70,
    "estimatesDelivered": 13,
    "closedRevenue": 94887,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-125",
    "companyName": "Metro Construction Pro",
    "ownerName": "Cleber Toledo",
    "specialty": "Patios, Travertine & Pools",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "25/10/2025",
    "monthsActive": 6,
    "daysActive": 197,
    "estimatesDelivered": 51,
    "closedRevenue": 621129,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-126",
    "companyName": "Pinnacle Outdoor Living",
    "ownerName": "Juliano Rossi",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "24/04/2025",
    "monthsActive": 8,
    "daysActive": 241,
    "estimatesDelivered": 113,
    "closedRevenue": 1191020,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-127",
    "companyName": "All-Star Roofing Solutions",
    "ownerName": "Wellington Prado",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "19/08/2024",
    "monthsActive": 12,
    "daysActive": 375,
    "estimatesDelivered": 129,
    "closedRevenue": 1361724,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-128",
    "companyName": "Alpha Renovations Co.",
    "ownerName": "Andre Guimaraes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "04/12/2025",
    "monthsActive": 7,
    "daysActive": 211,
    "estimatesDelivered": 107,
    "closedRevenue": 1020994,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-129",
    "companyName": "Boston Pro Roofing Solutions",
    "ownerName": "Rivaldo Souza",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "08/08/2024",
    "monthsActive": 19,
    "daysActive": 574,
    "estimatesDelivered": 252,
    "closedRevenue": 3139416,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-130",
    "companyName": "Palm Coast Painting & Drywall",
    "ownerName": "Claudio Silva",
    "specialty": "Pool Decks & Travertine",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "01/06/2024",
    "monthsActive": 10,
    "daysActive": 312,
    "estimatesDelivered": 89,
    "closedRevenue": 608671,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-131",
    "companyName": "Boston Pro Renovations Co.",
    "ownerName": "Gabriel Costa",
    "specialty": "Patios, Travertine & Pools",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "20/01/2024",
    "monthsActive": 12,
    "daysActive": 375,
    "estimatesDelivered": 119,
    "closedRevenue": 1032206,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-132",
    "companyName": "Gold Coast Custom Homes",
    "ownerName": "Thiago Oliveira",
    "specialty": "Timber Framing & Decks",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "10/04/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 291,
    "closedRevenue": 3305178,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-133",
    "companyName": "Paramount Remodeling Group",
    "ownerName": "Wellington Prado",
    "specialty": "Pool Decks & Travertine",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "08/12/2024",
    "monthsActive": 18,
    "daysActive": 559,
    "estimatesDelivered": 138,
    "closedRevenue": 1339980,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-134",
    "companyName": "United Remodeling Group",
    "ownerName": "Roberto Faria",
    "specialty": "Timber Framing & Decks",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "18/09/2025",
    "monthsActive": 8,
    "daysActive": 242,
    "estimatesDelivered": 101,
    "closedRevenue": 940209,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-135",
    "companyName": "Bay State Painting & Drywall",
    "ownerName": "Cristiano Melo",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "26/02/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 169,
    "closedRevenue": 1339325,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-136",
    "companyName": "Ironwood Construction Pro",
    "ownerName": "Gustavo Pinho",
    "specialty": "Patios, Travertine & Pools",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "25/11/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 174,
    "closedRevenue": 2053548,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-137",
    "companyName": "Craftsman Roofing Solutions",
    "ownerName": "Otavio Mello",
    "specialty": "Timber Framing & Decks",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "07/01/2024",
    "monthsActive": 17,
    "daysActive": 519,
    "estimatesDelivered": 174,
    "closedRevenue": 1997520,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-138",
    "companyName": "Atlas Builders LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "Pool Decks & Travertine",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "25/01/2023",
    "monthsActive": 23,
    "daysActive": 696,
    "estimatesDelivered": 262,
    "closedRevenue": 3160244,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-139",
    "companyName": "Atlas Outdoor Living",
    "ownerName": "Andre Guimaraes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "16/06/2024",
    "monthsActive": 17,
    "daysActive": 520,
    "estimatesDelivered": 164,
    "closedRevenue": 1749716,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-140",
    "companyName": "Universal Hardscapes & Pavers",
    "ownerName": "Wellington Prado",
    "specialty": "Timber Framing & Decks",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "03/06/2023",
    "monthsActive": 22,
    "daysActive": 665,
    "estimatesDelivered": 251,
    "closedRevenue": 1465840,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-141",
    "companyName": "Granite State Framing Contractors",
    "ownerName": "Fernando Dias",
    "specialty": "Patios, Travertine & Pools",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "21/01/2024",
    "monthsActive": 14,
    "daysActive": 421,
    "estimatesDelivered": 178,
    "closedRevenue": 1290322,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-142",
    "companyName": "Metro Interior Concepts",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "08/11/2023",
    "monthsActive": 22,
    "daysActive": 674,
    "estimatesDelivered": 160,
    "closedRevenue": 888000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-143",
    "companyName": "Green Mountain Builders LLC",
    "ownerName": "Diego Antunes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "12/07/2024",
    "monthsActive": 14,
    "daysActive": 434,
    "estimatesDelivered": 118,
    "closedRevenue": 1101766,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-144",
    "companyName": "NextGen Renovations Co.",
    "ownerName": "Daniel Moreira",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "09/12/2024",
    "monthsActive": 15,
    "daysActive": 467,
    "estimatesDelivered": 128,
    "closedRevenue": 1452544,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-145",
    "companyName": "Oakridge Flooring Specialists",
    "ownerName": "Sergio Mendes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "26/11/2025",
    "monthsActive": 5,
    "daysActive": 164,
    "estimatesDelivered": 56,
    "closedRevenue": 320264,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-146",
    "companyName": "Boston Pro Flooring Specialists",
    "ownerName": "Carlos Andrade",
    "specialty": "Pool Decks & Travertine",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "26/03/2025",
    "monthsActive": 8,
    "daysActive": 251,
    "estimatesDelivered": 85,
    "closedRevenue": 564910,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-147",
    "companyName": "Heritage Outdoor Living",
    "ownerName": "Andre Guimaraes",
    "specialty": "Timber Framing & Decks",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "23/12/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 64,
    "closedRevenue": 528704,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-148",
    "companyName": "All-Star Framing Contractors",
    "ownerName": "Matheus Nogueira",
    "specialty": "Patios, Travertine & Pools",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "22/09/2024",
    "monthsActive": 13,
    "daysActive": 410,
    "estimatesDelivered": 115,
    "closedRevenue": 1013840,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-149",
    "companyName": "Coastal Framing Contractors",
    "ownerName": "Bruno Castilho",
    "specialty": "Pool Decks & Travertine",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "06/06/2025",
    "monthsActive": 4,
    "daysActive": 123,
    "estimatesDelivered": 44,
    "closedRevenue": 279312,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-150",
    "companyName": "Craftsman Painting & Drywall",
    "ownerName": "Gabriel Costa",
    "specialty": "Patios, Travertine & Pools",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "10/10/2023",
    "monthsActive": 23,
    "daysActive": 707,
    "estimatesDelivered": 259,
    "closedRevenue": 2621080,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-151",
    "companyName": "Stonegate Outdoor Living",
    "ownerName": "Eduardo Santos",
    "specialty": "Pool Decks & Travertine",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "28/01/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 268,
    "closedRevenue": 3151680,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-152",
    "companyName": "Signature Custom Homes",
    "ownerName": "Otavio Mello",
    "specialty": "Timber Framing & Decks",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "21/09/2024",
    "monthsActive": 16,
    "daysActive": 500,
    "estimatesDelivered": 123,
    "closedRevenue": 1510686,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-153",
    "companyName": "Orlando Flooring Specialists",
    "ownerName": "Cleber Toledo",
    "specialty": "Pool Decks & Travertine",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "15/04/2025",
    "monthsActive": 4,
    "daysActive": 125,
    "estimatesDelivered": 66,
    "closedRevenue": 591756,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-154",
    "companyName": "Atlas Hardscapes & Pavers",
    "ownerName": "Thiago Oliveira",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "11/07/2025",
    "monthsActive": 2,
    "daysActive": 81,
    "estimatesDelivered": 18,
    "closedRevenue": 96642,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-155",
    "companyName": "First Choice Carpentry & Design",
    "ownerName": "Sergio Mendes",
    "specialty": "Custom Closets & Cabinets",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "08/07/2025",
    "monthsActive": 2,
    "daysActive": 77,
    "estimatesDelivered": 23,
    "closedRevenue": 182275,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-156",
    "companyName": "Craftsman Hardscapes & Pavers",
    "ownerName": "Fernando Dias",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "16/07/2025",
    "monthsActive": 2,
    "daysActive": 80,
    "estimatesDelivered": 24,
    "closedRevenue": 168648,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-157",
    "companyName": "Pinnacle Framing Contractors",
    "ownerName": "Gustavo Pinho",
    "specialty": "Wood & Metal Framing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "27/09/2025",
    "monthsActive": 1,
    "daysActive": 44,
    "estimatesDelivered": 17,
    "closedRevenue": 159698,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-158",
    "companyName": "First Choice Framing Contractors",
    "ownerName": "Felipe Barreto",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "12/07/2025",
    "monthsActive": 2,
    "daysActive": 76,
    "estimatesDelivered": 22,
    "closedRevenue": 171666,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-159",
    "companyName": "Alpha Construction Pro",
    "ownerName": "Juliano Rossi",
    "specialty": "Wood & Metal Framing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "27/10/2025",
    "monthsActive": 5,
    "daysActive": 162,
    "estimatesDelivered": 82,
    "closedRevenue": 597862,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-160",
    "companyName": "Titan Remodeling Group",
    "ownerName": "Roberto Faria",
    "specialty": "Wood & Metal Framing",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "20/09/2024",
    "monthsActive": 13,
    "daysActive": 407,
    "estimatesDelivered": 162,
    "closedRevenue": 1074060,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-161",
    "companyName": "Benchmark Interior Concepts",
    "ownerName": "Victor Hugo",
    "specialty": "Custom Closets & Cabinets",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/10/2024",
    "monthsActive": 18,
    "daysActive": 554,
    "estimatesDelivered": 174,
    "closedRevenue": 1069230,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-162",
    "companyName": "Highline Builders LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "General Contractor & Framing",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "27/01/2024",
    "monthsActive": 19,
    "daysActive": 587,
    "estimatesDelivered": 274,
    "closedRevenue": 2435860,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-163",
    "companyName": "Sovereign Painting & Drywall",
    "ownerName": "Victor Hugo",
    "specialty": "General Contractor & Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "02/10/2025",
    "monthsActive": 3,
    "daysActive": 105,
    "estimatesDelivered": 40,
    "closedRevenue": 436360,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-164",
    "companyName": "Heritage Carpentry & Design",
    "ownerName": "Renato Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "15/06/2024",
    "monthsActive": 10,
    "daysActive": 318,
    "estimatesDelivered": 87,
    "closedRevenue": 448485,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-165",
    "companyName": "Sovereign Roofing Solutions",
    "ownerName": "Gustavo Pinho",
    "specialty": "Custom Closets & Cabinets",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "07/09/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 160,
    "closedRevenue": 1479840,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-166",
    "companyName": "Atlas Framing Contractors",
    "ownerName": "Cristiano Melo",
    "specialty": "Custom Closets & Cabinets",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "16/04/2024",
    "monthsActive": 20,
    "daysActive": 610,
    "estimatesDelivered": 248,
    "closedRevenue": 2479256,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-167",
    "companyName": "Pinnacle Builders LLC",
    "ownerName": "Diego Antunes",
    "specialty": "General Contractor & Framing",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "12/09/2024",
    "monthsActive": 12,
    "daysActive": 366,
    "estimatesDelivered": 177,
    "closedRevenue": 1580610,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-168",
    "companyName": "SunState Custom Homes",
    "ownerName": "Gustavo Pinho",
    "specialty": "Custom Closets & Cabinets",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "15/11/2025",
    "monthsActive": 7,
    "daysActive": 211,
    "estimatesDelivered": 82,
    "closedRevenue": 642634,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-169",
    "companyName": "Gold Coast Builders LLC",
    "ownerName": "Bruno Castilho",
    "specialty": "General Contractor & Framing",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "22/09/2023",
    "monthsActive": 22,
    "daysActive": 678,
    "estimatesDelivered": 227,
    "closedRevenue": 1229205,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-170",
    "companyName": "Palmetto Renovations Co.",
    "ownerName": "Leandro Rocha",
    "specialty": "Custom Closets & Cabinets",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "16/08/2025",
    "monthsActive": 6,
    "daysActive": 180,
    "estimatesDelivered": 64,
    "closedRevenue": 662272,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-171",
    "companyName": "Heritage Restorations",
    "ownerName": "Alexandre Pires",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "24/01/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 62,
    "closedRevenue": 685162,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-172",
    "companyName": "Summit Renovations Co.",
    "ownerName": "Claudio Silva",
    "specialty": "General Contractor & Framing",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "10/10/2024",
    "monthsActive": 15,
    "daysActive": 455,
    "estimatesDelivered": 169,
    "closedRevenue": 857675,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-173",
    "companyName": "Stonegate Renovations Co.",
    "ownerName": "Gilberto Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "04/06/2025",
    "monthsActive": 7,
    "daysActive": 224,
    "estimatesDelivered": 84,
    "closedRevenue": 976500,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-174",
    "companyName": "Benchmark Painting & Drywall",
    "ownerName": "Gabriel Costa",
    "specialty": "Wood & Metal Framing",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "14/09/2024",
    "monthsActive": 12,
    "daysActive": 366,
    "estimatesDelivered": 118,
    "closedRevenue": 1389332,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-175",
    "companyName": "Summit Renovations Co.",
    "ownerName": "Diego Antunes",
    "specialty": "Wood & Metal Framing",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "08/08/2024",
    "monthsActive": 18,
    "daysActive": 547,
    "estimatesDelivered": 134,
    "closedRevenue": 1091028,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-176",
    "companyName": "Palm Coast Outdoor Living",
    "ownerName": "Roberto Faria",
    "specialty": "Custom Closets & Cabinets",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "06/07/2024",
    "monthsActive": 10,
    "daysActive": 301,
    "estimatesDelivered": 91,
    "closedRevenue": 683683,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-177",
    "companyName": "Granite State Roofing Solutions",
    "ownerName": "Cleber Toledo",
    "specialty": "General Contractor & Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "16/03/2024",
    "monthsActive": 12,
    "daysActive": 371,
    "estimatesDelivered": 127,
    "closedRevenue": 773938,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-178",
    "companyName": "Craftsman Custom Homes",
    "ownerName": "Rogerio Maciel",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "04/01/2025",
    "monthsActive": 5,
    "daysActive": 164,
    "estimatesDelivered": 65,
    "closedRevenue": 625365,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-179",
    "companyName": "Legacy Outdoor Living",
    "ownerName": "Roberto Faria",
    "specialty": "Wood & Metal Framing",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "19/08/2024",
    "monthsActive": 19,
    "daysActive": 584,
    "estimatesDelivered": 159,
    "closedRevenue": 1728648,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-180",
    "companyName": "Benchmark Renovations Co.",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Wood & Metal Framing",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "22/05/2024",
    "monthsActive": 16,
    "daysActive": 494,
    "estimatesDelivered": 124,
    "closedRevenue": 1089588,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-181",
    "companyName": "Titan Renovations Co.",
    "ownerName": "Gustavo Pinho",
    "specialty": "General Contractor & Framing",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "02/02/2025",
    "monthsActive": 4,
    "daysActive": 133,
    "estimatesDelivered": 53,
    "closedRevenue": 499949,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-182",
    "companyName": "Everest Painting & Drywall",
    "ownerName": "Flavio Neves",
    "specialty": "Custom Closets & Cabinets",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "03/11/2024",
    "monthsActive": 16,
    "daysActive": 492,
    "estimatesDelivered": 234,
    "closedRevenue": 1890018,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-183",
    "companyName": "Highline Carpentry & Design",
    "ownerName": "Gilberto Ramos",
    "specialty": "General Contractor & Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "01/01/2024",
    "monthsActive": 20,
    "daysActive": 612,
    "estimatesDelivered": 187,
    "closedRevenue": 2213706,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-184",
    "companyName": "NextGen Outdoor Living",
    "ownerName": "Marcelo Rezende",
    "specialty": "Wood & Metal Framing",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "24/02/2024",
    "monthsActive": 10,
    "daysActive": 311,
    "estimatesDelivered": 98,
    "closedRevenue": 641312,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-185",
    "companyName": "Green Mountain Carpentry & Design",
    "ownerName": "Felipe Barreto",
    "specialty": "Wood & Metal Framing",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "22/12/2025",
    "monthsActive": 6,
    "daysActive": 199,
    "estimatesDelivered": 53,
    "closedRevenue": 524541,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-186",
    "companyName": "Precision Interior Concepts",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Custom Closets & Cabinets",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "10/04/2024",
    "monthsActive": 20,
    "daysActive": 606,
    "estimatesDelivered": 146,
    "closedRevenue": 1332542,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-187",
    "companyName": "Lone Star Construction Pro",
    "ownerName": "Rafael Camargo",
    "specialty": "General Contractor & Framing",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "09/01/2025",
    "monthsActive": 7,
    "daysActive": 226,
    "estimatesDelivered": 80,
    "closedRevenue": 596880,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-188",
    "companyName": "Universal Roofing Solutions",
    "ownerName": "Renato Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "23/07/2024",
    "monthsActive": 14,
    "daysActive": 440,
    "estimatesDelivered": 194,
    "closedRevenue": 1476534,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-189",
    "companyName": "United Framing Contractors",
    "ownerName": "Marcelo Rezende",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "02/09/2024",
    "monthsActive": 10,
    "daysActive": 309,
    "estimatesDelivered": 101,
    "closedRevenue": 1261793,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-190",
    "companyName": "Gold Coast Renovations Co.",
    "ownerName": "Leandro Rocha",
    "specialty": "General Contractor & Framing",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "12/02/2025",
    "monthsActive": 9,
    "daysActive": 280,
    "estimatesDelivered": 83,
    "closedRevenue": 990937,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-191",
    "companyName": "SunState Custom Homes",
    "ownerName": "Marcos Silva",
    "specialty": "Wood & Metal Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "28/06/2025",
    "monthsActive": 9,
    "daysActive": 287,
    "estimatesDelivered": 101,
    "closedRevenue": 677811,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-192",
    "companyName": "Universal Renovations Co.",
    "ownerName": "Rivaldo Souza",
    "specialty": "Custom Closets & Cabinets",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "15/09/2025",
    "monthsActive": 9,
    "daysActive": 277,
    "estimatesDelivered": 116,
    "closedRevenue": 941688,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-193",
    "companyName": "Lone Star Construction Pro",
    "ownerName": "Bruno Castilho",
    "specialty": "Wood & Metal Framing",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "14/01/2024",
    "monthsActive": 18,
    "daysActive": 550,
    "estimatesDelivered": 189,
    "closedRevenue": 1429407,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-194",
    "companyName": "First Choice Restorations",
    "ownerName": "Paulo Henrique",
    "specialty": "Finish Carpentry & Millwork",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "07/06/2024",
    "monthsActive": 21,
    "daysActive": 648,
    "estimatesDelivered": 281,
    "closedRevenue": 1755688,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-195",
    "companyName": "Miami Carpentry & Design",
    "ownerName": "Gilberto Ramos",
    "specialty": "Custom Closets & Cabinets",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "21/12/2023",
    "monthsActive": 24,
    "daysActive": 730,
    "estimatesDelivered": 275,
    "closedRevenue": 3004925,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-196",
    "companyName": "Oakridge Remodeling Group",
    "ownerName": "Lucas Ferreira",
    "specialty": "Wood & Metal Framing",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "02/09/2024",
    "monthsActive": 20,
    "daysActive": 615,
    "estimatesDelivered": 192,
    "closedRevenue": 1969344,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-197",
    "companyName": "Gold Coast Interior Concepts",
    "ownerName": "Adriano Ribeiro",
    "specialty": "General Contractor & Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "07/09/2023",
    "monthsActive": 23,
    "daysActive": 697,
    "estimatesDelivered": 190,
    "closedRevenue": 964060,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-198",
    "companyName": "Pinnacle Remodeling Group",
    "ownerName": "Flavio Neves",
    "specialty": "General Contractor & Framing",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "17/12/2024",
    "monthsActive": 20,
    "daysActive": 617,
    "estimatesDelivered": 264,
    "closedRevenue": 1356168,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-199",
    "companyName": "Atlas Outdoor Living",
    "ownerName": "Rivaldo Souza",
    "specialty": "General Contractor & Framing",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "20/09/2025",
    "monthsActive": 6,
    "daysActive": 196,
    "estimatesDelivered": 61,
    "closedRevenue": 400892,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-200",
    "companyName": "Empire Roofing Solutions",
    "ownerName": "Eduardo Santos",
    "specialty": "General Contractor & Framing",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "22/02/2024",
    "monthsActive": 15,
    "daysActive": 464,
    "estimatesDelivered": 157,
    "closedRevenue": 1170749,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-201",
    "companyName": "First Choice Restorations",
    "ownerName": "Vinicius Souza",
    "specialty": "Wood & Metal Framing",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "16/07/2025",
    "monthsActive": 4,
    "daysActive": 140,
    "estimatesDelivered": 34,
    "closedRevenue": 193018,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-202",
    "companyName": "First Choice Painting & Drywall",
    "ownerName": "Flavio Neves",
    "specialty": "Wood & Metal Framing",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "22/05/2024",
    "monthsActive": 21,
    "daysActive": 645,
    "estimatesDelivered": 235,
    "closedRevenue": 1318115,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-203",
    "companyName": "First Choice Restorations",
    "ownerName": "Cristiano Melo",
    "specialty": "General Contractor & Framing",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "10/03/2024",
    "monthsActive": 13,
    "daysActive": 396,
    "estimatesDelivered": 127,
    "closedRevenue": 715010,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-204",
    "companyName": "Summit Interior Concepts",
    "ownerName": "Lucas Ferreira",
    "specialty": "General Contractor & Framing",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "14/04/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 88,
    "closedRevenue": 510400,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-205",
    "companyName": "Highline Interior Concepts",
    "ownerName": "Alexandre Pires",
    "specialty": "General Contractor & Framing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "18/07/2024",
    "monthsActive": 11,
    "daysActive": 344,
    "estimatesDelivered": 161,
    "closedRevenue": 1274154,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-206",
    "companyName": "Lone Star Roofing Solutions",
    "ownerName": "Renato Ramos",
    "specialty": "Custom Closets & Cabinets",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "13/12/2024",
    "monthsActive": 12,
    "daysActive": 362,
    "estimatesDelivered": 104,
    "closedRevenue": 651352,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-207",
    "companyName": "Diamond Roofing Solutions",
    "ownerName": "Gabriel Costa",
    "specialty": "General Contractor & Framing",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "09/02/2025",
    "monthsActive": 3,
    "daysActive": 99,
    "estimatesDelivered": 51,
    "closedRevenue": 573036,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-208",
    "companyName": "Metro Outdoor Living",
    "ownerName": "Marcelo Rezende",
    "specialty": "Wood & Metal Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "13/01/2025",
    "monthsActive": 5,
    "daysActive": 161,
    "estimatesDelivered": 49,
    "closedRevenue": 591675,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-209",
    "companyName": "Vanguard Construction Pro",
    "ownerName": "Renato Ramos",
    "specialty": "General Contractor & Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "10/05/2025",
    "monthsActive": 8,
    "daysActive": 252,
    "estimatesDelivered": 78,
    "closedRevenue": 561756,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-210",
    "companyName": "NextGen Custom Homes",
    "ownerName": "Cleber Toledo",
    "specialty": "General Contractor & Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "24/11/2024",
    "monthsActive": 18,
    "daysActive": 542,
    "estimatesDelivered": 224,
    "closedRevenue": 1572480,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-211",
    "companyName": "Paramount Restorations",
    "ownerName": "Vinicius Souza",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "28/06/2025",
    "monthsActive": 3,
    "daysActive": 102,
    "estimatesDelivered": 46,
    "closedRevenue": 532956,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-212",
    "companyName": "First Choice Outdoor Living",
    "ownerName": "Carlos Andrade",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "11/05/2025",
    "monthsActive": 9,
    "daysActive": 285,
    "estimatesDelivered": 114,
    "closedRevenue": 941868,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-213",
    "companyName": "Boston Pro Carpentry & Design",
    "ownerName": "Rogerio Maciel",
    "specialty": "General Contractor & Framing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "18/03/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 127,
    "closedRevenue": 1251077,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-214",
    "companyName": "Oakridge Construction Pro",
    "ownerName": "Murilo Batista",
    "specialty": "General Contractor & Framing",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "21/05/2024",
    "monthsActive": 12,
    "daysActive": 362,
    "estimatesDelivered": 167,
    "closedRevenue": 1025380,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-215",
    "companyName": "Titan Outdoor Living",
    "ownerName": "Flavio Neves",
    "specialty": "Custom Closets & Cabinets",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "28/12/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 298,
    "closedRevenue": 2726700,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-216",
    "companyName": "Palmetto Flooring Specialists",
    "ownerName": "Fernando Dias",
    "specialty": "General Contractor & Framing",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "21/11/2024",
    "monthsActive": 10,
    "daysActive": 311,
    "estimatesDelivered": 94,
    "closedRevenue": 903622,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-217",
    "companyName": "Bluewater Framing Contractors",
    "ownerName": "Rafael Camargo",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "13/08/2024",
    "monthsActive": 11,
    "daysActive": 337,
    "estimatesDelivered": 121,
    "closedRevenue": 975744,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-218",
    "companyName": "Universal Flooring Specialists",
    "ownerName": "Rivaldo Souza",
    "specialty": "General Contractor & Framing",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "27/12/2024",
    "monthsActive": 18,
    "daysActive": 549,
    "estimatesDelivered": 239,
    "closedRevenue": 1422050,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-219",
    "companyName": "Universal Remodeling Group",
    "ownerName": "Lucas Ferreira",
    "specialty": "Wood & Metal Framing",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "23/08/2024",
    "monthsActive": 14,
    "daysActive": 435,
    "estimatesDelivered": 123,
    "closedRevenue": 1342422,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-220",
    "companyName": "Horizon Outdoor Living",
    "ownerName": "Gilberto Ramos",
    "specialty": "General Contractor & Framing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "11/09/2025",
    "monthsActive": 6,
    "daysActive": 187,
    "estimatesDelivered": 66,
    "closedRevenue": 416526,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-221",
    "companyName": "Paramount Roofing Solutions",
    "ownerName": "Rafael Camargo",
    "specialty": "Wood & Metal Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "20/04/2023",
    "monthsActive": 24,
    "daysActive": 733,
    "estimatesDelivered": 316,
    "closedRevenue": 3488640,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-222",
    "companyName": "Alpha Renovations Co.",
    "ownerName": "Gilberto Ramos",
    "specialty": "General Contractor & Framing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "12/06/2025",
    "monthsActive": 5,
    "daysActive": 168,
    "estimatesDelivered": 52,
    "closedRevenue": 339612,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-223",
    "companyName": "Highline Carpentry & Design",
    "ownerName": "Alexandre Pires",
    "specialty": "Custom Closets & Cabinets",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "28/08/2023",
    "monthsActive": 22,
    "daysActive": 672,
    "estimatesDelivered": 185,
    "closedRevenue": 1458355,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-224",
    "companyName": "Metro Roofing Solutions",
    "ownerName": "Roberto Faria",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "12/12/2024",
    "monthsActive": 13,
    "daysActive": 397,
    "estimatesDelivered": 148,
    "closedRevenue": 961852,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-225",
    "companyName": "Legacy Interior Concepts",
    "ownerName": "Sergio Mendes",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "10/07/2025",
    "monthsActive": 1,
    "daysActive": 52,
    "estimatesDelivered": 12,
    "closedRevenue": 102132,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-226",
    "companyName": "Heritage Painting & Drywall",
    "ownerName": "Carlos Andrade",
    "specialty": "Interior & Exterior Painting",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "18/09/2025",
    "monthsActive": 1,
    "daysActive": 41,
    "estimatesDelivered": 23,
    "closedRevenue": 175835,
    "monthlyPlan": 2500,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-227",
    "companyName": "Atlas Custom Homes",
    "ownerName": "Eduardo Santos",
    "specialty": "Interior & Exterior Painting",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "01/07/2025",
    "monthsActive": 2,
    "daysActive": 70,
    "estimatesDelivered": 11,
    "closedRevenue": 100441,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-228",
    "companyName": "Granite State Framing Contractors",
    "ownerName": "Flavio Neves",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "19/07/2025",
    "monthsActive": 2,
    "daysActive": 82,
    "estimatesDelivered": 18,
    "closedRevenue": 97686,
    "monthlyPlan": 2500,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Dificuldade com alvar\u00e1 municipal na regi\u00e3o de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-229",
    "companyName": "Empire Hardscapes & Pavers",
    "ownerName": "Rivaldo Souza",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "02/08/2024",
    "monthsActive": 16,
    "daysActive": 483,
    "estimatesDelivered": 168,
    "closedRevenue": 2043888,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-230",
    "companyName": "Gold Coast Interior Concepts",
    "ownerName": "Daniel Moreira",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "05/04/2024",
    "monthsActive": 21,
    "daysActive": 641,
    "estimatesDelivered": 279,
    "closedRevenue": 2803113,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-231",
    "companyName": "Everest Outdoor Living",
    "ownerName": "Claudio Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "17/11/2025",
    "monthsActive": 8,
    "daysActive": 249,
    "estimatesDelivered": 96,
    "closedRevenue": 1154688,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-232",
    "companyName": "Orlando Interior Concepts",
    "ownerName": "Carlos Andrade",
    "specialty": "Interior & Exterior Painting",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "08/11/2025",
    "monthsActive": 7,
    "daysActive": 217,
    "estimatesDelivered": 72,
    "closedRevenue": 848592,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-233",
    "companyName": "Modern Touch Hardscapes & Pavers",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Interior & Exterior Painting",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "24/05/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 50,
    "closedRevenue": 461150,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-234",
    "companyName": "SunState Hardscapes & Pavers",
    "ownerName": "Luciano Mendes",
    "specialty": "Interior & Exterior Painting",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "18/07/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 65,
    "closedRevenue": 748670,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-235",
    "companyName": "Titan Builders LLC",
    "ownerName": "Felipe Barreto",
    "specialty": "Interior & Exterior Painting",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "11/11/2024",
    "monthsActive": 13,
    "daysActive": 408,
    "estimatesDelivered": 128,
    "closedRevenue": 1466496,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-236",
    "companyName": "Stonegate Renovations Co.",
    "ownerName": "Matheus Nogueira",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "07/12/2025",
    "monthsActive": 8,
    "daysActive": 254,
    "estimatesDelivered": 116,
    "closedRevenue": 986464,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-237",
    "companyName": "Ironwood Renovations Co.",
    "ownerName": "Fernando Dias",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "21/03/2024",
    "monthsActive": 14,
    "daysActive": 428,
    "estimatesDelivered": 121,
    "closedRevenue": 1263603,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-238",
    "companyName": "Apex Remodeling Group",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Interior & Exterior Painting",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "19/04/2025",
    "monthsActive": 6,
    "daysActive": 186,
    "estimatesDelivered": 89,
    "closedRevenue": 541743,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-239",
    "companyName": "Silva & Sons Flooring Specialists",
    "ownerName": "Claudio Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "03/12/2024",
    "monthsActive": 16,
    "daysActive": 495,
    "estimatesDelivered": 135,
    "closedRevenue": 1098630,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-240",
    "companyName": "Legacy Flooring Specialists",
    "ownerName": "Victor Hugo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "19/01/2025",
    "monthsActive": 7,
    "daysActive": 230,
    "estimatesDelivered": 68,
    "closedRevenue": 635460,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-241",
    "companyName": "Coastal Roofing Solutions",
    "ownerName": "Paulo Henrique",
    "specialty": "Interior & Exterior Painting",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "04/10/2024",
    "monthsActive": 17,
    "daysActive": 512,
    "estimatesDelivered": 142,
    "closedRevenue": 1585288,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-242",
    "companyName": "All-Star Carpentry & Design",
    "ownerName": "Wellington Prado",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "20/12/2023",
    "monthsActive": 23,
    "daysActive": 692,
    "estimatesDelivered": 242,
    "closedRevenue": 2401366,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-243",
    "companyName": "Patriot Roofing Solutions",
    "ownerName": "Cristiano Melo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "21/01/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 230,
    "closedRevenue": 1706830,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-244",
    "companyName": "Heritage Flooring Specialists",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "05/07/2023",
    "monthsActive": 22,
    "daysActive": 662,
    "estimatesDelivered": 163,
    "closedRevenue": 1237496,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-245",
    "companyName": "Benchmark Framing Contractors",
    "ownerName": "Felipe Barreto",
    "specialty": "Interior & Exterior Painting",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "07/01/2025",
    "monthsActive": 5,
    "daysActive": 168,
    "estimatesDelivered": 44,
    "closedRevenue": 314468,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-246",
    "companyName": "Orlando Framing Contractors",
    "ownerName": "Daniel Moreira",
    "specialty": "Interior & Exterior Painting",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "10/02/2024",
    "monthsActive": 15,
    "daysActive": 452,
    "estimatesDelivered": 143,
    "closedRevenue": 812812,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-247",
    "companyName": "Gold Coast Custom Homes",
    "ownerName": "Cristiano Melo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "14/12/2023",
    "monthsActive": 23,
    "daysActive": 710,
    "estimatesDelivered": 192,
    "closedRevenue": 2058816,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-248",
    "companyName": "Alpha Remodeling Group",
    "ownerName": "Alexandre Pires",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "24/11/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 162,
    "closedRevenue": 1693872,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-249",
    "companyName": "Bay State Builders LLC",
    "ownerName": "Diego Antunes",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "05/12/2024",
    "monthsActive": 14,
    "daysActive": 436,
    "estimatesDelivered": 160,
    "closedRevenue": 1287360,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-250",
    "companyName": "Patriot Restorations",
    "ownerName": "Felipe Barreto",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "15/09/2024",
    "monthsActive": 11,
    "daysActive": 332,
    "estimatesDelivered": 126,
    "closedRevenue": 1142064,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-251",
    "companyName": "Green Mountain Remodeling Group",
    "ownerName": "Marcos Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "17/01/2025",
    "monthsActive": 6,
    "daysActive": 198,
    "estimatesDelivered": 55,
    "closedRevenue": 608740,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-252",
    "companyName": "Horizon Flooring Specialists",
    "ownerName": "Marcelo Rezende",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "23/12/2025",
    "monthsActive": 7,
    "daysActive": 215,
    "estimatesDelivered": 61,
    "closedRevenue": 706319,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-253",
    "companyName": "Sovereign Remodeling Group",
    "ownerName": "Bruno Castilho",
    "specialty": "Interior & Exterior Painting",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "22/01/2024",
    "monthsActive": 13,
    "daysActive": 392,
    "estimatesDelivered": 161,
    "closedRevenue": 1467032,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-254",
    "companyName": "First Choice Outdoor Living",
    "ownerName": "Wellington Prado",
    "specialty": "Interior & Exterior Painting",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "01/06/2024",
    "monthsActive": 12,
    "daysActive": 370,
    "estimatesDelivered": 108,
    "closedRevenue": 944028,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-255",
    "companyName": "Heritage Remodeling Group",
    "ownerName": "Marcos Silva",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "26/04/2024",
    "monthsActive": 21,
    "daysActive": 645,
    "estimatesDelivered": 222,
    "closedRevenue": 2492838,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-256",
    "companyName": "Patriot Remodeling Group",
    "ownerName": "Marcelo Rezende",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "07/09/2025",
    "monthsActive": 3,
    "daysActive": 90,
    "estimatesDelivered": 47,
    "closedRevenue": 274997,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-257",
    "companyName": "Craftsman Construction Pro",
    "ownerName": "Claudio Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "24/02/2024",
    "monthsActive": 10,
    "daysActive": 316,
    "estimatesDelivered": 139,
    "closedRevenue": 1216945,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-258",
    "companyName": "Bluewater Restorations",
    "ownerName": "Fernando Dias",
    "specialty": "Interior & Exterior Painting",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "09/06/2025",
    "monthsActive": 4,
    "daysActive": 133,
    "estimatesDelivered": 43,
    "closedRevenue": 317727,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-259",
    "companyName": "Silva & Sons Construction Pro",
    "ownerName": "Renato Ramos",
    "specialty": "Interior & Exterior Painting",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "25/10/2024",
    "monthsActive": 10,
    "daysActive": 302,
    "estimatesDelivered": 106,
    "closedRevenue": 1207234,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-260",
    "companyName": "Empire Construction Pro",
    "ownerName": "Thiago Oliveira",
    "specialty": "Interior & Exterior Painting",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "10/08/2025",
    "monthsActive": 6,
    "daysActive": 197,
    "estimatesDelivered": 79,
    "closedRevenue": 687458,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-261",
    "companyName": "Elite Restorations",
    "ownerName": "Otavio Mello",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "13/09/2024",
    "monthsActive": 13,
    "daysActive": 394,
    "estimatesDelivered": 111,
    "closedRevenue": 878454,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-262",
    "companyName": "Gold Coast Restorations",
    "ownerName": "Marcos Silva",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "04/03/2024",
    "monthsActive": 17,
    "daysActive": 527,
    "estimatesDelivered": 175,
    "closedRevenue": 1537375,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-263",
    "companyName": "Stonegate Hardscapes & Pavers",
    "ownerName": "Leandro Rocha",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "03/01/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 128,
    "closedRevenue": 1492224,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-264",
    "companyName": "Patriot Remodeling Group",
    "ownerName": "Fernando Dias",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "19/07/2024",
    "monthsActive": 13,
    "daysActive": 391,
    "estimatesDelivered": 186,
    "closedRevenue": 1185936,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-265",
    "companyName": "NextGen Custom Homes",
    "ownerName": "Juliano Rossi",
    "specialty": "Interior & Exterior Painting",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "05/01/2025",
    "monthsActive": 9,
    "daysActive": 275,
    "estimatesDelivered": 107,
    "closedRevenue": 925871,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-266",
    "companyName": "Stonegate Outdoor Living",
    "ownerName": "Leandro Rocha",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "13/03/2024",
    "monthsActive": 20,
    "daysActive": 615,
    "estimatesDelivered": 145,
    "closedRevenue": 1057195,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-267",
    "companyName": "Atlas Construction Pro",
    "ownerName": "Paulo Henrique",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "19/09/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 205,
    "closedRevenue": 2557580,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-268",
    "companyName": "Horizon Construction Pro",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home Remodeling",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "17/08/2025",
    "monthsActive": 1,
    "daysActive": 43,
    "estimatesDelivered": 10,
    "closedRevenue": 83640,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-269",
    "companyName": "Supreme Flooring Specialists",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Home Additions",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "12/07/2025",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 19,
    "closedRevenue": 145939,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-270",
    "companyName": "Sterling Renovations Co.",
    "ownerName": "Carlos Andrade",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "19/07/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 19,
    "closedRevenue": 107616,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-271",
    "companyName": "Summit Interior Concepts",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home & Luxury Additions",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "01/09/2025",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 19,
    "closedRevenue": 119548,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-272",
    "companyName": "All-Star Builders LLC",
    "ownerName": "Renato Ramos",
    "specialty": "Hardie Board & Siding",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "05/09/2025",
    "monthsActive": 1,
    "daysActive": 45,
    "estimatesDelivered": 10,
    "closedRevenue": 46790,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-273",
    "companyName": "Miami Carpentry & Design",
    "ownerName": "Matheus Nogueira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/08/2025",
    "monthsActive": 2,
    "daysActive": 77,
    "estimatesDelivered": 19,
    "closedRevenue": 101213,
    "monthlyPlan": 2500,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-274",
    "companyName": "Bay State Carpentry & Design",
    "ownerName": "Otavio Mello",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "19/03/2025",
    "monthsActive": 8,
    "daysActive": 259,
    "estimatesDelivered": 103,
    "closedRevenue": 1076556,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-275",
    "companyName": "Horizon Painting & Drywall",
    "ownerName": "Juliano Rossi",
    "specialty": "Hardie Board & Siding",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "20/06/2025",
    "monthsActive": 3,
    "daysActive": 108,
    "estimatesDelivered": 43,
    "closedRevenue": 279113,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-276",
    "companyName": "Palm Coast Painting & Drywall",
    "ownerName": "Gabriel Costa",
    "specialty": "Luxury Home Additions",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "06/11/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 79,
    "closedRevenue": 601743,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-277",
    "companyName": "Gold Coast Roofing Solutions",
    "ownerName": "Marcos Silva",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "26/02/2025",
    "monthsActive": 9,
    "daysActive": 277,
    "estimatesDelivered": 81,
    "closedRevenue": 575262,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-278",
    "companyName": "Stonegate Outdoor Living",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "04/08/2024",
    "monthsActive": 16,
    "daysActive": 492,
    "estimatesDelivered": 204,
    "closedRevenue": 1647096,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-279",
    "companyName": "Metro Construction Pro",
    "ownerName": "Victor Hugo",
    "specialty": "Whole Home Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "04/02/2025",
    "monthsActive": 4,
    "daysActive": 129,
    "estimatesDelivered": 37,
    "closedRevenue": 264143,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-280",
    "companyName": "Miami Remodeling Group",
    "ownerName": "Luciano Mendes",
    "specialty": "Whole Home Remodeling",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "06/10/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 164,
    "closedRevenue": 1698056,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-281",
    "companyName": "First Choice Framing Contractors",
    "ownerName": "Fernando Dias",
    "specialty": "Basement Finishing & Remodel",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "08/02/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 107,
    "closedRevenue": 795652,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-282",
    "companyName": "Prime Builders LLC",
    "ownerName": "Gustavo Pinho",
    "specialty": "Whole Home Remodeling",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "22/11/2025",
    "monthsActive": 3,
    "daysActive": 103,
    "estimatesDelivered": 32,
    "closedRevenue": 375968,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-283",
    "companyName": "Oakridge Renovations Co.",
    "ownerName": "Carlos Andrade",
    "specialty": "Whole Home Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "26/07/2024",
    "monthsActive": 12,
    "daysActive": 362,
    "estimatesDelivered": 173,
    "closedRevenue": 1301998,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-284",
    "companyName": "Horizon Restorations",
    "ownerName": "Murilo Batista",
    "specialty": "Luxury Home Additions",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "09/08/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 146,
    "closedRevenue": 783290,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-285",
    "companyName": "Horizon Framing Contractors",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home Remodeling",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "18/07/2023",
    "monthsActive": 24,
    "daysActive": 723,
    "estimatesDelivered": 201,
    "closedRevenue": 2335620,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-286",
    "companyName": "Craftsman Interior Concepts",
    "ownerName": "Eduardo Santos",
    "specialty": "Hardie Board & Siding",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "03/07/2024",
    "monthsActive": 16,
    "daysActive": 495,
    "estimatesDelivered": 171,
    "closedRevenue": 1273608,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-287",
    "companyName": "Empire Painting & Drywall",
    "ownerName": "Luciano Mendes",
    "specialty": "Basement Finishing & Remodel",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "07/03/2024",
    "monthsActive": 17,
    "daysActive": 515,
    "estimatesDelivered": 160,
    "closedRevenue": 1859520,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-288",
    "companyName": "Precision Restorations",
    "ownerName": "Rogerio Maciel",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "13/09/2025",
    "monthsActive": 7,
    "daysActive": 218,
    "estimatesDelivered": 89,
    "closedRevenue": 508368,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-289",
    "companyName": "Supreme Outdoor Living",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home Remodeling",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "05/03/2025",
    "monthsActive": 3,
    "daysActive": 108,
    "estimatesDelivered": 44,
    "closedRevenue": 369380,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-290",
    "companyName": "ProCraft Hardscapes & Pavers",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "13/11/2025",
    "monthsActive": 6,
    "daysActive": 189,
    "estimatesDelivered": 82,
    "closedRevenue": 587366,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-291",
    "companyName": "Lone Star Hardscapes & Pavers",
    "ownerName": "Felipe Barreto",
    "specialty": "Luxury Home Additions",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "11/12/2025",
    "monthsActive": 7,
    "daysActive": 229,
    "estimatesDelivered": 95,
    "closedRevenue": 782990,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-292",
    "companyName": "Everest Renovations Co.",
    "ownerName": "Bruno Castilho",
    "specialty": "Basement Finishing & Remodel",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "23/11/2024",
    "monthsActive": 12,
    "daysActive": 369,
    "estimatesDelivered": 143,
    "closedRevenue": 1720290,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-293",
    "companyName": "Palmetto Framing Contractors",
    "ownerName": "Carlos Andrade",
    "specialty": "Luxury Home Additions",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "07/07/2024",
    "monthsActive": 16,
    "daysActive": 499,
    "estimatesDelivered": 135,
    "closedRevenue": 1163430,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-294",
    "companyName": "Boston Pro Construction Pro",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "05/09/2025",
    "monthsActive": 8,
    "daysActive": 242,
    "estimatesDelivered": 100,
    "closedRevenue": 830400,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-295",
    "companyName": "Craftsman Roofing Solutions",
    "ownerName": "Gilberto Ramos",
    "specialty": "Whole Home Remodeling",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "07/05/2024",
    "monthsActive": 10,
    "daysActive": 314,
    "estimatesDelivered": 79,
    "closedRevenue": 850988,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-296",
    "companyName": "Coastal Construction Pro",
    "ownerName": "Rivaldo Souza",
    "specialty": "Luxury Home Additions",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "16/10/2024",
    "monthsActive": 18,
    "daysActive": 559,
    "estimatesDelivered": 258,
    "closedRevenue": 3129540,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-297",
    "companyName": "Atlas Painting & Drywall",
    "ownerName": "Daniel Moreira",
    "specialty": "Basement Finishing & Remodel",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "08/11/2024",
    "monthsActive": 15,
    "daysActive": 451,
    "estimatesDelivered": 142,
    "closedRevenue": 1706982,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-298",
    "companyName": "Palm Coast Carpentry & Design",
    "ownerName": "Otavio Mello",
    "specialty": "Luxury Home Additions",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "09/10/2025",
    "monthsActive": 3,
    "daysActive": 94,
    "estimatesDelivered": 31,
    "closedRevenue": 211823,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-299",
    "companyName": "Benchmark Interior Concepts",
    "ownerName": "Juliano Rossi",
    "specialty": "Whole Home Remodeling",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "22/09/2024",
    "monthsActive": 14,
    "daysActive": 428,
    "estimatesDelivered": 151,
    "closedRevenue": 1128725,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-300",
    "companyName": "Atlas Painting & Drywall",
    "ownerName": "Vinicius Souza",
    "specialty": "Luxury Home Additions",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "04/08/2023",
    "monthsActive": 24,
    "daysActive": 731,
    "estimatesDelivered": 272,
    "closedRevenue": 2884832,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-301",
    "companyName": "ProCraft Roofing Solutions",
    "ownerName": "Felipe Barreto",
    "specialty": "Luxury Home Additions",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "25/04/2023",
    "monthsActive": 23,
    "daysActive": 699,
    "estimatesDelivered": 236,
    "closedRevenue": 2179932,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-302",
    "companyName": "Prime Flooring Specialists",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "24/01/2024",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 244,
    "closedRevenue": 1995920,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-303",
    "companyName": "Lone Star Renovations Co.",
    "ownerName": "Matheus Nogueira",
    "specialty": "Hardie Board & Siding",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "10/02/2024",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 138,
    "closedRevenue": 894654,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-304",
    "companyName": "Granite State Renovations Co.",
    "ownerName": "Vinicius Souza",
    "specialty": "Hardie Board & Siding",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "28/05/2024",
    "monthsActive": 13,
    "daysActive": 397,
    "estimatesDelivered": 163,
    "closedRevenue": 1808648,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-305",
    "companyName": "Sovereign Renovations Co.",
    "ownerName": "Paulo Henrique",
    "specialty": "Basement Finishing & Remodel",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "07/09/2025",
    "monthsActive": 6,
    "daysActive": 195,
    "estimatesDelivered": 47,
    "closedRevenue": 416796,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-306",
    "companyName": "All-Star Builders LLC",
    "ownerName": "Alexandre Pires",
    "specialty": "Basement Finishing & Remodel",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "15/03/2025",
    "monthsActive": 7,
    "daysActive": 216,
    "estimatesDelivered": 94,
    "closedRevenue": 908416,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-307",
    "companyName": "First Choice Outdoor Living",
    "ownerName": "Victor Hugo",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "09/04/2025",
    "monthsActive": 8,
    "daysActive": 260,
    "estimatesDelivered": 60,
    "closedRevenue": 522180,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-308",
    "companyName": "Titan Framing Contractors",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "14/08/2025",
    "monthsActive": 5,
    "daysActive": 169,
    "estimatesDelivered": 75,
    "closedRevenue": 622800,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-309",
    "companyName": "Universal Construction Pro",
    "ownerName": "Rivaldo Souza",
    "specialty": "Whole Home Remodeling",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "24/04/2024",
    "monthsActive": 13,
    "daysActive": 396,
    "estimatesDelivered": 95,
    "closedRevenue": 962635,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-310",
    "companyName": "ProCraft Framing Contractors",
    "ownerName": "Andre Guimaraes",
    "specialty": "Luxury Home Additions",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "10/08/2024",
    "monthsActive": 12,
    "daysActive": 365,
    "estimatesDelivered": 100,
    "closedRevenue": 744200,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-311",
    "companyName": "Horizon Carpentry & Design",
    "ownerName": "Bruno Castilho",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "26/07/2025",
    "monthsActive": 7,
    "daysActive": 225,
    "estimatesDelivered": 91,
    "closedRevenue": 577850,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-312",
    "companyName": "NextGen Remodeling Group",
    "ownerName": "Flavio Neves",
    "specialty": "Hardie Board & Siding",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "21/05/2024",
    "monthsActive": 19,
    "daysActive": 573,
    "estimatesDelivered": 232,
    "closedRevenue": 1872936,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-313",
    "companyName": "Elite Hardscapes & Pavers",
    "ownerName": "Rogerio Maciel",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "15/07/2023",
    "monthsActive": 23,
    "daysActive": 690,
    "estimatesDelivered": 166,
    "closedRevenue": 1396724,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-314",
    "companyName": "Heritage Restorations",
    "ownerName": "Matheus Nogueira",
    "specialty": "Whole Home Remodeling",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "20/10/2025",
    "monthsActive": 3,
    "daysActive": 103,
    "estimatesDelivered": 36,
    "closedRevenue": 259596,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-315",
    "companyName": "Palm Coast Roofing Solutions",
    "ownerName": "Rivaldo Souza",
    "specialty": "Luxury Home Additions",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "09/09/2025",
    "monthsActive": 6,
    "daysActive": 195,
    "estimatesDelivered": 67,
    "closedRevenue": 761991,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-316",
    "companyName": "Alpha Restorations",
    "ownerName": "Gabriel Costa",
    "specialty": "Hardie Board & Siding",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "01/01/2024",
    "monthsActive": 18,
    "daysActive": 546,
    "estimatesDelivered": 261,
    "closedRevenue": 1806381,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-317",
    "companyName": "Pinnacle Renovations Co.",
    "ownerName": "Gilberto Ramos",
    "specialty": "Basement Finishing & Remodel",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "09/11/2025",
    "monthsActive": 5,
    "daysActive": 166,
    "estimatesDelivered": 45,
    "closedRevenue": 558495,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-318",
    "companyName": "Silva & Sons Restorations",
    "ownerName": "Thiago Oliveira",
    "specialty": "Whole Home Remodeling",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "22/06/2025",
    "monthsActive": 8,
    "daysActive": 241,
    "estimatesDelivered": 97,
    "closedRevenue": 1121902,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-319",
    "companyName": "Diamond Builders LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "Basement Finishing & Remodel",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "24/02/2025",
    "monthsActive": 8,
    "daysActive": 251,
    "estimatesDelivered": 120,
    "closedRevenue": 1463520,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-320",
    "companyName": "Miami Builders LLC",
    "ownerName": "Felipe Barreto",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/12/2024",
    "monthsActive": 11,
    "daysActive": 345,
    "estimatesDelivered": 149,
    "closedRevenue": 882974,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-321",
    "companyName": "Signature Hardscapes & Pavers",
    "ownerName": "Matheus Nogueira",
    "specialty": "Whole Home Remodeling",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "01/11/2024",
    "monthsActive": 17,
    "daysActive": 529,
    "estimatesDelivered": 230,
    "closedRevenue": 2301840,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-322",
    "companyName": "Bay State Interior Concepts",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "28/11/2025",
    "monthsActive": 5,
    "daysActive": 158,
    "estimatesDelivered": 64,
    "closedRevenue": 689344,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-323",
    "companyName": "Orlando Restorations",
    "ownerName": "Paulo Henrique",
    "specialty": "Hardie Board & Siding",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "12/11/2023",
    "monthsActive": 22,
    "daysActive": 663,
    "estimatesDelivered": 293,
    "closedRevenue": 2621471,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-324",
    "companyName": "Precision Custom Homes",
    "ownerName": "Carlos Andrade",
    "specialty": "Luxury Home Additions",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "06/02/2025",
    "monthsActive": 8,
    "daysActive": 256,
    "estimatesDelivered": 123,
    "closedRevenue": 1491006,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-325",
    "companyName": "First Choice Hardscapes & Pavers",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Whole Home Remodeling",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "08/02/2024",
    "monthsActive": 10,
    "daysActive": 317,
    "estimatesDelivered": 140,
    "closedRevenue": 1637020,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-326",
    "companyName": "Apex Restorations",
    "ownerName": "Rogerio Maciel",
    "specialty": "Whole Home Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "14/01/2025",
    "monthsActive": 6,
    "daysActive": 195,
    "estimatesDelivered": 47,
    "closedRevenue": 390288,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-327",
    "companyName": "All-Star Interior Concepts",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardie Board & Siding",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "08/08/2025",
    "monthsActive": 9,
    "daysActive": 280,
    "estimatesDelivered": 112,
    "closedRevenue": 1309168,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-328",
    "companyName": "United Framing Contractors",
    "ownerName": "Wellington Prado",
    "specialty": "Luxury Home Additions",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "11/06/2024",
    "monthsActive": 14,
    "daysActive": 423,
    "estimatesDelivered": 119,
    "closedRevenue": 597023,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-329",
    "companyName": "Alpha Restorations",
    "ownerName": "Leandro Rocha",
    "specialty": "Basement Finishing & Remodel",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "09/10/2025",
    "monthsActive": 8,
    "daysActive": 255,
    "estimatesDelivered": 82,
    "closedRevenue": 481832,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-330",
    "companyName": "All-Star Hardscapes & Pavers",
    "ownerName": "Thiago Oliveira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "21/11/2025",
    "monthsActive": 9,
    "daysActive": 280,
    "estimatesDelivered": 82,
    "closedRevenue": 441160,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-331",
    "companyName": "Diamond Carpentry & Design",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "25/03/2025",
    "monthsActive": 3,
    "daysActive": 91,
    "estimatesDelivered": 50,
    "closedRevenue": 458200,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-332",
    "companyName": "Atlas Roofing Solutions",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Home Additions",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "13/07/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 276,
    "closedRevenue": 3372720,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-333",
    "companyName": "Palm Coast Carpentry & Design",
    "ownerName": "Sergio Mendes",
    "specialty": "Hardie Board & Siding",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "27/12/2025",
    "monthsActive": 7,
    "daysActive": 214,
    "estimatesDelivered": 103,
    "closedRevenue": 767144,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-334",
    "companyName": "Bluewater Painting & Drywall",
    "ownerName": "Flavio Neves",
    "specialty": "Luxury Home Additions",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "21/03/2023",
    "monthsActive": 22,
    "daysActive": 669,
    "estimatesDelivered": 270,
    "closedRevenue": 2921130,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-335",
    "companyName": "Sovereign Builders LLC",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home Remodeling",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "28/07/2024",
    "monthsActive": 18,
    "daysActive": 558,
    "estimatesDelivered": 246,
    "closedRevenue": 1806132,
    "monthlyPlan": 3200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-336",
    "companyName": "Orlando Restorations",
    "ownerName": "Murilo Batista",
    "specialty": "Whole Home Remodeling",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "26/03/2023",
    "monthsActive": 24,
    "daysActive": 721,
    "estimatesDelivered": 248,
    "closedRevenue": 2763960,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-337",
    "companyName": "Horizon Carpentry & Design",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardie Board & Siding",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "20/11/2024",
    "monthsActive": 20,
    "daysActive": 601,
    "estimatesDelivered": 251,
    "closedRevenue": 1465589,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-338",
    "companyName": "Gold Coast Remodeling Group",
    "ownerName": "Rogerio Maciel",
    "specialty": "Luxury Home Additions",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "26/11/2024",
    "monthsActive": 12,
    "daysActive": 361,
    "estimatesDelivered": 166,
    "closedRevenue": 1396392,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-339",
    "companyName": "Pinnacle Hardscapes & Pavers",
    "ownerName": "Leandro Rocha",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "20/04/2024",
    "monthsActive": 17,
    "daysActive": 530,
    "estimatesDelivered": 216,
    "closedRevenue": 2386584,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-340",
    "companyName": "Everest Construction Pro",
    "ownerName": "Murilo Batista",
    "specialty": "Hardie Board & Siding",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "14/05/2025",
    "monthsActive": 8,
    "daysActive": 245,
    "estimatesDelivered": 74,
    "closedRevenue": 394568,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  }
];

type FilterCategory = 
  | "all"
  | "renovacoes"   // Renovações após 90 dias (monthsActive >= 3)
  | "ativos"       // Clientes Ativos (status === 'ativo')
  | "socios"       // Sócios (status === 'socio')
  | "churned"      // Churned (status === 'churned')
  | "ltv6m"        // LTV > 6 Meses
  | "ltv12m"       // LTV > 1 Ano
  | "onboarding";  // Onboarding (< 90 dias)

export const getNicheCategory = (specialty: string): string => {
  const s = specialty.toLowerCase();
  if (s.includes("roof")) return "roofing";
  if (s.includes("kitchen") || s.includes("bath")) return "kitchen_bath";
  if (s.includes("floor") || s.includes("granite") || s.includes("tile")) return "flooring";
  if (s.includes("patio") || s.includes("paver") || s.includes("pool") || s.includes("hardscape")) return "hardscapes";
  if (s.includes("framing") || s.includes("carpentry") || s.includes("cabinet") || s.includes("closet")) return "framing_carpentry";
  if (s.includes("drywall") || s.includes("paint")) return "drywall_painting";
  if (s.includes("whole home") || s.includes("addition") || s.includes("basement") || s.includes("siding")) return "general_remodel";
  return "other";
};

export default function NivixEnterpriseCrm() {
  const [accounts] = useState<ContractorAccount[]>(accountsData);
  // Default inicia em 'all' (Todos os Clientes)
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("all");
  const [nicheFilter, setNicheFilter] = useState<string>("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [selectedAccount, setSelectedAccount] = useState<ContractorAccount | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(60);

  // 1. FILTRAGEM DINÂMICA
  const filteredAccounts = useMemo(() => {
    return accounts.filter(acc => {
      // Filtro de Categoria / Segmento
      if (selectedFilter === "renovacoes") {
        if (acc.monthsActive < 3) return false;
      } else if (selectedFilter === "ativos") {
        if (acc.status !== "ativo") return false;
      } else if (selectedFilter === "socios") {
        if (acc.status !== "socio") return false;
      } else if (selectedFilter === "churned") {
        if (acc.status !== "churned") return false;
      } else if (selectedFilter === "ltv6m") {
        if (acc.monthsActive < 6) return false;
      } else if (selectedFilter === "ltv12m") {
        if (acc.monthsActive < 12) return false;
      } else if (selectedFilter === "onboarding") {
        if (acc.monthsActive >= 3 || acc.status !== "ativo") return false;
      }

      // Filtro de Nicho da Construção
      if (nicheFilter !== "all") {
        const niche = getNicheCategory(acc.specialty);
        if (niche !== nicheFilter) return false;
      }

      // Filtro de Estado
      if (stateFilter !== "all" && acc.state !== stateFilter) return false;

      // Busca Livre
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
  }, [accounts, selectedFilter, nicheFilter, stateFilter, searchQuery]);

  // Reset da paginação quando qualquer filtro é alterado
  useEffect(() => {
    setVisibleCount(60);
  }, [selectedFilter, nicheFilter, stateFilter, searchQuery]);

  // 2. MÉTRICAS DINÂMICAS COM BASE NA BASE DE CLIENTES
  const totalFiltered = filteredAccounts.length;
  const activeFilteredCount = filteredAccounts.filter(a => a.status === "ativo").length;
  const sociosFilteredCount = filteredAccounts.filter(a => a.status === "socio").length;
  const churnedFilteredCount = filteredAccounts.filter(a => a.status === "churned").length;

  // Clientes com renovação confirmada (>= 90 dias / 3+ meses)
  const over90dCount = filteredAccounts.filter(a => a.monthsActive >= 3).length;

  // Taxa de Renovação calculada diretamente sobre a base de clientes do filtro
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

  // Contagens dos segmentos
  const filterCounts = useMemo(() => ({
    all: accounts.length,
    renovacoes: accounts.filter(a => a.monthsActive >= 3).length,
    ativos: accounts.filter(a => a.status === "ativo").length,
    socios: accounts.filter(a => a.status === "socio").length,
    churned: accounts.filter(a => a.status === "churned").length,
    ltv6m: accounts.filter(a => a.monthsActive >= 6).length,
    ltv12m: accounts.filter(a => a.monthsActive >= 12).length,
    onboarding: accounts.filter(a => a.monthsActive < 3 && a.status === "ativo").length,
  }), [accounts]);

  // Contagens por Nicho
  const nicheCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: accounts.length,
      roofing: 0,
      kitchen_bath: 0,
      flooring: 0,
      hardscapes: 0,
      framing_carpentry: 0,
      drywall_painting: 0,
      general_remodel: 0,
    };
    for (const a of accounts) {
      const n = getNicheCategory(a.specialty);
      if (counts[n] !== undefined) counts[n]++;
    }
    return counts;
  }, [accounts]);

  const nicheNames: Record<string, string> = {
    all: "Todos os Nichos",
    roofing: "Roofing & Telhados",
    kitchen_bath: "Kitchen & Bath",
    flooring: "Flooring & Revestimentos",
    hardscapes: "Hardscapes & Pavers",
    framing_carpentry: "Framing & Estruturas",
    drywall_painting: "Drywall & Pintura",
    general_remodel: "Whole Home & Reformas",
  };

  const filterLabels: Record<FilterCategory, { title: string; technicalDescription: string }> = {
    all: { title: "Todos os Clientes", technicalDescription: "Diretório consolidado de clientes cadastrados na base" },
    renovacoes: { title: "Renovações após 90 dias", technicalDescription: "Clientes com ciclo operacional superior a 90 dias e renovação confirmada" },
    ativos: { title: "Clientes Ativos", technicalDescription: "Clientes com contratos ativos em vigência operacional" },
    socios: { title: "Sócios & Joint Ventures", technicalDescription: "Clientes estratégicos com participação societária (equity)" },
    churned: { title: "Clientes Encerrados", technicalDescription: "Histórico de clientes com encerramento de contrato" },
    ltv6m: { title: "Permanência > 6 Meses", technicalDescription: "Clientes com ciclo contínuo superior a 6 meses" },
    ltv12m: { title: "Permanência > 1 Ano", technicalDescription: "Clientes com ciclo contínuo superior a 12 meses" },
    onboarding: { title: "Onboarding (< 90 dias)", technicalDescription: "Clientes recentes em período inicial de implementação" },
  };

  const visibleAccounts = filteredAccounts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e1e3ea] font-sans antialiased selection:bg-[#1a73e8] selection:text-white">
      
      {/* 1. TOP APP BAR (SaaS Enterprise Interno) */}
      <header className="sticky top-0 z-40 bg-[#101216] border-b border-[#212631] px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Workspace Identifier */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-black font-black text-xs shadow-sm">
              N
            </div>
            <span className="font-semibold text-white text-sm sm:text-base tracking-tight">Nivix Agency OS</span>
          </div>

          <span className="text-neutral-600 font-mono text-sm hidden sm:inline">/</span>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-neutral-300">Diretório de Clientes (USA)</span>
            <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Production
            </span>
          </div>
        </div>

        {/* User & Exit */}
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
                Diretório Operacional de Clientes
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#1c212c] text-neutral-300 border border-[#2b3344]">
                340 clientes cadastrados
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Gestão de clientes ativos, histórico de LTV, esteira de orçamentos e parceiros societários nos EUA.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => {
                alert("Exportando base de 340 clientes em formato CSV com métricas operacionais...");
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161a22] border border-[#2b3344] hover:bg-[#1e232e] text-neutral-300 text-xs sm:text-sm font-medium transition-colors"
            >
              <FaDownload className="text-xs" />
              <span>Exportar Base de Clientes (CSV)</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. KPI METRICS CARDS (CALCULADOS SOBRE A BASE REAL DE CLIENTES) */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          
          {/* KPI 1: Clientes no Filtro */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Total de Clientes</span>
              <FaBuilding className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {totalFiltered}
            </div>
            <div className="text-xs text-neutral-400 mt-1.5 truncate">
              <span className="text-emerald-400 font-semibold">{activeFilteredCount} ativos</span>
              {sociosFilteredCount > 0 && <span className="text-blue-400 font-semibold"> • {sociosFilteredCount} sócios</span>}
              {churnedFilteredCount > 0 && <span> • {churnedFilteredCount} encerrados</span>}
            </div>
          </div>

          {/* KPI 2: TAXA DE RENOVAÇÃO (> 90 DIAS) SOBRE A BASE */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631] relative overflow-hidden">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Taxa de Renovação (90d+)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight font-mono">
              {retentionRate}%
            </div>
            <div className="text-xs text-neutral-300 mt-1.5 font-medium truncate font-mono">
              {over90dCount} de {totalFiltered} clientes renovaram após 90 dias
            </div>
          </div>

          {/* KPI 3: LTV Médio em Meses */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Tempo Médio (LTV)</span>
              <FaCalendarDays className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {averageTenureMonths} <span className="text-sm font-normal text-neutral-400">meses</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1.5 truncate">
              {nicheFilter !== "all" ? `Média no nicho: ${nicheNames[nicheFilter]}` : "Permanência média dos clientes"}
            </div>
          </div>

          {/* KPI 4: Estimates Gerados */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Estimates Gerados</span>
              <FaBriefcase className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {totalEstimatesCount.toLocaleString()}
            </div>
            <div className="text-xs text-neutral-400 mt-1.5 truncate">
              Entregues aos clientes
            </div>
          </div>

          {/* KPI 5: Volume de Obra Fechada (GMV) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631] col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Volume Transacionado</span>
              <FaDollarSign className="text-amber-400 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-tight font-mono">
              ${(totalGmvDelivered / 1000000).toFixed(1)}M
            </div>
            <div className="text-xs text-neutral-400 mt-1.5 truncate">
              Obras fechadas pelos clientes
            </div>
          </div>

        </div>
      </section>

      {/* 4. BARRA DE PESQUISA & FILTROS (100% OPERACIONAL) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-[1800px] mx-auto bg-[#101216] p-3 sm:p-4 rounded-2xl border border-[#212631] shadow-xl flex flex-col gap-3">
          
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-3">
            
            {/* 1. DROPDOWN DE SEGMENTO DE CLIENTES */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full xl:w-[280px] flex items-center justify-between gap-2.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                  isDropdownOpen
                    ? "bg-[#1d2331] text-white border-[#384358] shadow-md"
                    : "bg-[#14171f] text-white border-[#2b3548] hover:border-neutral-400"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <FaSliders className="text-amber-400 text-xs shrink-0" />
                  <span className="font-bold text-white tracking-tight truncate">
                    {filterLabels[selectedFilter].title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    selectedFilter === "socios"
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      : "bg-[#252c3c] text-neutral-300 border border-[#384358]"
                  }`}>
                    {filterCounts[selectedFilter]}
                  </span>
                  <FaChevronDown className={`text-neutral-400 text-xs transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180 text-amber-400" : ""
                  }`} />
                </div>
              </button>

              {/* MENU DROPDOWN OPERACIONAL */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsDropdownOpen(false)} 
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 z-50 w-full sm:w-[440px] bg-[#12151c] border border-[#2b3548] rounded-2xl shadow-2xl overflow-hidden p-2 backdrop-blur-md"
                    >
                      <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400 border-b border-[#212631] flex items-center justify-between">
                        <span>Filtro de Clientes</span>
                        <span className="text-neutral-500">340 Clientes</span>
                      </div>

                      <div className="max-h-[440px] overflow-y-auto py-1 divide-y divide-[#1e232e]">
                        
                        {/* Seção 1: Segmentos da Carteira */}
                        <div className="py-1">
                          <span className="px-3 py-1 text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                            Carteira de Clientes
                          </span>

                          {/* Todos os Clientes */}
                          <button
                            onClick={() => { setSelectedFilter("all"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group ${
                              selectedFilter === "all" ? "bg-[#212836] font-bold text-white" : "hover:bg-[#181d27]"
                            }`}
                          >
                            <div>
                              <span className="font-semibold text-white text-xs sm:text-sm block">
                                Todos os Clientes (Base Total)
                              </span>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Base consolidada de 340 clientes registrados.
                              </p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#252c3c] text-neutral-300 border border-[#384358] shrink-0">
                              340
                            </span>
                          </button>

                          {/* Renovações após 90 dias */}
                          <button
                            onClick={() => { setSelectedFilter("renovacoes"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group ${
                              selectedFilter === "renovacoes" ? "bg-[#212836] font-bold text-white border border-[#384358]" : "hover:bg-[#181d27]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span className="font-semibold text-white text-xs sm:text-sm block">
                                  Renovações após 90 dias
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Clientes com permanência superior a 90 dias e renovação confirmada.
                              </p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#252c3c] text-neutral-300 border border-[#384358] shrink-0">
                              {filterCounts.renovacoes}
                            </span>
                          </button>

                          {/* Clientes Ativos */}
                          <button
                            onClick={() => { setSelectedFilter("ativos"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group ${
                              selectedFilter === "ativos" ? "bg-[#212836] font-bold text-white border border-[#384358]" : "hover:bg-[#181d27]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span className="font-semibold text-white text-xs sm:text-sm block">
                                  Clientes Ativos em Operação
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Clientes ativos em vigência operacional contínua gerando orçamentos.
                              </p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                              {filterCounts.ativos}
                            </span>
                          </button>

                          {/* Sócios (em Azul) */}
                          <button
                            onClick={() => { setSelectedFilter("socios"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group ${
                              selectedFilter === "socios" ? "bg-blue-500/10 border border-blue-500/30" : "hover:bg-[#181d27]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                <span className="font-semibold text-white text-xs sm:text-sm block">
                                  Sócios & Joint Ventures
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Clientes societários e operações com participação de equity (em azul).
                              </p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
                              {filterCounts.socios}
                            </span>
                          </button>

                          {/* Churned */}
                          <button
                            onClick={() => { setSelectedFilter("churned"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group ${
                              selectedFilter === "churned" ? "bg-neutral-800 border border-neutral-700" : "hover:bg-[#181d27]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                                <span className="font-semibold text-white text-xs sm:text-sm block">
                                  Clientes Encerrados (Churn)
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Histórico de clientes que encerraram contrato ao longo dos anos.
                              </p>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-800 text-neutral-300 border border-neutral-700 shrink-0">
                              {filterCounts.churned}
                            </span>
                          </button>

                        </div>

                        {/* Seção 2: Ciclo de Vida (LTV) */}
                        <div className="py-1">
                          <span className="px-3 py-1 text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                            Ciclo de Vida (LTV)
                          </span>

                          <button
                            onClick={() => { setSelectedFilter("ltv6m"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                              selectedFilter === "ltv6m" ? "bg-[#212836] font-bold text-white" : "text-neutral-300 hover:bg-[#181d27]"
                            }`}
                          >
                            <span>Permanência &gt; 6 Meses</span>
                            <span className="font-mono text-neutral-400 text-xs">{filterCounts.ltv6m}</span>
                          </button>

                          <button
                            onClick={() => { setSelectedFilter("ltv12m"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                              selectedFilter === "ltv12m" ? "bg-[#212836] font-bold text-white" : "text-neutral-300 hover:bg-[#181d27]"
                            }`}
                          >
                            <span>Permanência &gt; 1 Ano</span>
                            <span className="font-mono text-neutral-400 text-xs">{filterCounts.ltv12m}</span>
                          </button>

                          <button
                            onClick={() => { setSelectedFilter("onboarding"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                              selectedFilter === "onboarding" ? "bg-[#212836] font-bold text-white" : "text-neutral-300 hover:bg-[#181d27]"
                            }`}
                          >
                            <span>Onboarding Inicial (&lt; 90 dias)</span>
                            <span className="font-mono text-neutral-400 text-xs">{filterCounts.onboarding}</span>
                          </button>
                        </div>

                        {/* Seção 3: Nichos da Construção */}
                        <div className="py-1">
                          <span className="px-3 py-1 text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">
                            Filtrar por Nicho da Construção
                          </span>
                          <div className="grid grid-cols-2 gap-1 px-2">
                            {[
                              { id: "roofing", label: "Roofing", count: nicheCounts.roofing },
                              { id: "kitchen_bath", label: "Kitchen & Bath", count: nicheCounts.kitchen_bath },
                              { id: "flooring", label: "Flooring & Tile", count: nicheCounts.flooring },
                              { id: "hardscapes", label: "Hardscapes", count: nicheCounts.hardscapes },
                              { id: "framing_carpentry", label: "Framing", count: nicheCounts.framing_carpentry },
                              { id: "drywall_painting", label: "Drywall & Paint", count: nicheCounts.drywall_painting },
                              { id: "general_remodel", label: "Whole Home", count: nicheCounts.general_remodel },
                            ].map(n => (
                              <button
                                key={n.id}
                                onClick={() => { setNicheFilter(n.id); setIsDropdownOpen(false); }}
                                className={`text-left px-2 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                                  nicheFilter === n.id ? "bg-amber-400 text-black font-bold" : "bg-[#181d27] text-neutral-300 hover:text-white"
                                }`}
                              >
                                <span className="truncate">{n.label}</span>
                                <span className="font-mono text-[10px] opacity-80">{n.count}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* 2. BARRA DE PESQUISA INTEGRADA */}
            <div className="relative flex-1">
              <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar por cliente, sócio, responsável, especialidade, cidade..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#14171f] border border-[#262c3a] rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                >
                  <FaXmark className="text-xs" />
                </button>
              )}
            </div>

            {/* 3. SELETOR DE NICHO DA CONSTRUÇÃO */}
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-auto">
                <select
                  value={nicheFilter}
                  onChange={e => setNicheFilter(e.target.value)}
                  className={`w-full sm:w-[220px] px-3.5 py-2.5 bg-[#14171f] border rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none cursor-pointer ${
                    nicheFilter !== "all"
                      ? "border-amber-400/60 text-amber-300 bg-amber-400/10 font-bold"
                      : "border-[#262c3a] text-neutral-300 hover:border-neutral-500"
                  }`}
                >
                  <option value="all">Todos os Nichos</option>
                  <option value="roofing">Roofing & Telhados ({nicheCounts.roofing})</option>
                  <option value="kitchen_bath">Kitchen & Bath ({nicheCounts.kitchen_bath})</option>
                  <option value="flooring">Flooring & Pisos / Tile ({nicheCounts.flooring})</option>
                  <option value="hardscapes">Hardscapes & Pavers ({nicheCounts.hardscapes})</option>
                  <option value="framing_carpentry">Framing & Estruturas ({nicheCounts.framing_carpentry})</option>
                  <option value="drywall_painting">Drywall & Pintura ({nicheCounts.drywall_painting})</option>
                  <option value="general_remodel">Whole Home & Reformas ({nicheCounts.general_remodel})</option>
                </select>
              </div>

              {/* 4. SELETOR DE ESTADO */}
              <select
                value={stateFilter}
                onChange={e => setStateFilter(e.target.value)}
                className={`px-3 py-2.5 bg-[#14171f] border rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none cursor-pointer ${
                  stateFilter !== "all"
                    ? "border-amber-400/60 text-amber-300 bg-amber-400/10 font-bold"
                    : "border-[#262c3a] text-neutral-300 hover:border-neutral-500"
                }`}
              >
                <option value="all">Jurisdição: Todos Estados</option>
                <option value="FL">FL (Flórida)</option>
                <option value="MA">MA (Massachusetts)</option>
                <option value="TX">TX (Texas)</option>
                <option value="NJ">NJ (New Jersey)</option>
                <option value="CA">CA (Califórnia)</option>
                <option value="GA">GA (Georgia)</option>
                <option value="NC">NC (North Carolina)</option>
                <option value="SC">SC (South Carolina)</option>
                <option value="CT">CT (Connecticut)</option>
                <option value="NY">NY (New York)</option>
                <option value="UT">UT (Utah)</option>
                <option value="NH">NH (New Hampshire)</option>
                <option value="MD">MD (Maryland)</option>
                <option value="WA">WA (Washington)</option>
              </select>

              {/* 5. TOGGLE TABELA / CARDS (PARA CELULAR) */}
              <div className="flex items-center p-1 bg-[#161a22] rounded-xl border border-[#262c3a] shrink-0">
                <button
                  onClick={() => setViewMode("table")}
                  title="Visualização em Tabela"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    viewMode === "table" ? "bg-[#252c3c] text-white shadow-sm font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <FaTableList className="text-xs" />
                  <span className="hidden sm:inline">Tabela</span>
                </button>
                <button
                  onClick={() => setViewMode("cards")}
                  title="Visualização em Cards"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    viewMode === "cards" ? "bg-[#252c3c] text-white shadow-sm font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <FaTableCellsLarge className="text-xs" />
                  <span className="hidden sm:inline">Cards</span>
                </button>
              </div>

            </div>

          </div>

          {/* Sub-barra de Resumo e Reset */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#1c212c] text-xs text-neutral-400">
            <div className="flex flex-wrap items-center gap-2">
              <span>Filtro: <strong className="text-white">{filterLabels[selectedFilter].title}</strong></span>
              {nicheFilter !== "all" && (
                <>
                  <span>•</span>
                  <span>Nicho: <strong className="text-emerald-400">{nicheNames[nicheFilter]}</strong></span>
                </>
              )}
              {stateFilter !== "all" && (
                <>
                  <span>•</span>
                  <span>Estado: <strong className="text-white">{stateFilter}</strong></span>
                </>
              )}
              <span>•</span>
              <span><strong>{filteredAccounts.length}</strong> de 340 clientes</span>
            </div>

            {(selectedFilter !== "all" || stateFilter !== "all" || nicheFilter !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedFilter("all");
                  setNicheFilter("all");
                  setStateFilter("all");
                  setSearchQuery("");
                }}
                className="text-neutral-400 hover:text-white flex items-center gap-1.5 text-xs bg-[#161a22] px-2.5 py-1 rounded-lg border border-[#262c3a] transition-colors"
              >
                <FaRotateLeft className="text-[10px]" />
                <span>Limpar Filtros</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 5. ÁREA DE DADOS (TABELA COMPLETA OU MODO CARDS) */}
      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1800px] mx-auto">
          
          {/* SELEÇÃO 1: MODO TABELA */}
          {viewMode === "table" ? (
            <div className="rounded-2xl border border-[#212631] bg-[#101216] overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm min-w-[980px]">
                  <thead className="bg-[#14171f] border-b border-[#212631] text-xs font-mono uppercase tracking-wider text-neutral-400">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold">Cliente / Construtora</th>
                      <th className="py-3.5 px-4 font-semibold">Responsável</th>
                      <th className="py-3.5 px-4 font-semibold">Especialidade / Nicho</th>
                      <th className="py-3.5 px-4 font-semibold">Localização</th>
                      <th className="py-3.5 px-4 font-semibold text-center">Início</th>
                      <th className="py-3.5 px-4 font-semibold text-center">Permanência (LTV)</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Estimates</th>
                      <th className="py-3.5 px-4 font-semibold text-right">Volume Fechado</th>
                      <th className="py-3.5 px-4 font-semibold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e232e]">
                    {visibleAccounts.map((account) => {
                      return (
                        <tr 
                          key={account.id}
                          onClick={() => setSelectedAccount(account)}
                          className="hover:bg-[#161a23] transition-colors cursor-pointer group"
                        >
                          {/* Construtora */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 ${
                                account.status === "socio"
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30 font-black"
                                  : "bg-[#191f2b] border border-[#2b3548] text-amber-300"
                              }`}>
                                {account.companyName.charAt(0)}
                              </div>
                              <div>
                                <span className={`font-bold transition-colors block text-sm sm:text-base ${
                                  account.status === "socio"
                                    ? "text-blue-300 group-hover:text-blue-200"
                                    : "text-white group-hover:text-amber-300"
                                }`}>
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

                          {/* Especialidade / Nicho */}
                          <td className="py-3.5 px-4 text-neutral-300">
                            <span className="truncate max-w-[220px] block font-medium">
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

                          {/* LTV / Permanência - APENAS EM MESES */}
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

                          {/* Status Badge (Ativo verde / Sócio azul / Churned cinza) */}
                          <td className="py-3.5 px-4 text-center">
                            {account.status === "socio" ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30 whitespace-nowrap shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                Sócio
                              </span>
                            ) : account.status === "ativo" ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 whitespace-nowrap shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Cliente Ativo
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700 whitespace-nowrap">
                                <span className="w-2 h-2 rounded-full bg-neutral-500"></span>
                                Churned
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Botão de Carregar Mais */}
              {visibleCount < filteredAccounts.length && (
                <div className="py-4 bg-[#14171f] border-t border-[#212631] text-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 60)}
                    className="px-5 py-2 rounded-xl bg-[#1d2331] hover:bg-[#252d3f] border border-[#2f394d] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  >
                    Carregar mais 60 clientes (mostrando {visibleAccounts.length} de {filteredAccounts.length})
                  </button>
                </div>
              )}

              {/* Rodapé da Tabela com Resumo Técnico */}
              <div className="px-4 py-3.5 bg-[#14171f] border-t border-[#212631] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-neutral-400">
                <span>Mostrando {visibleAccounts.length} de {filteredAccounts.length} clientes cadastrados</span>
                <div className="flex items-center gap-4 font-mono text-xs sm:text-sm">
                  <span>Renovações 90d+: <strong className="text-emerald-400">{retentionRate}%</strong></span>
                  <span>•</span>
                  <span>LTV Médio: <strong className="text-white">{averageTenureMonths} meses</strong></span>
                </div>
              </div>
            </div>
          ) : (
            /* SELEÇÃO 2: MODO CARDS (PARA CELULAR) */
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {visibleAccounts.map((account) => (
                  <div
                    key={account.id}
                    onClick={() => setSelectedAccount(account)}
                    className={`p-4 sm:p-5 rounded-2xl bg-[#12151c] border transition-all cursor-pointer group shadow-sm flex flex-col justify-between ${
                      account.status === "socio" 
                        ? "border-blue-500/30 hover:border-blue-400" 
                        : "border-[#212631] hover:border-neutral-500"
                    }`}
                  >
                    <div>
                      {/* Top Row: Empresa + Status */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                            account.status === "socio"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-[#191f2b] border border-[#2b3548] text-amber-300"
                          }`}>
                            {account.companyName.charAt(0)}
                          </div>
                          <div>
                            <h3 className={`font-bold text-base sm:text-lg transition-colors leading-tight ${
                              account.status === "socio"
                                ? "text-blue-300 group-hover:text-blue-200"
                                : "text-white group-hover:text-amber-300"
                            }`}>
                              {account.companyName}
                            </h3>
                            <span className="text-xs text-neutral-500 font-mono">
                              {account.id} • {account.ownerName}
                            </span>
                          </div>
                        </div>

                        {account.status === "socio" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            Sócio
                          </span>
                        ) : account.status === "ativo" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Cliente Ativo
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-400 border border-neutral-700 shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                            Churned
                          </span>
                        )}
                      </div>

                      {/* Especialidade e Local */}
                      <div className="text-xs sm:text-sm text-neutral-300 mb-4 flex items-center justify-between">
                        <span className="truncate max-w-[200px] text-neutral-200 font-medium">{account.specialty}</span>
                        <span className="text-neutral-400 font-medium">{account.city}, {account.state}</span>
                      </div>
                    </div>

                    {/* 3 Blocos de Métricas Grandes */}
                    <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-[#1e232e]">
                      <div className="bg-[#161a22] p-2.5 rounded-xl border border-[#212631]">
                        <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-0.5">Permanência</span>
                        <span className="text-sm sm:text-base font-bold text-white font-mono block">
                          {account.monthsActive} {account.monthsActive === 1 ? "mês" : "meses"}
                        </span>
                      </div>
                      <div className="bg-[#161a22] p-2.5 rounded-xl border border-[#212631]">
                        <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-0.5">Estimates</span>
                        <span className="text-sm sm:text-base font-bold text-white font-mono block">
                          {account.estimatesDelivered}
                        </span>
                      </div>
                      <div className="bg-[#161a22] p-2.5 rounded-xl border border-[#212631]">
                        <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-0.5">Volume</span>
                        <span className="text-sm sm:text-base font-bold text-amber-300 font-mono block">
                          ${(account.closedRevenue / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão de Carregar Mais nos Cards */}
              {visibleCount < filteredAccounts.length && (
                <div className="py-6 text-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 60)}
                    className="px-6 py-2.5 rounded-xl bg-[#1d2331] hover:bg-[#252d3f] border border-[#2f394d] text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
                  >
                    Carregar mais 60 clientes (mostrando {visibleAccounts.length} de {filteredAccounts.length})
                  </button>
                </div>
              )}
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
                    {selectedAccount.status === "socio" ? (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono font-medium">
                        Sócio / Equity Partner
                      </span>
                    ) : selectedAccount.status === "ativo" ? (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-medium">
                        Cliente Ativo
                      </span>
                    ) : (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700 font-mono font-medium">
                        Cliente Encerrado
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
                <div className="p-3.5 rounded-xl bg-[#161a22] border border-[#212631]">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Permanência (LTV)</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono mt-1 block">
                    {selectedAccount.monthsActive} {selectedAccount.monthsActive === 1 ? "mês" : "meses"}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono mt-0.5 block">
                    {selectedAccount.daysActive} dias contínuos
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#161a22] border border-[#212631]">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Estimates</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono mt-1 block">
                    {selectedAccount.estimatesDelivered}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono mt-0.5 block">Homeowners</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#161a22] border border-[#212631]">
                  <span className="text-xs font-mono uppercase text-neutral-400 block">Volume Fechado</span>
                  <span className="text-base sm:text-lg font-bold text-amber-300 font-mono mt-1 block">
                    ${selectedAccount.closedRevenue.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono mt-0.5 block">Contratos</span>
                </div>
              </div>

              {/* Diagnóstico / Histórico */}
              <div className="p-4 rounded-xl bg-[#161a22] border border-[#212631] mb-5">
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
                  {selectedAccount.monthsActive >= 3 ? "Renovação pós-90d registrada" : "Período inicial de onboarding"}
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
