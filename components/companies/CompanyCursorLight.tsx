"use client";
import { useEffect, useRef } from "react";

interface CompanyCursorLightProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export default function CompanyCursorLight({
  color = "rgba(255,255,255,0.05)",
  size = 400,
  opacity = 0.15,
}: CompanyCursorLightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (ref.current) {
        ref.current.style.setProperty("--x", `${e.clientX}px`);
        ref.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-200"
      style={{
        background: `radial-gradient(${size}px circle at var(--x,50%) var(--y,50%), ${color}, transparent 80%)`,
      }}
    />
  );
}
