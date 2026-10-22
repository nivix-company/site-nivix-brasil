'use client';
import { useEffect } from "react";
import Header from "../Header/Header";
import Headline from "../Headline";
import FormContainer from "../Form/FormContainer";
import ClientsCarousel from "../ClientsForm";
import OurWork from "../OurWork";
import Footer from "../Footer";
import ClientVideos from "../ClientVideos";
import Team from "../Team";
import Plano from "../Plano";
import Ecosystem360 from "../Ecosystem360";
import BuildersCorridaDoOuro from "../BuildersCorridaDoOuro";
import BuildersVantagens from "../BuildersVantagens";
import FinalCTA from "../FinalCTA";
import { NicheType, nicheData } from "../../data/niches";

interface LandingPageTemplateProps {
  niche: NicheType;
}

const LandingPageTemplate = ({ niche }: LandingPageTemplateProps) => {
  const data = nicheData[niche];

  useEffect(() => {
    if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg")) {
      document.documentElement.classList.add("is-chrome");
    }

    // Salva a última vertical visitada para que caso o usuário saia e acesse a raiz (/),
    // ele possa retornar automaticamente para a vertical onde estava.
    try {
      localStorage.setItem("nivix_vertical", data.routePath);
      document.cookie = `nivix_vertical=${encodeURIComponent(data.routePath)}; path=/; max-age=2592000; SameSite=Lax`;
    } catch {
      // ignore storage errors
    }
  }, [data.routePath]);

  const isBuilders = niche === "builders";

  return (
    <main className="w-full h-fit bg-[#101010] relative">
      <Header homeHref={data.routePath} />
      <Headline data={data.hero} />
      <FormContainer data={{ ...data.form, ...data.method, routePath: data.routePath }} />
      <ClientVideos data={data.cases} />
      <ClientsCarousel data={data.carousel} />
      
      {/* Se for builders: A Corrida do Ouro + Badges de Entregáveis */}
      {isBuilders ? (
        <BuildersCorridaDoOuro />
      ) : (
        <Ecosystem360 data={data.ecosystem} />
      )}

      {/* Se for builders: Nossas Vantagens (sem tabela de preço fixo) */}
      {isBuilders ? (
        <BuildersVantagens />
      ) : (
        <Plano data={data.plano} />
      )}

      {/* Equipe mantida apenas para food/pizzarias */}
      {!isBuilders && <Team data={data.team} />}

      <OurWork data={data.faq} />
      <FinalCTA data={data.finalCTA} />
      <Footer />
    </main>
  );
}

export default LandingPageTemplate;
