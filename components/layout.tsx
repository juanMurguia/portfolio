"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";

const tabs = [
  { id: "hello", label: "hello" },
  { id: "about-me", label: "about-me" },
  { id: "portfolio", label: "portfolio" },
  { id: "skills", label: "skills" },
  { id: "contact-me", label: "contact-me" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("hello");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map((tab) => {
        const element = document.getElementById(tab.id);
        if (!element) return { id: tab.id, position: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id: tab.id,
          position: Math.abs(rect.top),
        };
      });

      const closest = sections.reduce((prev, curr) =>
        prev.position < curr.position ? prev : curr
      );

      setActiveTab(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed header with tabs */}
      <header className="sticky top-0 z-50 bg-vscode-bg border-b border-vscode-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="px-4 py-3 font-mono text-sm text-vscode-accent border-r border-vscode-border"
            >
              juan-murguia
            </Link>

            {/* Desktop tabs */}
            <div className="hidden md:flex">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`tab ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="font-mono text-sm">{tab.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-4 text-vscode-text"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Fixed social links */}
          <div className="hidden md:flex items-center gap-8 px-4">
            <a
              href="https://www.linkedin.com/in/juan-cruz-murguia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vscode-text hover:text-vscode-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/juanMurguia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vscode-text hover:text-vscode-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            {/*<a
              href=""
              download
              className="text-vscode-text flex flex-row items-center justify-center gap-2 hover:text-vscode-accent transition-colors"
              aria-label="Download CV"
            >
              <FileDown size={20} />
              <span>CV</span>
            </a>*/}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-vscode-bg-light border-t border-vscode-border">
            <div className="flex flex-col">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`px-4 py-3 font-mono text-sm ${
                    activeTab === tab.id
                      ? "text-vscode-accent"
                      : "text-vscode-text"
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {tab.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 p-4 border-t border-vscode-border">
                <a
                  href="https://www.linkedin.com/in/juan-cruz-murguia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vscode-text hover:text-vscode-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/juanMurguia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vscode-text hover:text-vscode-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                {/*
                <a
                  href=""
                  download
                  className="text-vscode-text hover:text-vscode-accent transition-colors"
                  aria-label="Download CV"
                >
                  <FileDown size={20} />
                </a>
                */}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Fixed social links for mobile (bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-vscode-bg border-t border-vscode-border flex justify-center items-center gap-8">
        <a
          href="https://www.linkedin.com/in/juan-cruz-murguia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-vscode-text hover:text-vscode-accent transition-colors p-4"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/juanMurguia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-vscode-text hover:text-vscode-accent transition-colors p-4"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </a>
        {/*
        <a
          href=""
          download
          className="text-vscode-text hover:text-vscode-accent transition-colors"
          aria-label="Download CV"
        >
          <FileDown size={20} />
        </a>
         */}
      </div>

      {/* Main content */}
      <main className="flex-1 pb-16 md:pb-0">{children}</main>

      {/* Footer */}
      <footer className="border-t border-vscode-border py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm text-vscode-text-muted mb-4 md:mb-0">
            <p className="font-mono text-center">
              {" "}
              &#169; {new Date().getFullYear()} Juan Murguia. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center text-sm">
            <a
              href="https://github.com/juanMurguia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vscode-text-muted hover:text-vscode-accent transition-colors flex items-center"
            >
              <span className="mr-1">@juanMurguia</span>
              <Github size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
