export interface CaseItem {
  id: number;
  title: string;
  subtitle: string;
  videoSrc: string;
  poster: string;
  className?: string;
  floatDelay?: number;
  metric?: string;
  subMetric?: string;
  location?: string;
  story?: string;
  badge?: string;
  chatAuthor?: string;
  chatHighlight?: string;
  chatDetail?: string;
  googleRanking?: string;
  isAudio?: boolean;
}

export interface ClientTestimonial {
  id: number;
  companyName: string;
  description: string;
  imagePath: string;
  fireImagePath: string;
  fireText: string;
}

export interface PlanFeature {
  title: string;
  desc: string;
}

export interface FaqMainQuestion {
  id: number;
  iconKey: "store" | "money" | "rocket" | "chart";
  title: string;
  answer: string;
  size: string;
  color: string;
}

export interface FaqTechQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface NicheConfig {
  name: string;
  routePath: string;
  hero: {
    highlight: string;
    locationSuffix: string;
    hasSplitFlag?: boolean;
    useUsaGradient?: boolean;
    subtext: string;
    badgeText?: string;
    badgeIcon?: "google" | "crown" | "lock";
  };
  form: {
    methodSubtitle: string;
    authorityText: string;
    riskZeroText: string;
    remarketingSubtext: string;
    currencySymbol: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    revenueOptions: string[];
    investmentOptions: string[];
    leadSourceTag: string;
    hideInvestment?: boolean;
  };
  method: {
    cpaValue: string;
    cpaFormatted: string;
    cpaLabel: string;
    hookTarget: string;
    hookAction: string;
    description: string;
    subDescription: string;
    footer: string;
    roiConfig: {
      defaultInvest: number;
      minInvest: number;
      maxInvest: number;
      stepInvest: number;
      defaultTicket: number;
      minTicket: number;
      maxTicket: number;
      stepTicket: number;
      cpaDivisor: number;
      ticketLabel: string;
      ordersLabel: string;
      revenueLabel: string;
    };
  };
  cases: {
    title?: string;
    titleHighlight?: string;
    subtitle?: string;
    items: CaseItem[];
  };
  carousel: {
    activeClientsCount: number;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    clients: ClientTestimonial[];
  };
  ecosystem: {
    badge: string;
    title: string;
    desc: string;
    platformTitle: string;
    platformDesc: string;
    specialCardTitle: string;
  };
  plano: {
    desc: string;
    currency: string;
    marketAnchor: string;
    price: string;
    annualSavings: string;
    features: PlanFeature[];
  };
  team: {
    subtext: string;
    description: string;
    resultsValueDesc: string;
  };
  faq: {
    mainQuestions: FaqMainQuestion[];
    technicalQuestions: FaqTechQuestion[];
  };
  finalCTA: {
    title: string;
    highlight: string;
    subtitle: string;
  };
}

