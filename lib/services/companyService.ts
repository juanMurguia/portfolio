import { createClient } from "contentful";

export async function fetchCompanyData(slug: string) {
  try {
    if (
      !process.env.CONTENTFUL_SPACE_ID ||
      !process.env.CONTENTFUL_ACCESS_TOKEN
    ) {
      console.error("Contentful credentials missing");
      throw new Error("Configuration error: Contentful credentials missing");
    }

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const entries = await client.getEntries({
      content_type: "customPortfolioCompanies",
      "fields.slug": slug,
      "fields.isVisible": true,
      include: 1,
    });

    if (!entries.items.length) {
      console.error(`Company not found: ${slug}`);
      throw new Error("Company not found");
    }

    const item = entries.items[0].fields;

    // Return the transformed data
    return {
      slug: item.slug,
      name: item.name,
      role: item.role || "",
      logoUrl:
        ((item.logo as any)?.fields?.file?.url &&
          ((item.logo as any)?.fields?.file?.url.startsWith("//")
            ? `https:${(item.logo as any).fields.file.url}`
            : (item.logo as any).fields.file.url)) ??
        null,
      primaryColor: item.primaryColor || "18181b",
      secondaryColor: item.secondaryColor || "ffffff",
      heroTagline: {
        en: item.heroTaglineEn || "",
        es: item.heroTaglineEs || "",
      },
      whyFit: {
        en: item.whyFitEn || "",
        es: item.whyFitEs || "",
      },
      password: item.password || "",
      isVisible: item.isVisible,
    };
  } catch (error) {
    console.error(`Error fetching company data for slug "${slug}":`, error);
    throw error; // Rethrow to handle in the server action
  }
}
