import { NextRequest, NextResponse } from "next/server";

const VALID_VERTICALS = ["/restaurantes", "/pizzarias", "/builders"];
const INTERNAL_ROUTES = ["/crm", "/serp", "/google-search-engine"];
const VALID_TOKENS = ["nivix", "nivix2026", process.env.INTERNAL_ACCESS_TOKEN].filter(Boolean);

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // 0. Bloqueio de rotas internas (/crm e /serp)
  const isInternalRoute = INTERNAL_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  if (isInternalRoute) {
    // Opção para bloquear/deslogar e testar
    if (searchParams.has("lock") || searchParams.has("logout")) {
      const res = NextResponse.redirect(new URL("/", req.url));
      res.cookies.delete("nivix_internal_access");
      return res;
    }

    const hasValidCookie = req.cookies.get("nivix_internal_access")?.value === "granted";
    const tokenParam = searchParams.get("token") || searchParams.get("key");

    if (tokenParam && VALID_TOKENS.includes(tokenParam)) {
      // Autorizado via chave na URL: grava cookie para futuros acessos diretos
      const res = NextResponse.next();
      res.cookies.set("nivix_internal_access", "granted", {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 dias de acesso
        sameSite: "lax",
      });
      return res;
    }

    if (!hasValidCookie) {
      // Acesso não autorizado: redireciona discretamente para a home
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // 1. Se o visitante entrou diretamente em uma vertical (ex: vindo de anúncio),
  // gravamos o cookie 'nivix_vertical' para lembrar onde ele estava caso depois ele digite nivix.company/
  if (VALID_VERTICALS.includes(pathname)) {
    const res = NextResponse.next();
    res.cookies.set("nivix_vertical", pathname, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      sameSite: "lax",
    });
    return res;
  }

  // 2. Se o visitante acessou a raiz (/) e não pediu explicitamente para ver o hub (?hub=1)
  if (pathname === "/" && !searchParams.has("hub")) {
    // 2a. Se ele já estava em uma página específica (/builders, /pizzarias, /restaurantes) e saiu para /,
    // devolvemos ele para a página certa onde deveria estar vendo:
    const savedVertical = req.cookies.get("nivix_vertical")?.value;
    if (savedVertical && VALID_VERTICALS.includes(savedVertical)) {
      return NextResponse.redirect(new URL(savedVertical, req.url));
    }

    // 2b. Se não veio de nenhum anúncio anterior (sem cookie), usamos a geolocalização por IP (Vercel / Cloudflare):
    const country = (
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      ""
    ).toUpperCase();

    if (country === "US") {
      return NextResponse.redirect(new URL("/builders", req.url));
    }

    if (country === "BR") {
      return NextResponse.redirect(new URL("/restaurantes", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/restaurantes",
    "/pizzarias",
    "/builders",
    "/crm",
    "/crm/:path*",
    "/serp",
    "/serp/:path*",
    "/google-search-engine",
    "/google-search-engine/:path*",
  ],
};
