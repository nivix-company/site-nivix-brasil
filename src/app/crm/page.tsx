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
    "estimatesDelivered": 160,
    "closedRevenue": 1370000,
    "monthlyPlan": 4000,
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
    "estimatesDelivered": 136,
    "closedRevenue": 1220000,
    "monthlyPlan": 3500,
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
    "estimatesDelivered": 127,
    "closedRevenue": 1250000,
    "monthlyPlan": 3500,
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
    "estimatesDelivered": 106,
    "closedRevenue": 920000,
    "monthlyPlan": 3500,
    "status": "socio",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Conta S\u00f3cia. Especialista em pavimenta\u00e7\u00e3o de travertino e cozinhas externas em North Jersey."
  },
  {
    "id": "ACC-005",
    "companyName": "Sterling Roofing Solutions",
    "ownerName": "Flavio Neves",
    "specialty": "Commercial & Residential Roofing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "24/07/2025",
    "monthsActive": 2,
    "daysActive": 72,
    "estimatesDelivered": 9,
    "closedRevenue": 20000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-006",
    "companyName": "Pinnacle Sunline Roofing Co.",
    "ownerName": "Flavio Neves",
    "specialty": "Commercial & Residential Roofing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "01/09/2025",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 9,
    "closedRevenue": 20000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-007",
    "companyName": "Elite Legacy Roofing Group",
    "ownerName": "Vinicius Souza",
    "specialty": "Commercial & Residential Roofing",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "05/07/2025",
    "monthsActive": 1,
    "daysActive": 48,
    "estimatesDelivered": 9,
    "closedRevenue": 25000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-008",
    "companyName": "United Pinnacle Roof Systems",
    "ownerName": "Paulo Henrique",
    "specialty": "Commercial & Residential Roofing",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "15/09/2024",
    "monthsActive": 14,
    "daysActive": 439,
    "estimatesDelivered": 71,
    "closedRevenue": 260000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-009",
    "companyName": "SunState Legacy Roofing Group",
    "ownerName": "Claudio Silva",
    "specialty": "Commercial & Residential Roofing",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "28/04/2025",
    "monthsActive": 5,
    "daysActive": 151,
    "estimatesDelivered": 28,
    "closedRevenue": 85000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-010",
    "companyName": "Paramount Roofing Pro",
    "ownerName": "Cristiano Melo",
    "specialty": "Commercial & Residential Roofing",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "21/03/2024",
    "monthsActive": 14,
    "daysActive": 426,
    "estimatesDelivered": 68,
    "closedRevenue": 215000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-011",
    "companyName": "Legacy Pinnacle Roof Systems",
    "ownerName": "Lucas Ferreira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "11/07/2024",
    "monthsActive": 10,
    "daysActive": 301,
    "estimatesDelivered": 50,
    "closedRevenue": 180000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-012",
    "companyName": "Highline Roofing Pro",
    "ownerName": "Rogerio Maciel",
    "specialty": "Commercial & Metal Roofs",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/04/2024",
    "monthsActive": 18,
    "daysActive": 552,
    "estimatesDelivered": 109,
    "closedRevenue": 315000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-013",
    "companyName": "Coastal Precision Roofers",
    "ownerName": "Thiago Oliveira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "03/01/2024",
    "monthsActive": 15,
    "daysActive": 457,
    "estimatesDelivered": 84,
    "closedRevenue": 290000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-014",
    "companyName": "Empire Roofing Solutions",
    "ownerName": "Thiago Oliveira",
    "specialty": "Commercial & Residential Roofing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "18/01/2024",
    "monthsActive": 15,
    "daysActive": 462,
    "estimatesDelivered": 85,
    "closedRevenue": 330000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-015",
    "companyName": "Pinnacle Roofing Pro",
    "ownerName": "Alexandre Pires",
    "specialty": "Commercial & Metal Roofs",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "24/05/2024",
    "monthsActive": 16,
    "daysActive": 485,
    "estimatesDelivered": 86,
    "closedRevenue": 300000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-016",
    "companyName": "Modern Touch Storm Restoration LLC",
    "ownerName": "Andre Guimaraes",
    "specialty": "Commercial & Residential Roofing",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "06/09/2024",
    "monthsActive": 19,
    "daysActive": 576,
    "estimatesDelivered": 100,
    "closedRevenue": 355000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-017",
    "companyName": "Empire Pinnacle Roof Systems",
    "ownerName": "Carlos Andrade",
    "specialty": "Commercial & Metal Roofs",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "19/02/2024",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 78,
    "closedRevenue": 230000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-018",
    "companyName": "Signature Apex Roofing",
    "ownerName": "Daniel Moreira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "28/10/2024",
    "monthsActive": 18,
    "daysActive": 557,
    "estimatesDelivered": 108,
    "closedRevenue": 385000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-019",
    "companyName": "Vanguard Roofing & Siding",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Roofing & Storm Restoration",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "08/02/2024",
    "monthsActive": 15,
    "daysActive": 464,
    "estimatesDelivered": 88,
    "closedRevenue": 285000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-020",
    "companyName": "Empire Roofing & Siding",
    "ownerName": "Roberto Faria",
    "specialty": "Commercial & Metal Roofs",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "02/06/2023",
    "monthsActive": 23,
    "daysActive": 691,
    "estimatesDelivered": 137,
    "closedRevenue": 415000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-021",
    "companyName": "Ironwood Everest Roofing",
    "ownerName": "Claudio Silva",
    "specialty": "Commercial & Residential Roofing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "16/07/2025",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 43,
    "closedRevenue": 125000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-022",
    "companyName": "Diamond Roofing & Siding",
    "ownerName": "Claudio Silva",
    "specialty": "Roofing & Storm Restoration",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "24/06/2024",
    "monthsActive": 17,
    "daysActive": 511,
    "estimatesDelivered": 98,
    "closedRevenue": 355000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-023",
    "companyName": "Sterling Pinnacle Roof Systems",
    "ownerName": "Rogerio Maciel",
    "specialty": "Commercial & Metal Roofs",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "03/08/2025",
    "monthsActive": 8,
    "daysActive": 248,
    "estimatesDelivered": 42,
    "closedRevenue": 165000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-024",
    "companyName": "Diamond Sunline Roofing Co.",
    "ownerName": "Felipe Barreto",
    "specialty": "Roofing & Storm Restoration",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "28/07/2024",
    "monthsActive": 10,
    "daysActive": 313,
    "estimatesDelivered": 53,
    "closedRevenue": 200000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-025",
    "companyName": "Prime Precision Roofers",
    "ownerName": "Leandro Rocha",
    "specialty": "Roofing & Storm Restoration",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "23/08/2024",
    "monthsActive": 17,
    "daysActive": 519,
    "estimatesDelivered": 87,
    "closedRevenue": 300000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-026",
    "companyName": "Signature Everest Roofing",
    "ownerName": "Roberto Faria",
    "specialty": "Roofing & Storm Restoration",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "17/03/2025",
    "monthsActive": 4,
    "daysActive": 138,
    "estimatesDelivered": 24,
    "closedRevenue": 80000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-027",
    "companyName": "Bluewater Roofing Solutions",
    "ownerName": "Cleber Toledo",
    "specialty": "Roofing & Storm Restoration",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "19/04/2023",
    "monthsActive": 24,
    "daysActive": 727,
    "estimatesDelivered": 134,
    "closedRevenue": 475000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-028",
    "companyName": "Highline Apex Roofing",
    "ownerName": "Otavio Mello",
    "specialty": "Roofing & Storm Restoration",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "09/07/2024",
    "monthsActive": 19,
    "daysActive": 578,
    "estimatesDelivered": 110,
    "closedRevenue": 320000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-029",
    "companyName": "Sterling Storm Restoration LLC",
    "ownerName": "Rivaldo Souza",
    "specialty": "Commercial & Residential Roofing",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "17/05/2024",
    "monthsActive": 21,
    "daysActive": 633,
    "estimatesDelivered": 113,
    "closedRevenue": 435000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-030",
    "companyName": "Horizon Sunline Roofing Co.",
    "ownerName": "Matheus Nogueira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "22/02/2024",
    "monthsActive": 20,
    "daysActive": 609,
    "estimatesDelivered": 119,
    "closedRevenue": 445000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-031",
    "companyName": "Stonegate Pinnacle Roof Systems",
    "ownerName": "Carlos Andrade",
    "specialty": "Roofing & Storm Restoration",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "21/05/2023",
    "monthsActive": 22,
    "daysActive": 666,
    "estimatesDelivered": 112,
    "closedRevenue": 410000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-032",
    "companyName": "Highline Sunline Roofing Co.",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Commercial & Residential Roofing",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "09/03/2024",
    "monthsActive": 11,
    "daysActive": 330,
    "estimatesDelivered": 66,
    "closedRevenue": 220000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-033",
    "companyName": "Everest Titan Roofs",
    "ownerName": "Matheus Nogueira",
    "specialty": "Commercial & Residential Roofing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "18/03/2025",
    "monthsActive": 7,
    "daysActive": 227,
    "estimatesDelivered": 42,
    "closedRevenue": 130000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-034",
    "companyName": "Universal Pinnacle Roof Systems",
    "ownerName": "Renato Ramos",
    "specialty": "Roofing & Storm Restoration",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "28/07/2025",
    "monthsActive": 9,
    "daysActive": 273,
    "estimatesDelivered": 52,
    "closedRevenue": 185000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-035",
    "companyName": "Empire Sunline Roofing Co.",
    "ownerName": "Paulo Henrique",
    "specialty": "Commercial & Residential Roofing",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "06/12/2025",
    "monthsActive": 3,
    "daysActive": 100,
    "estimatesDelivered": 17,
    "closedRevenue": 60000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-036",
    "companyName": "Bluewater Storm Restoration LLC",
    "ownerName": "Fernando Dias",
    "specialty": "Roofing & Storm Restoration",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "01/11/2024",
    "monthsActive": 17,
    "daysActive": 521,
    "estimatesDelivered": 89,
    "closedRevenue": 345000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-037",
    "companyName": "Highline Legacy Roofing Group",
    "ownerName": "Murilo Batista",
    "specialty": "Commercial & Metal Roofs",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "09/03/2024",
    "monthsActive": 19,
    "daysActive": 582,
    "estimatesDelivered": 108,
    "closedRevenue": 350000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-038",
    "companyName": "Modern Touch Atlas Roofing Pro",
    "ownerName": "Eduardo Santos",
    "specialty": "Roofing & Storm Restoration",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "19/04/2024",
    "monthsActive": 13,
    "daysActive": 403,
    "estimatesDelivered": 78,
    "closedRevenue": 230000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-039",
    "companyName": "Pinnacle Roofing Pro",
    "ownerName": "Marcelo Rezende",
    "specialty": "Commercial & Metal Roofs",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "10/09/2025",
    "monthsActive": 5,
    "daysActive": 160,
    "estimatesDelivered": 26,
    "closedRevenue": 90000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-040",
    "companyName": "Apex Roofing Pro",
    "ownerName": "Rogerio Maciel",
    "specialty": "Commercial & Residential Roofing",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "19/05/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 50,
    "closedRevenue": 155000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-041",
    "companyName": "Gold Coast Titan Roofs",
    "ownerName": "Roberto Faria",
    "specialty": "Commercial & Metal Roofs",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "15/11/2024",
    "monthsActive": 21,
    "daysActive": 649,
    "estimatesDelivered": 103,
    "closedRevenue": 320000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-042",
    "companyName": "Ironwood Roofing & Siding",
    "ownerName": "Otavio Mello",
    "specialty": "Roofing & Storm Restoration",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "25/04/2024",
    "monthsActive": 12,
    "daysActive": 380,
    "estimatesDelivered": 67,
    "closedRevenue": 205000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-043",
    "companyName": "NextGen Everest Roofing",
    "ownerName": "Paulo Henrique",
    "specialty": "Roofing & Storm Restoration",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "21/10/2024",
    "monthsActive": 10,
    "daysActive": 315,
    "estimatesDelivered": 49,
    "closedRevenue": 175000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-044",
    "companyName": "Legacy Pinnacle Bath Concepts",
    "ownerName": "Gilberto Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "26/09/2025",
    "monthsActive": 1,
    "daysActive": 48,
    "estimatesDelivered": 8,
    "closedRevenue": 20000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-045",
    "companyName": "Vanguard First Choice Kitchens",
    "ownerName": "Roberto Faria",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "11/08/2025",
    "monthsActive": 2,
    "daysActive": 81,
    "estimatesDelivered": 14,
    "closedRevenue": 45000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-046",
    "companyName": "Alpha Kitchen & Bath Pro",
    "ownerName": "Andre Guimaraes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "27/09/2025",
    "monthsActive": 2,
    "daysActive": 73,
    "estimatesDelivered": 12,
    "closedRevenue": 35000,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-047",
    "companyName": "Alpha Bath & Tile Specialists",
    "ownerName": "Renato Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "18/02/2024",
    "monthsActive": 12,
    "daysActive": 367,
    "estimatesDelivered": 62,
    "closedRevenue": 210000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-048",
    "companyName": "Horizon Apex Kitchens",
    "ownerName": "Rafael Camargo",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "07/07/2024",
    "monthsActive": 16,
    "daysActive": 490,
    "estimatesDelivered": 85,
    "closedRevenue": 315000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-049",
    "companyName": "Bluewater Luxury Bathrooms LLC",
    "ownerName": "Cleber Toledo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "24/12/2024",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 67,
    "closedRevenue": 290000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-050",
    "companyName": "Universal Kitchen Remodeling Group",
    "ownerName": "Matheus Nogueira",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "06/08/2025",
    "monthsActive": 3,
    "daysActive": 102,
    "estimatesDelivered": 18,
    "closedRevenue": 60000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-051",
    "companyName": "Craftsman Kitchen & Bath Pro",
    "ownerName": "Felipe Barreto",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "28/08/2023",
    "monthsActive": 24,
    "daysActive": 720,
    "estimatesDelivered": 119,
    "closedRevenue": 520000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-052",
    "companyName": "Precision Craftsman Kitchen & Bath",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "27/02/2024",
    "monthsActive": 13,
    "daysActive": 402,
    "estimatesDelivered": 69,
    "closedRevenue": 235000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-053",
    "companyName": "Coastal Bath & Tile Specialists",
    "ownerName": "Renato Ramos",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "07/01/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 29,
    "closedRevenue": 120000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-054",
    "companyName": "Vanguard Kitchen & Bath Pro",
    "ownerName": "Thiago Oliveira",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "20/10/2025",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 50,
    "closedRevenue": 165000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-055",
    "companyName": "Stonegate Luxury Bathrooms LLC",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "07/02/2025",
    "monthsActive": 3,
    "daysActive": 99,
    "estimatesDelivered": 16,
    "closedRevenue": 65000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-056",
    "companyName": "Universal Pinnacle Bath Concepts",
    "ownerName": "Marcos Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "17/11/2025",
    "monthsActive": 4,
    "daysActive": 137,
    "estimatesDelivered": 20,
    "closedRevenue": 80000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-057",
    "companyName": "Gold Coast Heritage Bath Remodeling",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "06/12/2024",
    "monthsActive": 14,
    "daysActive": 440,
    "estimatesDelivered": 70,
    "closedRevenue": 305000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-058",
    "companyName": "Atlas First Choice Kitchens",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "03/05/2024",
    "monthsActive": 21,
    "daysActive": 638,
    "estimatesDelivered": 119,
    "closedRevenue": 420000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-059",
    "companyName": "Diamond First Choice Kitchens",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "12/05/2024",
    "monthsActive": 18,
    "daysActive": 550,
    "estimatesDelivered": 102,
    "closedRevenue": 365000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-060",
    "companyName": "Empire Kitchen & Bath Pro",
    "ownerName": "Gustavo Pinho",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "18/04/2025",
    "monthsActive": 9,
    "daysActive": 272,
    "estimatesDelivered": 47,
    "closedRevenue": 155000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-061",
    "companyName": "Atlas Signature Interiors",
    "ownerName": "Gustavo Pinho",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "22/10/2025",
    "monthsActive": 5,
    "daysActive": 157,
    "estimatesDelivered": 27,
    "closedRevenue": 115000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-062",
    "companyName": "Universal Modern Touch Remodel",
    "ownerName": "Leandro Rocha",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "08/02/2024",
    "monthsActive": 13,
    "daysActive": 404,
    "estimatesDelivered": 69,
    "closedRevenue": 290000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-063",
    "companyName": "Benchmark Heritage Bath Remodeling",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "07/05/2024",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 107,
    "closedRevenue": 430000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-064",
    "companyName": "Bluewater Apex Kitchens",
    "ownerName": "Marcos Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "28/08/2025",
    "monthsActive": 4,
    "daysActive": 137,
    "estimatesDelivered": 23,
    "closedRevenue": 100000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-065",
    "companyName": "Diamond Apex Kitchens",
    "ownerName": "Carlos Andrade",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "27/02/2025",
    "monthsActive": 8,
    "daysActive": 241,
    "estimatesDelivered": 39,
    "closedRevenue": 160000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-066",
    "companyName": "Prime Apex Kitchens",
    "ownerName": "Cleber Toledo",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "18/07/2024",
    "monthsActive": 21,
    "daysActive": 639,
    "estimatesDelivered": 108,
    "closedRevenue": 440000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-067",
    "companyName": "Atlas First Choice Kitchens",
    "ownerName": "Daniel Moreira",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "24/02/2024",
    "monthsActive": 12,
    "daysActive": 373,
    "estimatesDelivered": 68,
    "closedRevenue": 260000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-068",
    "companyName": "Precision Kitchen & Bath Pro",
    "ownerName": "Cleber Toledo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "14/08/2025",
    "monthsActive": 8,
    "daysActive": 257,
    "estimatesDelivered": 41,
    "closedRevenue": 170000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-069",
    "companyName": "Gold Coast Kitchen & Bath Pro",
    "ownerName": "Leandro Rocha",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "26/11/2024",
    "monthsActive": 12,
    "daysActive": 374,
    "estimatesDelivered": 62,
    "closedRevenue": 245000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-070",
    "companyName": "Precision Kitchen Remodeling Group",
    "ownerName": "Wellington Prado",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "24/10/2025",
    "monthsActive": 7,
    "daysActive": 211,
    "estimatesDelivered": 42,
    "closedRevenue": 165000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-071",
    "companyName": "Everest Luxury Bathrooms LLC",
    "ownerName": "Luciano Mendes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "20/01/2024",
    "monthsActive": 11,
    "daysActive": 347,
    "estimatesDelivered": 65,
    "closedRevenue": 250000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-072",
    "companyName": "Modern Touch Heritage Bath Remodeling",
    "ownerName": "Andre Guimaraes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "02/03/2023",
    "monthsActive": 24,
    "daysActive": 738,
    "estimatesDelivered": 133,
    "closedRevenue": 445000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-073",
    "companyName": "Benchmark Modern Touch Remodel",
    "ownerName": "Claudio Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "11/06/2024",
    "monthsActive": 16,
    "daysActive": 482,
    "estimatesDelivered": 93,
    "closedRevenue": 400000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-074",
    "companyName": "Atlas First Choice Kitchens",
    "ownerName": "Thiago Oliveira",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/05/2024",
    "monthsActive": 15,
    "daysActive": 467,
    "estimatesDelivered": 75,
    "closedRevenue": 270000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-075",
    "companyName": "Bluewater Pinnacle Bath Concepts",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "15/01/2025",
    "monthsActive": 9,
    "daysActive": 286,
    "estimatesDelivered": 54,
    "closedRevenue": 235000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-076",
    "companyName": "Universal Kitchen Remodeling Group",
    "ownerName": "Marcelo Rezende",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "18/01/2024",
    "monthsActive": 18,
    "daysActive": 540,
    "estimatesDelivered": 107,
    "closedRevenue": 455000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-077",
    "companyName": "Titan Kitchen Remodeling Group",
    "ownerName": "Gilberto Ramos",
    "specialty": "Luxury Bathroom Renovations",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "16/08/2025",
    "monthsActive": 7,
    "daysActive": 219,
    "estimatesDelivered": 41,
    "closedRevenue": 170000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-078",
    "companyName": "Sovereign First Choice Kitchens",
    "ownerName": "Marcos Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "26/09/2024",
    "monthsActive": 19,
    "daysActive": 572,
    "estimatesDelivered": 111,
    "closedRevenue": 390000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-079",
    "companyName": "Alpha Pinnacle Bath Concepts",
    "ownerName": "Gilberto Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "25/09/2024",
    "monthsActive": 17,
    "daysActive": 525,
    "estimatesDelivered": 101,
    "closedRevenue": 350000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-080",
    "companyName": "ProCraft Modern Touch Remodel",
    "ownerName": "Paulo Henrique",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "16/12/2024",
    "monthsActive": 10,
    "daysActive": 313,
    "estimatesDelivered": 52,
    "closedRevenue": 180000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-081",
    "companyName": "Elite Pinnacle Bath Concepts",
    "ownerName": "Andre Guimaraes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "28/08/2025",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 35,
    "closedRevenue": 155000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-082",
    "companyName": "Summit Modern Touch Remodel",
    "ownerName": "Gabriel Costa",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "23/07/2025",
    "monthsActive": 7,
    "daysActive": 225,
    "estimatesDelivered": 41,
    "closedRevenue": 165000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-083",
    "companyName": "Highline Modern Touch Remodel",
    "ownerName": "Wellington Prado",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "21/11/2024",
    "monthsActive": 18,
    "daysActive": 557,
    "estimatesDelivered": 106,
    "closedRevenue": 450000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-084",
    "companyName": "Precision Kitchen Remodeling Group",
    "ownerName": "Rivaldo Souza",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "11/01/2025",
    "monthsActive": 6,
    "daysActive": 185,
    "estimatesDelivered": 34,
    "closedRevenue": 110000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-085",
    "companyName": "Sterling Modern Touch Remodel",
    "ownerName": "Cristiano Melo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "20/07/2024",
    "monthsActive": 21,
    "daysActive": 635,
    "estimatesDelivered": 120,
    "closedRevenue": 445000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-086",
    "companyName": "Stonegate Flooring Specialists",
    "ownerName": "Wellington Prado",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "26/08/2025",
    "monthsActive": 2,
    "daysActive": 79,
    "estimatesDelivered": 12,
    "closedRevenue": 35000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-087",
    "companyName": "Elite Flooring Co.",
    "ownerName": "Otavio Mello",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "23/08/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 9,
    "closedRevenue": 25000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-088",
    "companyName": "Apex Heritage Hardwood Floors",
    "ownerName": "Diego Antunes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "01/09/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 15,
    "closedRevenue": 40000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-089",
    "companyName": "Elite Boston Pro Tile",
    "ownerName": "Matheus Nogueira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "07/10/2024",
    "monthsActive": 12,
    "daysActive": 379,
    "estimatesDelivered": 65,
    "closedRevenue": 155000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-090",
    "companyName": "Everest United Flooring & Tile",
    "ownerName": "Marcelo Rezende",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "10/06/2025",
    "monthsActive": 4,
    "daysActive": 131,
    "estimatesDelivered": 25,
    "closedRevenue": 60000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-091",
    "companyName": "Heritage Diamond Flooring LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "10/12/2024",
    "monthsActive": 11,
    "daysActive": 335,
    "estimatesDelivered": 62,
    "closedRevenue": 125000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-092",
    "companyName": "Signature Classic Flooring Group",
    "ownerName": "Flavio Neves",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "13/01/2024",
    "monthsActive": 10,
    "daysActive": 317,
    "estimatesDelivered": 57,
    "closedRevenue": 135000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-093",
    "companyName": "Benchmark Diamond Flooring LLC",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "01/10/2023",
    "monthsActive": 23,
    "daysActive": 701,
    "estimatesDelivered": 125,
    "closedRevenue": 270000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-094",
    "companyName": "Atlas Diamond Flooring LLC",
    "ownerName": "Carlos Andrade",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "02/01/2024",
    "monthsActive": 17,
    "daysActive": 530,
    "estimatesDelivered": 99,
    "closedRevenue": 225000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-095",
    "companyName": "United Classic Flooring Group",
    "ownerName": "Carlos Andrade",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "14/11/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 73,
    "closedRevenue": 185000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-096",
    "companyName": "SunState Classic Flooring Group",
    "ownerName": "Rivaldo Souza",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "22/06/2025",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 45,
    "closedRevenue": 90000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-097",
    "companyName": "Universal Classic Flooring Group",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "11/04/2024",
    "monthsActive": 17,
    "daysActive": 516,
    "estimatesDelivered": 88,
    "closedRevenue": 180000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-098",
    "companyName": "Gold Coast Granite & Marble Concepts",
    "ownerName": "Murilo Batista",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "05/03/2024",
    "monthsActive": 10,
    "daysActive": 304,
    "estimatesDelivered": 59,
    "closedRevenue": 135000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-099",
    "companyName": "Palm Coast Granite & Marble Concepts",
    "ownerName": "Marcelo Rezende",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "09/01/2024",
    "monthsActive": 10,
    "daysActive": 318,
    "estimatesDelivered": 59,
    "closedRevenue": 135000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-100",
    "companyName": "Universal Prime Hardwood Floors",
    "ownerName": "Andre Guimaraes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "08/10/2024",
    "monthsActive": 14,
    "daysActive": 436,
    "estimatesDelivered": 77,
    "closedRevenue": 200000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-101",
    "companyName": "Alpha Diamond Flooring LLC",
    "ownerName": "Renato Ramos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "03/06/2024",
    "monthsActive": 15,
    "daysActive": 453,
    "estimatesDelivered": 78,
    "closedRevenue": 150000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-102",
    "companyName": "Universal Flooring Specialists",
    "ownerName": "Thiago Oliveira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "20/07/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 120,
    "closedRevenue": 290000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-103",
    "companyName": "Bluewater Stonegate Tile Pro",
    "ownerName": "Sergio Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "14/12/2024",
    "monthsActive": 10,
    "daysActive": 313,
    "estimatesDelivered": 54,
    "closedRevenue": 130000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-104",
    "companyName": "Stonegate Diamond Flooring LLC",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "04/12/2024",
    "monthsActive": 18,
    "daysActive": 542,
    "estimatesDelivered": 106,
    "closedRevenue": 275000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-105",
    "companyName": "NextGen Precision Tile & Hardwood",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "10/06/2024",
    "monthsActive": 16,
    "daysActive": 493,
    "estimatesDelivered": 82,
    "closedRevenue": 210000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-106",
    "companyName": "Summit Heritage Hardwood Floors",
    "ownerName": "Luciano Mendes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "09/10/2025",
    "monthsActive": 6,
    "daysActive": 191,
    "estimatesDelivered": 32,
    "closedRevenue": 70000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-107",
    "companyName": "Empire United Flooring & Tile",
    "ownerName": "Fernando Dias",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "06/03/2024",
    "monthsActive": 11,
    "daysActive": 339,
    "estimatesDelivered": 58,
    "closedRevenue": 125000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-108",
    "companyName": "Highline Flooring Specialists",
    "ownerName": "Sergio Mendes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "12/05/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 45,
    "closedRevenue": 100000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-109",
    "companyName": "Prime United Flooring & Tile",
    "ownerName": "Cleber Toledo",
    "specialty": "Granite & Quartz Fabrication",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "22/07/2023",
    "monthsActive": 22,
    "daysActive": 661,
    "estimatesDelivered": 113,
    "closedRevenue": 250000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-110",
    "companyName": "Highline Precision Tile & Hardwood",
    "ownerName": "Andre Guimaraes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "22/10/2025",
    "monthsActive": 6,
    "daysActive": 193,
    "estimatesDelivered": 32,
    "closedRevenue": 80000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-111",
    "companyName": "Signature Stonegate Tile Pro",
    "ownerName": "Murilo Batista",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "07/03/2023",
    "monthsActive": 22,
    "daysActive": 661,
    "estimatesDelivered": 130,
    "closedRevenue": 335000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-112",
    "companyName": "Palm Coast Diamond Flooring LLC",
    "ownerName": "Rogerio Maciel",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "23/04/2024",
    "monthsActive": 16,
    "daysActive": 485,
    "estimatesDelivered": 87,
    "closedRevenue": 185000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-113",
    "companyName": "Signature Diamond Flooring LLC",
    "ownerName": "Luciano Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "28/06/2025",
    "monthsActive": 4,
    "daysActive": 133,
    "estimatesDelivered": 22,
    "closedRevenue": 50000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-114",
    "companyName": "Summit Diamond Flooring LLC",
    "ownerName": "Luciano Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "23/06/2025",
    "monthsActive": 3,
    "daysActive": 100,
    "estimatesDelivered": 18,
    "closedRevenue": 40000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-115",
    "companyName": "Craftsman United Flooring & Tile",
    "ownerName": "Roberto Faria",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "25/03/2024",
    "monthsActive": 15,
    "daysActive": 459,
    "estimatesDelivered": 77,
    "closedRevenue": 205000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-116",
    "companyName": "Highline Hardwood & Tile Pro",
    "ownerName": "Cleber Toledo",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "09/04/2023",
    "monthsActive": 23,
    "daysActive": 694,
    "estimatesDelivered": 134,
    "closedRevenue": 265000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-117",
    "companyName": "Sterling Prime Hardwood Floors",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "21/06/2024",
    "monthsActive": 18,
    "daysActive": 558,
    "estimatesDelivered": 105,
    "closedRevenue": 205000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-118",
    "companyName": "Signature Boston Pro Tile",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "15/01/2025",
    "monthsActive": 4,
    "daysActive": 136,
    "estimatesDelivered": 21,
    "closedRevenue": 45000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (4 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-119",
    "companyName": "Signature Elite Flooring Co.",
    "ownerName": "Renato Ramos",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "20/08/2024",
    "monthsActive": 20,
    "daysActive": 601,
    "estimatesDelivered": 116,
    "closedRevenue": 245000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-120",
    "companyName": "Silva & Sons Precision Tile & Hardwood",
    "ownerName": "Andre Guimaraes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "23/08/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 23,
    "closedRevenue": 60000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-121",
    "companyName": "Legacy Granite & Marble Concepts",
    "ownerName": "Vinicius Souza",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "20/01/2024",
    "monthsActive": 12,
    "daysActive": 372,
    "estimatesDelivered": 66,
    "closedRevenue": 165000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-122",
    "companyName": "Universal Granite & Marble Concepts",
    "ownerName": "Rivaldo Souza",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "19/11/2023",
    "monthsActive": 24,
    "daysActive": 739,
    "estimatesDelivered": 139,
    "closedRevenue": 290000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-123",
    "companyName": "NextGen Benchmark Carpentry",
    "ownerName": "Andre Guimaraes",
    "specialty": "Timber Framing & Decks",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "27/07/2025",
    "monthsActive": 2,
    "daysActive": 82,
    "estimatesDelivered": 9,
    "closedRevenue": 25000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-124",
    "companyName": "Atlas Empire Outdoor Living",
    "ownerName": "Bruno Castilho",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "25/08/2025",
    "monthsActive": 2,
    "daysActive": 70,
    "estimatesDelivered": 14,
    "closedRevenue": 35000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-125",
    "companyName": "Modern Touch Outdoor Living Pro",
    "ownerName": "Cleber Toledo",
    "specialty": "Patios, Travertine & Pools",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "25/10/2025",
    "monthsActive": 6,
    "daysActive": 197,
    "estimatesDelivered": 32,
    "closedRevenue": 110000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-126",
    "companyName": "SunState Vanguard Framing Pro",
    "ownerName": "Juliano Rossi",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "24/04/2025",
    "monthsActive": 8,
    "daysActive": 241,
    "estimatesDelivered": 38,
    "closedRevenue": 125000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-127",
    "companyName": "Palm Coast Benchmark Carpentry",
    "ownerName": "Wellington Prado",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "19/08/2024",
    "monthsActive": 12,
    "daysActive": 375,
    "estimatesDelivered": 73,
    "closedRevenue": 205000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-128",
    "companyName": "Elite Travertine & Pools LLC",
    "ownerName": "Andre Guimaraes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "04/12/2025",
    "monthsActive": 7,
    "daysActive": 211,
    "estimatesDelivered": 39,
    "closedRevenue": 105000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-129",
    "companyName": "Benchmark Craftsman Outdoor Concepts",
    "ownerName": "Rivaldo Souza",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "08/08/2024",
    "monthsActive": 19,
    "daysActive": 574,
    "estimatesDelivered": 104,
    "closedRevenue": 355000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-130",
    "companyName": "Palm Coast Pavers & Patios Co.",
    "ownerName": "Claudio Silva",
    "specialty": "Pool Decks & Travertine",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "01/06/2024",
    "monthsActive": 10,
    "daysActive": 312,
    "estimatesDelivered": 54,
    "closedRevenue": 175000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-131",
    "companyName": "Empire Palmetto Hardscapes",
    "ownerName": "Gabriel Costa",
    "specialty": "Patios, Travertine & Pools",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "20/01/2024",
    "monthsActive": 12,
    "daysActive": 375,
    "estimatesDelivered": 66,
    "closedRevenue": 230000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-132",
    "companyName": "Ironwood Custom Framing LLC",
    "ownerName": "Thiago Oliveira",
    "specialty": "Timber Framing & Decks",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "10/04/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 118,
    "closedRevenue": 360000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-133",
    "companyName": "ProCraft All-Star Pavers",
    "ownerName": "Wellington Prado",
    "specialty": "Pool Decks & Travertine",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "08/12/2024",
    "monthsActive": 18,
    "daysActive": 559,
    "estimatesDelivered": 90,
    "closedRevenue": 300000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-134",
    "companyName": "Summit Ironwood Framing & Decks",
    "ownerName": "Roberto Faria",
    "specialty": "Timber Framing & Decks",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "18/09/2025",
    "monthsActive": 8,
    "daysActive": 242,
    "estimatesDelivered": 48,
    "closedRevenue": 140000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-135",
    "companyName": "Summit Coastal Hardscapes",
    "ownerName": "Cristiano Melo",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "26/02/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 86,
    "closedRevenue": 250000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-136",
    "companyName": "United Hardscapes & Pools",
    "ownerName": "Gustavo Pinho",
    "specialty": "Patios, Travertine & Pools",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "25/11/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 82,
    "closedRevenue": 240000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-137",
    "companyName": "Ironwood Bay State Framing Co.",
    "ownerName": "Otavio Mello",
    "specialty": "Timber Framing & Decks",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "07/01/2024",
    "monthsActive": 17,
    "daysActive": 519,
    "estimatesDelivered": 85,
    "closedRevenue": 235000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-138",
    "companyName": "Precision Coastal Hardscapes",
    "ownerName": "Vinicius Souza",
    "specialty": "Pool Decks & Travertine",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "25/01/2023",
    "monthsActive": 23,
    "daysActive": 696,
    "estimatesDelivered": 119,
    "closedRevenue": 375000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-139",
    "companyName": "Oakridge Hardscapes & Pools",
    "ownerName": "Andre Guimaraes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "16/06/2024",
    "monthsActive": 17,
    "daysActive": 520,
    "estimatesDelivered": 85,
    "closedRevenue": 265000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-140",
    "companyName": "Universal Timberline Framing",
    "ownerName": "Wellington Prado",
    "specialty": "Timber Framing & Decks",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "03/06/2023",
    "monthsActive": 22,
    "daysActive": 665,
    "estimatesDelivered": 120,
    "closedRevenue": 340000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-141",
    "companyName": "Titan Travertine & Pools LLC",
    "ownerName": "Fernando Dias",
    "specialty": "Patios, Travertine & Pools",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "21/01/2024",
    "monthsActive": 14,
    "daysActive": 421,
    "estimatesDelivered": 74,
    "closedRevenue": 245000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-142",
    "companyName": "Benchmark Craftsman Outdoor Concepts",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "08/11/2023",
    "monthsActive": 22,
    "daysActive": 674,
    "estimatesDelivered": 123,
    "closedRevenue": 390000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-143",
    "companyName": "Legacy Horizon Pavers & Decks",
    "ownerName": "Diego Antunes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "12/07/2024",
    "monthsActive": 14,
    "daysActive": 434,
    "estimatesDelivered": 85,
    "closedRevenue": 250000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-144",
    "companyName": "ProCraft Vanguard Framing Pro",
    "ownerName": "Daniel Moreira",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "09/12/2024",
    "monthsActive": 15,
    "daysActive": 467,
    "estimatesDelivered": 78,
    "closedRevenue": 195000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-145",
    "companyName": "Elite Coastal Hardscapes",
    "ownerName": "Sergio Mendes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "26/11/2025",
    "monthsActive": 5,
    "daysActive": 164,
    "estimatesDelivered": 25,
    "closedRevenue": 70000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-146",
    "companyName": "NextGen SunState Pavers",
    "ownerName": "Carlos Andrade",
    "specialty": "Pool Decks & Travertine",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "26/03/2025",
    "monthsActive": 8,
    "daysActive": 251,
    "estimatesDelivered": 46,
    "closedRevenue": 165000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-147",
    "companyName": "Elite Vanguard Framing Pro",
    "ownerName": "Andre Guimaraes",
    "specialty": "Timber Framing & Decks",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "23/12/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 36,
    "closedRevenue": 95000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-148",
    "companyName": "Highline Outdoor Living Pro",
    "ownerName": "Matheus Nogueira",
    "specialty": "Patios, Travertine & Pools",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "22/09/2024",
    "monthsActive": 13,
    "daysActive": 410,
    "estimatesDelivered": 66,
    "closedRevenue": 210000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-149",
    "companyName": "Diamond Craftsman Outdoor Concepts",
    "ownerName": "Bruno Castilho",
    "specialty": "Pool Decks & Travertine",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "06/06/2025",
    "monthsActive": 4,
    "daysActive": 123,
    "estimatesDelivered": 25,
    "closedRevenue": 70000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-150",
    "companyName": "Apex Precision Pavers & Patios",
    "ownerName": "Gabriel Costa",
    "specialty": "Patios, Travertine & Pools",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "10/10/2023",
    "monthsActive": 23,
    "daysActive": 707,
    "estimatesDelivered": 120,
    "closedRevenue": 365000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-151",
    "companyName": "Horizon Pavers & Patios Co.",
    "ownerName": "Eduardo Santos",
    "specialty": "Pool Decks & Travertine",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "28/01/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 114,
    "closedRevenue": 310000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-152",
    "companyName": "Empire Apex Finish Carpentry",
    "ownerName": "Otavio Mello",
    "specialty": "Timber Framing & Decks",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "21/09/2024",
    "monthsActive": 16,
    "daysActive": 500,
    "estimatesDelivered": 85,
    "closedRevenue": 215000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-153",
    "companyName": "Palm Coast SunState Pavers",
    "ownerName": "Cleber Toledo",
    "specialty": "Pool Decks & Travertine",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "15/04/2025",
    "monthsActive": 4,
    "daysActive": 125,
    "estimatesDelivered": 20,
    "closedRevenue": 55000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-154",
    "companyName": "Sovereign Ironwood Framing & Decks",
    "ownerName": "Thiago Oliveira",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "11/07/2025",
    "monthsActive": 2,
    "daysActive": 81,
    "estimatesDelivered": 13,
    "closedRevenue": 40000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-155",
    "companyName": "Pinnacle Craftsman Millwork LLC",
    "ownerName": "Sergio Mendes",
    "specialty": "Custom Closets & Cabinets",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "08/07/2025",
    "monthsActive": 2,
    "daysActive": 77,
    "estimatesDelivered": 12,
    "closedRevenue": 30000,
    "monthlyPlan": 1600,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-156",
    "companyName": "United Vanguard Framing Pro",
    "ownerName": "Fernando Dias",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "16/07/2025",
    "monthsActive": 2,
    "daysActive": 80,
    "estimatesDelivered": 15,
    "closedRevenue": 40000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-157",
    "companyName": "Sterling Vanguard Framing Pro",
    "ownerName": "Gustavo Pinho",
    "specialty": "Wood & Metal Framing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "27/09/2025",
    "monthsActive": 1,
    "daysActive": 44,
    "estimatesDelivered": 9,
    "closedRevenue": 25000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-158",
    "companyName": "Alpha Custom Cabinets & Framing",
    "ownerName": "Felipe Barreto",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "12/07/2025",
    "monthsActive": 2,
    "daysActive": 76,
    "estimatesDelivered": 14,
    "closedRevenue": 35000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-159",
    "companyName": "Silva & Sons Finish Carpentry & Design",
    "ownerName": "Juliano Rossi",
    "specialty": "Wood & Metal Framing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "27/10/2025",
    "monthsActive": 5,
    "daysActive": 162,
    "estimatesDelivered": 24,
    "closedRevenue": 60000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-160",
    "companyName": "Sovereign Lone Star Framing",
    "ownerName": "Roberto Faria",
    "specialty": "Wood & Metal Framing",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "20/09/2024",
    "monthsActive": 13,
    "daysActive": 407,
    "estimatesDelivered": 75,
    "closedRevenue": 200000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-161",
    "companyName": "Pinnacle Vanguard Framing Pro",
    "ownerName": "Victor Hugo",
    "specialty": "Custom Closets & Cabinets",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/10/2024",
    "monthsActive": 18,
    "daysActive": 554,
    "estimatesDelivered": 104,
    "closedRevenue": 255000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-162",
    "companyName": "Pinnacle Vanguard Framing Pro",
    "ownerName": "Vinicius Souza",
    "specialty": "General Contractor & Framing",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "27/01/2024",
    "monthsActive": 19,
    "daysActive": 587,
    "estimatesDelivered": 109,
    "closedRevenue": 310000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-163",
    "companyName": "Highline Custom Cabinets & Framing",
    "ownerName": "Victor Hugo",
    "specialty": "General Contractor & Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "02/10/2025",
    "monthsActive": 3,
    "daysActive": 105,
    "estimatesDelivered": 18,
    "closedRevenue": 60000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-164",
    "companyName": "Empire Framing Contractors",
    "ownerName": "Renato Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "15/06/2024",
    "monthsActive": 10,
    "daysActive": 318,
    "estimatesDelivered": 51,
    "closedRevenue": 155000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-165",
    "companyName": "Palm Coast Vanguard Framing Pro",
    "ownerName": "Gustavo Pinho",
    "specialty": "Custom Closets & Cabinets",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "07/09/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 119,
    "closedRevenue": 370000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-166",
    "companyName": "Craftsman Vanguard Framing Pro",
    "ownerName": "Cristiano Melo",
    "specialty": "Custom Closets & Cabinets",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "16/04/2024",
    "monthsActive": 20,
    "daysActive": 610,
    "estimatesDelivered": 110,
    "closedRevenue": 310000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-167",
    "companyName": "Gold Coast Apex Finish Carpentry",
    "ownerName": "Diego Antunes",
    "specialty": "General Contractor & Framing",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "12/09/2024",
    "monthsActive": 12,
    "daysActive": 366,
    "estimatesDelivered": 69,
    "closedRevenue": 165000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-168",
    "companyName": "Pinnacle Benchmark Carpentry",
    "ownerName": "Gustavo Pinho",
    "specialty": "Custom Closets & Cabinets",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "15/11/2025",
    "monthsActive": 7,
    "daysActive": 211,
    "estimatesDelivered": 40,
    "closedRevenue": 135000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-169",
    "companyName": "Summit Ironwood Framing & Decks",
    "ownerName": "Bruno Castilho",
    "specialty": "General Contractor & Framing",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "22/09/2023",
    "monthsActive": 22,
    "daysActive": 678,
    "estimatesDelivered": 107,
    "closedRevenue": 305000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-170",
    "companyName": "United Vanguard Framing Pro",
    "ownerName": "Leandro Rocha",
    "specialty": "Custom Closets & Cabinets",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "16/08/2025",
    "monthsActive": 6,
    "daysActive": 180,
    "estimatesDelivered": 32,
    "closedRevenue": 95000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-171",
    "companyName": "Ironwood Custom Framing LLC",
    "ownerName": "Alexandre Pires",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "24/01/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 29,
    "closedRevenue": 80000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-172",
    "companyName": "Alpha Finish Carpentry & Design",
    "ownerName": "Claudio Silva",
    "specialty": "General Contractor & Framing",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "10/10/2024",
    "monthsActive": 15,
    "daysActive": 455,
    "estimatesDelivered": 80,
    "closedRevenue": 215000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (15 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-173",
    "companyName": "Craftsman Millwork LLC",
    "ownerName": "Gilberto Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "04/06/2025",
    "monthsActive": 7,
    "daysActive": 224,
    "estimatesDelivered": 33,
    "closedRevenue": 90000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-174",
    "companyName": "Heritage Custom Framing LLC",
    "ownerName": "Gabriel Costa",
    "specialty": "Wood & Metal Framing",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "14/09/2024",
    "monthsActive": 12,
    "daysActive": 366,
    "estimatesDelivered": 74,
    "closedRevenue": 240000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-175",
    "companyName": "Apex Benchmark Carpentry",
    "ownerName": "Diego Antunes",
    "specialty": "Wood & Metal Framing",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "08/08/2024",
    "monthsActive": 18,
    "daysActive": 547,
    "estimatesDelivered": 107,
    "closedRevenue": 300000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-176",
    "companyName": "Elite Craftsman Millwork LLC",
    "ownerName": "Roberto Faria",
    "specialty": "Custom Closets & Cabinets",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "06/07/2024",
    "monthsActive": 10,
    "daysActive": 301,
    "estimatesDelivered": 54,
    "closedRevenue": 165000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-177",
    "companyName": "Vanguard Custom Cabinets & Framing",
    "ownerName": "Cleber Toledo",
    "specialty": "General Contractor & Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "16/03/2024",
    "monthsActive": 12,
    "daysActive": 371,
    "estimatesDelivered": 61,
    "closedRevenue": 205000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-178",
    "companyName": "United Timberline Framing",
    "ownerName": "Rogerio Maciel",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "04/01/2025",
    "monthsActive": 5,
    "daysActive": 164,
    "estimatesDelivered": 26,
    "closedRevenue": 90000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-179",
    "companyName": "Universal Timberline Framing",
    "ownerName": "Roberto Faria",
    "specialty": "Wood & Metal Framing",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "19/08/2024",
    "monthsActive": 19,
    "daysActive": 584,
    "estimatesDelivered": 94,
    "closedRevenue": 280000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-180",
    "companyName": "Silva & Sons Custom Cabinets & Framing",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Wood & Metal Framing",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "22/05/2024",
    "monthsActive": 16,
    "daysActive": 494,
    "estimatesDelivered": 95,
    "closedRevenue": 270000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-181",
    "companyName": "Everest Benchmark Carpentry",
    "ownerName": "Gustavo Pinho",
    "specialty": "General Contractor & Framing",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "02/02/2025",
    "monthsActive": 4,
    "daysActive": 133,
    "estimatesDelivered": 25,
    "closedRevenue": 85000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-182",
    "companyName": "Coastal Craftsman Millwork LLC",
    "ownerName": "Flavio Neves",
    "specialty": "Custom Closets & Cabinets",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "03/11/2024",
    "monthsActive": 16,
    "daysActive": 492,
    "estimatesDelivered": 92,
    "closedRevenue": 300000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-183",
    "companyName": "NextGen Custom Cabinets & Framing",
    "ownerName": "Gilberto Ramos",
    "specialty": "General Contractor & Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "01/01/2024",
    "monthsActive": 20,
    "daysActive": 612,
    "estimatesDelivered": 107,
    "closedRevenue": 300000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-184",
    "companyName": "Stonegate Timberline Framing",
    "ownerName": "Marcelo Rezende",
    "specialty": "Wood & Metal Framing",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "24/02/2024",
    "monthsActive": 10,
    "daysActive": 311,
    "estimatesDelivered": 58,
    "closedRevenue": 155000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-185",
    "companyName": "Sovereign Bay State Framing Co.",
    "ownerName": "Felipe Barreto",
    "specialty": "Wood & Metal Framing",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "22/12/2025",
    "monthsActive": 6,
    "daysActive": 199,
    "estimatesDelivered": 37,
    "closedRevenue": 120000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-186",
    "companyName": "Coastal Timberline Framing",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Custom Closets & Cabinets",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "10/04/2024",
    "monthsActive": 20,
    "daysActive": 606,
    "estimatesDelivered": 105,
    "closedRevenue": 345000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-187",
    "companyName": "United Craftsman Millwork LLC",
    "ownerName": "Rafael Camargo",
    "specialty": "General Contractor & Framing",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "09/01/2025",
    "monthsActive": 7,
    "daysActive": 226,
    "estimatesDelivered": 39,
    "closedRevenue": 115000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-188",
    "companyName": "Highline Apex Finish Carpentry",
    "ownerName": "Renato Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "23/07/2024",
    "monthsActive": 14,
    "daysActive": 440,
    "estimatesDelivered": 76,
    "closedRevenue": 250000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-189",
    "companyName": "Universal Ironwood Framing & Decks",
    "ownerName": "Marcelo Rezende",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "02/09/2024",
    "monthsActive": 10,
    "daysActive": 309,
    "estimatesDelivered": 55,
    "closedRevenue": 135000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-190",
    "companyName": "NextGen Timberline Framing",
    "ownerName": "Leandro Rocha",
    "specialty": "General Contractor & Framing",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "12/02/2025",
    "monthsActive": 9,
    "daysActive": 280,
    "estimatesDelivered": 55,
    "closedRevenue": 155000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-191",
    "companyName": "Prime Lone Star Framing",
    "ownerName": "Marcos Silva",
    "specialty": "Wood & Metal Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "28/06/2025",
    "monthsActive": 9,
    "daysActive": 287,
    "estimatesDelivered": 54,
    "closedRevenue": 155000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-192",
    "companyName": "Paramount Custom Framing LLC",
    "ownerName": "Rivaldo Souza",
    "specialty": "Custom Closets & Cabinets",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "15/09/2025",
    "monthsActive": 9,
    "daysActive": 277,
    "estimatesDelivered": 55,
    "closedRevenue": 135000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-193",
    "companyName": "ProCraft Framing Contractors",
    "ownerName": "Bruno Castilho",
    "specialty": "Wood & Metal Framing",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "14/01/2024",
    "monthsActive": 18,
    "daysActive": 550,
    "estimatesDelivered": 104,
    "closedRevenue": 340000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-194",
    "companyName": "Prime Custom Framing LLC",
    "ownerName": "Paulo Henrique",
    "specialty": "Finish Carpentry & Millwork",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "07/06/2024",
    "monthsActive": 21,
    "daysActive": 648,
    "estimatesDelivered": 114,
    "closedRevenue": 310000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-195",
    "companyName": "Craftsman Benchmark Carpentry",
    "ownerName": "Gilberto Ramos",
    "specialty": "Custom Closets & Cabinets",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "21/12/2023",
    "monthsActive": 24,
    "daysActive": 730,
    "estimatesDelivered": 119,
    "closedRevenue": 385000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-196",
    "companyName": "Highline Apex Finish Carpentry",
    "ownerName": "Lucas Ferreira",
    "specialty": "Wood & Metal Framing",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "02/09/2024",
    "monthsActive": 20,
    "daysActive": 615,
    "estimatesDelivered": 121,
    "closedRevenue": 395000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-197",
    "companyName": "Gold Coast Ironwood Framing & Decks",
    "ownerName": "Adriano Ribeiro",
    "specialty": "General Contractor & Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "07/09/2023",
    "monthsActive": 23,
    "daysActive": 697,
    "estimatesDelivered": 113,
    "closedRevenue": 385000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-198",
    "companyName": "Silva & Sons Apex Finish Carpentry",
    "ownerName": "Flavio Neves",
    "specialty": "General Contractor & Framing",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "17/12/2024",
    "monthsActive": 20,
    "daysActive": 617,
    "estimatesDelivered": 118,
    "closedRevenue": 335000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-199",
    "companyName": "Benchmark Framing Contractors",
    "ownerName": "Rivaldo Souza",
    "specialty": "General Contractor & Framing",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "20/09/2025",
    "monthsActive": 6,
    "daysActive": 196,
    "estimatesDelivered": 28,
    "closedRevenue": 75000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-200",
    "companyName": "Modern Touch Apex Finish Carpentry",
    "ownerName": "Eduardo Santos",
    "specialty": "General Contractor & Framing",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "22/02/2024",
    "monthsActive": 15,
    "daysActive": 464,
    "estimatesDelivered": 77,
    "closedRevenue": 230000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-201",
    "companyName": "Horizon Finish Carpentry & Design",
    "ownerName": "Vinicius Souza",
    "specialty": "Wood & Metal Framing",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "16/07/2025",
    "monthsActive": 4,
    "daysActive": 140,
    "estimatesDelivered": 22,
    "closedRevenue": 65000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-202",
    "companyName": "Universal Lone Star Framing",
    "ownerName": "Flavio Neves",
    "specialty": "Wood & Metal Framing",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "22/05/2024",
    "monthsActive": 21,
    "daysActive": 645,
    "estimatesDelivered": 124,
    "closedRevenue": 325000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-203",
    "companyName": "Precision Lone Star Framing",
    "ownerName": "Cristiano Melo",
    "specialty": "General Contractor & Framing",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "10/03/2024",
    "monthsActive": 13,
    "daysActive": 396,
    "estimatesDelivered": 65,
    "closedRevenue": 215000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-204",
    "companyName": "ProCraft Vanguard Framing Pro",
    "ownerName": "Lucas Ferreira",
    "specialty": "General Contractor & Framing",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "14/04/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 39,
    "closedRevenue": 95000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-205",
    "companyName": "Legacy Ironwood Framing & Decks",
    "ownerName": "Alexandre Pires",
    "specialty": "General Contractor & Framing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "18/07/2024",
    "monthsActive": 11,
    "daysActive": 344,
    "estimatesDelivered": 59,
    "closedRevenue": 180000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-206",
    "companyName": "ProCraft Vanguard Framing Pro",
    "ownerName": "Renato Ramos",
    "specialty": "Custom Closets & Cabinets",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "13/12/2024",
    "monthsActive": 12,
    "daysActive": 362,
    "estimatesDelivered": 62,
    "closedRevenue": 200000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-207",
    "companyName": "Alpha Custom Cabinets & Framing",
    "ownerName": "Gabriel Costa",
    "specialty": "General Contractor & Framing",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "09/02/2025",
    "monthsActive": 3,
    "daysActive": 99,
    "estimatesDelivered": 17,
    "closedRevenue": 50000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-208",
    "companyName": "Coastal Framing Contractors",
    "ownerName": "Marcelo Rezende",
    "specialty": "Wood & Metal Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "13/01/2025",
    "monthsActive": 5,
    "daysActive": 161,
    "estimatesDelivered": 32,
    "closedRevenue": 85000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-209",
    "companyName": "Palm Coast Benchmark Carpentry",
    "ownerName": "Renato Ramos",
    "specialty": "General Contractor & Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "10/05/2025",
    "monthsActive": 8,
    "daysActive": 252,
    "estimatesDelivered": 45,
    "closedRevenue": 150000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-210",
    "companyName": "Ironwood Vanguard Framing Pro",
    "ownerName": "Cleber Toledo",
    "specialty": "General Contractor & Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "24/11/2024",
    "monthsActive": 18,
    "daysActive": 542,
    "estimatesDelivered": 103,
    "closedRevenue": 310000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-211",
    "companyName": "Legacy Custom Cabinets & Framing",
    "ownerName": "Vinicius Souza",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "28/06/2025",
    "monthsActive": 3,
    "daysActive": 102,
    "estimatesDelivered": 18,
    "closedRevenue": 55000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-212",
    "companyName": "Diamond Benchmark Carpentry",
    "ownerName": "Carlos Andrade",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "11/05/2025",
    "monthsActive": 9,
    "daysActive": 285,
    "estimatesDelivered": 43,
    "closedRevenue": 115000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-213",
    "companyName": "United Framing Contractors",
    "ownerName": "Rogerio Maciel",
    "specialty": "General Contractor & Framing",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "18/03/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 82,
    "closedRevenue": 205000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-214",
    "companyName": "Coastal Bay State Framing Co.",
    "ownerName": "Murilo Batista",
    "specialty": "General Contractor & Framing",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "21/05/2024",
    "monthsActive": 12,
    "daysActive": 362,
    "estimatesDelivered": 68,
    "closedRevenue": 175000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-215",
    "companyName": "Highline Bay State Framing Co.",
    "ownerName": "Flavio Neves",
    "specialty": "Custom Closets & Cabinets",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "28/12/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 121,
    "closedRevenue": 390000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-216",
    "companyName": "Precision Lone Star Framing",
    "ownerName": "Fernando Dias",
    "specialty": "General Contractor & Framing",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "21/11/2024",
    "monthsActive": 10,
    "daysActive": 311,
    "estimatesDelivered": 61,
    "closedRevenue": 190000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-217",
    "companyName": "Paramount Custom Framing LLC",
    "ownerName": "Rafael Camargo",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "13/08/2024",
    "monthsActive": 11,
    "daysActive": 337,
    "estimatesDelivered": 58,
    "closedRevenue": 145000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-218",
    "companyName": "Pinnacle Benchmark Carpentry",
    "ownerName": "Rivaldo Souza",
    "specialty": "General Contractor & Framing",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "27/12/2024",
    "monthsActive": 18,
    "daysActive": 549,
    "estimatesDelivered": 104,
    "closedRevenue": 350000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-219",
    "companyName": "Bluewater Bay State Framing Co.",
    "ownerName": "Lucas Ferreira",
    "specialty": "Wood & Metal Framing",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "23/08/2024",
    "monthsActive": 14,
    "daysActive": 435,
    "estimatesDelivered": 71,
    "closedRevenue": 170000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-220",
    "companyName": "Highline Custom Framing LLC",
    "ownerName": "Gilberto Ramos",
    "specialty": "General Contractor & Framing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "11/09/2025",
    "monthsActive": 6,
    "daysActive": 187,
    "estimatesDelivered": 33,
    "closedRevenue": 100000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-221",
    "companyName": "Modern Touch Custom Framing LLC",
    "ownerName": "Rafael Camargo",
    "specialty": "Wood & Metal Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "20/04/2023",
    "monthsActive": 24,
    "daysActive": 733,
    "estimatesDelivered": 137,
    "closedRevenue": 330000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-222",
    "companyName": "Bluewater Bay State Framing Co.",
    "ownerName": "Gilberto Ramos",
    "specialty": "General Contractor & Framing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "12/06/2025",
    "monthsActive": 5,
    "daysActive": 168,
    "estimatesDelivered": 29,
    "closedRevenue": 90000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-223",
    "companyName": "ProCraft Timberline Framing",
    "ownerName": "Alexandre Pires",
    "specialty": "Custom Closets & Cabinets",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "28/08/2023",
    "monthsActive": 22,
    "daysActive": 672,
    "estimatesDelivered": 116,
    "closedRevenue": 290000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-224",
    "companyName": "Gold Coast Framing Contractors",
    "ownerName": "Roberto Faria",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "12/12/2024",
    "monthsActive": 13,
    "daysActive": 397,
    "estimatesDelivered": 69,
    "closedRevenue": 175000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-225",
    "companyName": "Universal First Choice Drywall",
    "ownerName": "Sergio Mendes",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "10/07/2025",
    "monthsActive": 1,
    "daysActive": 52,
    "estimatesDelivered": 6,
    "closedRevenue": 15000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-226",
    "companyName": "Modern Touch ProCraft Drywall & Paint",
    "ownerName": "Carlos Andrade",
    "specialty": "Interior & Exterior Painting",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "18/09/2025",
    "monthsActive": 1,
    "daysActive": 41,
    "estimatesDelivered": 9,
    "closedRevenue": 25000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-227",
    "companyName": "Prime Modern Touch Drywallers",
    "ownerName": "Eduardo Santos",
    "specialty": "Interior & Exterior Painting",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "01/07/2025",
    "monthsActive": 2,
    "daysActive": 70,
    "estimatesDelivered": 14,
    "closedRevenue": 30000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-228",
    "companyName": "Ironwood Diamond Painting Pro",
    "ownerName": "Flavio Neves",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "19/07/2025",
    "monthsActive": 2,
    "daysActive": 82,
    "estimatesDelivered": 12,
    "closedRevenue": 40000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Dificuldade com alvar\u00e1 municipal na regi\u00e3o de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-229",
    "companyName": "Summit Drywall & Painting Pro",
    "ownerName": "Rivaldo Souza",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "02/08/2024",
    "monthsActive": 16,
    "daysActive": 483,
    "estimatesDelivered": 90,
    "closedRevenue": 175000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-230",
    "companyName": "Universal Precision Level 5 Paint",
    "ownerName": "Daniel Moreira",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "05/04/2024",
    "monthsActive": 21,
    "daysActive": 641,
    "estimatesDelivered": 104,
    "closedRevenue": 210000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-231",
    "companyName": "Legacy Drywall & Painting Pro",
    "ownerName": "Claudio Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "17/11/2025",
    "monthsActive": 8,
    "daysActive": 249,
    "estimatesDelivered": 42,
    "closedRevenue": 100000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-232",
    "companyName": "ProCraft Level 5 Finishes LLC",
    "ownerName": "Carlos Andrade",
    "specialty": "Interior & Exterior Painting",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "08/11/2025",
    "monthsActive": 7,
    "daysActive": 217,
    "estimatesDelivered": 38,
    "closedRevenue": 60000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-233",
    "companyName": "Paramount Drywall Specialists",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Interior & Exterior Painting",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "24/05/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 30,
    "closedRevenue": 50000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-234",
    "companyName": "Bluewater Drywall Specialists",
    "ownerName": "Luciano Mendes",
    "specialty": "Interior & Exterior Painting",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "18/07/2025",
    "monthsActive": 5,
    "daysActive": 170,
    "estimatesDelivered": 28,
    "closedRevenue": 50000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-235",
    "companyName": "Prime Diamond Painting Pro",
    "ownerName": "Felipe Barreto",
    "specialty": "Interior & Exterior Painting",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "11/11/2024",
    "monthsActive": 13,
    "daysActive": 408,
    "estimatesDelivered": 62,
    "closedRevenue": 150000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-236",
    "companyName": "Highline Apex Painting & Drywall",
    "ownerName": "Matheus Nogueira",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "07/12/2025",
    "monthsActive": 8,
    "daysActive": 254,
    "estimatesDelivered": 45,
    "closedRevenue": 95000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-237",
    "companyName": "Titan Interior & Exterior Paint",
    "ownerName": "Fernando Dias",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "21/03/2024",
    "monthsActive": 14,
    "daysActive": 428,
    "estimatesDelivered": 67,
    "closedRevenue": 140000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-238",
    "companyName": "Titan Interior & Exterior Paint",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Interior & Exterior Painting",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "19/04/2025",
    "monthsActive": 6,
    "daysActive": 186,
    "estimatesDelivered": 31,
    "closedRevenue": 70000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (6 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-239",
    "companyName": "Oakridge Level 5 Finishes LLC",
    "ownerName": "Claudio Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "03/12/2024",
    "monthsActive": 16,
    "daysActive": 495,
    "estimatesDelivered": 93,
    "closedRevenue": 180000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-240",
    "companyName": "Modern Touch First Choice Drywall",
    "ownerName": "Victor Hugo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "19/01/2025",
    "monthsActive": 7,
    "daysActive": 230,
    "estimatesDelivered": 41,
    "closedRevenue": 80000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-241",
    "companyName": "Gold Coast United Finishers LLC",
    "ownerName": "Paulo Henrique",
    "specialty": "Interior & Exterior Painting",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "04/10/2024",
    "monthsActive": 17,
    "daysActive": 512,
    "estimatesDelivered": 99,
    "closedRevenue": 195000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-242",
    "companyName": "Titan Drywall & Painting Pro",
    "ownerName": "Wellington Prado",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "20/12/2023",
    "monthsActive": 23,
    "daysActive": 692,
    "estimatesDelivered": 140,
    "closedRevenue": 270000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-243",
    "companyName": "Alpha Signature Painting Co.",
    "ownerName": "Cristiano Melo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "21/01/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 126,
    "closedRevenue": 210000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-244",
    "companyName": "Silva & Sons Precision Level 5 Paint",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "05/07/2023",
    "monthsActive": 22,
    "daysActive": 662,
    "estimatesDelivered": 121,
    "closedRevenue": 205000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-245",
    "companyName": "Bluewater United Finishers LLC",
    "ownerName": "Felipe Barreto",
    "specialty": "Interior & Exterior Painting",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "07/01/2025",
    "monthsActive": 5,
    "daysActive": 168,
    "estimatesDelivered": 27,
    "closedRevenue": 55000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-246",
    "companyName": "Sterling Level 5 Finishes LLC",
    "ownerName": "Daniel Moreira",
    "specialty": "Interior & Exterior Painting",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "10/02/2024",
    "monthsActive": 15,
    "daysActive": 452,
    "estimatesDelivered": 85,
    "closedRevenue": 195000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-247",
    "companyName": "Bluewater United Finishers LLC",
    "ownerName": "Cristiano Melo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "14/12/2023",
    "monthsActive": 23,
    "daysActive": 710,
    "estimatesDelivered": 136,
    "closedRevenue": 265000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-248",
    "companyName": "Pinnacle Modern Touch Drywallers",
    "ownerName": "Alexandre Pires",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "24/11/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 117,
    "closedRevenue": 225000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-249",
    "companyName": "Alpha Precision Level 5 Paint",
    "ownerName": "Diego Antunes",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "05/12/2024",
    "monthsActive": 14,
    "daysActive": 436,
    "estimatesDelivered": 75,
    "closedRevenue": 140000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-250",
    "companyName": "Prime ProCraft Drywall & Paint",
    "ownerName": "Felipe Barreto",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "15/09/2024",
    "monthsActive": 11,
    "daysActive": 332,
    "estimatesDelivered": 64,
    "closedRevenue": 105000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-251",
    "companyName": "Silva & Sons Level 5 Finishes LLC",
    "ownerName": "Marcos Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "17/01/2025",
    "monthsActive": 6,
    "daysActive": 198,
    "estimatesDelivered": 33,
    "closedRevenue": 75000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-252",
    "companyName": "Bluewater Drywall & Painting Pro",
    "ownerName": "Marcelo Rezende",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "23/12/2025",
    "monthsActive": 7,
    "daysActive": 215,
    "estimatesDelivered": 40,
    "closedRevenue": 85000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-253",
    "companyName": "Sovereign Precision Level 5 Paint",
    "ownerName": "Bruno Castilho",
    "specialty": "Interior & Exterior Painting",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "22/01/2024",
    "monthsActive": 13,
    "daysActive": 392,
    "estimatesDelivered": 78,
    "closedRevenue": 180000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-254",
    "companyName": "Vanguard Apex Painting & Drywall",
    "ownerName": "Wellington Prado",
    "specialty": "Interior & Exterior Painting",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "01/06/2024",
    "monthsActive": 12,
    "daysActive": 370,
    "estimatesDelivered": 67,
    "closedRevenue": 115000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (12 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-255",
    "companyName": "Stonegate Drywall Specialists",
    "ownerName": "Marcos Silva",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "26/04/2024",
    "monthsActive": 21,
    "daysActive": 645,
    "estimatesDelivered": 107,
    "closedRevenue": 190000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-256",
    "companyName": "Alpha Precision Level 5 Paint",
    "ownerName": "Marcelo Rezende",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "07/09/2025",
    "monthsActive": 3,
    "daysActive": 90,
    "estimatesDelivered": 18,
    "closedRevenue": 30000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-257",
    "companyName": "Summit Diamond Painting Pro",
    "ownerName": "Claudio Silva",
    "specialty": "Interior & Exterior Painting",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "24/02/2024",
    "monthsActive": 10,
    "daysActive": 316,
    "estimatesDelivered": 53,
    "closedRevenue": 120000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-258",
    "companyName": "Bluewater Drywall & Painting Pro",
    "ownerName": "Fernando Dias",
    "specialty": "Interior & Exterior Painting",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "09/06/2025",
    "monthsActive": 4,
    "daysActive": 133,
    "estimatesDelivered": 23,
    "closedRevenue": 35000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-259",
    "companyName": "Summit United Finishers LLC",
    "ownerName": "Renato Ramos",
    "specialty": "Interior & Exterior Painting",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "25/10/2024",
    "monthsActive": 10,
    "daysActive": 302,
    "estimatesDelivered": 58,
    "closedRevenue": 110000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-260",
    "companyName": "Horizon Interior & Exterior Paint",
    "ownerName": "Thiago Oliveira",
    "specialty": "Interior & Exterior Painting",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "10/08/2025",
    "monthsActive": 6,
    "daysActive": 197,
    "estimatesDelivered": 35,
    "closedRevenue": 60000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-261",
    "companyName": "Titan Level 5 Finishes LLC",
    "ownerName": "Otavio Mello",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "13/09/2024",
    "monthsActive": 13,
    "daysActive": 394,
    "estimatesDelivered": 74,
    "closedRevenue": 140000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-262",
    "companyName": "ProCraft Precision Level 5 Paint",
    "ownerName": "Marcos Silva",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "04/03/2024",
    "monthsActive": 17,
    "daysActive": 527,
    "estimatesDelivered": 86,
    "closedRevenue": 185000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-263",
    "companyName": "Palm Coast Diamond Painting Pro",
    "ownerName": "Leandro Rocha",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "03/01/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 73,
    "closedRevenue": 125000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-264",
    "companyName": "Vanguard ProCraft Drywall & Paint",
    "ownerName": "Fernando Dias",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "19/07/2024",
    "monthsActive": 13,
    "daysActive": 391,
    "estimatesDelivered": 66,
    "closedRevenue": 140000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-265",
    "companyName": "Ironwood Diamond Painting Pro",
    "ownerName": "Juliano Rossi",
    "specialty": "Interior & Exterior Painting",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "05/01/2025",
    "monthsActive": 9,
    "daysActive": 275,
    "estimatesDelivered": 49,
    "closedRevenue": 85000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-266",
    "companyName": "Stonegate Level 5 Finishes LLC",
    "ownerName": "Leandro Rocha",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "13/03/2024",
    "monthsActive": 20,
    "daysActive": 615,
    "estimatesDelivered": 103,
    "closedRevenue": 190000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-267",
    "companyName": "Ironwood First Choice Drywall",
    "ownerName": "Paulo Henrique",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "19/09/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 77,
    "closedRevenue": 135000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-268",
    "companyName": "Vanguard Custom Homes & Remodel",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home Remodeling",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "17/08/2025",
    "monthsActive": 1,
    "daysActive": 43,
    "estimatesDelivered": 6,
    "closedRevenue": 15000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-269",
    "companyName": "Atlas Home Additions Group",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Home Additions",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "12/07/2025",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 7,
    "closedRevenue": 15000,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Incompatibilidade operacional para contrata\u00e7\u00e3o de equipes pr\u00f3prias."
  },
  {
    "id": "ACC-270",
    "companyName": "Everest Custom Homes & Remodel",
    "ownerName": "Carlos Andrade",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "19/07/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 12,
    "closedRevenue": 35000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-271",
    "companyName": "Horizon Home Additions Group",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home & Luxury Additions",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "01/09/2025",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 8,
    "closedRevenue": 20000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-272",
    "companyName": "Pinnacle NextGen Home Builders",
    "ownerName": "Renato Ramos",
    "specialty": "Hardie Board & Siding",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "05/09/2025",
    "monthsActive": 1,
    "daysActive": 45,
    "estimatesDelivered": 9,
    "closedRevenue": 25000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente. Per\u00edodo inicial de implementa\u00e7\u00e3o e estrutura\u00e7\u00e3o de campanhas."
  },
  {
    "id": "ACC-273",
    "companyName": "Legacy Whole Home Builders",
    "ownerName": "Matheus Nogueira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/08/2025",
    "monthsActive": 2,
    "daysActive": 77,
    "estimatesDelivered": 12,
    "closedRevenue": 35000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato encerrado. Motivo: Problemas pessoais de sa\u00fade na fam\u00edlia do fundador logo no in\u00edcio."
  },
  {
    "id": "ACC-274",
    "companyName": "Gold Coast Paramount Builders LLC",
    "ownerName": "Otavio Mello",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "19/03/2025",
    "monthsActive": 8,
    "daysActive": 259,
    "estimatesDelivered": 38,
    "closedRevenue": 175000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-275",
    "companyName": "Palm Coast Paramount Builders LLC",
    "ownerName": "Juliano Rossi",
    "specialty": "Hardie Board & Siding",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "20/06/2025",
    "monthsActive": 3,
    "daysActive": 108,
    "estimatesDelivered": 18,
    "closedRevenue": 70000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-276",
    "companyName": "Craftsman Custom Homes & Remodel",
    "ownerName": "Gabriel Costa",
    "specialty": "Luxury Home Additions",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "06/11/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 42,
    "closedRevenue": 190000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-277",
    "companyName": "ProCraft Oakridge Home Restorations",
    "ownerName": "Marcos Silva",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "26/02/2025",
    "monthsActive": 9,
    "daysActive": 277,
    "estimatesDelivered": 52,
    "closedRevenue": 210000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-278",
    "companyName": "Alpha Renovations & Additions",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "04/08/2024",
    "monthsActive": 16,
    "daysActive": 492,
    "estimatesDelivered": 87,
    "closedRevenue": 360000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-279",
    "companyName": "Craftsman Gold Coast Remodeling",
    "ownerName": "Victor Hugo",
    "specialty": "Whole Home Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "04/02/2025",
    "monthsActive": 4,
    "daysActive": 129,
    "estimatesDelivered": 23,
    "closedRevenue": 90000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-280",
    "companyName": "SunState Whole Home Builders",
    "ownerName": "Luciano Mendes",
    "specialty": "Whole Home Remodeling",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "06/10/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 118,
    "closedRevenue": 490000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-281",
    "companyName": "Elite Silva & Sons Construction",
    "ownerName": "Fernando Dias",
    "specialty": "Basement Finishing & Remodel",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "08/02/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 47,
    "closedRevenue": 175000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-282",
    "companyName": "Prime Gold Coast Remodeling",
    "ownerName": "Gustavo Pinho",
    "specialty": "Whole Home Remodeling",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "22/11/2025",
    "monthsActive": 3,
    "daysActive": 103,
    "estimatesDelivered": 15,
    "closedRevenue": 65000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-283",
    "companyName": "Empire Home Additions Group",
    "ownerName": "Carlos Andrade",
    "specialty": "Whole Home Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "26/07/2024",
    "monthsActive": 12,
    "daysActive": 362,
    "estimatesDelivered": 73,
    "closedRevenue": 295000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-284",
    "companyName": "Palm Coast Cornerstone Remodeling",
    "ownerName": "Murilo Batista",
    "specialty": "Luxury Home Additions",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "09/08/2024",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 81,
    "closedRevenue": 375000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-285",
    "companyName": "Heritage Home Additions Group",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home Remodeling",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "18/07/2023",
    "monthsActive": 24,
    "daysActive": 723,
    "estimatesDelivered": 130,
    "closedRevenue": 520000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-286",
    "companyName": "Benchmark Gold Coast Remodeling",
    "ownerName": "Eduardo Santos",
    "specialty": "Hardie Board & Siding",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "03/07/2024",
    "monthsActive": 16,
    "daysActive": 495,
    "estimatesDelivered": 89,
    "closedRevenue": 365000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (16 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-287",
    "companyName": "Benchmark Highline Custom Remodel",
    "ownerName": "Luciano Mendes",
    "specialty": "Basement Finishing & Remodel",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "07/03/2024",
    "monthsActive": 17,
    "daysActive": 515,
    "estimatesDelivered": 90,
    "closedRevenue": 350000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-288",
    "companyName": "Coastal Whole Home Builders",
    "ownerName": "Rogerio Maciel",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "13/09/2025",
    "monthsActive": 7,
    "daysActive": 218,
    "estimatesDelivered": 38,
    "closedRevenue": 160000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-289",
    "companyName": "Stonegate Paramount Builders LLC",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home Remodeling",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "05/03/2025",
    "monthsActive": 3,
    "daysActive": 108,
    "estimatesDelivered": 15,
    "closedRevenue": 60000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-290",
    "companyName": "Palm Coast Masterpiece Additions",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "13/11/2025",
    "monthsActive": 6,
    "daysActive": 189,
    "estimatesDelivered": 32,
    "closedRevenue": 130000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-291",
    "companyName": "Vanguard Highline Custom Remodel",
    "ownerName": "Felipe Barreto",
    "specialty": "Luxury Home Additions",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "11/12/2025",
    "monthsActive": 7,
    "daysActive": 229,
    "estimatesDelivered": 35,
    "closedRevenue": 165000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-292",
    "companyName": "Silva & Sons NextGen Home Builders",
    "ownerName": "Bruno Castilho",
    "specialty": "Basement Finishing & Remodel",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "23/11/2024",
    "monthsActive": 12,
    "daysActive": 369,
    "estimatesDelivered": 66,
    "closedRevenue": 245000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-293",
    "companyName": "United Highline Custom Remodel",
    "ownerName": "Carlos Andrade",
    "specialty": "Luxury Home Additions",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "07/07/2024",
    "monthsActive": 16,
    "daysActive": 499,
    "estimatesDelivered": 87,
    "closedRevenue": 340000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-294",
    "companyName": "Coastal Paramount Builders LLC",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "05/09/2025",
    "monthsActive": 8,
    "daysActive": 242,
    "estimatesDelivered": 43,
    "closedRevenue": 185000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-295",
    "companyName": "Vanguard Masterpiece Additions",
    "ownerName": "Gilberto Ramos",
    "specialty": "Whole Home Remodeling",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "07/05/2024",
    "monthsActive": 10,
    "daysActive": 314,
    "estimatesDelivered": 55,
    "closedRevenue": 210000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (10 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-296",
    "companyName": "Bluewater Masterpiece Additions",
    "ownerName": "Rivaldo Souza",
    "specialty": "Luxury Home Additions",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "16/10/2024",
    "monthsActive": 18,
    "daysActive": 559,
    "estimatesDelivered": 96,
    "closedRevenue": 425000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-297",
    "companyName": "Prime Silva & Sons Construction",
    "ownerName": "Daniel Moreira",
    "specialty": "Basement Finishing & Remodel",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "08/11/2024",
    "monthsActive": 15,
    "daysActive": 451,
    "estimatesDelivered": 73,
    "closedRevenue": 340000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-298",
    "companyName": "Benchmark Masterpiece Additions",
    "ownerName": "Otavio Mello",
    "specialty": "Luxury Home Additions",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "09/10/2025",
    "monthsActive": 3,
    "daysActive": 94,
    "estimatesDelivered": 19,
    "closedRevenue": 70000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-299",
    "companyName": "Silva & Sons Gold Coast Remodeling",
    "ownerName": "Juliano Rossi",
    "specialty": "Whole Home Remodeling",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "22/09/2024",
    "monthsActive": 14,
    "daysActive": 428,
    "estimatesDelivered": 78,
    "closedRevenue": 355000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-300",
    "companyName": "Oakridge Whole Home Builders",
    "ownerName": "Vinicius Souza",
    "specialty": "Luxury Home Additions",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "04/08/2023",
    "monthsActive": 24,
    "daysActive": 731,
    "estimatesDelivered": 136,
    "closedRevenue": 560000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-301",
    "companyName": "Titan Silva & Sons Construction",
    "ownerName": "Felipe Barreto",
    "specialty": "Luxury Home Additions",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "25/04/2023",
    "monthsActive": 23,
    "daysActive": 699,
    "estimatesDelivered": 119,
    "closedRevenue": 460000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-302",
    "companyName": "Ironwood Renovations & Additions",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "24/01/2024",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 91,
    "closedRevenue": 330000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-303",
    "companyName": "Coastal Whole Home Builders",
    "ownerName": "Matheus Nogueira",
    "specialty": "Hardie Board & Siding",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "10/02/2024",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 75,
    "closedRevenue": 325000,
    "monthlyPlan": 2400,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-304",
    "companyName": "Diamond Cornerstone Remodeling",
    "ownerName": "Vinicius Souza",
    "specialty": "Hardie Board & Siding",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "28/05/2024",
    "monthsActive": 13,
    "daysActive": 397,
    "estimatesDelivered": 68,
    "closedRevenue": 250000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Propriet\u00e1rio vendeu a construtora e encerrou as atividades."
  },
  {
    "id": "ACC-305",
    "companyName": "SunState Oakridge Home Restorations",
    "ownerName": "Paulo Henrique",
    "specialty": "Basement Finishing & Remodel",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "07/09/2025",
    "monthsActive": 6,
    "daysActive": 195,
    "estimatesDelivered": 34,
    "closedRevenue": 135000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-306",
    "companyName": "Universal Highline Custom Remodel",
    "ownerName": "Alexandre Pires",
    "specialty": "Basement Finishing & Remodel",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "15/03/2025",
    "monthsActive": 7,
    "daysActive": 216,
    "estimatesDelivered": 41,
    "closedRevenue": 155000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-307",
    "companyName": "Universal Gold Coast Remodeling",
    "ownerName": "Victor Hugo",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "09/04/2025",
    "monthsActive": 8,
    "daysActive": 260,
    "estimatesDelivered": 50,
    "closedRevenue": 235000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-308",
    "companyName": "Elite Silva & Sons Construction",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "14/08/2025",
    "monthsActive": 5,
    "daysActive": 169,
    "estimatesDelivered": 30,
    "closedRevenue": 120000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (5 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-309",
    "companyName": "Coastal Paramount Builders LLC",
    "ownerName": "Rivaldo Souza",
    "specialty": "Whole Home Remodeling",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "24/04/2024",
    "monthsActive": 13,
    "daysActive": 396,
    "estimatesDelivered": 72,
    "closedRevenue": 340000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (13 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-310",
    "companyName": "Elite Cornerstone Remodeling",
    "ownerName": "Andre Guimaraes",
    "specialty": "Luxury Home Additions",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "10/08/2024",
    "monthsActive": 12,
    "daysActive": 365,
    "estimatesDelivered": 61,
    "closedRevenue": 210000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-311",
    "companyName": "NextGen Silva & Sons Construction",
    "ownerName": "Bruno Castilho",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "26/07/2025",
    "monthsActive": 7,
    "daysActive": 225,
    "estimatesDelivered": 37,
    "closedRevenue": 165000,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (7 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-312",
    "companyName": "Oakridge Whole Home Builders",
    "ownerName": "Flavio Neves",
    "specialty": "Hardie Board & Siding",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "21/05/2024",
    "monthsActive": 19,
    "daysActive": 573,
    "estimatesDelivered": 98,
    "closedRevenue": 370000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (19 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-313",
    "companyName": "Stonegate Home Additions Group",
    "ownerName": "Rogerio Maciel",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "15/07/2023",
    "monthsActive": 23,
    "daysActive": 690,
    "estimatesDelivered": 132,
    "closedRevenue": 625000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-314",
    "companyName": "Pinnacle Highline Custom Remodel",
    "ownerName": "Matheus Nogueira",
    "specialty": "Whole Home Remodeling",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "20/10/2025",
    "monthsActive": 3,
    "daysActive": 103,
    "estimatesDelivered": 17,
    "closedRevenue": 70000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-315",
    "companyName": "Craftsman NextGen Home Builders",
    "ownerName": "Rivaldo Souza",
    "specialty": "Luxury Home Additions",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "09/09/2025",
    "monthsActive": 6,
    "daysActive": 195,
    "estimatesDelivered": 33,
    "closedRevenue": 160000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-316",
    "companyName": "Modern Touch Renovations & Additions",
    "ownerName": "Gabriel Costa",
    "specialty": "Hardie Board & Siding",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "01/01/2024",
    "monthsActive": 18,
    "daysActive": 546,
    "estimatesDelivered": 86,
    "closedRevenue": 395000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-317",
    "companyName": "Paramount Home Additions Group",
    "ownerName": "Gilberto Ramos",
    "specialty": "Basement Finishing & Remodel",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "09/11/2025",
    "monthsActive": 5,
    "daysActive": 166,
    "estimatesDelivered": 26,
    "closedRevenue": 120000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-318",
    "companyName": "NextGen Oakridge Home Restorations",
    "ownerName": "Thiago Oliveira",
    "specialty": "Whole Home Remodeling",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "22/06/2025",
    "monthsActive": 8,
    "daysActive": 241,
    "estimatesDelivered": 48,
    "closedRevenue": 195000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-319",
    "companyName": "Apex Whole Home Builders",
    "ownerName": "Vinicius Souza",
    "specialty": "Basement Finishing & Remodel",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "24/02/2025",
    "monthsActive": 8,
    "daysActive": 251,
    "estimatesDelivered": 39,
    "closedRevenue": 180000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (8 meses de vig\u00eancia). Motivo: Mudan\u00e7a da fam\u00edlia para outro estado nos EUA."
  },
  {
    "id": "ACC-320",
    "companyName": "Bluewater Oakridge Home Restorations",
    "ownerName": "Felipe Barreto",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/12/2024",
    "monthsActive": 11,
    "daysActive": 345,
    "estimatesDelivered": 63,
    "closedRevenue": 225000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (11 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-321",
    "companyName": "Coastal Renovations & Additions",
    "ownerName": "Matheus Nogueira",
    "specialty": "Whole Home Remodeling",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "01/11/2024",
    "monthsActive": 17,
    "daysActive": 529,
    "estimatesDelivered": 87,
    "closedRevenue": 325000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-322",
    "companyName": "ProCraft Whole Home Builders",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "28/11/2025",
    "monthsActive": 5,
    "daysActive": 158,
    "estimatesDelivered": 27,
    "closedRevenue": 115000,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-323",
    "companyName": "Titan Masterpiece Additions",
    "ownerName": "Paulo Henrique",
    "specialty": "Hardie Board & Siding",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "12/11/2023",
    "monthsActive": 22,
    "daysActive": 663,
    "estimatesDelivered": 119,
    "closedRevenue": 525000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-324",
    "companyName": "Coastal Paramount Builders LLC",
    "ownerName": "Carlos Andrade",
    "specialty": "Luxury Home Additions",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "06/02/2025",
    "monthsActive": 8,
    "daysActive": 256,
    "estimatesDelivered": 39,
    "closedRevenue": 145000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-325",
    "companyName": "Sovereign Home Additions Group",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Whole Home Remodeling",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "08/02/2024",
    "monthsActive": 10,
    "daysActive": 317,
    "estimatesDelivered": 55,
    "closedRevenue": 225000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-326",
    "companyName": "Modern Touch Whole Home Builders",
    "ownerName": "Rogerio Maciel",
    "specialty": "Whole Home Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "14/01/2025",
    "monthsActive": 6,
    "daysActive": 195,
    "estimatesDelivered": 35,
    "closedRevenue": 140000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-327",
    "companyName": "NextGen Custom Homes & Remodel",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardie Board & Siding",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "08/08/2025",
    "monthsActive": 9,
    "daysActive": 280,
    "estimatesDelivered": 51,
    "closedRevenue": 190000,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato encerrado (9 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-328",
    "companyName": "Titan Silva & Sons Construction",
    "ownerName": "Wellington Prado",
    "specialty": "Luxury Home Additions",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "11/06/2024",
    "monthsActive": 14,
    "daysActive": 423,
    "estimatesDelivered": 81,
    "closedRevenue": 305000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (14 meses de vig\u00eancia). Motivo: Transi\u00e7\u00e3o para contratos comerciais governamentais exclusivos."
  },
  {
    "id": "ACC-329",
    "companyName": "Alpha Cornerstone Remodeling",
    "ownerName": "Leandro Rocha",
    "specialty": "Basement Finishing & Remodel",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "09/10/2025",
    "monthsActive": 8,
    "daysActive": 255,
    "estimatesDelivered": 46,
    "closedRevenue": 165000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-330",
    "companyName": "Legacy NextGen Home Builders",
    "ownerName": "Thiago Oliveira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "21/11/2025",
    "monthsActive": 9,
    "daysActive": 280,
    "estimatesDelivered": 47,
    "closedRevenue": 215000,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-331",
    "companyName": "ProCraft Oakridge Home Restorations",
    "ownerName": "Rafael Camargo",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "25/03/2025",
    "monthsActive": 3,
    "daysActive": 91,
    "estimatesDelivered": 16,
    "closedRevenue": 75000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato encerrado (3 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-332",
    "companyName": "Empire Oakridge Home Restorations",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Home Additions",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "13/07/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 128,
    "closedRevenue": 440000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-333",
    "companyName": "Elite Custom Homes & Remodel",
    "ownerName": "Sergio Mendes",
    "specialty": "Hardie Board & Siding",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "27/12/2025",
    "monthsActive": 7,
    "daysActive": 214,
    "estimatesDelivered": 39,
    "closedRevenue": 150000,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-334",
    "companyName": "Benchmark NextGen Home Builders",
    "ownerName": "Flavio Neves",
    "specialty": "Luxury Home Additions",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "21/03/2023",
    "monthsActive": 22,
    "daysActive": 669,
    "estimatesDelivered": 118,
    "closedRevenue": 445000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-335",
    "companyName": "Elite Gold Coast Remodeling",
    "ownerName": "Marcos Silva",
    "specialty": "Whole Home Remodeling",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "28/07/2024",
    "monthsActive": 18,
    "daysActive": 558,
    "estimatesDelivered": 93,
    "closedRevenue": 430000,
    "monthlyPlan": 2800,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (18 meses de vig\u00eancia). Motivo: Encerramento amig\u00e1vel ap\u00f3s supera\u00e7\u00e3o das metas anuais."
  },
  {
    "id": "ACC-336",
    "companyName": "Paramount Gold Coast Remodeling",
    "ownerName": "Murilo Batista",
    "specialty": "Whole Home Remodeling",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "26/03/2023",
    "monthsActive": 24,
    "daysActive": 721,
    "estimatesDelivered": 120,
    "closedRevenue": 480000,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-337",
    "companyName": "Craftsman Oakridge Home Restorations",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardie Board & Siding",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "20/11/2024",
    "monthsActive": 20,
    "daysActive": 601,
    "estimatesDelivered": 109,
    "closedRevenue": 420000,
    "monthlyPlan": 2400,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-338",
    "companyName": "Horizon Highline Custom Remodel",
    "ownerName": "Rogerio Maciel",
    "specialty": "Luxury Home Additions",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "26/11/2024",
    "monthsActive": 12,
    "daysActive": 361,
    "estimatesDelivered": 69,
    "closedRevenue": 325000,
    "monthlyPlan": 3000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia est\u00e1vel de fechamento."
  },
  {
    "id": "ACC-339",
    "companyName": "Oakridge Gold Coast Remodeling",
    "ownerName": "Leandro Rocha",
    "specialty": "Whole Home & Luxury Additions",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "20/04/2024",
    "monthsActive": 17,
    "daysActive": 530,
    "estimatesDelivered": 100,
    "closedRevenue": 350000,
    "monthlyPlan": 3000,
    "status": "churned",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato encerrado (17 meses de vig\u00eancia). Motivo: Atingiu teto m\u00e1ximo de capacidade das equipes de obras; pausou marketing."
  },
  {
    "id": "ACC-340",
    "companyName": "Horizon NextGen Home Builders",
    "ownerName": "Murilo Batista",
    "specialty": "Hardie Board & Siding",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "14/05/2025",
    "monthsActive": 8,
    "daysActive": 245,
    "estimatesDelivered": 40,
    "closedRevenue": 140000,
    "monthlyPlan": 2000,
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
