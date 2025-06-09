"use client";
import { useEffect, useRef } from "react";

export default function CursorLight() {
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
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(255,50,50,0.15), transparent 80%)",
      }}
    />
  );
}
