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
      className="px-3 py-1 text-sm rounded-md"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