const defaultFoodRevenueOptions = [
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

const defaultFoodInvestmentOptions = [
  "Nada",
  "Até R$ 1.000",
  "De R$ 1.000 a R$ 5.000",
  "De R$ 5.000 a R$ 10.000",
  "De R$ 10.000 a R$ 20.000",
  "De R$ 20.000 a R$ 30.000",
  "Acima de R$ 30.000",
];

const defaultPizzariasCases: CaseItem[] = [
  {
    id: 1,
    title: "Gratto Pizzaria",
    subtitle: "Escala acelerada e explosão de novos pedidos",
    videoSrc: "",
    poster: "/grattopv.png",
    metric: "Case de Escala & Crescimento",
    location: "Passo Fundo, RS",
    className: "md:col-span-2 md:row-span-2",
    floatDelay: 0,
  },
  {
    id: 2,
    title: "Sabores da Vila",
    subtitle: "+147% em pedidos no 1º mês",
    videoSrc: "/SaboresDaVila.webm",
    poster: "/svlogo.jpeg",
    metric: "+147% Pedidos",
    location: "São Paulo, SP",
    className: "md:col-span-1 md:row-span-2",
    floatDelay: 1,
  },
  {
    id: 3,
    title: "Vellaro Pizzaria",
    subtitle: "De salão vazio a recorde de delivery",
    videoSrc: "/VellaroCase.webm",
    poster: "/vellarologo.jpeg",
    metric: "3 Anos de Parceria",
    location: "Campinas, SP",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 0.5,
  },
  {
    id: 4,
    title: "Gambito Bar",
    subtitle: "Posicionamento e delivery lucrativo",
    videoSrc: "",
    poster: "/gamblogo.jpg",
    metric: "Parceria Estratégica",
    location: "Farroupilha, RS",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 1.5,
  },
  {
    id: 5,
    title: "Anabela - Forno a Lenha",
    subtitle: "Consolidada como maior da região",
    videoSrc: "",
    poster: "/cases/case-anabela.jpg",
    metric: "4 Anos com a Nivix",
    location: "Curitiba, PR",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 2,
  },
];

const defaultFoodCases: CaseItem[] = [
  {
    id: 1,
    title: "Gratto Pizzaria",
    subtitle: "Escala acelerada e explosão de novos pedidos",
    videoSrc: "",
    poster: "/grattopv.png",
    metric: "Case de Escala & Crescimento",
    location: "Passo Fundo, RS",
    className: "md:col-span-2 md:row-span-2",
    floatDelay: 0,
  },
  {
    id: 2,
    title: "Sabores da Vila",
    subtitle: "+147% em pedidos no 1º mês",
    videoSrc: "/SaboresDaVila.webm",
    poster: "/svlogo.jpeg",
    metric: "+147% Pedidos",
    location: "São Paulo, SP",
    className: "md:col-span-1 md:row-span-2",
    floatDelay: 1,
  },
  {
    id: 3,
    title: "Vellaro Pizzaria",
    subtitle: "De salão vazio a recorde de delivery",
    videoSrc: "/VellaroCase.webm",
    poster: "/vellarologo.jpeg",
    metric: "3 Anos de Parceria",
    location: "Campinas, SP",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 0.5,
  },
  {
    id: 4,
    title: "Gambito Bar",
    subtitle: "Posicionamento e delivery lucrativo",
    videoSrc: "",
    poster: "/gamblogo.jpg",
    metric: "Parceria Estratégica",
    location: "Farroupilha, RS",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 1.5,
  },
  {
    id: 5,
    title: "Anabela - Forno a Lenha",
    subtitle: "Consolidada como maior da região",
    videoSrc: "",
    poster: "/cases/case-anabela.jpg",
    metric: "4 Anos com a Nivix",
    location: "Curitiba, PR",
    className: "md:col-span-1 md:row-span-1",
    floatDelay: 2,
  },
];

const defaultFoodClients: ClientTestimonial[] = [
  {
    id: 1,
    companyName: "Gratto Pizzaria",
    description:
      "Referência em alta performance e delivery. Estruturação completa de funil de vendas, branding e escala diária de novos pedidos com a assessoria da Nivix.",
    imagePath: "/grattopv.png",
    fireImagePath: "/fogo.png",
    fireText: "Escala Contínua",
  },
  {
    id: 2,
    companyName: "Vellaro Pizzaria",
    description:
      "Desacreditado de marketing, já tinha feito serviços frustrados com outra agência, a Vellaro confiou em nós e se tornou um dos maiores cases da Nivix",
    imagePath: "/vellarologo.jpeg",
    fireImagePath: "/fogo.png",
    fireText: "3 anos",
  },
  {
    id: 3,
    companyName: "Gambito Bar",
    description:
      "Social media de alto padrão, drinks autorais e reconhecimento na região, com estratégias de delivery e captação de clientes que mudaram o jogo da operação.",
    imagePath: "/gamblogo.jpg",
    fireImagePath: "/fogo.png",
    fireText: "Parceria Elite",
  },
  {
    id: 4,
    companyName: "Anabela - Forno a Lenha",
    description:
      "Um grande desafio, problemas na frota de entregadores, demora na entrega, midia social desorganizada e marketing mal feito. Reprojetamos por completo, hoje a Anabela se consolida a maior pizzaria da cidade",
    imagePath: "/logoclientes3.png",
    fireImagePath: "/fogo.png",
    fireText: "4 anos",
  },
  {
    id: 6,
    companyName: "Restaurante Sabores da Vila",
    description:
      "Salão vazio sem previsibilidade, dificuldade de atrair clientes, ajustamos o posicionamento da marca junto a trafégo de reconhecimento, começamos a encher o salão e ter clientes fiéis.",
    imagePath: "/svlogo.jpeg",
    fireImagePath: "/fogo.png",
    fireText: "10 meses",
  },
];

const defaultFoodPlanFeatures: PlanFeature[] = [
  { title: "Tráfego de Conversão", desc: "Anúncios segmentados de alta conversão." },
  { title: "Social Media Essencial", desc: "Suas redes sociais profissionais que vão dar água na boca." },
  { title: "Engenharia de Cardápio", desc: "Seu cardápio vira uma máquina de pedidos." },
  { title: "Análise de Dados", desc: "Relatórios semanais e mensal pra você ver o progresso." },
  { title: "CRM e Recorrência", desc: "Estratégias para reter a base de clientes e fazê-los pedir sempre." },
  { title: "Automação de Vendas", desc: "IA e Chatbots para não perder pedidos por demora." },
  { title: "Consultoria de Elite", desc: "Squad dedicado para otimizar toda sua operação." },
  { title: "Suporte VIP 24/7", desc: "Acesso direto ao seu gestor via WhatsApp a qualquer hora." },
];

const defaultFoodFaqMain: FaqMainQuestion[] = [
  {
    id: 1,
    iconKey: "store",
    title: 'Meu restaurante é pequeno ou está "bagunçado", serve para mim?',
    answer:
      "Sim. Não somos apenas tráfego; ajudamos a organizar sua Engenharia de Cardápio e Fluxo de Atendimento. Preparamos sua casa para receber a demanda e escalar sem que o marketing se torne um balde furado.",
    size: "md:col-span-2",
    color: "#FFB400",
  },
  {
    id: 2,
    iconKey: "money",
    title: "É um gasto ou investimento?",
    answer:
      "Você não precisa de post bonitinho, precisa de mesa cheia. A Nivix foca em ROI real. Se não entregarmos resultado, seu dinheiro volta.",
    size: "md:col-span-1",
    color: "#00ff2a",
  },
  {
    id: 3,
    iconKey: "rocket",
    title: "Quanto investir?",
    answer:
      "Temos cases de faturamento de 30k com 1.5k de tráfego. Com a Nivix, cada real vai para onde traz retorno real.",
    size: "md:col-span-1",
    color: "#FFB400",
  },
  {
    id: 4,
    iconKey: "chart",
    title: "Vai aumentar o número de pedidos?",
    answer:
      "Não somos agência de curtida. Somos agência de comanda batendo. Já fizemos pizzarias saltarem de 12 para 97 pedidos em 21 dias com estratégias validadas de performance.",
    size: "md:col-span-2",
    color: "#FFEA00",
  },
];

const defaultFoodFaqTech: FaqTechQuestion[] = [
  {
    id: 5,
    question: "O que exatamente a Nivix faz no dia a dia do meu negócio?",
    answer:
      "Cuidamos de toda a inteligência de crescimento: gestão de tráfego (Meta/Google), criação de artes e vídeos para anúncios, otimização do seu cardápio digital e análise semanal de métricas para garantir que o lucro esteja subindo.",
  },
  {
    id: 6,
    question: "Preciso assinar um contrato de fidelidade de longo prazo?",
    answer:
      "Não. Nosso contrato é livre de amarras porque acreditamos no resultado. Se você está lucrando e satisfeito com o serviço, você fica. Você tem total liberdade para cancelar quando quiser, sem multas abusivas.",
  },
  {
    id: 7,
    question: "Como eu acompanho os resultados e o que está sendo feito?",
    answer:
      "Transparência total. Você terá acesso a um grupo exclusivo no WhatsApp com seu gestor e receberá relatórios semanais e mensais detalhando cada centavo investido e o retorno em pedidos gerado.",
  },
  {
    id: 8,
    question: "Além do valor da Nivix, quanto devo investir em anúncios?",
    answer:
      "O investimento em anúncios (Meta/Google) é pago diretamente às plataformas. Recomendamos começar com um valor que faça sentido para sua realidade atual e escalar conforme o lucro for voltando para o caixa.",
  },
];

export const nicheData: Record<"geral" | "pizzarias" | "builders", NicheConfig> = {
  geral: {
    name: "Restaurante",
    routePath: "/restaurantes",
    hero: {
      highlight: "Marketing para Restaurantes",
      locationSuffix: "do Brasil",
      subtext:
        "Com 5 anos de experiência no mercado gastronomico, validamos um método que faz qualquer um vender 10x mais.",
    },
    form: {
      methodSubtitle: "Transformamos seu restaurante em uma máquina de pedidos.",
      authorityText: "Especialistas em Gestão GastronÔmica",
      riskZeroText:
        "Você ganha uma consultoria gratuita do seu negócio inteiro, sem compromisso. Você só tem a ganhar!",
      remarketingSubtext:
        "Cada minuto que você hesita é um pedido que cai no caixa do seu concorrente.",
      currencySymbol: "R$",
      phonePlaceholder: "WhatsApp (ex: 11999999999)",
      companyPlaceholder: "Nome do seu Negócio",
      revenueOptions: defaultFoodRevenueOptions,
      investmentOptions: defaultFoodInvestmentOptions,
      leadSourceTag: "Landing Page Elite - Restaurantes",
    },
    method: {
      cpaValue: "R$ 6",
      cpaFormatted: "R$ 6,00",
      cpaLabel: "Custo por Cliente",
      hookTarget: "cliente novo",
      hookAction: "fazendo pedido?",
      description:
        "Nós validamos o custo médio de aquisição mais agressivo do mercado gastronômico brasileiro.",
      subDescription:
        'Nossa engenharia de tráfego transforma cada <span class="text-white font-bold">R$ 6,00 investidos</span> em uma comanda batendo na sua cozinha.',
      footer:
        "*Baseado no CPA médio de R$ 6,00 validado em mais de 600 operações gastronômicas.",
      roiConfig: {
        defaultInvest: 1600,
        minInvest: 600,
        maxInvest: 10000,
        stepInvest: 100,
        defaultTicket: 115,
        minTicket: 20,
        maxTicket: 200,
        stepTicket: 5,
        cpaDivisor: 6,
        ticketLabel: "Seu Ticket Médio",
        ordersLabel: "Novos Pedidos",
        revenueLabel: "Faturamento Est.",
      },
    },
    cases: {
      title: "Operações Parceiras",
      titleHighlight: "em Todo o Brasil",
      subtitle:
        "Veja como restaurantes e operações de delivery escalaram suas vendas diárias e construíram uma máquina de pedidos com a assessoria da Nivix.",
      items: defaultFoodCases,
    },
    carousel: {
      activeClientsCount: 38,
      titleLine1: "De pizzarias de bairro a",
      titleHighlight: "grandes franquias",
      subtitle:
        "Sem depender de sorte, pessoas como você confiaram em nós para escalar sua operação.",
      clients: defaultFoodClients,
    },
    ecosystem: {
      badge: "Assessoria 360º de Elite",
      title: "ecossistema gastronômico",
      desc: "Não somos apenas uma assessoria, somos um ecossistema gastronômico completo.",
      platformTitle: "gestão gastronômica",
      platformDesc:
        "Imagine ter o CRM, o Cardápio Digital, a Automação e suas Métricas de Growth em um único dashboard exclusivo. Estamos construindo o futuro da gestão gastronômica.",
      specialCardTitle: "Menu Eng.",
    },
    plano: {
      desc: "Garantimos mais resultado e entrega que todas agências do mercado, elevamos o nível da gastronomia brasileira.",
      currency: "R$",
      marketAnchor: "R$ 2.600/mês",
      price: "800",
      annualSavings: "R$ 21.600/ano",
      features: defaultFoodPlanFeatures,
    },
    team: {
      subtext:
        "A parceria que seu negócio merece para atingir novos patamares. Faça parte da equipe que respira e escala o setor gastronômico brasileiro.",
      description: "Ative o centro de comando que respira gastronomia 24h por dia.",
      resultsValueDesc:
        "Nosso objetivo é sempre a performance máxima do seu negócio. Focamos em lotar o seu app de pedidos!",
    },
    faq: {
      mainQuestions: defaultFoodFaqMain,
      technicalQuestions: defaultFoodFaqTech,
    },
    finalCTA: {
      title: "A decisão que vai",
      highlight: "mudar a história do seu negócio.",
      subtitle:
        "O que separa o seu delivery do momento atual para estar travado de pedidos é apenas uma decisão. A mesma decisão que separa você do nível dos seus maiores concorrentes.",
    },
  },
  pizzarias: {
    name: "Pizzaria",
    routePath: "/pizzarias",
    hero: {
      highlight: "Marketing para Pizzarias",
      locationSuffix: "do Brasil",
      subtext:
        "Com 5 anos de experiência, validamos um método que faz qualquer pizzaria <strong>vender 10x mais</strong>, com um custo médio por pedido de 4 reais.",
    },
    form: {
      methodSubtitle: "Transformamos sua pizzaria em uma máquina de pedidos.",
      authorityText: "Somos 100% focados em Pizzarias",
      riskZeroText:
        "Você ganha uma consultoria gratuita da sua pizzaria, sem compromisso. Você só tem a ganhar!",
      remarketingSubtext:
        "Cada minuto que você hesita é um pedido que cai no caixa do seu concorrente.",
      currencySymbol: "R$",
      phonePlaceholder: "WhatsApp (ex: 11999999999)",
      companyPlaceholder: "Nome da sua Pizzaria",
      revenueOptions: defaultFoodRevenueOptions,
      investmentOptions: defaultFoodInvestmentOptions,
      leadSourceTag: "Landing Page Elite - Pizzarias",
    },
    method: {
      cpaValue: "R$ 4",
      cpaFormatted: "R$ 4,00",
      cpaLabel: "Custo por Cliente",
      hookTarget: "cliente novo",
      hookAction: "fazendo pedidos na sua base?",
      description:
        "Nós validamos o custo médio de aquisição mais agressivo do mercado de pizzarias brasileiro.",
      subDescription:
        'Nossa engenharia de tráfego transforma cada <span class="text-white font-bold">R$ 4,00 investidos</span> em um cliente novo fazendo pedidos na sua base.',
      footer:
        "*Baseado no CPA médio de R$ 4,00 validado em centenas de pizzarias de sucesso.",
      roiConfig: {
        defaultInvest: 1600,
        minInvest: 600,
        maxInvest: 10000,
        stepInvest: 100,
        defaultTicket: 115,
        minTicket: 20,
        maxTicket: 200,
        stepTicket: 5,
        cpaDivisor: 4,
        ticketLabel: "Seu Ticket Médio",
        ordersLabel: "Novos Pedidos",
        revenueLabel: "Faturamento Est.",
      },
    },
    cases: {
      title: "Pizzarias Parceiras",
      titleHighlight: "em Todo o Brasil",
      subtitle:
        "Veja como donos de pizzarias transformaram suas operações, saindo da dependência do iFood e escalando pedidos diários com margem e previsibilidade através da assessoria da Nivix.",
      items: defaultPizzariasCases,
    },
    carousel: {
      activeClientsCount: 34,
      titleLine1: "De pizzarias de bairro a",
      titleHighlight: "grandes franquias",
      subtitle:
        "Sem depender de sorte, pessoas como você confiaram em nós para escalar sua operação.",
      clients: defaultFoodClients,
    },
    ecosystem: {
      badge: "Assessoria 360º para Pizzarias",
      title: "ecossistema de alta performance",
      desc: "Somos o braço direito da sua pizzaria. Do tráfego à engenharia do cardápio focado em pizza.",
      platformTitle: "gestão de pizzarias",
      platformDesc:
        "Imagine ter o CRM, o Cardápio Digital, a Automação e suas Métricas de Growth em um único dashboard exclusivo. Estamos construindo o futuro da gestão de pizzarias.",
      specialCardTitle: "Menu Eng.",
    },
    plano: {
      desc: "A estratégia exata que faz pizzarias saírem do amadorismo para a escala industrial de pedidos.",
      currency: "R$",
      marketAnchor: "R$ 2.600/mês",
      price: "800",
      annualSavings: "R$ 21.600/ano",
      features: defaultFoodPlanFeatures,
    },
    team: {
      subtext:
        "A parceria que sua pizzaria merece. Faça parte da equipe que respira o mercado de pizzarias 24h por dia.",
      description: "Ative o QG que entende tudo sobre massa, forno e escala de pedidos.",
      resultsValueDesc:
        "Nosso objetivo é sempre a performance máxima do seu negócio. Focamos em lotar o seu app de pedidos!",
    },
    faq: {
      mainQuestions: defaultFoodFaqMain,
      technicalQuestions: defaultFoodFaqTech,
    },
    finalCTA: {
      title: "A decisão que vai",
      highlight: "mudar a história da sua pizzaria.",
      subtitle:
        "O que separa a sua pizzaria do faturamento atual para o forno travado de pedidos é apenas uma decisão. É hora de dominar a sua região e deixar o amadorismo para trás.",
    },
  },
  builders: {
    name: "Construtores USA",
    routePath: "/builders",
    hero: {
      highlight: "Marketing para Construtores",
      locationSuffix: "na América",
      hasSplitFlag: true,
      useUsaGradient: true,
      badgeText: "Top 1 do google garantido",
      badgeIcon: "google",
      subtext:
        "Validamos o método americano que coloca <strong>estimates com homeowners qualificados</strong> direto na sua agenda todas as semanas, sem depender de GC ou plataformas de leads compartilhados.",
    },
    form: {
      methodSubtitle:
        "Montamos uma máquina de estimates para sua construtora nos EUA <strong>fechar serviços semanais de alto ticket e escalar</strong> sem depender de GC ou intermediários.",
      authorityText: "Exclusivo para brasileiros da construção na América",
      riskZeroText:
        "Nossa consultoria gratuita é uma verdadeira aula estratégica. Sem compromisso: mesmo que você não feche com a gente, sai de lá com tudo em mãos para encher sua agenda de estimates.",
      remarketingSubtext:
        "Cada dia que você deixa pra depois é uma obra na mão do seu concorrente. <span class=\"text-white font-bold\">O melhor momento é agora, torne-se referência na sua região.</span>",
      currencySymbol: "$",
      phonePlaceholder: "WhatsApp / Phone (ex: +1 407 555-0199)",
      companyPlaceholder: "Nome da sua Company / Construtora",
      hideInvestment: true,
      revenueOptions: [
        "Até $15k / mês",
        "$15k a $30k / mês",
        "$30k a $60k / mês",
        "$60k a $100k / mês",
        "$100k a $300k / mês",
        "$300k a $500k / mês",
        "$500k+ / mês",
      ],
      investmentOptions: [
        "Nada no momento",
        "Até $500 / mês",
        "De $500 a $1,500 / mês",
        "De $1,500 a $3,000 / mês",
        "De $3,000 a $6,000 / mês",
        "Acima de $6,000 / mês",
      ],
      leadSourceTag: "Landing Page Elite - Builders USA",
    },
    method: {
      cpaValue: "$ 25",
      cpaFormatted: "$ 25,00",
      cpaLabel: "Custo por Lead Qualificado",
      hookTarget: "homeowner qualificado",
      hookAction: "pedindo orçamento?",
      description:
        "Nós validamos o custo de aquisição de obras e reformas mais lucrativo para construtores brasileiros nos Estados Unidos.",
      subDescription:
        'Nossa engenharia de captação transforma cada <span class="text-white font-bold">$ 25,00 investidos</span> em um homeowner real solicitando estimate exclusivo para a sua empresa.',
      footer:
        "*Baseado no CPL médio de $25 validado em operações de Remodeling, Roofing, Pavers, Flooring e General Contractors nos EUA.",
      roiConfig: {
        defaultInvest: 1500,
        minInvest: 500,
        maxInvest: 10000,
        stepInvest: 100,
        defaultTicket: 8500,
        minTicket: 1500,
        maxTicket: 50000,
        stepTicket: 500,
        cpaDivisor: 25,
        ticketLabel: "Ticket Médio por Obra",
        ordersLabel: "Estimates Qualificados",
        revenueLabel: "Pipeline Est. em Obras",
      },
    },
    cases: {
      title: "Nossos Parceiros",
      titleHighlight: "na América",
      subtitle:
        "Veja como brasileiros da construção escalaram suas empresas montando uma máquina de estimates com a Nivix, fazendo serviços particulares toda semana.",
      items: [
        {
          id: 1,
          title: "Summit Builders",
          subtitle: "Roofing & Siding",
          videoSrc: "",
          poster: "/social-proof-builders/social-proof-1.jpg",
          metric: "Top #1 Google • +254 Reviews 5★",
          subMetric: "Contrato Fechado em Douglasville",
          location: "Douglasville & Região, GA",
          story:
            "Pedro fechou mais uma obra em Douglasville. Posicionado no topo absoluto do Google Maps, recebendo novos serviços particulares toda semana sem terceirização.",
          badge: "Top 1 Google Local",
          chatAuthor: "Pedro - Summit Builders",
          chatHighlight: "Cliente de Douglasville fechado 👏🙌🎉",
          chatDetail: "5:36 PM • Grupo VIP Nivix",
          googleRanking: "Top 1 no Google • 4.8 ★ (254 avaliações)",
          className: "md:col-span-2 md:row-span-2",
          floatDelay: 0,
        },
        {
          id: 2,
          title: "Terranov",
          subtitle: "Pavers & Hardscape",
          videoSrc: "",
          poster: "/social-proof-builders/social-proof-2.jpg",
          metric: "3 Estimates/Dia • Acima de $3,000 Cada",
          subMetric: "Agenda Lotada de Obras",
          location: "Flórida, EUA",
          story:
            "Diego no WhatsApp da Nivix: 3 ligações de homeowners qualificadas no mesmo dia para agendar orçamentos de alto padrão sem margem de intermediários.",
          badge: "Estimates de Alto Ticket",
          chatAuthor: "Diego - Terranov",
          chatHighlight: "Minha esposa recebeu três ligações hoje... não vai ser menos de $3.000 cada um",
          chatDetail: "Áudio 0:05 • Grupo VIP Nivix",
          isAudio: true,
          className: "md:col-span-1 md:row-span-1",
          floatDelay: 1,
        },
        {
          id: 3,
          title: "Rodrigo's Flooring",
          subtitle: "Flooring Solutions & Decks",
          videoSrc: "",
          poster: "/social-proof-builders/social-proof-3.jpg",
          metric: "+$20,000 Fechados em 1 Semana",
          subMetric: "5.0 ★★★★★ (110 Reviews)",
          location: "Charlotte, NC • +1 (704) 425-4698",
          story:
            "Rodrigo mandando foto da obra e agradecendo a semana cheia: de subcontratado a dono da própria demanda, fechando $20k em 7 dias direto com homeowners americanos.",
          badge: "Semana de $20K",
          chatAuthor: "~ Rodrigo - Flooring",
          chatHighlight: "Boa tarde rapazes, obrigado pela semana cheia 🙏 Fecharemos essa semana em $20k",
          chatDetail: "1:38 PM • Grupo VIP Nivix",
          googleRanking: "Top 1 Google • 5.0 ★ (110 avaliações)",
          className: "md:col-span-1 md:row-span-2",
          floatDelay: 2,
        },
        {
          id: 4,
          title: "Pro Fences",
          subtitle: "Quality Fencing Solutions",
          videoSrc: "",
          poster: "/social-proof-builders/social-proof-4.jpg",
          metric: "Top #1 Google • Raleigh, NC",
          subMetric: "Clientes Diários sem Intermediário",
          location: "Raleigh, NC & Lake Norman",
          story:
            "Pedro avisando à noite: 'Amanhã cedo já temos mais um cliente 🙌'. Posicionado no topo absoluto das buscas de cercas na Carolina do Norte.",
          badge: "Agenda Diária Cheia",
          chatAuthor: "Pedro - Pro Fences",
          chatHighlight: "Amanhã cedo já temos mais um cliente 🙌",
          chatDetail: "10:04 PM • Grupo VIP Nivix",
          googleRanking: "Top 1 Local SEO • 4.8 ★ (102 avaliações)",
          className: "md:col-span-1 md:row-span-1",
          floatDelay: 0.5,
        },
        {
          id: 5,
          title: "Sua Construtora Aqui",
          subtitle: "Remodeling, Flooring, Roofing, Pavers & Framing",
          videoSrc: "",
          poster: "/flags-blend.jpg",
          metric: "+3 a 6 Estimates de Alto Padrão por Semana",
          subMetric: "Exclusividade Territorial",
          location: "Flórida e Regiões dos EUA",
          story:
            "Você não veio para os EUA para viver de migalhas de GC ou depender de indicação de boca a boca que oscila todo mês. A Nivix coloca sua construtora no Top 1 do Google e constrói um fluxo contínuo de estimates particulares com homeowners americanos, com margem cheia e agenda previsível.",
          badge: "O Próximo Case na América",
          className: "lg:col-span-2",
          floatDelay: 1.5,
        },
      ],
    },
    carousel: {
      activeClientsCount: 26,
      titleLine1: "De contractors autônomos a",
      titleHighlight: "grandes construtoras nos EUA",
      subtitle:
        "Sem depender de Angi, HomeAdvisor ou sorte: brasileiros nos EUA confiaram na Nivix para escalar seus contratos.",
      clients: [
        {
          id: 1,
          companyName: "Rodrigos Flooring",
          description:
            "Faturava  em média $15K/mês vindo de um contractor que me terceirizava, depois da parceria com a Nivix, 15K é o que fazemos por cada serviço, hoje meu faturamento nunca é menos que $60K/mês, tratando diretamente com homeowners sem deixar % com contractor nenhum, apenas eu, meu filho e mais um funcionário.",
          imagePath: "/social-proof-builders/rodrigos-flooring-logo.png",
          fireImagePath: "/fogo.png",
          fireText: "200K faturados em 3 meses",
        },
        {
          id: 2,
          companyName: "Summit Builders",
          description:
            "Pedro já era um expert da construção e gerenciava 2 equipes que não tinham suas capacidades lotadas. Depois da implementação da nossa maquina de aquisição a demanda das duas equipes foi preenchida e ele estruturou mais duas equipe, assim atingindo a marca dos 200 mil dólares mensais.",
          imagePath: "/social-proof-builders/summit-builders-logo.png",
          fireImagePath: "/fogo.png",
          fireText: "De 70K para 200k mensais",
        },
        {
          id: 3,
          companyName: "JS Drywall",
          description:
            "Antes de trabalhar com a Nivix, a JS Drywall dependia do boca a boca e de serviços pontuais de baixo valor, o que mantinha o faturamento estagnado nos $20K/mês. Com a estruturação da nossa máquina de aquisição e posicionamento local, passamos a captar projetos completos de remodelação de alto ticket. Em 3 meses, triplicamos o faturamento mensal atingindo a marca constante dos $70K/mês, mantendo a agenda lotada com clientes diretos e margens muito mais altas",
          imagePath: "/social-proof-builders/js-drywall-logo.png",
          fireImagePath: "/fogo.png",
          fireText: "De 20k para 70k mensais",
        },
        {
          id: 4,
          companyName: "Terranov",
          description:
            "A Terranov já entregava um trabalho impecável no campo, mas a operação dependia da sazonalidade e da incerteza de indicações. Faltava uma engenharia de vendas previsível. Quando implementamos o sistema de atração e conversão da Nivix, o jogo mudou do dia para a noite: a região foi dominada, cortada a dependência de intermediários e criamos uma fila de espera de projetos. Em apenas 4 meses de parceria, geramos mais de um quarto de milhão de dólares em faturamento direto, consolidando a Terranov como referência absoluta no mercado.",
          imagePath: "/social-proof-builders/terranov-logo.png",
          fireImagePath: "/fogo.png",
          fireText: "$250K faturados em 4 meses",
        },
      ],
    },
    ecosystem: {
      badge: "Assessoria 360º para Builders nos EUA",
      title: "ecossistema de captação de obras",
      desc: "Não somos apenas gestores de tráfego. Construímos toda a máquina americana de aquisição de clientes exclusivos para a sua construtora.",
      platformTitle: "gestão para builders nos EUA",
      platformDesc:
        "Imagine ter o CRM de Obras, Pipeline de Estimates, Automação de Follow-up via SMS/WhatsApp e suas Métricas de Growth em um único dashboard exclusivo. Estamos construindo o futuro da gestão para builders nos EUA.",
      specialCardTitle: "Funil de Obras",
    },
    plano: {
      desc: "A estrutura completa para você parar de depender de sub-empreita e fechar contratos diretos de alto valor com homeowners americanos.",
      currency: "$",
      marketAnchor: "$ 2,600/mês",
      price: "800",
      annualSavings: "$ 21,600/ano",
      features: [
        {
          title: "Tráfego Local de Alta Intenção",
          desc: "Campanhas no Meta Ads e Google Ads focadas em homeowners nos melhores zip codes.",
        },
        {
          title: "Posicionamento Americano",
          desc: "Criativos, copies em inglês nativo e vitrine profissional que transmitem autoridade nos EUA.",
        },
        {
          title: "Funil de Estimates Exclusivos",
          desc: "Leads 100% exclusivos da sua empresa — sem dividir orçamento com 5 concorrentes.",
        },
        {
          title: "Google Business & Local SEO",
          desc: "Otimização para sua construtora aparecer no topo das buscas locais da sua região.",
        },
        {
          title: "CRM e Pipeline Comercial",
          desc: "Organização completa dos seus orçamentos em aberto para não perder nenhuma obra no follow-up.",
        },
        {
          title: "Automação de Qualificação",
          desc: "Filtros inteligentes para separar curiosos (tire-kickers) de clientes prontos para fechar.",
        },
        {
          title: "Consultoria de Escala USA",
          desc: "Squad bilíngue dedicado que entende a realidade do construtor brasileiro na América.",
        },
        {
          title: "Suporte VIP 24/7",
          desc: "Atendimento em português direto no WhatsApp com seu gestor a qualquer hora.",
        },
      ],
    },
    team: {
      subtext:
        "A parceria estratégica que sua empresa nos EUA merece para sair da guerra de preços. Faça parte da equipe que escala construtores brasileiros em solo americano.",
      description:
        "Ative o QG de performance que domina o mercado de Construction & Home Improvement nos EUA.",
      resultsValueDesc:
        "Nosso objetivo é sempre a performance máxima da sua construtora. Focamos em lotar a sua agenda de estimates e contratos de alto ticket!",
    },
    faq: {
      mainQuestions: [
        {
          id: 1,
          iconKey: "store",
          title:
            "Ainda trabalho muito com sub-empreita ou minha empresa é pequena nos EUA, serve para mim?",
          answer:
            "Sim! Nosso método foi desenhado justamente para fazer você conquistar seus próprios contratos diretos com homeowners americanos, aumentando sua margem de lucro e deixando de ficar refém de terceiros.",
          size: "md:col-span-2",
          color: "#FFB400",
        },
        {
          id: 2,
          iconKey: "money",
          title: "Qual a diferença para Angi, Thumbtack ou HomeAdvisor?",
          answer:
            "Nas plataformas você paga caro por leads compartilhados com outros 5 empreiteiros brigando pelo menor preço. Na Nivix, geramos leads 100% exclusivos para a sua marca.",
          size: "md:col-span-1",
          color: "#00ff2a",
        },
        {
          id: 3,
          iconKey: "rocket",
          title: "Quanto devo investir em anúncios?",
          answer:
            "Um único contrato de reforma, telhado, piso ou paver já paga meses de investimento. Começamos focados nos zip codes mais lucrativos da sua região.",
          size: "md:col-span-1",
          color: "#FFB400",
        },
        {
          id: 4,
          iconKey: "chart",
          title: "Os anúncios são feitos em Inglês para americanos?",
          answer:
            "Sim! Você fala com nossa equipe em Português no dia a dia, mas toda a comunicação dos seus anúncios, páginas e scripts é feita em Inglês nativo focado em converter homeowners americanos de alto poder aquisitivo.",
          size: "md:col-span-2",
          color: "#FFEA00",
        },
      ],
      technicalQuestions: [
        {
          id: 5,
          question: "Quais nichos da construção nos EUA vocês atendem?",
          answer:
            "Atendemos General Contractors, Kitchen & Bath Remodeling, Roofing, Siding, Pavers & Hardscape, Flooring, Painting, Framing, Decks, Concrete, Landscaping e Custom Homes em todos os estados americanos.",
        },
        {
          id: 6,
          question: "Preciso assinar um contrato de fidelidade de longo prazo?",
          answer:
            "Não. Nosso contrato é livre de amarras porque confiamos no resultado que colocamos no seu bolso. Se sua agenda de estimates está cheia e você está fechando obras, você continua conosco.",
        },
        {
          id: 7,
          question: "Como filtramos leads curiosos (tire-kickers)?",
          answer:
            "Segmentamos os anúncios por bairros e renda familiar (zip codes de alto padrão) e utilizamos perguntas qualificadoras no funil antes do lead chegar ao seu comercial, garantindo que você fale com proprietários reais.",
        },
        {
          id: 8,
          question: "Como funciona o acompanhamento no dia a dia?",
          answer:
            "Você terá um grupo exclusivo no WhatsApp com nosso time de especialistas falando em Português, relatórios semanais claros de quantos leads entraram, custo por orçamento e acompanhamento comercial.",
        },
      ],
    },
    finalCTA: {
      title: "A decisão que vai",
      highlight: "escalar sua construtora nos EUA.",
      subtitle:
        "O que separa a sua empresa de depender de indicações para ter uma fila de homeowners qualificados pedindo orçamento toda semana é apenas uma decisão. Domine sua região na América agora.",
    },
  },
};

export type NicheType = keyof typeof nicheData;
