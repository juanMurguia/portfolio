"use client";
import { useContext } from "react";
import { LocaleContext } from "./locale";

export default function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
