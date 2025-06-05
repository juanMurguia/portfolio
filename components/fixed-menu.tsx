"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/context/locale";
import Link from "next/link";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";

export default function FixedMenu() {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-light ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-primary transition-colors`}
            >
              {t("menu.home")}
            </Link>
            <Link
              href="#portfolio"
              className={`font-light ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-primary transition-colors`}
            >
              {t("menu.portfolio")}
            </Link>
            <Link
              href="#skills"
              className={`font-light ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-primary transition-colors`}
            >
              {t("menu.skills")}
            </Link>
            <Link
              href="#contact"
              className={`font-light ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-primary transition-colors`}
            >
              {t("menu.contact")}
            </Link>
          </nav>

          {/* Social Links - Always visible on desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/juan-cruz-murguia/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-primary bg-primary/10"
                  : "text-white bg-white/20"
              } hover:bg-primary hover:text-white transition-colors`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/juanMurguia"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-primary bg-primary/10"
                  : "text-white bg-white/20"
              } hover:bg-primary hover:text-white transition-colors`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className={`p-2 rounded-full ${
                scrolled
                  ? "text-primary bg-primary/10"
                  : "text-white bg-white/20"
              } hover:bg-primary hover:text-white transition-colors`}
              aria-label={t("menu.download_cv")}
            >
              <Download size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary z-40 pt-20 px-4 md:hidden">
          <nav className="flex flex-col gap-6 items-center text-white text-xl">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-2">
              {t("menu.home")}
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="py-2"
            >
              {t("menu.portfolio")}
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="py-2"
            >
              {t("menu.skills")}
            </Link>

            <div className="flex gap-6 mt-8">
              <Link
                href="https://www.linkedin.com/in/juan-cruz-murguia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://github.com/juanMurguia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label={t("menu.download_cv")}
              >
                <Download size={24} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
