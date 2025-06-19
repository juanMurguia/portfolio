"use client";

import { useEffect, useState, useRef } from "react";

interface CustomCursorProps {
  color?: string;
  size?: number;
  hoverSize?: number;
  blendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
}

export default function CustomCursor({
  color = "white",
  size = 12,
  hoverSize = 18,
  blendMode = "difference",
}: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState({
    isHovering: false,
    isPointerDown: false,
  });
  const positionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const updateCursorPosition = () => {
      if (el) {
        el.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(updateCursorPosition);
    };

    rafRef.current = requestAnimationFrame(updateCursorPosition);

    const moveCursor = (e: PointerEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerDown = () => {
      setCursorState((prev) => ({ ...prev, isPointerDown: true }));
    };

    const handlePointerUp = () => {
      setCursorState((prev) => ({ ...prev, isPointerDown: false }));
    };

    const handleEnter = () => {
      setCursorState((prev) => ({ ...prev, isHovering: true }));
    };

    const handleLeave = () => {
      setCursorState((prev) => ({ ...prev, isHovering: false }));
    };

    // Attach to all clickable elements
    const selectors =
      'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), label, .clickable';
    const clickable = Array.from(
      document.querySelectorAll<HTMLElement>(selectors)
    );
    clickable.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      el.style.cursor = "none"; // Ensure the default cursor is hidden
    });

    document.body.style.cursor = "none";
    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      clickable.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
        el.style.cursor = ""; // Reset the cursor style
      });

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [size, hoverSize]);

  // Calculate current size based on state
  const currentSize = cursorState.isPointerDown
    ? size * 0.8
    : cursorState.isHovering
    ? hoverSize
    : size;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none "
      style={{
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        backgroundColor: color,
        mixBlendMode: blendMode,
        willChange: "transform",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: cursorState.isHovering
          ? "width 0.2s ease, height 0.2s ease"
          : "none",
      }}
    />
  );
}
