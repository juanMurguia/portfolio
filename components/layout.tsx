"use client";

import type React from "react";

import { Github, Linkedin, Menu, X, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FloatingDock } from "./ui/floating-dock";
import { IconBrandTwitter } from "@tabler/icons-react";

const tabs = [
  { id: "hello", label: "hello" },
  { id: "about-me", label: "about-me" },
  { id: "portfolio", label: "portfolio" },
  { id: "skills", label: "skills" },
];

const socialLinks = [
  {
    title: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/juan-cruz-murguia/",
  },
  {
    title: "GitHub",
    icon: <Github size={20} />,
    href: "https://github.com/juanMurguia",
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter size={20} />,
    href: "https://x.com/DevJuanCruz",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen pt-4">
      <div className="flex items-center justify-center w-full z-10">
        <FloatingDock
          mobileClassName="fixed bottom-10"
          items={socialLinks}
          desktopClassName="fixed bottom-10"
        />
      </div>

      {/* Main content */}
      <main className="flex-1 pb-16 md:pb-0 md:px-52 sm:px-10">{children}</main>
    </div>
  );
}
