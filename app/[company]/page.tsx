"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProfileImg from "@/app/assets/profile.jpg";
import { getCompanyData } from "@/lib/server action/getCompanyData";
import useLocale from "@/lib/context/useLocale";
import PortfolioLock from "@/components/lock-screen/LockScreen";
import { CompanyCard } from "@/components/CompanyCard";
import { Badge } from "@/components/ui/badge";
import { portfolioItems } from "@/lib/types/portfolio-items";
import { ProjectCard } from "@/components/companies/ProjectCard";
import { TestimonialsCarousel } from "@/components/companies/TestimonialsCarousel";

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
    return (
      <div className="flex items-center justify-center min-h-dvh">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  // In case of error or no data
  if (!companyData) {
    return null; // This will be redirected in the fetch function
  }

  // If the portfolio is locked, show the lock screen
  if (!isUnlocked) {
    return (
      <PortfolioLock
        primaryColor={companyData.data.primaryColor}
        secondaryColor={companyData.data.secondaryColor}
        companyName={companyData.data.name}
        correctPassword={companyData.data.password}
        onUnlock={() => {
          setIsUnlocked(true);
        }}
      >
        {" "}
      </PortfolioLock>
    );
  }

  return (
    <>
      <div
        className={`flex-col px-8 gap-16 md:gap-36 flex `}
        style={{ backgroundColor: `#${companyData.data.primaryColor}` }}
      >
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-center w-full min-h-dvh items-center overflow-hidden gap-4 md:gap-8">
          <div className="max-w-4xl cursor-default w-full flex flex-col items-start md:items-center justify-center text-center gap-6 p-4">
            <Badge
              variant="outline"
              className=" px-4 py-2 rounded-full text-xs shadow-none"
              style={{
                backgroundColor: `#${companyData.data.primaryColor}`,
                color: `#${companyData.data.secondaryColor}`,
                borderColor: `#${companyData.data.secondaryColor}`,
              }}
            >
              {t("crafted.for")} {companyData.data.name}
            </Badge>
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
              <span className="text-2xl text-white">{"🤝"}</span>
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
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto min-h-[80dvh]"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("whyImAGreatFitFor")} {companyData.data.name}?
          </h2>
          <p
            className="text-3xl md:text-xl  text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {companyData.data.whyFit?.[locale as "en" | "es"]}
          </p>
        </div>

        {/* Project Highlights Section */}
        <div
          id="project-highlights"
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto min-h-[80dvh]"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("portfolio.title")}
          </h2>

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
          className="flex flex-col items-center gap-8 max-w-4xl mx-auto min-h-[80dvh]"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center"
            style={{ color: `#${companyData.data.secondaryColor}` }}
          >
            {t("testimonials.title")}
          </h2>

          <TestimonialsCarousel
            primaryColor={companyData.data.primaryColor}
            secondaryColor={companyData.data.secondaryColor}
          />
        </div>
      </div>
    </>
  );
}
