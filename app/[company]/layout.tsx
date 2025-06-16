"use client";

import React from "react";
import { LocaleProvider } from "@/lib/context/locale";
import { ThemeProvider } from "@/lib/context/theme";
import { usePathname, useSearchParams } from "next/navigation";
import { getCompanyData } from "@/lib/server action/getCompanyData";

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const companySlug = pathname.split("/")[1]; // Extract company slug from URL
  const searchParams = useSearchParams();

  // This is a client component, but we need to get the initial company data
  // Note: In a production app, you might want to fetch this data on the server side
  // and pass it as props or use React Server Components
  const [companyData, setCompanyData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!companySlug) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getCompanyData(companySlug);
        if (data) {
          setCompanyData(data);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companySlug]);

  // The company layout inherits from the root LocaleProvider
  // We just provide the ThemeProvider with company-specific colors
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-dvh">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      ) : companyData ? (
        <ThemeProvider
          primaryColor={companyData.data.primaryColor}
          secondaryColor={companyData.data.secondaryColor}
        >
          {children}
        </ThemeProvider>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
