import LandingPageTemplate from "@/components/Templates/LandingPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivix Lead Elite - Marketing para Restaurantes",
  description: "A melhor equipe de marketing para restaurantes do Brasil. Ative seu squad de performance e escale seu delivery.",
};

export default function RestaurantesPage() {
  return <LandingPageTemplate niche="geral" />;
}
