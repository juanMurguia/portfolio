"use client";
import { createContext, useContext, useEffect } from "react";

interface ThemeContextProps {
  primaryColor: string;
  secondaryColor: string;
  applyTheme: () => void;
}

function hasEnoughContrast(color: string) {
  // Basic implementation - you can expand this as needed
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    // Simple warning for very light colors
    const isVeryLight = /^#([fF]{3}|[fF]{6})$/.test(color);
    if (isVeryLight) {
      console.warn(
        `Color ${color} may not have enough contrast against white text`
      );
    }
  }
  return true;
}

const ThemeContext = createContext<ThemeContextProps>({
  primaryColor: "#3b82f6", // Default blue
  secondaryColor: "#6366f1", // Default indigo
  applyTheme: () => {},
});

export function ThemeProvider({
  children,
  primaryColor,
  secondaryColor,
}: {
  children: React.ReactNode;
  primaryColor: string;
  secondaryColor: string;
}) {
  // Check contrast and warn if not sufficient
  useEffect(() => {
    hasEnoughContrast(primaryColor);
    hasEnoughContrast(secondaryColor);
  }, [primaryColor, secondaryColor]);

  // Function to apply theme colors to CSS variables
  useEffect(() => {
    applyTheme();
  }, [primaryColor, secondaryColor]);

  const applyTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--primary-color",
        primaryColor
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        secondaryColor
      );

      // Create a gradient background
      document.documentElement.style.setProperty(
        "--theme-gradient",
        `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
      );
    }
  };

  // Apply theme when colors change
  useEffect(() => {
    applyTheme();
  }, [primaryColor, secondaryColor]);

  return (
    <ThemeContext.Provider value={{ primaryColor, secondaryColor, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
