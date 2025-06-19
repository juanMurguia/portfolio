"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProfileImg from "@/app/assets/profile.jpg";
import {
  getCompanyData,
  verifyCompanyPassword,
} from "@/lib/server action/getCompanyData";
import useLocale from "@/lib/context/useLocale";
import PortfolioLock from "@/components/lock-screen/LockScreen";
import { CompanyCard } from "@/components/CompanyCard";
import { portfolioItems } from "@/lib/types/portfolio-items";
import { ProjectCard } from "@/components/companies/ProjectCard";
import { TestimonialsCarousel } from "@/components/companies/TestimonialsCarousel";
import Experience from "@/components/companies/Experience";
import { FloatingDockCompanies } from "@/components/companies/FloatingDockCompanies";
import CompanyCursorLight from "@/components/companies/CompanyCursorLight";
import CustomCursor from "@/components/companies/CustomCursor";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandGmail, IconBrandTwitter } from "@tabler/icons-react";
import { Linkedin, Github, Mail } from "lucide-react";
import ScrollProgressBar from "@/components/companies/ScrollProgressBar";

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
];

// Main page component
export default function CompanyPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { t, locale: contextLocale } = useLocale();
  const [companyData, setCompanyData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Get the company slug from params
  const companySlug = params?.company as string;

  // Determine locale based on context, browser language or URL param
  const browserLocale =
    typeof navigator !== "undefined" ? navigator.language : "en";
  const urlLocale = searchParams?.get("locale");
  const locale =
    contextLocale || urlLocale || (browserLocale.includes("es") ? "es" : "en");

  useEffect(() => {
    // Fetch company data - this could be optimized since layout.tsx already fetches it
    // In a production app, you might want to use React Context or state management to avoid duplicate fetches
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getCompanyData(companySlug);
        if (data) {
          setCompanyData(data);
        }
        console.log("Company Data:", data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companySlug]);

  // Show loading state while fetching data
  if (loading) {
    const primaryColor = companyData?.data?.primaryColor || "18181b";
    const secondaryColor = companyData?.data?.secondaryColor || "fff";
    const companyName = companyData?.data?.name || "";
    const logoUrl = companyData?.data?.logoUrl;
    return (
      <div
        className="flex flex-col items-center justify-center min-h-dvh gap-6 bg-black/80"
        style={{ backgroundColor: `#${primaryColor}` }}
      >
        {/* Optional: Company Logo */}
        {logoUrl && (
          <img
            src={logoUrl}
            alt={companyName}
            className="w-20 h-20 rounded-full shadow-lg mb-2 animate-fade-in"
          />
        )}
        {/* Spinner */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div
            className="absolute w-full h-full border-4 border-t-transparent border-b-transparent rounded-full animate-spin"
            style={{ borderColor: `#${secondaryColor}` }}
          ></div>
          <div
            className="absolute w-8 h-8 bg-white rounded-full opacity-60"
            style={{ backgroundColor: `#${secondaryColor}99` }}
          ></div>
        </div>
        {/* Animated Text */}
        <div
          className="text-xl font-semibold text-center animate-pulse"
          style={{ color: `#${secondaryColor}` }}
        >
          {companyName ? `Preparing ${companyName}...` : "Loading..."}
          <span className="inline-block animate-bounce">.</span>
          <span className="inline-block animate-bounce delay-150">.</span>
          <span className="inline-block animate-bounce delay-300">.</span>
        </div>
      </div>
    );
  }

  if (!companyData) {
    return null; // This will be redirected in the fetch function
  }

  return (
    <div style={{ cursor: "none!important" }}>
      {/* Main content - always render this */}
      <div className={styles.grainOverlay} />
      <CompanyCursorLight color={`rgba(255,255,255, 0.3)`} size={500} />
      <CustomCursor size={10} hoverSize={20} blendMode="difference" />

      <div
        className={`flex-col px-8 gap-16 md:gap-36 flex items-center ${
          !isUnlocked ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        style={{ backgroundColor: `#${companyData.data.primaryColor}` }}
      >
        <FloatingDockCompanies
          mobileClassName="fixed top-10 z-40"
          items={socialLinks}
          desktopClassName="fixed top-4 z-40"
          primaryColor={`#${companyData.data.primaryColor}`}
          secondaryColor={`#${companyData.data.secondaryColor}`}
        />
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-center w-full min-h-dvh items-center overflow-hidden gap-4 md:gap-8">
          <div className="max-w-4xl cursor-default w-full flex flex-col items-start md:items-center justify-center text-center gap-6 p-4">
            <h4
              className=" rounded-full text-md font-light shadow-none"
              style={{
                color: `#${companyData.data.secondaryColor}`,
              }}
            >
              {t("crafted.for")} {companyData.data.name}
            </h4>
            <h1
              className="text-5xl text-left md:text-center md:text-6xl mb-2 font-bold"
              style={{ color: `#${companyData.data.secondaryColor}` }}
            >
              {companyData.data.heroTagline[locale as "en" | "es"]}
            </h1>

            <div className="flex flex-row items-center justify-start md:justify-center gap-4 w-full">
              <CompanyCard
                name="Juan Murguia"
                role="Software Developer"
                image={ProfileImg.src}
                primaryColor={companyData.data.primaryColor}
                secondaryColor={companyData.data.secondaryColor}
                isPersonal={true}
              />
              <span
                className="text-2xl text-white font-extralight"
                style={{
                  color: `#${companyData.data.secondaryColor}`,
                }}
              >
                {"x"}
              </span>
              {companyData.data.logoUrl && (
                <CompanyCard
                  name={companyData.data.name}
                  image={companyData.data.logoUrl}
                  primaryColor={companyData.data.primaryColor}
                  secondaryColor={companyData.data.secondaryColor}
                  isPersonal={false}
                />
              )}
            </div>
          </div>
        </div>

        {/* Why I'm a Good Fit Section */}
        <div
          id="why-fit"
          className="flex flex-col items-center max-w-4xl mx-auto min-h-[80dvh]"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: `#${companyData.data.secondaryColor}` }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("whyImAGreatFitFor")} {companyData.data.name}?
          </motion.h2>
          <motion.h4
            className="text-md font-light mb-16"
            style={{ color: `#${companyData.data.secondaryColor}` }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("whyImAGreatFitFor.subtitle")}
          </motion.h4>
          <motion.p
            className="text-3xl md:text-xl text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {companyData.data.whyFit?.[locale as "en" | "es"]}
          </motion.p>
        </div>

        {/* Experience Section */}
        <div
          id="experience"
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto min-h-[80dvh]"
        >
          <Experience
            primaryColor={`#${companyData.data.primaryColor}`}
            secondaryColor={`#${companyData.data.secondaryColor}`}
          />
        </div>

        {/* Project Highlights Section */}
        <div
          id="project-highlights"
          className="flex flex-col items-center gap-4 max-w-4xl mx-auto min-h-[80dvh]"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("menu.portfolio")}
          </h2>
          <h4
            className="text-md font-light text-center mb-8"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("menu.portfolio.subtitle")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl">
            {portfolioItems.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                category={t(item.categoryKey)}
                description={t(item.descriptionKey)}
                technologies={item.technologies}
                image={item.image}
                liveUrl={item.liveUrl}
                primaryColor={companyData.data.primaryColor}
                secondaryColor={companyData.data.secondaryColor}
              />
            ))}
          </div>
        </div>
        {/* Testimonials Section - Conditionally Rendered */}

        <div
          id="testimonials"
          className="flex flex-col items-center gap-4 max-w-4xl mx-auto min-h-[90dvh]"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("testimonials.title")}
          </h2>
          <h4
            className="text-md font-light text-center mb-8"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("testimonials.subtitle")}
          </h4>
          <TestimonialsCarousel
            primaryColor={companyData.data.primaryColor}
            secondaryColor={companyData.data.secondaryColor}
          />
        </div>

        {/* Thanks section */}

        <div
          id="thanks"
          className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto min-h-[90dvh]"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
            initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t("cta.final.title")}
          </motion.h2>
          <motion.h2
            className="text-md font-light text-center mb-4"
            style={{ color: `#${companyData.data.secondaryColor}` }}
            initial={{ x: 100, scale: 0.8, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {t("cta.final.thanks")}
          </motion.h2>
          <div className="flex gap-4 z-10">
            <a
              href="https://www.linkedin.com/in/juan-cruz-murguia/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#${companyData.data.secondaryColor}]"
              style={{
                backgroundColor: `#${companyData.data.secondaryColor}`,
                color: `#${companyData.data.primaryColor}`,
              }}
            >
              <Linkedin size={20} className="inline" />
            </a>
            <a
              href="mailto:juan.murguia@gmail.com"
              className="px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#${companyData.data.secondaryColor}]"
              style={{
                backgroundColor: `#${companyData.data.secondaryColor}`,
                color: `#${companyData.data.primaryColor}`,
              }}
            >
              <Mail size={20} className="inline" />
            </a>
          </div>
        </div>
      </div>
      <ScrollProgressBar color={`#${companyData.data.secondaryColor}`} />

      {/* Lock screen overlay with AnimatePresence */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            key="lock"
            initial={{ opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
            style={{
              backgroundColor: `#${companyData.data.primaryColor}`,
            }}
          >
            {" "}
            <PortfolioLock
              primaryColor={companyData.data.secondaryColor}
              secondaryColor={companyData.data.primaryColor}
              companyName={companyData.data.name}
              correctPassword=""
              onUnlock={() => setIsUnlocked(true)}
              verifyPasswordAsync={async (password: string) => {
                const result = await verifyCompanyPassword(
                  companySlug,
                  password
                );
                return result.isCorrect === true;
              }}
            >
              {/* This children prop isn't being used in LockScreen, just passing empty string */}
              {""}
            </PortfolioLock>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
