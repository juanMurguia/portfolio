"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Lightbulb } from "lucide-react";
import { MoonIcon, SunIcon } from "lucide-react";
export default function ColorSwitch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on a company page
  const isCompanyPage = pathname.split("/").length > 1 && pathname !== "/";

  // Get current color mode from URL or default to normal
  const isInverted = searchParams.get("colorMode") === "inverted";

  // Only show on company pages
  if (!isCompanyPage) {
    return null;
  }

  const toggleColorMode = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (isInverted) {
      params.delete("colorMode");
    } else {
      params.set("colorMode", "inverted");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={toggleColorMode}
      className="ml-4 flex items-center justify-center w-full h-7 opacity-50 bg-white text-gray-900 hover:opacity-90 backdrop-blur-md rounded-full overflow-hidden transition-all"
      aria-label="Toggle color mode"
      title={
        isInverted ? "Switch to normal colors" : "Switch to inverted colors"
      }
    >
      <div className="w-full h-full relative px-5 flex items-center justify-center">
        <div
          className={`absolute inset-0 transition-transform duration-300 flex items-center justify-center ${
            isInverted ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <SunIcon size={16} style={{ color: "currentColor" }} />
        </div>
        <div
          className={`absolute inset-0 transition-transform opacity-70 bg-white text-gray-900 duration-300 flex items-center justify-center ${
            !isInverted ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ color: "currentColor" }}
        >
          <MoonIcon size={16} style={{ color: "currentColor" }} />
        </div>
      </div>
    </button>
  );
}
