"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const translations = { en, es } as const;
export type Locale = keyof typeof translations;

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

// Export the context so it can be used in the hook file
export const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("locale") as Locale | null;
      if (stored && translations[stored]) {
        setLocale(stored);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const t = (key: string) => {
    return (
      (translations[locale] as any)[key] ??
      (translations["en"] as any)[key] ??
      key
    );
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};
