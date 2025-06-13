"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import ProfileImg from "@/app/assets/profile.jpg";
import { ThemeProvider } from "@/lib/context/theme";
import { GlareCard } from "@/components/ui/glare-card";
import { getCompanyData } from "@/lib/server action/getCompanyData";
import Portfolio from "@/components/portfolio";
import useLocale from "@/lib/context/useLocale";
import styles from "./page.module.css"; // Assuming you have a CSS module for styles
import PortfolioLock from "@/components/lock-screen/LockScreen";

// Main page component
export default function CompanyPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const { t } = useLocale();
  const [companyData, setCompanyData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Get the company slug from params
  const companySlug = params?.company as string;

  // Determine locale based on browser language or URL param
  const browserLocale = navigator.language;
  const urlLocale = searchParams?.get("locale");
  const locale = urlLocale || (browserLocale.includes("es") ? "es" : "en");

  useEffect(() => {
    // If company slug is not provided, redirect to the main page
    if (!companySlug) {
      router.push("/");
      return;
    }

    // Fetch company data
    const fetchData = async () => {
      setLoading(true);
      try {
        const companyData = await getCompanyData(companySlug);

        if (!companyData) {
          throw new Error("Failed to fetch company data");
        }

        console.log("Fetched company data:", companyData);
        setCompanyData(companyData);
      } catch (error) {
        console.error("Error fetching company data:", error);
        // Redirect to home page on error
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companySlug, router]);

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

  return (
    <ThemeProvider
      primaryColor={companyData.data.primaryColor}
      secondaryColor={companyData.data.secondaryColor}
    >
      <PortfolioLock
        primaryColor={companyData.data.primaryColor}
        secondaryColor={companyData.data.secondaryColor}
        companyName={companyData.data.name}
        correctPassword={companyData.data.password}
        onUnlock={() => {
          setIsUnlocked(true);
        }}
      >
        <div
          className={`flex-col px-8 gap-16 md:gap-36 flex ${styles.companyContainer}`}
          style={{ backgroundColor: companyData.primaryColor }}
        >
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-center w-full min-h-dvh items-center overflow-hidden gap-4 md:gap-8">
            <div className="max-w-4xl cursor-default w-full flex flex-col items-start md:items-center justify-center text-center gap-6 p-4">
              <h1 className="text-5xl text-left md:text-center md:text-6xl mb-2 text-white">
                {companyData.data.heroTagline[locale as "en" | "es"]}
              </h1>

              <div className="flex flex-row items-center justify-start md:justify-center gap-6 w-full">
                <GlareCard className="h-auto py-4 md:py-2 px-4 flex flex-row items-center justify-center">
                  <Image
                    src={ProfileImg}
                    alt="Juan Murguia"
                    className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover"
                    priority
                  />
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold">Juan Murguia</h2>
                    <p className="text-sm opacity-80">Software Developer</p>
                  </div>
                </GlareCard>

                {companyData.data.logoUrl && (
                  <GlareCard className="h-auto py-4 md:py-2 px-4 flex flex-col items-center justify-center">
                    <Image
                      src={
                        companyData.data.logoUrl.startsWith("//")
                          ? `https:${companyData.data.logoUrl}`
                          : companyData.data.logoUrl
                      }
                      alt={`${companyData.data.name} logo`}
                      className="w-auto h-12 md:h-16 object-contain"
                      width={200}
                      height={80}
                    />
                    <p className="text-sm mt-2">For {companyData.data.name}</p>
                  </GlareCard>
                )}
              </div>
            </div>
          </div>

          {/* Why I'm a Good Fit Section */}
          <div
            id="why-fit"
            className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t("whyImAGreatFitFor")} {companyData.data.name}?
            </h2>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: companyData.data.whyFit?.[locale as "en" | "es"],
              }}
            />
          </div>

          {/* Project Highlights Section */}
          <div
            id="project-highlights"
            className="flex flex-col items-center gap-8 max-w-6xl mx-auto"
          >
            <Portfolio />
          </div>
        </div>

        {/* Testimonials Section - Conditionally Rendered */}
        {companyData.testimonials && companyData.testimonials.length > 0 && (
          <div
            id="testimonials"
            className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What People Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h2> Testimonials </h2>
            </div>
          </div>
        )}
      </PortfolioLock>
    </ThemeProvider>
  );
}
