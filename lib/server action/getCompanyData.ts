"use server";

import { fetchCompanyData } from "../services/companyService";

// Secure version that removes password from client response
export async function getCompanyData(slug: string) {
  try {
    const data = await fetchCompanyData(slug);

    // Create a new object without the password field
    const safeData = {
      ...data,
      password: undefined, // This will remove the password property from the client response
    };

    return { data: safeData };
  } catch (error) {
    console.error("Error in server action:", error);
    return { error: "Failed to fetch company data" };
  }
}

// Server-side password verification
export async function verifyCompanyPassword(slug: string, password: string) {
  try {
    const data = await fetchCompanyData(slug);
    const isCorrect = data.password === password;

    return { isCorrect };
  } catch (error) {
    console.error("Error in password verification:", error);
    return { error: "Failed to verify password" };
  }
}
