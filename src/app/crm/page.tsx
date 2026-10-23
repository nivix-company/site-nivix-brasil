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
    "companyName": "Highline Carpentry & Design",
    "ownerName": "Claudio Silva",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/08/2025",
    "monthsActive": 1,
    "daysActive": 35,
    "estimatesDelivered": 20,
    "closedRevenue": 140120,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (35 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-006",
    "companyName": "Boston Pro Framing Contractors",
    "ownerName": "Cleber Toledo",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "08/08/2025",
    "monthsActive": 2,
    "daysActive": 66,
    "estimatesDelivered": 12,
    "closedRevenue": 69204,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (66 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-007",
    "companyName": "Palmetto Outdoor Living",
    "ownerName": "Marcos Silva",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "26/09/2025",
    "monthsActive": 2,
    "daysActive": 72,
    "estimatesDelivered": 26,
    "closedRevenue": 255502,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (72 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-008",
    "companyName": "Empire Roofing Solutions",
    "ownerName": "Claudio Silva",
    "specialty": "Whole Home Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "25/08/2025",
    "monthsActive": 2,
    "daysActive": 75,
    "estimatesDelivered": 20,
    "closedRevenue": 125460,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (75 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-009",
    "companyName": "Empire Framing Contractors",
    "ownerName": "Paulo Henrique",
    "specialty": "Luxury Home Additions",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "18/09/2025",
    "monthsActive": 2,
    "daysActive": 84,
    "estimatesDelivered": 20,
    "closedRevenue": 107100,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (84 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-010",
    "companyName": "All-Star Renovations Co.",
    "ownerName": "Bruno Castilho",
    "specialty": "Roofing & Storm Restoration",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "02/08/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 18,
    "closedRevenue": 193878,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (83 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-011",
    "companyName": "SunState Painting & Drywall",
    "ownerName": "Rivaldo Souza",
    "specialty": "Pool Decks & Travertine",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "06/09/2025",
    "monthsActive": 1,
    "daysActive": 47,
    "estimatesDelivered": 20,
    "closedRevenue": 174280,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (47 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-012",
    "companyName": "Atlas Painting & Drywall",
    "ownerName": "Paulo Henrique",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "06/08/2025",
    "monthsActive": 1,
    "daysActive": 54,
    "estimatesDelivered": 17,
    "closedRevenue": 159375,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (54 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-013",
    "companyName": "SunState Interior Concepts",
    "ownerName": "Lucas Ferreira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "13/09/2025",
    "monthsActive": 2,
    "daysActive": 66,
    "estimatesDelivered": 19,
    "closedRevenue": 99978,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (66 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-014",
    "companyName": "United Framing Contractors",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Pool Decks & Travertine",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "05/09/2025",
    "monthsActive": 2,
    "daysActive": 77,
    "estimatesDelivered": 26,
    "closedRevenue": 160420,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (77 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-015",
    "companyName": "Empire Outdoor Living",
    "ownerName": "Carlos Andrade",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "05/08/2025",
    "monthsActive": 2,
    "daysActive": 83,
    "estimatesDelivered": 24,
    "closedRevenue": 191160,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (83 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-016",
    "companyName": "Metro Interior Concepts",
    "ownerName": "Paulo Henrique",
    "specialty": "Timber Framing & Decks",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "20/09/2025",
    "monthsActive": 1,
    "daysActive": 55,
    "estimatesDelivered": 17,
    "closedRevenue": 179758,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (55 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-017",
    "companyName": "Palmetto Renovations Co.",
    "ownerName": "Flavio Neves",
    "specialty": "Basement Finishing & Remodel",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "22/08/2025",
    "monthsActive": 2,
    "daysActive": 82,
    "estimatesDelivered": 12,
    "closedRevenue": 126864,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (82 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-018",
    "companyName": "Elite Framing Contractors",
    "ownerName": "Fabricio Arruda",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "24/08/2025",
    "monthsActive": 2,
    "daysActive": 78,
    "estimatesDelivered": 17,
    "closedRevenue": 148172,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (78 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-019",
    "companyName": "Miami Framing Contractors",
    "ownerName": "Breno Alcantara",
    "specialty": "Commercial & Metal Roofs",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "05/08/2025",
    "monthsActive": 1,
    "daysActive": 55,
    "estimatesDelivered": 21,
    "closedRevenue": 214914,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (55 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-020",
    "companyName": "Green Mountain Remodeling Group",
    "ownerName": "Otavio Mello",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "27/09/2025",
    "monthsActive": 2,
    "daysActive": 80,
    "estimatesDelivered": 12,
    "closedRevenue": 70992,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Onboarding recente (80 dias). Fase de ramp-up de campanhas e qualifica\u00e7\u00e3o de or\u00e7amentos."
  },
  {
    "id": "ACC-021",
    "companyName": "Signature Framing Contractors",
    "ownerName": "Caio Fagundes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "18/03/2025",
    "monthsActive": 5,
    "daysActive": 152,
    "estimatesDelivered": 76,
    "closedRevenue": 815480,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-022",
    "companyName": "Palm Coast Renovations Co.",
    "ownerName": "Leandro Rocha",
    "specialty": "Custom Closets & Cabinets",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "25/12/2024",
    "monthsActive": 19,
    "daysActive": 589,
    "estimatesDelivered": 255,
    "closedRevenue": 2273835,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-023",
    "companyName": "Summit Remodeling Group",
    "ownerName": "Lucas Ferreira",
    "specialty": "Luxury Bathroom Renovations",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "04/04/2023",
    "monthsActive": 23,
    "daysActive": 701,
    "estimatesDelivered": 335,
    "closedRevenue": 2746330,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-024",
    "companyName": "Titan Restorations",
    "ownerName": "Lucas Ferreira",
    "specialty": "Basement Finishing & Remodel",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "21/01/2024",
    "monthsActive": 21,
    "daysActive": 637,
    "estimatesDelivered": 153,
    "closedRevenue": 1575594,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-025",
    "companyName": "First Choice Interior Concepts",
    "ownerName": "Fabricio Arruda",
    "specialty": "Hardie Board & Siding",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "07/09/2024",
    "monthsActive": 19,
    "daysActive": 577,
    "estimatesDelivered": 224,
    "closedRevenue": 1898624,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-026",
    "companyName": "Heritage Hardscapes & Pavers",
    "ownerName": "Luciano Mendes",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "22/07/2024",
    "monthsActive": 18,
    "daysActive": 553,
    "estimatesDelivered": 186,
    "closedRevenue": 984684,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-027",
    "companyName": "Green Mountain Custom Homes",
    "ownerName": "Claudio Silva",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "24/06/2023",
    "monthsActive": 23,
    "daysActive": 710,
    "estimatesDelivered": 189,
    "closedRevenue": 1473822,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-028",
    "companyName": "Legacy Outdoor Living",
    "ownerName": "Lucas Ferreira",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "15/04/2024",
    "monthsActive": 17,
    "daysActive": 514,
    "estimatesDelivered": 228,
    "closedRevenue": 1546068,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-029",
    "companyName": "Patriot Hardscapes & Pavers",
    "ownerName": "Marcelo Rezende",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "28/04/2025",
    "monthsActive": 4,
    "daysActive": 140,
    "estimatesDelivered": 34,
    "closedRevenue": 362882,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-030",
    "companyName": "Bluewater Carpentry & Design",
    "ownerName": "Luciano Mendes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "09/08/2025",
    "monthsActive": 4,
    "daysActive": 125,
    "estimatesDelivered": 57,
    "closedRevenue": 438786,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-031",
    "companyName": "Gold Coast Carpentry & Design",
    "ownerName": "Flavio Neves",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "02/10/2024",
    "monthsActive": 18,
    "daysActive": 544,
    "estimatesDelivered": 189,
    "closedRevenue": 1187487,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-032",
    "companyName": "Empire Restorations",
    "ownerName": "Roberto Faria",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "17/03/2025",
    "monthsActive": 4,
    "daysActive": 138,
    "estimatesDelivered": 69,
    "closedRevenue": 792465,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 17 estimates/m\u00eas."
  },
  {
    "id": "ACC-033",
    "companyName": "Titan Interior Concepts",
    "ownerName": "Cleber Toledo",
    "specialty": "Roofing & Storm Restoration",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "19/04/2023",
    "monthsActive": 22,
    "daysActive": 662,
    "estimatesDelivered": 231,
    "closedRevenue": 1266342,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-034",
    "companyName": "Elite Roofing Solutions",
    "ownerName": "Cristiano Melo",
    "specialty": "Wood & Metal Framing",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "22/12/2023",
    "monthsActive": 24,
    "daysActive": 738,
    "estimatesDelivered": 297,
    "closedRevenue": 1833381,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-035",
    "companyName": "First Choice Builders LLC",
    "ownerName": "Juliano Rossi",
    "specialty": "Roofing & Storm Restoration",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "03/01/2023",
    "monthsActive": 23,
    "daysActive": 699,
    "estimatesDelivered": 332,
    "closedRevenue": 3538788,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-036",
    "companyName": "Miami Hardscapes & Pavers",
    "ownerName": "Wellington Prado",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "03/04/2025",
    "monthsActive": 9,
    "daysActive": 286,
    "estimatesDelivered": 106,
    "closedRevenue": 780054,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-037",
    "companyName": "Silva & Sons Construction Pro",
    "ownerName": "Caio Fagundes",
    "specialty": "Pool Decks & Travertine",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "18/05/2024",
    "monthsActive": 12,
    "daysActive": 379,
    "estimatesDelivered": 99,
    "closedRevenue": 1108107,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-038",
    "companyName": "SunState Painting & Drywall",
    "ownerName": "Vinicius Souza",
    "specialty": "Pool Decks & Travertine",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "20/04/2025",
    "monthsActive": 6,
    "daysActive": 197,
    "estimatesDelivered": 63,
    "closedRevenue": 428904,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-039",
    "companyName": "Summit Outdoor Living",
    "ownerName": "Marcos Silva",
    "specialty": "Wood & Metal Framing",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "14/05/2024",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 132,
    "closedRevenue": 1279872,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-040",
    "companyName": "Vanguard Carpentry & Design",
    "ownerName": "Thiago Oliveira",
    "specialty": "Wood & Metal Framing",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "14/09/2024",
    "monthsActive": 11,
    "daysActive": 335,
    "estimatesDelivered": 167,
    "closedRevenue": 1716760,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-041",
    "companyName": "Coastal Custom Homes",
    "ownerName": "Eduardo Santos",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "02/05/2025",
    "monthsActive": 4,
    "daysActive": 131,
    "estimatesDelivered": 47,
    "closedRevenue": 260568,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-042",
    "companyName": "Diamond Roofing Solutions",
    "ownerName": "Victor Hugo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "05/04/2025",
    "monthsActive": 6,
    "daysActive": 191,
    "estimatesDelivered": 92,
    "closedRevenue": 978788,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-043",
    "companyName": "Titan Restorations",
    "ownerName": "Paulo Henrique",
    "specialty": "Hardie Board & Siding",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "26/12/2024",
    "monthsActive": 13,
    "daysActive": 403,
    "estimatesDelivered": 139,
    "closedRevenue": 806756,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-044",
    "companyName": "Oakridge Custom Homes",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Custom Closets & Cabinets",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "26/04/2025",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 117,
    "closedRevenue": 1312857,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-045",
    "companyName": "Summit Remodeling Group",
    "ownerName": "Flavio Neves",
    "specialty": "Whole Home Remodeling",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "17/07/2024",
    "monthsActive": 11,
    "daysActive": 332,
    "estimatesDelivered": 131,
    "closedRevenue": 1277905,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-046",
    "companyName": "Precision Roofing Solutions",
    "ownerName": "Fabricio Arruda",
    "specialty": "Commercial & Metal Roofs",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "20/07/2025",
    "monthsActive": 8,
    "daysActive": 258,
    "estimatesDelivered": 93,
    "closedRevenue": 501084,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-047",
    "companyName": "Sterling Painting & Drywall",
    "ownerName": "Andre Guimaraes",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "23/07/2024",
    "monthsActive": 15,
    "daysActive": 468,
    "estimatesDelivered": 159,
    "closedRevenue": 773217,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-048",
    "companyName": "Craftsman Renovations Co.",
    "ownerName": "Otavio Mello",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "22/02/2024",
    "monthsActive": 16,
    "daysActive": 482,
    "estimatesDelivered": 206,
    "closedRevenue": 1456626,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-049",
    "companyName": "Diamond Interior Concepts",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Luxury Home Additions",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "22/07/2024",
    "monthsActive": 15,
    "daysActive": 459,
    "estimatesDelivered": 143,
    "closedRevenue": 1135992,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-050",
    "companyName": "Precision Hardscapes & Pavers",
    "ownerName": "Wagner Silveira",
    "specialty": "Timber Framing & Decks",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "14/10/2024",
    "monthsActive": 20,
    "daysActive": 600,
    "estimatesDelivered": 229,
    "closedRevenue": 1424609,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-051",
    "companyName": "Ironwood Interior Concepts",
    "ownerName": "Caio Fagundes",
    "specialty": "Basement Finishing & Remodel",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "03/05/2023",
    "monthsActive": 24,
    "daysActive": 726,
    "estimatesDelivered": 343,
    "closedRevenue": 3394671,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-052",
    "companyName": "NextGen Restorations",
    "ownerName": "Gustavo Pinho",
    "specialty": "Roofing & Storm Restoration",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "01/01/2024",
    "monthsActive": 10,
    "daysActive": 309,
    "estimatesDelivered": 108,
    "closedRevenue": 616356,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-053",
    "companyName": "Bluewater Remodeling Group",
    "ownerName": "Wagner Silveira",
    "specialty": "Whole Home Remodeling",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "13/04/2024",
    "monthsActive": 16,
    "daysActive": 500,
    "estimatesDelivered": 171,
    "closedRevenue": 1461879,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-054",
    "companyName": "Modern Touch Painting & Drywall",
    "ownerName": "Matheus Nogueira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "08/02/2024",
    "monthsActive": 10,
    "daysActive": 305,
    "estimatesDelivered": 145,
    "closedRevenue": 1314570,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-055",
    "companyName": "Legacy Construction Pro",
    "ownerName": "Rogerio Maciel",
    "specialty": "Hardie Board & Siding",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "24/09/2023",
    "monthsActive": 22,
    "daysActive": 670,
    "estimatesDelivered": 322,
    "closedRevenue": 3598672,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-056",
    "companyName": "Vanguard Carpentry & Design",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Luxury Home Additions",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "21/04/2024",
    "monthsActive": 11,
    "daysActive": 337,
    "estimatesDelivered": 134,
    "closedRevenue": 1134846,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-057",
    "companyName": "Bluewater Construction Pro",
    "ownerName": "Paulo Henrique",
    "specialty": "Finish Carpentry & Millwork",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "05/03/2024",
    "monthsActive": 11,
    "daysActive": 340,
    "estimatesDelivered": 145,
    "closedRevenue": 748200,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-058",
    "companyName": "Metro Outdoor Living",
    "ownerName": "Marcelo Rezende",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "14/01/2024",
    "monthsActive": 16,
    "daysActive": 493,
    "estimatesDelivered": 205,
    "closedRevenue": 1704780,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-059",
    "companyName": "Sterling Carpentry & Design",
    "ownerName": "Marcelo Rezende",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "25/07/2024",
    "monthsActive": 15,
    "daysActive": 465,
    "estimatesDelivered": 115,
    "closedRevenue": 798790,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-060",
    "companyName": "Oakridge Painting & Drywall",
    "ownerName": "Vinicius Souza",
    "specialty": "Custom Closets & Cabinets",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "16/01/2024",
    "monthsActive": 10,
    "daysActive": 315,
    "estimatesDelivered": 109,
    "closedRevenue": 879630,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-061",
    "companyName": "Oakridge Remodeling Group",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Roofing & Storm Restoration",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "01/07/2025",
    "monthsActive": 8,
    "daysActive": 254,
    "estimatesDelivered": 86,
    "closedRevenue": 763250,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-062",
    "companyName": "Modern Touch Flooring Specialists",
    "ownerName": "Daniel Moreira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "09/07/2024",
    "monthsActive": 16,
    "daysActive": 484,
    "estimatesDelivered": 231,
    "closedRevenue": 1134441,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-063",
    "companyName": "Coastal Custom Homes",
    "ownerName": "Felipe Barreto",
    "specialty": "Roofing & Storm Restoration",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "01/12/2024",
    "monthsActive": 11,
    "daysActive": 343,
    "estimatesDelivered": 127,
    "closedRevenue": 1060704,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-064",
    "companyName": "Everest Hardscapes & Pavers",
    "ownerName": "Cristiano Melo",
    "specialty": "Whole Home Remodeling",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "01/10/2025",
    "monthsActive": 4,
    "daysActive": 120,
    "estimatesDelivered": 48,
    "closedRevenue": 545952,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-065",
    "companyName": "Palm Coast Builders LLC",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "20/10/2025",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 109,
    "closedRevenue": 640266,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-066",
    "companyName": "Prime Builders LLC",
    "ownerName": "Cesar Menotti",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "22/07/2025",
    "monthsActive": 6,
    "daysActive": 198,
    "estimatesDelivered": 51,
    "closedRevenue": 470016,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-067",
    "companyName": "Oakridge Flooring Specialists",
    "ownerName": "Luciano Mendes",
    "specialty": "Roofing & Storm Restoration",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "02/06/2024",
    "monthsActive": 12,
    "daysActive": 379,
    "estimatesDelivered": 110,
    "closedRevenue": 1200210,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-068",
    "companyName": "Ironwood Restorations",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Timber Framing & Decks",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "16/02/2023",
    "monthsActive": 23,
    "daysActive": 700,
    "estimatesDelivered": 172,
    "closedRevenue": 1932592,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-069",
    "companyName": "All-Star Hardscapes & Pavers",
    "ownerName": "Flavio Neves",
    "specialty": "Timber Framing & Decks",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "09/10/2025",
    "monthsActive": 7,
    "daysActive": 223,
    "estimatesDelivered": 76,
    "closedRevenue": 746928,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-070",
    "companyName": "Green Mountain Outdoor Living",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Timber Framing & Decks",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "03/05/2024",
    "monthsActive": 21,
    "daysActive": 638,
    "estimatesDelivered": 260,
    "closedRevenue": 2939300,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-071",
    "companyName": "SunState Flooring Specialists",
    "ownerName": "Carlos Andrade",
    "specialty": "Pool Decks & Travertine",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "28/06/2023",
    "monthsActive": 22,
    "daysActive": 672,
    "estimatesDelivered": 269,
    "closedRevenue": 2299681,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-072",
    "companyName": "Bay State Roofing Solutions",
    "ownerName": "Cristiano Melo",
    "specialty": "Hardie Board & Siding",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "17/04/2024",
    "monthsActive": 11,
    "daysActive": 349,
    "estimatesDelivered": 134,
    "closedRevenue": 614122,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-073",
    "companyName": "Benchmark Carpentry & Design",
    "ownerName": "Bruno Castilho",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "01/02/2024",
    "monthsActive": 10,
    "daysActive": 315,
    "estimatesDelivered": 152,
    "closedRevenue": 1671240,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-074",
    "companyName": "United Flooring Specialists",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Interior & Exterior Painting",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "17/06/2023",
    "monthsActive": 24,
    "daysActive": 738,
    "estimatesDelivered": 300,
    "closedRevenue": 2710200,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-075",
    "companyName": "Alpha Carpentry & Design",
    "ownerName": "Sergio Mendes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "04/12/2024",
    "monthsActive": 17,
    "daysActive": 518,
    "estimatesDelivered": 196,
    "closedRevenue": 1252048,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-076",
    "companyName": "ProCraft Renovations Co.",
    "ownerName": "Andre Guimaraes",
    "specialty": "Whole Home Remodeling",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "24/10/2025",
    "monthsActive": 8,
    "daysActive": 246,
    "estimatesDelivered": 92,
    "closedRevenue": 622380,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-077",
    "companyName": "Atlas Remodeling Group",
    "ownerName": "Matheus Nogueira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "01/12/2024",
    "monthsActive": 12,
    "daysActive": 367,
    "estimatesDelivered": 151,
    "closedRevenue": 1053376,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-078",
    "companyName": "Signature Hardscapes & Pavers",
    "ownerName": "Gustavo Pinho",
    "specialty": "Basement Finishing & Remodel",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "01/10/2024",
    "monthsActive": 12,
    "daysActive": 364,
    "estimatesDelivered": 174,
    "closedRevenue": 2026926,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-079",
    "companyName": "First Choice Painting & Drywall",
    "ownerName": "Lucas Ferreira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "03/07/2025",
    "monthsActive": 4,
    "daysActive": 128,
    "estimatesDelivered": 62,
    "closedRevenue": 696508,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-080",
    "companyName": "ProCraft Interior Concepts",
    "ownerName": "Marcelo Rezende",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "04/09/2025",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 83,
    "closedRevenue": 542239,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-081",
    "companyName": "NextGen Remodeling Group",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home Remodeling",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "19/07/2024",
    "monthsActive": 15,
    "daysActive": 464,
    "estimatesDelivered": 219,
    "closedRevenue": 2528574,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-082",
    "companyName": "Vanguard Construction Pro",
    "ownerName": "Rogerio Maciel",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "06/04/2023",
    "monthsActive": 23,
    "daysActive": 696,
    "estimatesDelivered": 268,
    "closedRevenue": 1384220,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-083",
    "companyName": "Bluewater Restorations",
    "ownerName": "Wellington Prado",
    "specialty": "Timber Framing & Decks",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "08/05/2024",
    "monthsActive": 17,
    "daysActive": 529,
    "estimatesDelivered": 247,
    "closedRevenue": 1177449,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-084",
    "companyName": "Sterling Custom Homes",
    "ownerName": "Thiago Oliveira",
    "specialty": "Wood & Metal Framing",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "22/04/2023",
    "monthsActive": 24,
    "daysActive": 727,
    "estimatesDelivered": 279,
    "closedRevenue": 2603349,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-085",
    "companyName": "Pinnacle Hardscapes & Pavers",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home Remodeling",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "10/10/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 56,
    "closedRevenue": 615608,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-086",
    "companyName": "Titan Roofing Solutions",
    "ownerName": "Cleber Toledo",
    "specialty": "Basement Finishing & Remodel",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "16/08/2024",
    "monthsActive": 12,
    "daysActive": 372,
    "estimatesDelivered": 145,
    "closedRevenue": 1293835,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-087",
    "companyName": "Palmetto Painting & Drywall",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Pool Decks & Travertine",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "27/10/2024",
    "monthsActive": 11,
    "daysActive": 330,
    "estimatesDelivered": 96,
    "closedRevenue": 962208,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-088",
    "companyName": "Paramount Painting & Drywall",
    "ownerName": "Rafael Camargo",
    "specialty": "Hardie Board & Siding",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "15/05/2025",
    "monthsActive": 4,
    "daysActive": 125,
    "estimatesDelivered": 69,
    "closedRevenue": 678753,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 17 estimates/m\u00eas."
  },
  {
    "id": "ACC-089",
    "companyName": "Summit Roofing Solutions",
    "ownerName": "Victor Hugo",
    "specialty": "Hardie Board & Siding",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "22/02/2024",
    "monthsActive": 18,
    "daysActive": 551,
    "estimatesDelivered": 244,
    "closedRevenue": 1739720,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-090",
    "companyName": "All-Star Roofing Solutions",
    "ownerName": "Thiago Oliveira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/05/2023",
    "monthsActive": 24,
    "daysActive": 732,
    "estimatesDelivered": 180,
    "closedRevenue": 939780,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-091",
    "companyName": "Palmetto Hardscapes & Pavers",
    "ownerName": "Juliano Rossi",
    "specialty": "Timber Framing & Decks",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "07/09/2023",
    "monthsActive": 24,
    "daysActive": 737,
    "estimatesDelivered": 347,
    "closedRevenue": 1715568,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-092",
    "companyName": "Ironwood Interior Concepts",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "23/08/2025",
    "monthsActive": 9,
    "daysActive": 278,
    "estimatesDelivered": 90,
    "closedRevenue": 728010,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-093",
    "companyName": "Modern Touch Builders LLC",
    "ownerName": "Thiago Oliveira",
    "specialty": "Wood & Metal Framing",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "03/04/2025",
    "monthsActive": 8,
    "daysActive": 249,
    "estimatesDelivered": 69,
    "closedRevenue": 541098,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-094",
    "companyName": "United Construction Pro",
    "ownerName": "Gilberto Ramos",
    "specialty": "Custom Closets & Cabinets",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "16/08/2024",
    "monthsActive": 12,
    "daysActive": 376,
    "estimatesDelivered": 143,
    "closedRevenue": 1621334,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-095",
    "companyName": "Atlas Restorations",
    "ownerName": "Roberto Faria",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "25/07/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 204,
    "closedRevenue": 1379652,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-096",
    "companyName": "United Outdoor Living",
    "ownerName": "Vinicius Souza",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "18/08/2024",
    "monthsActive": 12,
    "daysActive": 378,
    "estimatesDelivered": 175,
    "closedRevenue": 1427650,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-097",
    "companyName": "Heritage Remodeling Group",
    "ownerName": "Danilo Peixoto",
    "specialty": "Basement Finishing & Remodel",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "13/04/2024",
    "monthsActive": 17,
    "daysActive": 520,
    "estimatesDelivered": 178,
    "closedRevenue": 1634752,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-098",
    "companyName": "Titan Construction Pro",
    "ownerName": "Carlos Andrade",
    "specialty": "Commercial & Metal Roofs",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "27/11/2024",
    "monthsActive": 18,
    "daysActive": 552,
    "estimatesDelivered": 249,
    "closedRevenue": 2736759,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-099",
    "companyName": "Heritage Restorations",
    "ownerName": "Renato Ramos",
    "specialty": "Wood & Metal Framing",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "15/01/2024",
    "monthsActive": 13,
    "daysActive": 393,
    "estimatesDelivered": 188,
    "closedRevenue": 1655904,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-100",
    "companyName": "Highline Restorations",
    "ownerName": "Vinicius Souza",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "13/11/2024",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 230,
    "closedRevenue": 2340020,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-101",
    "companyName": "Highline Renovations Co.",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "20/02/2024",
    "monthsActive": 13,
    "daysActive": 410,
    "estimatesDelivered": 195,
    "closedRevenue": 934830,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-102",
    "companyName": "Bluewater Renovations Co.",
    "ownerName": "Victor Hugo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "28/02/2025",
    "monthsActive": 5,
    "daysActive": 163,
    "estimatesDelivered": 55,
    "closedRevenue": 564630,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-103",
    "companyName": "Heritage Interior Concepts",
    "ownerName": "Andre Guimaraes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "14/03/2024",
    "monthsActive": 13,
    "daysActive": 391,
    "estimatesDelivered": 153,
    "closedRevenue": 1158210,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-104",
    "companyName": "Orlando Custom Homes",
    "ownerName": "Rafael Camargo",
    "specialty": "Timber Framing & Decks",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "08/08/2025",
    "monthsActive": 8,
    "daysActive": 242,
    "estimatesDelivered": 118,
    "closedRevenue": 1191328,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-105",
    "companyName": "Highline Framing Contractors",
    "ownerName": "Wellington Prado",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "26/08/2024",
    "monthsActive": 11,
    "daysActive": 344,
    "estimatesDelivered": 136,
    "closedRevenue": 622336,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-106",
    "companyName": "Prime Roofing Solutions",
    "ownerName": "Otavio Mello",
    "specialty": "Hardie Board & Siding",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "23/05/2024",
    "monthsActive": 17,
    "daysActive": 521,
    "estimatesDelivered": 202,
    "closedRevenue": 1610950,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-107",
    "companyName": "Benchmark Renovations Co.",
    "ownerName": "Caio Fagundes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "23/05/2024",
    "monthsActive": 10,
    "daysActive": 312,
    "estimatesDelivered": 134,
    "closedRevenue": 927682,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-108",
    "companyName": "Horizon Painting & Drywall",
    "ownerName": "Rivaldo Souza",
    "specialty": "Finish Carpentry & Millwork",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "26/04/2023",
    "monthsActive": 24,
    "daysActive": 721,
    "estimatesDelivered": 345,
    "closedRevenue": 3744630,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-109",
    "companyName": "Titan Interior Concepts",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Interior & Exterior Painting",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "02/05/2024",
    "monthsActive": 11,
    "daysActive": 334,
    "estimatesDelivered": 103,
    "closedRevenue": 1008782,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-110",
    "companyName": "Sterling Flooring Specialists",
    "ownerName": "Matheus Nogueira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "14/03/2025",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 87,
    "closedRevenue": 924201,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-111",
    "companyName": "Alpha Hardscapes & Pavers",
    "ownerName": "Vinicius Souza",
    "specialty": "Roofing & Storm Restoration",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "10/12/2024",
    "monthsActive": 11,
    "daysActive": 335,
    "estimatesDelivered": 133,
    "closedRevenue": 1477098,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-112",
    "companyName": "Alpha Hardscapes & Pavers",
    "ownerName": "Flavio Neves",
    "specialty": "Interior & Exterior Painting",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "13/01/2024",
    "monthsActive": 10,
    "daysActive": 312,
    "estimatesDelivered": 126,
    "closedRevenue": 1383102,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-113",
    "companyName": "Boston Pro Interior Concepts",
    "ownerName": "Gustavo Pinho",
    "specialty": "Luxury Bathroom Renovations",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "04/11/2023",
    "monthsActive": 24,
    "daysActive": 728,
    "estimatesDelivered": 327,
    "closedRevenue": 2466561,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-114",
    "companyName": "Heritage Builders LLC",
    "ownerName": "Wagner Silveira",
    "specialty": "Wood & Metal Framing",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "15/12/2023",
    "monthsActive": 22,
    "daysActive": 667,
    "estimatesDelivered": 191,
    "closedRevenue": 2148559,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-115",
    "companyName": "Modern Touch Flooring Specialists",
    "ownerName": "Paulo Henrique",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "08/09/2025",
    "monthsActive": 4,
    "daysActive": 129,
    "estimatesDelivered": 62,
    "closedRevenue": 328352,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-116",
    "companyName": "Atlas Remodeling Group",
    "ownerName": "Marcelo Rezende",
    "specialty": "Interior & Exterior Painting",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "27/08/2024",
    "monthsActive": 21,
    "daysActive": 634,
    "estimatesDelivered": 288,
    "closedRevenue": 1529568,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-117",
    "companyName": "Coastal Remodeling Group",
    "ownerName": "Wagner Silveira",
    "specialty": "Custom Closets & Cabinets",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "22/06/2024",
    "monthsActive": 17,
    "daysActive": 524,
    "estimatesDelivered": 180,
    "closedRevenue": 956340,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-118",
    "companyName": "Boston Pro Remodeling Group",
    "ownerName": "Cleber Toledo",
    "specialty": "Basement Finishing & Remodel",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "07/11/2025",
    "monthsActive": 9,
    "daysActive": 273,
    "estimatesDelivered": 132,
    "closedRevenue": 1310628,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-119",
    "companyName": "SunState Restorations",
    "ownerName": "Rafael Camargo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "25/09/2025",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 76,
    "closedRevenue": 858572,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-120",
    "companyName": "Diamond Builders LLC",
    "ownerName": "Murilo Batista",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "05/03/2025",
    "monthsActive": 7,
    "daysActive": 229,
    "estimatesDelivered": 58,
    "closedRevenue": 668856,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-121",
    "companyName": "Everest Carpentry & Design",
    "ownerName": "Felipe Barreto",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "01/03/2025",
    "monthsActive": 3,
    "daysActive": 101,
    "estimatesDelivered": 44,
    "closedRevenue": 314688,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (3 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-122",
    "companyName": "Legacy Framing Contractors",
    "ownerName": "Claudio Silva",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "12/09/2025",
    "monthsActive": 6,
    "daysActive": 182,
    "estimatesDelivered": 96,
    "closedRevenue": 1043808,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 16 estimates/m\u00eas."
  },
  {
    "id": "ACC-123",
    "companyName": "Paramount Painting & Drywall",
    "ownerName": "Fernando Dias",
    "specialty": "Whole Home Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "01/01/2025",
    "monthsActive": 4,
    "daysActive": 136,
    "estimatesDelivered": 56,
    "closedRevenue": 547120,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-124",
    "companyName": "NextGen Painting & Drywall",
    "ownerName": "Diego Antunes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "05/02/2024",
    "monthsActive": 17,
    "daysActive": 512,
    "estimatesDelivered": 146,
    "closedRevenue": 1384518,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-125",
    "companyName": "Alpha Restorations",
    "ownerName": "Helio Diniz",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "20/07/2024",
    "monthsActive": 13,
    "daysActive": 402,
    "estimatesDelivered": 155,
    "closedRevenue": 1339355,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-126",
    "companyName": "Bay State Builders LLC",
    "ownerName": "Marcelo Rezende",
    "specialty": "Basement Finishing & Remodel",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "11/08/2025",
    "monthsActive": 9,
    "daysActive": 283,
    "estimatesDelivered": 134,
    "closedRevenue": 1057126,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (9 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-127",
    "companyName": "Empire Roofing Solutions",
    "ownerName": "Gabriel Costa",
    "specialty": "Whole Home Remodeling",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "16/02/2024",
    "monthsActive": 13,
    "daysActive": 398,
    "estimatesDelivered": 163,
    "closedRevenue": 1650538,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-128",
    "companyName": "Heritage Flooring Specialists",
    "ownerName": "Thiago Oliveira",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "18/06/2024",
    "monthsActive": 14,
    "daysActive": 424,
    "estimatesDelivered": 112,
    "closedRevenue": 1019200,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-129",
    "companyName": "Oakridge Hardscapes & Pavers",
    "ownerName": "Renato Ramos",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "19/09/2025",
    "monthsActive": 4,
    "daysActive": 129,
    "estimatesDelivered": 54,
    "closedRevenue": 288792,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-130",
    "companyName": "United Outdoor Living",
    "ownerName": "Luciano Mendes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "09/10/2024",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 174,
    "closedRevenue": 1869978,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-131",
    "companyName": "Coastal Remodeling Group",
    "ownerName": "Vinicius Souza",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "23/05/2023",
    "monthsActive": 22,
    "daysActive": 668,
    "estimatesDelivered": 161,
    "closedRevenue": 1084818,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-132",
    "companyName": "Sovereign Custom Homes",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Custom Closets & Cabinets",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "21/01/2024",
    "monthsActive": 21,
    "daysActive": 642,
    "estimatesDelivered": 175,
    "closedRevenue": 1849750,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-133",
    "companyName": "ProCraft Builders LLC",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "24/06/2024",
    "monthsActive": 17,
    "daysActive": 520,
    "estimatesDelivered": 163,
    "closedRevenue": 1149476,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-134",
    "companyName": "Patriot Interior Concepts",
    "ownerName": "Luciano Mendes",
    "specialty": "Timber Framing & Decks",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "09/08/2025",
    "monthsActive": 8,
    "daysActive": 259,
    "estimatesDelivered": 71,
    "closedRevenue": 366928,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-135",
    "companyName": "Supreme Hardscapes & Pavers",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Commercial & Metal Roofs",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "04/05/2024",
    "monthsActive": 11,
    "daysActive": 336,
    "estimatesDelivered": 98,
    "closedRevenue": 786058,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-136",
    "companyName": "SunState Outdoor Living",
    "ownerName": "Otavio Mello",
    "specialty": "Wood & Metal Framing",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "02/01/2024",
    "monthsActive": 12,
    "daysActive": 361,
    "estimatesDelivered": 131,
    "closedRevenue": 1232579,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-137",
    "companyName": "Metro Framing Contractors",
    "ownerName": "Matheus Nogueira",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "24/07/2024",
    "monthsActive": 12,
    "daysActive": 370,
    "estimatesDelivered": 101,
    "closedRevenue": 865974,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-138",
    "companyName": "Modern Touch Builders LLC",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Basement Finishing & Remodel",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "24/01/2024",
    "monthsActive": 20,
    "daysActive": 611,
    "estimatesDelivered": 171,
    "closedRevenue": 1976589,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-139",
    "companyName": "Precision Construction Pro",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Timber Framing & Decks",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "10/02/2024",
    "monthsActive": 16,
    "daysActive": 498,
    "estimatesDelivered": 223,
    "closedRevenue": 1766383,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-140",
    "companyName": "Empire Roofing Solutions",
    "ownerName": "Andre Guimaraes",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "14/10/2024",
    "monthsActive": 14,
    "daysActive": 422,
    "estimatesDelivered": 188,
    "closedRevenue": 1220684,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-141",
    "companyName": "Craftsman Custom Homes",
    "ownerName": "Andre Guimaraes",
    "specialty": "Interior & Exterior Painting",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "17/11/2024",
    "monthsActive": 13,
    "daysActive": 397,
    "estimatesDelivered": 163,
    "closedRevenue": 835375,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-142",
    "companyName": "Orlando Outdoor Living",
    "ownerName": "Cleber Toledo",
    "specialty": "Roofing & Storm Restoration",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "09/04/2023",
    "monthsActive": 23,
    "daysActive": 694,
    "estimatesDelivered": 236,
    "closedRevenue": 1344964,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-143",
    "companyName": "Stonegate Painting & Drywall",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Basement Finishing & Remodel",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "19/08/2023",
    "monthsActive": 23,
    "daysActive": 705,
    "estimatesDelivered": 336,
    "closedRevenue": 3603264,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-144",
    "companyName": "Supreme Remodeling Group",
    "ownerName": "Diego Antunes",
    "specialty": "Interior & Exterior Painting",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "15/11/2024",
    "monthsActive": 13,
    "daysActive": 394,
    "estimatesDelivered": 188,
    "closedRevenue": 1568108,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-145",
    "companyName": "Vanguard Painting & Drywall",
    "ownerName": "Wellington Prado",
    "specialty": "Roofing & Storm Restoration",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "02/06/2025",
    "monthsActive": 5,
    "daysActive": 159,
    "estimatesDelivered": 82,
    "closedRevenue": 394256,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 16 estimates/m\u00eas."
  },
  {
    "id": "ACC-146",
    "companyName": "Legacy Outdoor Living",
    "ownerName": "Eduardo Santos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "18/12/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 298,
    "closedRevenue": 2757692,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-147",
    "companyName": "Craftsman Painting & Drywall",
    "ownerName": "Gabriel Costa",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "04/06/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 203,
    "closedRevenue": 1662570,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-148",
    "companyName": "Pinnacle Roofing Solutions",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "20/03/2024",
    "monthsActive": 10,
    "daysActive": 314,
    "estimatesDelivered": 153,
    "closedRevenue": 1343646,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-149",
    "companyName": "United Painting & Drywall",
    "ownerName": "Claudio Silva",
    "specialty": "Custom Closets & Cabinets",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "11/02/2023",
    "monthsActive": 24,
    "daysActive": 739,
    "estimatesDelivered": 183,
    "closedRevenue": 1793766,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-150",
    "companyName": "Universal Painting & Drywall",
    "ownerName": "Rivaldo Souza",
    "specialty": "Custom Closets & Cabinets",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "19/11/2024",
    "monthsActive": 11,
    "daysActive": 349,
    "estimatesDelivered": 109,
    "closedRevenue": 563203,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-151",
    "companyName": "Oakridge Carpentry & Design",
    "ownerName": "Matheus Nogueira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "21/06/2023",
    "monthsActive": 22,
    "daysActive": 662,
    "estimatesDelivered": 255,
    "closedRevenue": 1934175,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-152",
    "companyName": "Summit Outdoor Living",
    "ownerName": "Daniel Moreira",
    "specialty": "Hardie Board & Siding",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "10/03/2023",
    "monthsActive": 23,
    "daysActive": 703,
    "estimatesDelivered": 281,
    "closedRevenue": 2099070,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-153",
    "companyName": "Sterling Restorations",
    "ownerName": "Danilo Peixoto",
    "specialty": "Commercial & Metal Roofs",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "28/02/2024",
    "monthsActive": 10,
    "daysActive": 304,
    "estimatesDelivered": 96,
    "closedRevenue": 664608,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-154",
    "companyName": "All-Star Interior Concepts",
    "ownerName": "Helio Diniz",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "05/03/2023",
    "monthsActive": 24,
    "daysActive": 730,
    "estimatesDelivered": 230,
    "closedRevenue": 1744780,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-155",
    "companyName": "Pinnacle Outdoor Living",
    "ownerName": "Juliano Rossi",
    "specialty": "Timber Framing & Decks",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "24/04/2024",
    "monthsActive": 17,
    "daysActive": 511,
    "estimatesDelivered": 231,
    "closedRevenue": 2319240,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-156",
    "companyName": "First Choice Hardscapes & Pavers",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Timber Framing & Decks",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "27/04/2024",
    "monthsActive": 20,
    "daysActive": 607,
    "estimatesDelivered": 232,
    "closedRevenue": 2761960,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-157",
    "companyName": "Gold Coast Painting & Drywall",
    "ownerName": "Murilo Batista",
    "specialty": "Hardie Board & Siding",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "07/10/2024",
    "monthsActive": 15,
    "daysActive": 466,
    "estimatesDelivered": 202,
    "closedRevenue": 2260582,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (15 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-158",
    "companyName": "Craftsman Construction Pro",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "25/03/2024",
    "monthsActive": 20,
    "daysActive": 603,
    "estimatesDelivered": 169,
    "closedRevenue": 876603,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-159",
    "companyName": "Green Mountain Roofing Solutions",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Roofing & Storm Restoration",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "02/07/2024",
    "monthsActive": 10,
    "daysActive": 314,
    "estimatesDelivered": 125,
    "closedRevenue": 987250,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-160",
    "companyName": "Everest Remodeling Group",
    "ownerName": "Renato Ramos",
    "specialty": "Luxury Home Additions",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "23/11/2024",
    "monthsActive": 10,
    "daysActive": 300,
    "estimatesDelivered": 126,
    "closedRevenue": 1433124,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-161",
    "companyName": "Orlando Framing Contractors",
    "ownerName": "Daniel Moreira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "03/01/2025",
    "monthsActive": 7,
    "daysActive": 225,
    "estimatesDelivered": 112,
    "closedRevenue": 508816,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (7 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 16 estimates/m\u00eas."
  },
  {
    "id": "ACC-162",
    "companyName": "NextGen Hardscapes & Pavers",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Roofing & Storm Restoration",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "02/04/2025",
    "monthsActive": 6,
    "daysActive": 189,
    "estimatesDelivered": 69,
    "closedRevenue": 379362,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (6 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-163",
    "companyName": "Pinnacle Roofing Solutions",
    "ownerName": "Renato Ramos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "19/04/2024",
    "monthsActive": 18,
    "daysActive": 559,
    "estimatesDelivered": 141,
    "closedRevenue": 1229661,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-164",
    "companyName": "Vanguard Framing Contractors",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "22/02/2024",
    "monthsActive": 14,
    "daysActive": 427,
    "estimatesDelivered": 189,
    "closedRevenue": 1879038,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-165",
    "companyName": "Granite State Renovations Co.",
    "ownerName": "Paulo Henrique",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "16/01/2024",
    "monthsActive": 19,
    "daysActive": 587,
    "estimatesDelivered": 144,
    "closedRevenue": 1678176,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (19 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-166",
    "companyName": "Summit Construction Pro",
    "ownerName": "Breno Alcantara",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "04/10/2025",
    "monthsActive": 5,
    "daysActive": 161,
    "estimatesDelivered": 65,
    "closedRevenue": 626990,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-167",
    "companyName": "Everest Builders LLC",
    "ownerName": "Alexandre Pires",
    "specialty": "Timber Framing & Decks",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "23/08/2024",
    "monthsActive": 20,
    "daysActive": 610,
    "estimatesDelivered": 195,
    "closedRevenue": 1619670,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-168",
    "companyName": "Craftsman Roofing Solutions",
    "ownerName": "Otavio Mello",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "02/06/2024",
    "monthsActive": 12,
    "daysActive": 366,
    "estimatesDelivered": 92,
    "closedRevenue": 1081552,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-169",
    "companyName": "Summit Renovations Co.",
    "ownerName": "Wagner Silveira",
    "specialty": "Whole Home Remodeling",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "28/01/2024",
    "monthsActive": 11,
    "daysActive": 331,
    "estimatesDelivered": 119,
    "closedRevenue": 883456,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-170",
    "companyName": "Granite State Outdoor Living",
    "ownerName": "Carlos Andrade",
    "specialty": "Commercial & Metal Roofs",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "06/08/2024",
    "monthsActive": 16,
    "daysActive": 492,
    "estimatesDelivered": 235,
    "closedRevenue": 1710095,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (16 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-171",
    "companyName": "Precision Builders LLC",
    "ownerName": "Wellington Prado",
    "specialty": "Roofing & Storm Restoration",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "27/03/2025",
    "monthsActive": 5,
    "daysActive": 163,
    "estimatesDelivered": 51,
    "closedRevenue": 481185,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-172",
    "companyName": "Legacy Flooring Specialists",
    "ownerName": "Helio Diniz",
    "specialty": "Timber Framing & Decks",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "23/07/2023",
    "monthsActive": 24,
    "daysActive": 729,
    "estimatesDelivered": 276,
    "closedRevenue": 2604336,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-173",
    "companyName": "Ironwood Roofing Solutions",
    "ownerName": "Caio Fagundes",
    "specialty": "Interior & Exterior Painting",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "26/01/2024",
    "monthsActive": 14,
    "daysActive": 439,
    "estimatesDelivered": 191,
    "closedRevenue": 1859958,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-174",
    "companyName": "Titan Construction Pro",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Roofing & Storm Restoration",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "20/11/2023",
    "monthsActive": 24,
    "daysActive": 725,
    "estimatesDelivered": 175,
    "closedRevenue": 2004100,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (24 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-175",
    "companyName": "Legacy Flooring Specialists",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Interior & Exterior Painting",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "02/10/2023",
    "monthsActive": 23,
    "daysActive": 701,
    "estimatesDelivered": 287,
    "closedRevenue": 2624902,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-176",
    "companyName": "Green Mountain Builders LLC",
    "ownerName": "Diego Antunes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "13/06/2025",
    "monthsActive": 5,
    "daysActive": 168,
    "estimatesDelivered": 58,
    "closedRevenue": 435348,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-177",
    "companyName": "SunState Interior Concepts",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Luxury Home Additions",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "09/05/2025",
    "monthsActive": 8,
    "daysActive": 255,
    "estimatesDelivered": 117,
    "closedRevenue": 639288,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-178",
    "companyName": "Legacy Builders LLC",
    "ownerName": "Cesar Menotti",
    "specialty": "Basement Finishing & Remodel",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "03/08/2024",
    "monthsActive": 18,
    "daysActive": 546,
    "estimatesDelivered": 151,
    "closedRevenue": 1734386,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-179",
    "companyName": "Ironwood Construction Pro",
    "ownerName": "Helio Diniz",
    "specialty": "Interior & Exterior Painting",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "06/12/2024",
    "monthsActive": 14,
    "daysActive": 422,
    "estimatesDelivered": 163,
    "closedRevenue": 1870262,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (14 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-180",
    "companyName": "United Interior Concepts",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Interior & Exterior Painting",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "26/08/2024",
    "monthsActive": 10,
    "daysActive": 303,
    "estimatesDelivered": 107,
    "closedRevenue": 688973,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-181",
    "companyName": "Sovereign Roofing Solutions",
    "ownerName": "Gustavo Pinho",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "13/12/2024",
    "monthsActive": 20,
    "daysActive": 604,
    "estimatesDelivered": 166,
    "closedRevenue": 1167478,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-182",
    "companyName": "Coastal Construction Pro",
    "ownerName": "Andre Guimaraes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "15/08/2025",
    "monthsActive": 5,
    "daysActive": 154,
    "estimatesDelivered": 75,
    "closedRevenue": 383025,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-183",
    "companyName": "Sovereign Construction Pro",
    "ownerName": "Thiago Oliveira",
    "specialty": "Luxury Home Additions",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "28/01/2024",
    "monthsActive": 21,
    "daysActive": 635,
    "estimatesDelivered": 200,
    "closedRevenue": 1723800,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-184",
    "companyName": "Ironwood Framing Contractors",
    "ownerName": "Leandro Rocha",
    "specialty": "Pool Decks & Travertine",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "10/02/2025",
    "monthsActive": 8,
    "daysActive": 250,
    "estimatesDelivered": 90,
    "closedRevenue": 787500,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-185",
    "companyName": "Orlando Construction Pro",
    "ownerName": "Rafael Camargo",
    "specialty": "Basement Finishing & Remodel",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "06/10/2023",
    "monthsActive": 23,
    "daysActive": 699,
    "estimatesDelivered": 197,
    "closedRevenue": 1920750,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-186",
    "companyName": "SunState Outdoor Living",
    "ownerName": "Wagner Silveira",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "25/10/2025",
    "monthsActive": 4,
    "daysActive": 120,
    "estimatesDelivered": 37,
    "closedRevenue": 360898,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-187",
    "companyName": "Signature Custom Homes",
    "ownerName": "Otavio Mello",
    "specialty": "Custom Closets & Cabinets",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "10/11/2023",
    "monthsActive": 23,
    "daysActive": 690,
    "estimatesDelivered": 337,
    "closedRevenue": 3022553,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-188",
    "companyName": "Summit Interior Concepts",
    "ownerName": "Daniel Moreira",
    "specialty": "Wood & Metal Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "14/08/2024",
    "monthsActive": 17,
    "daysActive": 512,
    "estimatesDelivered": 126,
    "closedRevenue": 1020726,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-189",
    "companyName": "Precision Custom Homes",
    "ownerName": "Claudio Silva",
    "specialty": "Timber Framing & Decks",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "12/09/2024",
    "monthsActive": 13,
    "daysActive": 401,
    "estimatesDelivered": 176,
    "closedRevenue": 1888656,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-190",
    "companyName": "NextGen Roofing Solutions",
    "ownerName": "Paulo Henrique",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "02/05/2024",
    "monthsActive": 11,
    "daysActive": 344,
    "estimatesDelivered": 117,
    "closedRevenue": 619281,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-191",
    "companyName": "Patriot Renovations Co.",
    "ownerName": "Gilberto Ramos",
    "specialty": "Hardie Board & Siding",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "06/08/2024",
    "monthsActive": 13,
    "daysActive": 408,
    "estimatesDelivered": 164,
    "closedRevenue": 1763164,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-192",
    "companyName": "Pinnacle Hardscapes & Pavers",
    "ownerName": "Felipe Barreto",
    "specialty": "Hardie Board & Siding",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "19/06/2025",
    "monthsActive": 5,
    "daysActive": 162,
    "estimatesDelivered": 78,
    "closedRevenue": 488436,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (5 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-193",
    "companyName": "Benchmark Flooring Specialists",
    "ownerName": "Breno Alcantara",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "09/12/2024",
    "monthsActive": 20,
    "daysActive": 600,
    "estimatesDelivered": 171,
    "closedRevenue": 957087,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-194",
    "companyName": "Legacy Outdoor Living",
    "ownerName": "Roberto Faria",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "10/02/2025",
    "monthsActive": 4,
    "daysActive": 138,
    "estimatesDelivered": 50,
    "closedRevenue": 451600,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 12 estimates/m\u00eas."
  },
  {
    "id": "ACC-195",
    "companyName": "United Flooring Specialists",
    "ownerName": "Vinicius Souza",
    "specialty": "Wood & Metal Framing",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "13/06/2023",
    "monthsActive": 22,
    "daysActive": 679,
    "estimatesDelivered": 183,
    "closedRevenue": 968436,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-196",
    "companyName": "Summit Outdoor Living",
    "ownerName": "Cesar Menotti",
    "specialty": "Hardie Board & Siding",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "02/01/2023",
    "monthsActive": 22,
    "daysActive": 676,
    "estimatesDelivered": 299,
    "closedRevenue": 1443871,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-197",
    "companyName": "Lone Star Restorations",
    "ownerName": "Juliano Rossi",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "11/03/2024",
    "monthsActive": 17,
    "daysActive": 514,
    "estimatesDelivered": 163,
    "closedRevenue": 1552086,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 9 estimates/m\u00eas."
  },
  {
    "id": "ACC-198",
    "companyName": "Highline Builders LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "16/01/2024",
    "monthsActive": 13,
    "daysActive": 406,
    "estimatesDelivered": 196,
    "closedRevenue": 1363180,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (13 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-199",
    "companyName": "Supreme Interior Concepts",
    "ownerName": "Danilo Peixoto",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "09/11/2024",
    "monthsActive": 12,
    "daysActive": 380,
    "estimatesDelivered": 98,
    "closedRevenue": 821926,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-200",
    "companyName": "Metro Construction Pro",
    "ownerName": "Danilo Peixoto",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "21/12/2025",
    "monthsActive": 4,
    "daysActive": 138,
    "estimatesDelivered": 63,
    "closedRevenue": 554022,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-201",
    "companyName": "Bluewater Custom Homes",
    "ownerName": "Marcelo Rezende",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "11/07/2024",
    "monthsActive": 21,
    "daysActive": 633,
    "estimatesDelivered": 215,
    "closedRevenue": 1744080,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (21 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 10 estimates/m\u00eas."
  },
  {
    "id": "ACC-202",
    "companyName": "Signature Framing Contractors",
    "ownerName": "Caio Fagundes",
    "specialty": "Custom Closets & Cabinets",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "07/09/2023",
    "monthsActive": 22,
    "daysActive": 675,
    "estimatesDelivered": 161,
    "closedRevenue": 1408589,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-203",
    "companyName": "Bluewater Renovations Co.",
    "ownerName": "Wagner Silveira",
    "specialty": "Hardie Board & Siding",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "22/12/2025",
    "monthsActive": 8,
    "daysActive": 254,
    "estimatesDelivered": 109,
    "closedRevenue": 806818,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (8 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-204",
    "companyName": "Bluewater Carpentry & Design",
    "ownerName": "Daniel Moreira",
    "specialty": "Hardie Board & Siding",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "25/05/2024",
    "monthsActive": 10,
    "daysActive": 308,
    "estimatesDelivered": 118,
    "closedRevenue": 818684,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (10 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-205",
    "companyName": "Benchmark Restorations",
    "ownerName": "Paulo Henrique",
    "specialty": "Interior & Exterior Painting",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "19/11/2024",
    "monthsActive": 18,
    "daysActive": 551,
    "estimatesDelivered": 207,
    "closedRevenue": 1138086,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (18 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-206",
    "companyName": "Signature Custom Homes",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "15/11/2024",
    "monthsActive": 12,
    "daysActive": 361,
    "estimatesDelivered": 138,
    "closedRevenue": 1012506,
    "monthlyPlan": 2800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-207",
    "companyName": "Green Mountain Remodeling Group",
    "ownerName": "Cristiano Melo",
    "specialty": "Commercial & Metal Roofs",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "20/12/2024",
    "monthsActive": 11,
    "daysActive": 347,
    "estimatesDelivered": 128,
    "closedRevenue": 690432,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (11 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-208",
    "companyName": "Highline Outdoor Living",
    "ownerName": "Claudio Silva",
    "specialty": "Wood & Metal Framing",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "11/12/2023",
    "monthsActive": 23,
    "daysActive": 697,
    "estimatesDelivered": 167,
    "closedRevenue": 1316795,
    "monthlyPlan": 1800,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 7 estimates/m\u00eas."
  },
  {
    "id": "ACC-209",
    "companyName": "Palmetto Renovations Co.",
    "ownerName": "Leandro Rocha",
    "specialty": "Basement Finishing & Remodel",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "16/08/2024",
    "monthsActive": 20,
    "daysActive": 605,
    "estimatesDelivered": 275,
    "closedRevenue": 3221350,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (20 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-210",
    "companyName": "Titan Construction Pro",
    "ownerName": "Fabricio Arruda",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "08/09/2023",
    "monthsActive": 23,
    "daysActive": 691,
    "estimatesDelivered": 199,
    "closedRevenue": 1831397,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (23 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 8 estimates/m\u00eas."
  },
  {
    "id": "ACC-211",
    "companyName": "Apex Renovations Co.",
    "ownerName": "Eduardo Santos",
    "specialty": "Whole Home Remodeling",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "28/05/2025",
    "monthsActive": 4,
    "daysActive": 132,
    "estimatesDelivered": 63,
    "closedRevenue": 670005,
    "monthlyPlan": 2200,
    "status": "ativo",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato renovado e consolidado (4 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 15 estimates/m\u00eas."
  },
  {
    "id": "ACC-212",
    "companyName": "Alpha Flooring Specialists",
    "ownerName": "Leandro Rocha",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "17/08/2024",
    "monthsActive": 12,
    "daysActive": 374,
    "estimatesDelivered": 175,
    "closedRevenue": 2007425,
    "monthlyPlan": 3200,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (12 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 14 estimates/m\u00eas."
  },
  {
    "id": "ACC-213",
    "companyName": "First Choice Painting & Drywall",
    "ownerName": "Wellington Prado",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "24/06/2024",
    "monthsActive": 17,
    "daysActive": 530,
    "estimatesDelivered": 194,
    "closedRevenue": 895310,
    "monthlyPlan": 2000,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (17 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 11 estimates/m\u00eas."
  },
  {
    "id": "ACC-214",
    "companyName": "Silva & Sons Construction Pro",
    "ownerName": "Caio Fagundes",
    "specialty": "Wood & Metal Framing",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "11/02/2023",
    "monthsActive": 22,
    "daysActive": 680,
    "estimatesDelivered": 297,
    "closedRevenue": 2590137,
    "monthlyPlan": 2500,
    "status": "ativo",
    "healthScore": "excelente",
    "nps": 10,
    "notes": "Contrato renovado e consolidado (22 meses). Opera\u00e7\u00e3o cont\u00ednua com m\u00e9dia de 13 estimates/m\u00eas."
  },
  {
    "id": "ACC-215",
    "companyName": "Summit Renovations Co.",
    "ownerName": "Diego Antunes",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "08/08/2024",
    "monthsActive": 2,
    "daysActive": 72,
    "estimatesDelivered": 8,
    "closedRevenue": 36544,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Dificuldade de documenta\u00e7\u00e3o e licen\u00e7a municipal na cidade de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-216",
    "companyName": "Highline Framing Contractors",
    "ownerName": "Fernando Dias",
    "specialty": "Luxury Home Additions",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "15/05/2024",
    "monthsActive": 2,
    "daysActive": 72,
    "estimatesDelivered": 8,
    "closedRevenue": 49880,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-217",
    "companyName": "Lone Star Interior Concepts",
    "ownerName": "Gilberto Ramos",
    "specialty": "Interior & Exterior Painting",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "05/08/2024",
    "monthsActive": 2,
    "daysActive": 76,
    "estimatesDelivered": 17,
    "closedRevenue": 74868,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-218",
    "companyName": "ProCraft Restorations",
    "ownerName": "Breno Alcantara",
    "specialty": "Roofing & Storm Restoration",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "25/04/2024",
    "monthsActive": 2,
    "daysActive": 82,
    "estimatesDelivered": 20,
    "closedRevenue": 124400,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-219",
    "companyName": "Prime Interior Concepts",
    "ownerName": "Roberto Faria",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "27/09/2024",
    "monthsActive": 2,
    "daysActive": 67,
    "estimatesDelivered": 17,
    "closedRevenue": 67303,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-220",
    "companyName": "Empire Framing Contractors",
    "ownerName": "Carlos Andrade",
    "specialty": "Timber Framing & Decks",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "07/12/2024",
    "monthsActive": 2,
    "daysActive": 81,
    "estimatesDelivered": 15,
    "closedRevenue": 59640,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-221",
    "companyName": "Universal Carpentry & Design",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "02/09/2024",
    "monthsActive": 1,
    "daysActive": 51,
    "estimatesDelivered": 14,
    "closedRevenue": 75194,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-222",
    "companyName": "Sterling Remodeling Group",
    "ownerName": "Lucas Ferreira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "14/06/2024",
    "monthsActive": 1,
    "daysActive": 41,
    "estimatesDelivered": 17,
    "closedRevenue": 64583,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-223",
    "companyName": "Heritage Flooring Specialists",
    "ownerName": "Wagner Silveira",
    "specialty": "Custom Closets & Cabinets",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "25/11/2024",
    "monthsActive": 2,
    "daysActive": 78,
    "estimatesDelivered": 10,
    "closedRevenue": 66490,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-224",
    "companyName": "Coastal Builders LLC",
    "ownerName": "Wagner Silveira",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "28/09/2024",
    "monthsActive": 2,
    "daysActive": 67,
    "estimatesDelivered": 18,
    "closedRevenue": 134082,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-225",
    "companyName": "Sterling Roofing Solutions",
    "ownerName": "Fabricio Arruda",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "10/08/2024",
    "monthsActive": 1,
    "daysActive": 42,
    "estimatesDelivered": 8,
    "closedRevenue": 52776,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-226",
    "companyName": "Titan Outdoor Living",
    "ownerName": "Thiago Oliveira",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "07/12/2024",
    "monthsActive": 1,
    "daysActive": 49,
    "estimatesDelivered": 13,
    "closedRevenue": 53755,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Dificuldade de documenta\u00e7\u00e3o e licen\u00e7a municipal na cidade de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-227",
    "companyName": "Gold Coast Custom Homes",
    "ownerName": "Cesar Menotti",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "15/10/2024",
    "monthsActive": 1,
    "daysActive": 37,
    "estimatesDelivered": 9,
    "closedRevenue": 53388,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-228",
    "companyName": "Bay State Interior Concepts",
    "ownerName": "Bruno Castilho",
    "specialty": "Basement Finishing & Remodel",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "05/09/2024",
    "monthsActive": 1,
    "daysActive": 52,
    "estimatesDelivered": 11,
    "closedRevenue": 72479,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-229",
    "companyName": "United Interior Concepts",
    "ownerName": "Felipe Barreto",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "14/05/2024",
    "monthsActive": 2,
    "daysActive": 69,
    "estimatesDelivered": 18,
    "closedRevenue": 101430,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-230",
    "companyName": "Precision Carpentry & Design",
    "ownerName": "Andre Guimaraes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "22/07/2024",
    "monthsActive": 2,
    "daysActive": 66,
    "estimatesDelivered": 13,
    "closedRevenue": 95628,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-231",
    "companyName": "Universal Restorations",
    "ownerName": "Bruno Castilho",
    "specialty": "Wood & Metal Framing",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "16/04/2024",
    "monthsActive": 2,
    "daysActive": 77,
    "estimatesDelivered": 10,
    "closedRevenue": 65900,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-232",
    "companyName": "Summit Painting & Drywall",
    "ownerName": "Daniel Moreira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "13/04/2024",
    "monthsActive": 2,
    "daysActive": 78,
    "estimatesDelivered": 16,
    "closedRevenue": 90720,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-233",
    "companyName": "ProCraft Interior Concepts",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "02/05/2024",
    "monthsActive": 1,
    "daysActive": 52,
    "estimatesDelivered": 19,
    "closedRevenue": 131043,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-234",
    "companyName": "Lone Star Builders LLC",
    "ownerName": "Leandro Rocha",
    "specialty": "Hardie Board & Siding",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "10/01/2024",
    "monthsActive": 1,
    "daysActive": 50,
    "estimatesDelivered": 11,
    "closedRevenue": 77671,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Dificuldade de documenta\u00e7\u00e3o e licen\u00e7a municipal na cidade de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-235",
    "companyName": "Sterling Painting & Drywall",
    "ownerName": "Gilberto Ramos",
    "specialty": "Interior & Exterior Painting",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "25/05/2024",
    "monthsActive": 1,
    "daysActive": 47,
    "estimatesDelivered": 11,
    "closedRevenue": 63371,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Dificuldade de documenta\u00e7\u00e3o e licen\u00e7a municipal na cidade de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-236",
    "companyName": "Precision Custom Homes",
    "ownerName": "Breno Alcantara",
    "specialty": "Interior & Exterior Painting",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "26/12/2024",
    "monthsActive": 2,
    "daysActive": 81,
    "estimatesDelivered": 15,
    "closedRevenue": 81120,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-237",
    "companyName": "Supreme Carpentry & Design",
    "ownerName": "Rafael Camargo",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "01/05/2024",
    "monthsActive": 1,
    "daysActive": 53,
    "estimatesDelivered": 11,
    "closedRevenue": 71896,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-238",
    "companyName": "Stonegate Painting & Drywall",
    "ownerName": "Rogerio Maciel",
    "specialty": "Basement Finishing & Remodel",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "27/04/2024",
    "monthsActive": 1,
    "daysActive": 45,
    "estimatesDelivered": 11,
    "closedRevenue": 55605,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-239",
    "companyName": "Patriot Construction Pro",
    "ownerName": "Flavio Neves",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "06/03/2024",
    "monthsActive": 2,
    "daysActive": 79,
    "estimatesDelivered": 10,
    "closedRevenue": 65010,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Dificuldade de documenta\u00e7\u00e3o e licen\u00e7a municipal na cidade de atua\u00e7\u00e3o."
  },
  {
    "id": "ACC-240",
    "companyName": "Horizon Builders LLC",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Wood & Metal Framing",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "14/03/2024",
    "monthsActive": 1,
    "daysActive": 37,
    "estimatesDelivered": 18,
    "closedRevenue": 66564,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-241",
    "companyName": "Oakridge Hardscapes & Pavers",
    "ownerName": "Gustavo Pinho",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "22/10/2024",
    "monthsActive": 2,
    "daysActive": 76,
    "estimatesDelivered": 8,
    "closedRevenue": 48240,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-242",
    "companyName": "Craftsman Restorations",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "09/09/2024",
    "monthsActive": 2,
    "daysActive": 65,
    "estimatesDelivered": 8,
    "closedRevenue": 45344,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-243",
    "companyName": "Atlas Outdoor Living",
    "ownerName": "Rivaldo Souza",
    "specialty": "Custom Closets & Cabinets",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "20/09/2024",
    "monthsActive": 1,
    "daysActive": 51,
    "estimatesDelivered": 10,
    "closedRevenue": 44870,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (1 meses de hist\u00f3rico). Motivo: Problemas de sa\u00fade na fam\u00edlia do s\u00f3cio logo no in\u00edcio das opera\u00e7\u00f5es."
  },
  {
    "id": "ACC-244",
    "companyName": "Stonegate Restorations",
    "ownerName": "Gabriel Costa",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "08/05/2024",
    "monthsActive": 2,
    "daysActive": 79,
    "estimatesDelivered": 17,
    "closedRevenue": 76432,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (2 meses de hist\u00f3rico). Motivo: Incompatibilidade financeira para montar equipe pr\u00f3pria de fechamento presencial."
  },
  {
    "id": "ACC-245",
    "companyName": "Patriot Restorations",
    "ownerName": "Gabriel Costa",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "01/12/2023",
    "monthsActive": 15,
    "daysActive": 462,
    "estimatesDelivered": 157,
    "closedRevenue": 700063,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-246",
    "companyName": "Vanguard Painting & Drywall",
    "ownerName": "Eduardo Santos",
    "specialty": "Pool Decks & Travertine",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "19/08/2023",
    "monthsActive": 6,
    "daysActive": 196,
    "estimatesDelivered": 41,
    "closedRevenue": 234971,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-247",
    "companyName": "Universal Construction Pro",
    "ownerName": "Lucas Ferreira",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "27/07/2023",
    "monthsActive": 13,
    "daysActive": 390,
    "estimatesDelivered": 99,
    "closedRevenue": 512919,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (13 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-248",
    "companyName": "Coastal Remodeling Group",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Whole Home Remodeling",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "24/02/2023",
    "monthsActive": 13,
    "daysActive": 402,
    "estimatesDelivered": 165,
    "closedRevenue": 849090,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (13 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-249",
    "companyName": "Atlas Outdoor Living",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Timber Framing & Decks",
    "city": "Orlando",
    "state": "FL",
    "onboardingDate": "13/06/2023",
    "monthsActive": 5,
    "daysActive": 160,
    "estimatesDelivered": 60,
    "closedRevenue": 541680,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (5 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-250",
    "companyName": "All-Star Interior Concepts",
    "ownerName": "Gabriel Costa",
    "specialty": "Luxury Home Additions",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "19/11/2023",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 133,
    "closedRevenue": 734293,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-251",
    "companyName": "Metro Flooring Specialists",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Interior & Exterior Painting",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "26/11/2023",
    "monthsActive": 5,
    "daysActive": 152,
    "estimatesDelivered": 45,
    "closedRevenue": 320040,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (5 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-252",
    "companyName": "Legacy Framing Contractors",
    "ownerName": "Luciano Mendes",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "05/02/2023",
    "monthsActive": 3,
    "daysActive": 99,
    "estimatesDelivered": 33,
    "closedRevenue": 204897,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-253",
    "companyName": "Apex Renovations Co.",
    "ownerName": "Paulo Henrique",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "20/06/2023",
    "monthsActive": 3,
    "daysActive": 92,
    "estimatesDelivered": 32,
    "closedRevenue": 152384,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-254",
    "companyName": "Patriot Construction Pro",
    "ownerName": "Diego Antunes",
    "specialty": "Roofing & Storm Restoration",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "05/05/2023",
    "monthsActive": 10,
    "daysActive": 318,
    "estimatesDelivered": 105,
    "closedRevenue": 747390,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (10 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-255",
    "companyName": "Patriot Interior Concepts",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "09/04/2023",
    "monthsActive": 11,
    "daysActive": 343,
    "estimatesDelivered": 95,
    "closedRevenue": 439850,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (11 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-256",
    "companyName": "Paramount Restorations",
    "ownerName": "Vinicius Souza",
    "specialty": "Wood & Metal Framing",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "13/06/2023",
    "monthsActive": 7,
    "daysActive": 219,
    "estimatesDelivered": 49,
    "closedRevenue": 329329,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-257",
    "companyName": "Patriot Interior Concepts",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "10/12/2023",
    "monthsActive": 9,
    "daysActive": 285,
    "estimatesDelivered": 77,
    "closedRevenue": 559174,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (9 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-258",
    "companyName": "All-Star Framing Contractors",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Fort Lauderdale",
    "state": "FL",
    "onboardingDate": "19/09/2023",
    "monthsActive": 11,
    "daysActive": 342,
    "estimatesDelivered": 92,
    "closedRevenue": 792948,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (11 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-259",
    "companyName": "Universal Custom Homes",
    "ownerName": "Emerson Cordeiro",
    "specialty": "Pool Decks & Travertine",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "22/08/2023",
    "monthsActive": 9,
    "daysActive": 284,
    "estimatesDelivered": 114,
    "closedRevenue": 520524,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (9 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-260",
    "companyName": "Bluewater Roofing Solutions",
    "ownerName": "Roberto Faria",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "19/07/2023",
    "monthsActive": 16,
    "daysActive": 492,
    "estimatesDelivered": 103,
    "closedRevenue": 916494,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (16 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-261",
    "companyName": "Titan Interior Concepts",
    "ownerName": "Juliano Rossi",
    "specialty": "Custom Closets & Cabinets",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "12/03/2023",
    "monthsActive": 5,
    "daysActive": 153,
    "estimatesDelivered": 65,
    "closedRevenue": 610155,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (5 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-262",
    "companyName": "Bluewater Interior Concepts",
    "ownerName": "Rafael Camargo",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "24/09/2023",
    "monthsActive": 6,
    "daysActive": 180,
    "estimatesDelivered": 42,
    "closedRevenue": 244356,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-263",
    "companyName": "Signature Builders LLC",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Luxury Home Additions",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "17/03/2023",
    "monthsActive": 15,
    "daysActive": 464,
    "estimatesDelivered": 189,
    "closedRevenue": 1667169,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-264",
    "companyName": "Coastal Hardscapes & Pavers",
    "ownerName": "Gustavo Pinho",
    "specialty": "Whole Home Remodeling",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "26/04/2023",
    "monthsActive": 6,
    "daysActive": 184,
    "estimatesDelivered": 54,
    "closedRevenue": 367740,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-265",
    "companyName": "Stonegate Builders LLC",
    "ownerName": "Vinicius Souza",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "04/01/2023",
    "monthsActive": 17,
    "daysActive": 520,
    "estimatesDelivered": 108,
    "closedRevenue": 471528,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (17 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-266",
    "companyName": "Ironwood Construction Pro",
    "ownerName": "Fernando Dias",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "15/04/2023",
    "monthsActive": 8,
    "daysActive": 257,
    "estimatesDelivered": 62,
    "closedRevenue": 532332,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-267",
    "companyName": "SunState Renovations Co.",
    "ownerName": "Daniel Moreira",
    "specialty": "Roofing & Storm Restoration",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "13/01/2023",
    "monthsActive": 3,
    "daysActive": 109,
    "estimatesDelivered": 28,
    "closedRevenue": 247828,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-268",
    "companyName": "Sovereign Painting & Drywall",
    "ownerName": "Carlos Andrade",
    "specialty": "Basement Finishing & Remodel",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "09/11/2023",
    "monthsActive": 8,
    "daysActive": 251,
    "estimatesDelivered": 69,
    "closedRevenue": 534612,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-269",
    "companyName": "Palm Coast Outdoor Living",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Luxury Home Additions",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "20/03/2023",
    "monthsActive": 15,
    "daysActive": 468,
    "estimatesDelivered": 96,
    "closedRevenue": 660768,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-270",
    "companyName": "Craftsman Roofing Solutions",
    "ownerName": "Renato Ramos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "06/06/2023",
    "monthsActive": 7,
    "daysActive": 220,
    "estimatesDelivered": 47,
    "closedRevenue": 305547,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-271",
    "companyName": "United Construction Pro",
    "ownerName": "Alexandre Pires",
    "specialty": "Hardie Board & Siding",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "23/11/2023",
    "monthsActive": 15,
    "daysActive": 463,
    "estimatesDelivered": 112,
    "closedRevenue": 1031072,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-272",
    "companyName": "Patriot Construction Pro",
    "ownerName": "Marcos Silva",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Seattle",
    "state": "WA",
    "onboardingDate": "28/06/2023",
    "monthsActive": 8,
    "daysActive": 250,
    "estimatesDelivered": 103,
    "closedRevenue": 934622,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-273",
    "companyName": "Empire Interior Concepts",
    "ownerName": "Victor Hugo",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "23/08/2023",
    "monthsActive": 19,
    "daysActive": 590,
    "estimatesDelivered": 178,
    "closedRevenue": 1428984,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (19 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-274",
    "companyName": "All-Star Outdoor Living",
    "ownerName": "Ivanildo Tavares",
    "specialty": "Hardie Board & Siding",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "25/08/2023",
    "monthsActive": 4,
    "daysActive": 128,
    "estimatesDelivered": 36,
    "closedRevenue": 229104,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (4 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-275",
    "companyName": "Legacy Framing Contractors",
    "ownerName": "Fabricio Arruda",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "27/01/2023",
    "monthsActive": 6,
    "daysActive": 188,
    "estimatesDelivered": 80,
    "closedRevenue": 560400,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-276",
    "companyName": "All-Star Outdoor Living",
    "ownerName": "Thiago Oliveira",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "12/02/2023",
    "monthsActive": 10,
    "daysActive": 309,
    "estimatesDelivered": 124,
    "closedRevenue": 952816,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (10 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-277",
    "companyName": "Gold Coast Interior Concepts",
    "ownerName": "Daniel Moreira",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "05/04/2023",
    "monthsActive": 14,
    "daysActive": 439,
    "estimatesDelivered": 161,
    "closedRevenue": 862799,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-278",
    "companyName": "Silva & Sons Construction Pro",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "09/09/2023",
    "monthsActive": 8,
    "daysActive": 250,
    "estimatesDelivered": 94,
    "closedRevenue": 598780,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-279",
    "companyName": "Orlando Interior Concepts",
    "ownerName": "Carlos Andrade",
    "specialty": "Pool Decks & Travertine",
    "city": "Lowell",
    "state": "MA",
    "onboardingDate": "25/11/2023",
    "monthsActive": 7,
    "daysActive": 214,
    "estimatesDelivered": 54,
    "closedRevenue": 358452,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-280",
    "companyName": "Granite State Hardscapes & Pavers",
    "ownerName": "Helio Diniz",
    "specialty": "Hardie Board & Siding",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "17/12/2023",
    "monthsActive": 17,
    "daysActive": 512,
    "estimatesDelivered": 197,
    "closedRevenue": 938114,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (17 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-281",
    "companyName": "Sterling Roofing Solutions",
    "ownerName": "Lucas Ferreira",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "23/06/2023",
    "monthsActive": 3,
    "daysActive": 92,
    "estimatesDelivered": 40,
    "closedRevenue": 368000,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-282",
    "companyName": "Patriot Outdoor Living",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Basement Finishing & Remodel",
    "city": "Windermere",
    "state": "FL",
    "onboardingDate": "18/10/2023",
    "monthsActive": 18,
    "daysActive": 548,
    "estimatesDelivered": 154,
    "closedRevenue": 973742,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (18 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-283",
    "companyName": "Apex Roofing Solutions",
    "ownerName": "Gilberto Ramos",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "04/03/2023",
    "monthsActive": 6,
    "daysActive": 200,
    "estimatesDelivered": 82,
    "closedRevenue": 636648,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-284",
    "companyName": "Oakridge Painting & Drywall",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "12/05/2023",
    "monthsActive": 12,
    "daysActive": 365,
    "estimatesDelivered": 150,
    "closedRevenue": 714600,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (12 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-285",
    "companyName": "Vanguard Construction Pro",
    "ownerName": "Gustavo Pinho",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Sarasota",
    "state": "FL",
    "onboardingDate": "04/01/2023",
    "monthsActive": 12,
    "daysActive": 367,
    "estimatesDelivered": 117,
    "closedRevenue": 555399,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (12 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-286",
    "companyName": "Metro Builders LLC",
    "ownerName": "Bruno Castilho",
    "specialty": "Whole Home Remodeling",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "05/08/2023",
    "monthsActive": 3,
    "daysActive": 100,
    "estimatesDelivered": 40,
    "closedRevenue": 298360,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-287",
    "companyName": "First Choice Remodeling Group",
    "ownerName": "Andre Guimaraes",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "22/03/2023",
    "monthsActive": 14,
    "daysActive": 429,
    "estimatesDelivered": 105,
    "closedRevenue": 534450,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-288",
    "companyName": "Empire Builders LLC",
    "ownerName": "Daniel Moreira",
    "specialty": "Wood & Metal Framing",
    "city": "Salt Lake City",
    "state": "UT",
    "onboardingDate": "22/08/2023",
    "monthsActive": 9,
    "daysActive": 290,
    "estimatesDelivered": 104,
    "closedRevenue": 766688,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (9 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-289",
    "companyName": "United Interior Concepts",
    "ownerName": "Cristiano Melo",
    "specialty": "Luxury Home Additions",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "09/11/2023",
    "monthsActive": 15,
    "daysActive": 461,
    "estimatesDelivered": 141,
    "closedRevenue": 725445,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-290",
    "companyName": "Gold Coast Outdoor Living",
    "ownerName": "Wagner Silveira",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "24/07/2023",
    "monthsActive": 12,
    "daysActive": 366,
    "estimatesDelivered": 128,
    "closedRevenue": 1046272,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (12 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-291",
    "companyName": "Everest Roofing Solutions",
    "ownerName": "Sergio Mendes",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "17/01/2023",
    "monthsActive": 6,
    "daysActive": 187,
    "estimatesDelivered": 63,
    "closedRevenue": 558495,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-292",
    "companyName": "Titan Remodeling Group",
    "ownerName": "Daniel Moreira",
    "specialty": "Custom Closets & Cabinets",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "03/01/2023",
    "monthsActive": 8,
    "daysActive": 255,
    "estimatesDelivered": 100,
    "closedRevenue": 413600,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-293",
    "companyName": "Orlando Renovations Co.",
    "ownerName": "Juliano Rossi",
    "specialty": "Roofing & Storm Restoration",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "21/09/2023",
    "monthsActive": 19,
    "daysActive": 583,
    "estimatesDelivered": 180,
    "closedRevenue": 1313100,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (19 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-294",
    "companyName": "Stonegate Painting & Drywall",
    "ownerName": "Breno Alcantara",
    "specialty": "Roofing & Storm Restoration",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "13/10/2023",
    "monthsActive": 19,
    "daysActive": 576,
    "estimatesDelivered": 233,
    "closedRevenue": 1955802,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (19 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-295",
    "companyName": "Gold Coast Renovations Co.",
    "ownerName": "Cleber Toledo",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "San Diego",
    "state": "CA",
    "onboardingDate": "04/08/2023",
    "monthsActive": 16,
    "daysActive": 487,
    "estimatesDelivered": 101,
    "closedRevenue": 475306,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (16 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-296",
    "companyName": "Granite State Construction Pro",
    "ownerName": "Victor Hugo",
    "specialty": "Pool Decks & Travertine",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "17/12/2023",
    "monthsActive": 7,
    "daysActive": 210,
    "estimatesDelivered": 56,
    "closedRevenue": 383040,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-297",
    "companyName": "Patriot Hardscapes & Pavers",
    "ownerName": "Lucas Ferreira",
    "specialty": "Commercial & Metal Roofs",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "23/10/2023",
    "monthsActive": 13,
    "daysActive": 403,
    "estimatesDelivered": 112,
    "closedRevenue": 506576,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (13 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-298",
    "companyName": "Highline Carpentry & Design",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Whole Home Remodeling",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "25/02/2023",
    "monthsActive": 18,
    "daysActive": 558,
    "estimatesDelivered": 132,
    "closedRevenue": 698016,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (18 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-299",
    "companyName": "Orlando Construction Pro",
    "ownerName": "Paulo Henrique",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "02/08/2023",
    "monthsActive": 19,
    "daysActive": 570,
    "estimatesDelivered": 124,
    "closedRevenue": 508400,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (19 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-300",
    "companyName": "Alpha Framing Contractors",
    "ownerName": "Adriano Ribeiro",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "27/02/2023",
    "monthsActive": 13,
    "daysActive": 397,
    "estimatesDelivered": 126,
    "closedRevenue": 834120,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (13 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-301",
    "companyName": "United Hardscapes & Pavers",
    "ownerName": "Gabriel Costa",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "25/05/2023",
    "monthsActive": 19,
    "daysActive": 571,
    "estimatesDelivered": 175,
    "closedRevenue": 1366750,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (19 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-302",
    "companyName": "All-Star Outdoor Living",
    "ownerName": "Carlos Andrade",
    "specialty": "Finish Carpentry & Millwork",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "15/06/2023",
    "monthsActive": 12,
    "daysActive": 378,
    "estimatesDelivered": 150,
    "closedRevenue": 1365150,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (12 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-303",
    "companyName": "Summit Remodeling Group",
    "ownerName": "Marcos Silva",
    "specialty": "Custom Closets & Cabinets",
    "city": "Nashua",
    "state": "NH",
    "onboardingDate": "21/12/2023",
    "monthsActive": 3,
    "daysActive": 103,
    "estimatesDelivered": 23,
    "closedRevenue": 194028,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-304",
    "companyName": "Titan Custom Homes",
    "ownerName": "Gabriel Costa",
    "specialty": "Commercial & Metal Roofs",
    "city": "Framingham",
    "state": "MA",
    "onboardingDate": "05/12/2023",
    "monthsActive": 9,
    "daysActive": 286,
    "estimatesDelivered": 70,
    "closedRevenue": 562100,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (9 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-305",
    "companyName": "Vanguard Interior Concepts",
    "ownerName": "Fernando Dias",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Atlanta",
    "state": "GA",
    "onboardingDate": "17/03/2023",
    "monthsActive": 14,
    "daysActive": 434,
    "estimatesDelivered": 158,
    "closedRevenue": 1383606,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-306",
    "companyName": "Legacy Renovations Co.",
    "ownerName": "Sergio Mendes",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "23/12/2023",
    "monthsActive": 7,
    "daysActive": 217,
    "estimatesDelivered": 62,
    "closedRevenue": 407960,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-307",
    "companyName": "Alpha Framing Contractors",
    "ownerName": "Marcelo Rezende",
    "specialty": "Interior & Exterior Painting",
    "city": "Worcester",
    "state": "MA",
    "onboardingDate": "15/08/2023",
    "monthsActive": 7,
    "daysActive": 228,
    "estimatesDelivered": 47,
    "closedRevenue": 228655,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-308",
    "companyName": "Bluewater Interior Concepts",
    "ownerName": "Cesar Menotti",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Boston",
    "state": "MA",
    "onboardingDate": "06/11/2023",
    "monthsActive": 12,
    "daysActive": 374,
    "estimatesDelivered": 106,
    "closedRevenue": 528092,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (12 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-309",
    "companyName": "Elite Restorations",
    "ownerName": "Otavio Mello",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Alpharetta",
    "state": "GA",
    "onboardingDate": "17/01/2023",
    "monthsActive": 7,
    "daysActive": 212,
    "estimatesDelivered": 82,
    "closedRevenue": 566948,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (7 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-310",
    "companyName": "Alpha Remodeling Group",
    "ownerName": "Matheus Nogueira",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Danbury",
    "state": "CT",
    "onboardingDate": "15/02/2023",
    "monthsActive": 17,
    "daysActive": 527,
    "estimatesDelivered": 195,
    "closedRevenue": 1178970,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (17 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-311",
    "companyName": "Vanguard Remodeling Group",
    "ownerName": "Murilo Batista",
    "specialty": "Roofing & Storm Restoration",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "03/10/2023",
    "monthsActive": 9,
    "daysActive": 282,
    "estimatesDelivered": 81,
    "closedRevenue": 742203,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (9 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-312",
    "companyName": "First Choice Roofing Solutions",
    "ownerName": "Victor Hugo",
    "specialty": "Custom Closets & Cabinets",
    "city": "Miami",
    "state": "FL",
    "onboardingDate": "02/08/2023",
    "monthsActive": 17,
    "daysActive": 514,
    "estimatesDelivered": 112,
    "closedRevenue": 752192,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (17 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-313",
    "companyName": "Titan Interior Concepts",
    "ownerName": "Renato Ramos",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "09/05/2023",
    "monthsActive": 15,
    "daysActive": 463,
    "estimatesDelivered": 111,
    "closedRevenue": 639138,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-314",
    "companyName": "Stonegate Outdoor Living",
    "ownerName": "Leandro Rocha",
    "specialty": "Commercial & Metal Roofs",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "13/03/2023",
    "monthsActive": 16,
    "daysActive": 497,
    "estimatesDelivered": 148,
    "closedRevenue": 698264,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (16 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-315",
    "companyName": "Craftsman Flooring Specialists",
    "ownerName": "Guilherme Sampaio",
    "specialty": "Custom Closets & Cabinets",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "18/08/2023",
    "monthsActive": 3,
    "daysActive": 102,
    "estimatesDelivered": 45,
    "closedRevenue": 312345,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-316",
    "companyName": "All-Star Interior Concepts",
    "ownerName": "Rivaldo Souza",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "02/08/2023",
    "monthsActive": 3,
    "daysActive": 100,
    "estimatesDelivered": 35,
    "closedRevenue": 148400,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-317",
    "companyName": "Diamond Custom Homes",
    "ownerName": "Alexandre Pires",
    "specialty": "Basement Finishing & Remodel",
    "city": "Brockton",
    "state": "MA",
    "onboardingDate": "19/07/2023",
    "monthsActive": 10,
    "daysActive": 307,
    "estimatesDelivered": 88,
    "closedRevenue": 392304,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (10 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-318",
    "companyName": "Diamond Hardscapes & Pavers",
    "ownerName": "Otavio Mello",
    "specialty": "Hardwood & LVP Flooring",
    "city": "Newark",
    "state": "NJ",
    "onboardingDate": "07/08/2023",
    "monthsActive": 3,
    "daysActive": 101,
    "estimatesDelivered": 38,
    "closedRevenue": 196232,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-319",
    "companyName": "Prime Outdoor Living",
    "ownerName": "Juliano Rossi",
    "specialty": "Wood & Metal Framing",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "01/06/2023",
    "monthsActive": 10,
    "daysActive": 319,
    "estimatesDelivered": 74,
    "closedRevenue": 615088,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (10 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-320",
    "companyName": "Sovereign Restorations",
    "ownerName": "Thiago Oliveira",
    "specialty": "Interior & Exterior Painting",
    "city": "Charleston",
    "state": "SC",
    "onboardingDate": "23/03/2023",
    "monthsActive": 8,
    "daysActive": 250,
    "estimatesDelivered": 52,
    "closedRevenue": 270920,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-321",
    "companyName": "Ironwood Hardscapes & Pavers",
    "ownerName": "Luciano Mendes",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/03/2023",
    "monthsActive": 15,
    "daysActive": 468,
    "estimatesDelivered": 96,
    "closedRevenue": 621312,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Fam\u00edlia mudou-se de estado e encerrou as atividades na regi\u00e3o."
  },
  {
    "id": "ACC-322",
    "companyName": "Everest Construction Pro",
    "ownerName": "Wellington Prado",
    "specialty": "Kitchen & Bath Remodeling",
    "city": "Charlotte",
    "state": "NC",
    "onboardingDate": "10/12/2023",
    "monthsActive": 14,
    "daysActive": 427,
    "estimatesDelivered": 162,
    "closedRevenue": 880632,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-323",
    "companyName": "Orlando Flooring Specialists",
    "ownerName": "Carlos Andrade",
    "specialty": "Roofing & Storm Restoration",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "21/10/2023",
    "monthsActive": 4,
    "daysActive": 125,
    "estimatesDelivered": 46,
    "closedRevenue": 414368,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (4 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-324",
    "companyName": "Elite Custom Homes",
    "ownerName": "Marcos Silva",
    "specialty": "Drywall, Level 5 & Paint",
    "city": "Austin",
    "state": "TX",
    "onboardingDate": "24/06/2023",
    "monthsActive": 13,
    "daysActive": 395,
    "estimatesDelivered": 147,
    "closedRevenue": 1394736,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (13 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-325",
    "companyName": "Heritage Hardscapes & Pavers",
    "ownerName": "Victor Hugo",
    "specialty": "Custom Closets & Cabinets",
    "city": "Dallas",
    "state": "TX",
    "onboardingDate": "15/12/2023",
    "monthsActive": 11,
    "daysActive": 333,
    "estimatesDelivered": 125,
    "closedRevenue": 549250,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (11 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-326",
    "companyName": "Legacy Builders LLC",
    "ownerName": "Victor Hugo",
    "specialty": "Hardwood & LVP Flooring",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "25/11/2023",
    "monthsActive": 15,
    "daysActive": 453,
    "estimatesDelivered": 187,
    "closedRevenue": 1633445,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-327",
    "companyName": "United Builders LLC",
    "ownerName": "Lucas Ferreira",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "13/03/2023",
    "monthsActive": 13,
    "daysActive": 398,
    "estimatesDelivered": 82,
    "closedRevenue": 557600,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (13 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-328",
    "companyName": "SunState Custom Homes",
    "ownerName": "Vinicius Souza",
    "specialty": "Granite & Quartz Fabrication",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "06/01/2023",
    "monthsActive": 3,
    "daysActive": 103,
    "estimatesDelivered": 38,
    "closedRevenue": 341050,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (3 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-329",
    "companyName": "Orlando Remodeling Group",
    "ownerName": "Carlos Andrade",
    "specialty": "Interior & Exterior Painting",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "19/09/2023",
    "monthsActive": 12,
    "daysActive": 369,
    "estimatesDelivered": 88,
    "closedRevenue": 387728,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (12 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-330",
    "companyName": "SunState Construction Pro",
    "ownerName": "Rodrigo Almeida",
    "specialty": "Luxury Home Additions",
    "city": "Boca Raton",
    "state": "FL",
    "onboardingDate": "16/04/2023",
    "monthsActive": 5,
    "daysActive": 159,
    "estimatesDelivered": 69,
    "closedRevenue": 629280,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (5 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-331",
    "companyName": "Sterling Roofing Solutions",
    "ownerName": "Wagner Silveira",
    "specialty": "Patios, Pavers & Retaining Walls",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "22/05/2023",
    "monthsActive": 6,
    "daysActive": 189,
    "estimatesDelivered": 79,
    "closedRevenue": 620703,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (6 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-332",
    "companyName": "First Choice Remodeling Group",
    "ownerName": "Diego Antunes",
    "specialty": "Wood & Metal Framing",
    "city": "West Palm Beach",
    "state": "FL",
    "onboardingDate": "15/05/2023",
    "monthsActive": 14,
    "daysActive": 425,
    "estimatesDelivered": 130,
    "closedRevenue": 800280,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-333",
    "companyName": "Sovereign Roofing Solutions",
    "ownerName": "Paulo Henrique",
    "specialty": "Luxury Bathroom Renovations",
    "city": "Long Island",
    "state": "NY",
    "onboardingDate": "18/01/2023",
    "monthsActive": 14,
    "daysActive": 437,
    "estimatesDelivered": 136,
    "closedRevenue": 1201016,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-334",
    "companyName": "First Choice Painting & Drywall",
    "ownerName": "Andre Guimaraes",
    "specialty": "Wood & Metal Framing",
    "city": "Jersey City",
    "state": "NJ",
    "onboardingDate": "02/09/2023",
    "monthsActive": 10,
    "daysActive": 315,
    "estimatesDelivered": 84,
    "closedRevenue": 607656,
    "monthlyPlan": 1600,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (10 meses de hist\u00f3rico). Motivo: Contrato encerrado amigavelmente ap\u00f3s 1 ano com meta financeira superada."
  },
  {
    "id": "ACC-335",
    "companyName": "Paramount Custom Homes",
    "ownerName": "Denis Vasconcelos",
    "specialty": "Wood & Metal Framing",
    "city": "Tampa",
    "state": "FL",
    "onboardingDate": "02/07/2023",
    "monthsActive": 8,
    "daysActive": 245,
    "estimatesDelivered": 66,
    "closedRevenue": 368148,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (8 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
  },
  {
    "id": "ACC-336",
    "companyName": "Apex Outdoor Living",
    "ownerName": "Gilberto Ramos",
    "specialty": "Commercial & Metal Roofs",
    "city": "Houston",
    "state": "TX",
    "onboardingDate": "11/05/2023",
    "monthsActive": 5,
    "daysActive": 152,
    "estimatesDelivered": 53,
    "closedRevenue": 384515,
    "monthlyPlan": 2200,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 8,
    "notes": "Contrato finalizado (5 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-337",
    "companyName": "First Choice Outdoor Living",
    "ownerName": "Claudio Silva",
    "specialty": "Whole Home Remodeling",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "25/02/2023",
    "monthsActive": 16,
    "daysActive": 484,
    "estimatesDelivered": 120,
    "closedRevenue": 1057920,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (16 meses de hist\u00f3rico). Motivo: Falta de m\u00e3o de obra e pedreiros qualificados para atender o volume gerado."
  },
  {
    "id": "ACC-338",
    "companyName": "Diamond Renovations Co.",
    "ownerName": "Eduardo Santos",
    "specialty": "Custom Closets & Cabinets",
    "city": "San Antonio",
    "state": "TX",
    "onboardingDate": "19/10/2023",
    "monthsActive": 14,
    "daysActive": 433,
    "estimatesDelivered": 119,
    "closedRevenue": 1114316,
    "monthlyPlan": 1800,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (14 meses de hist\u00f3rico). Motivo: Decidiu migrar o modelo exclusivamente para subcontrata\u00e7\u00e3o comercial governamental."
  },
  {
    "id": "ACC-339",
    "companyName": "Granite State Remodeling Group",
    "ownerName": "Diego Antunes",
    "specialty": "Basement Finishing & Remodel",
    "city": "Baltimore",
    "state": "MD",
    "onboardingDate": "24/08/2023",
    "monthsActive": 15,
    "daysActive": 451,
    "estimatesDelivered": 141,
    "closedRevenue": 838386,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 9,
    "notes": "Contrato finalizado (15 meses de hist\u00f3rico). Motivo: Propriet\u00e1rio vendeu a construtora e se aposentou."
  },
  {
    "id": "ACC-340",
    "companyName": "All-Star Restorations",
    "ownerName": "Fabio Vasconcelos",
    "specialty": "Basement Finishing & Remodel",
    "city": "Raleigh",
    "state": "NC",
    "onboardingDate": "05/05/2023",
    "monthsActive": 11,
    "daysActive": 345,
    "estimatesDelivered": 141,
    "closedRevenue": 677364,
    "monthlyPlan": 2000,
    "status": "churned",
    "healthScore": "estavel",
    "nps": 10,
    "notes": "Contrato finalizado (11 meses de hist\u00f3rico). Motivo: Atingiu teto m\u00e1ximo de capacidade f\u00edsica das equipes de execu\u00e7\u00e3o; pausou capta\u00e7\u00e3o externa."
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
  // Default inicia em 'all' (Todas as Contas), conforme padrão de sistemas de CRM
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

  // 2. MÉTRICAS DINÂMICAS REAIS (REFLETEM 100% OS DADOS FILTRADOS)
  const totalFiltered = filteredAccounts.length;
  const activeFilteredCount = filteredAccounts.filter(a => a.status === "ativo").length;
  const sociosFilteredCount = filteredAccounts.filter(a => a.status === "socio").length;
  const churnedFilteredCount = filteredAccounts.filter(a => a.status === "churned").length;

  // Contas com renovação confirmada (>= 90 dias / 3+ meses)
  const over90dCount = filteredAccounts.filter(a => a.monthsActive >= 3).length;
  const onboardingCount = filteredAccounts.filter(a => a.status === "ativo" && a.monthsActive < 3).length;

  // Contas maduras elegíveis para cálculo de renovação pós-90d
  const eligibleMatureCount = selectedFilter === "ativos"
    ? totalFiltered
    : Math.max(1, totalFiltered - onboardingCount);

  // Taxa de Renovação rigorosamente calculada
  const retentionRate = totalFiltered > 0
    ? selectedFilter === "ativos"
      ? ((over90dCount / totalFiltered) * 100).toFixed(1)
      : selectedFilter === "renovacoes" || selectedFilter === "socios"
      ? "100.0"
      : ((over90dCount / eligibleMatureCount) * 100).toFixed(1)
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
    all: { title: "Todas as Contas", technicalDescription: "Diretório consolidado de contas registradas" },
    renovacoes: { title: "Renovações após 90 dias", technicalDescription: "Contas com ciclo operacional superior a 90 dias e renovação confirmada" },
    ativos: { title: "Clientes Ativos", technicalDescription: "Contratos ativos em vigência operacional" },
    socios: { title: "Sócios & Joint Ventures", technicalDescription: "Contas estratégicas com participação societária (equity)" },
    churned: { title: "Contratos Encerrados", technicalDescription: "Histórico de rescisões e encerramentos contratuais" },
    ltv6m: { title: "Permanência > 6 Meses", technicalDescription: "Contas com ciclo contínuo superior a 6 meses" },
    ltv12m: { title: "Permanência > 1 Ano", technicalDescription: "Contas com ciclo contínuo superior a 12 meses" },
    onboarding: { title: "Onboarding (< 90 dias)", technicalDescription: "Contas recentes em período inicial de implementação" },
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
            <span className="text-xs sm:text-sm font-medium text-neutral-300">Construction Partners (USA)</span>
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
                Diretório Operacional de Construtoras
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#1c212c] text-neutral-300 border border-[#2b3344]">
                340 construtoras cadastradas
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Gestão de contas ativas, histórico de LTV, esteira de orçamentos e parceiros societários nos EUA.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => {
                alert("Exportando base de construtoras em formato CSV com métricas de LTV e orçamentos...");
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161a22] border border-[#2b3344] hover:bg-[#1e232e] text-neutral-300 text-xs sm:text-sm font-medium transition-colors"
            >
              <FaDownload className="text-xs" />
              <span>Exportar Base (CSV)</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. KPI METRICS CARDS (MÉTRICAS REAIS E CONGRUENTES) */}
      <section className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          
          {/* KPI 1: Contas no Filtro */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631]">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Total de Contas</span>
              <FaBuilding className="text-neutral-500 text-xs sm:text-sm" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {totalFiltered}
            </div>
            <div className="text-xs text-neutral-400 mt-1.5 truncate">
              <span className="text-emerald-400 font-semibold">{activeFilteredCount} ativas</span>
              {sociosFilteredCount > 0 && <span className="text-blue-400 font-semibold"> • {sociosFilteredCount} sócios</span>}
              {churnedFilteredCount > 0 && <span> • {churnedFilteredCount} encerradas</span>}
            </div>
          </div>

          {/* KPI 2: TAXA REAL DE RENOVAÇÃO (> 90 DIAS) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#12151c] border border-[#212631] relative overflow-hidden">
            <div className="flex items-center justify-between text-neutral-400 text-xs sm:text-sm font-medium mb-1.5">
              <span>Taxa de Renovação (90d+)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight font-mono">
              {retentionRate}%
            </div>
            <div className="text-xs text-neutral-300 mt-1.5 font-medium truncate font-mono">
              {selectedFilter === "ativos"
                ? `${over90dCount} de ${totalFiltered} contas ativas (${onboardingCount} em onboarding)`
                : selectedFilter === "renovacoes" || selectedFilter === "socios"
                ? `${over90dCount} de ${totalFiltered} contas no segmento`
                : `${over90dCount} de ${eligibleMatureCount} contas elegíveis (${onboardingCount} em onboarding)`
              }
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
              {nicheFilter !== "all" ? `Média no nicho: ${nicheNames[nicheFilter]}` : "Permanência média contínua"}
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
              Homeowners nos EUA
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
              Contratos diretos de obras
            </div>
          </div>

        </div>
      </section>

      {/* 4. BARRA DE PESQUISA & FILTROS (100% OPERACIONAL, SEM JARGÃO DE VENDAS) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-[1800px] mx-auto bg-[#101216] p-3 sm:p-4 rounded-2xl border border-[#212631] shadow-xl flex flex-col gap-3">
          
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-3">
            
            {/* 1. DROPDOWN DE SEGMENTO OPERACIONAL */}
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
                        <span>Filtro de Carteira</span>
                        <span className="text-neutral-500">340 Contas</span>
                      </div>

                      <div className="max-h-[440px] overflow-y-auto py-1 divide-y divide-[#1e232e]">
                        
                        {/* Seção 1: Segmentos Contratuais */}
                        <div className="py-1">
                          <span className="px-3 py-1 text-[10px] font-mono uppercase text-neutral-400 font-bold block">
                            Status & Carteira de Contratos
                          </span>

                          {/* Todas as Contas */}
                          <button
                            onClick={() => { setSelectedFilter("all"); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-3 group ${
                              selectedFilter === "all" ? "bg-[#212836] font-bold text-white" : "hover:bg-[#181d27]"
                            }`}
                          >
                            <div>
                              <span className="font-semibold text-white text-xs sm:text-sm block">
                                Todas as Contas (Base Total)
                              </span>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Visão consolidada de todas as contas registradas.
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
                                Contas com permanência superior a 90 dias e renovação confirmada.
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
                                Contas em vigência operacional contínua gerando orçamentos.
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
                                Contas societárias e operações com participação de equity (em azul).
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
                                  Contratos Encerrados (Churn)
                                </span>
                              </div>
                              <p className="text-[11px] text-neutral-400 mt-0.5">
                                Histórico de contratos encerrados e rescisões contratuais.
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
                            Ciclo de Vida Contratual (LTV)
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
                            Filtrar por Especialidade / Nicho
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
                placeholder="Buscar por razão social, sócio, responsável, especialidade, cidade..."
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
              <span><strong>{filteredAccounts.length}</strong> de 340 registros</span>
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
                      <th className="py-3.5 px-4 font-semibold">Conta / Construtora</th>
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
                    Carregar mais 60 construtoras (mostrando {visibleAccounts.length} de {filteredAccounts.length})
                  </button>
                </div>
              )}

              {/* Rodapé da Tabela com Resumo Técnico */}
              <div className="px-4 py-3.5 bg-[#14171f] border-t border-[#212631] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-neutral-400">
                <span>Mostrando {visibleAccounts.length} de {filteredAccounts.length} registros</span>
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
                    Carregar mais 60 construtoras (mostrando {visibleAccounts.length} de {filteredAccounts.length})
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
