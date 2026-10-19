import { NextRequest, NextResponse } from "next/server";

const VALID_VERTICALS = ["/restaurantes", "/pizzarias", "/builders"];

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

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
  matcher: ["/", "/restaurantes", "/pizzarias", "/builders"],
};
