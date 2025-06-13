"use server";

import { fetchCompanyData } from "../services/companyService";

export async function getCompanyData(slug: string) {
  try {
    const data = await fetchCompanyData(slug);
    return { data };
  } catch (error) {
    console.error("Error in server action:", error);
    return { error: "Failed to fetch company data" };
  }
}
