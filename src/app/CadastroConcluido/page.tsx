"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CadastroConcluido() {
  const [returnHref, setReturnHref] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      const params = new URLSearchParams(window.location.search);
      const from = params.get("from");
      const savedVertical = localStorage.getItem("nivix_vertical");
      if (from && from.startsWith("/")) {
        setReturnHref(from);
      } else if (savedVertical && savedVertical.startsWith("/")) {
        setReturnHref(savedVertical);
      }
    }
  }, []);

  return (
    <div className="flex items-center h-screen justify-center">
        <div className="flex flex-col items-center mb-15">
            <Link href={returnHref}>
            <Image
              src="/logo.png"
              alt="Logo da empresa"
              width={160}
              height={160}
              className="hover:opacity-80 transition"
            />
          </Link>
        <div className="absolute top-[49%] md:top-[55%] left-1/2 w-[380px] h-[600px] md:w-[600px] lg:w-[1000px] md:h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full z-0 pointer-events-none blur-2xl bg-[radial-gradient(circle,rgba(255,180,0,0.4)_0%,rgba(255,180,0,0.05)_20%,rgba(255,180,0,0)_90%)]" />

          <h1 className="flex flex-col items-center text-5xl md:text-6xl font-extrabold mb-4 relative">
            Cadastro <span className="text-[#FFB400]">Concluído!</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl relative text-center">
            Nos próximos minutos, o nosso time de especialistas entrará em contato
            com você para entender melhor o seu negócio e saber se realmente podemos
            te ajudar a acelerar suas vendas.
          </p>
        </div>
    </div>
  );
}
