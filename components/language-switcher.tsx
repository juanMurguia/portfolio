"use client";
import { useLocale } from "@/lib/context/locale";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      className="px-3 py-1 text-sm border rounded-md bg-white/10 hover:bg-white/20"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
