"use client";
import { useEffect } from "react";
import useLocale from "@/lib/context/useLocale";

// Create a custom event for language changes
const emitLanguageChangeEvent = (locale: string) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("languageChanged", { detail: { locale } });
    window.dispatchEvent(event);
  }
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  // Emit the event whenever locale changes
  useEffect(() => {
    emitLanguageChangeEvent(locale);
  }, [locale]);

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      style={{ lineHeight: "1.5" }}
      className="z-50 m-0 flex items-center justify-center px-3 py-1 h-7 text-xs opacity-50 rounded-full  bg-white text-gray-900 hover:opacity-90 transition-opacity duration-300 "
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
