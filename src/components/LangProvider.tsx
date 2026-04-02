"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

export type Lang = "en" | "es";
const LangCtx = createContext<Lang>("en");
export const useLang = () => useContext(LangCtx);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lang: Lang = pathname?.startsWith("/es") ? "es" : "en";
  return <LangCtx.Provider value={lang}>{children}</LangCtx.Provider>;
}
