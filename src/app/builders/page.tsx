import LandingPageTemplate from "@/components/Templates/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivix Builders USA - Marketing de Performance para Construtores nos EUA",
  description: "A melhor equipe de marketing para construtores brasileiros nos Estados Unidos. Receba homeowners qualificados e feche contratos de alto ticket.",
};

export default function BuildersPage() {
  return <LandingPageTemplate niche="builders" />;
}
