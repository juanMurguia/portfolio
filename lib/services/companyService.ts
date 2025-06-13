import { createClient } from "contentful";

/**
 * Fetches company data from the API
 * @param slug The company slug to fetch data for
 * @returns The company data or the default data if the fetch fails
 */

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchCompanyData(slug: string) {
  const entries = await client.getEntries({
    content_type: "customPortfolioCompanies",
    "fields.slug": slug,
    "fields.isVisible": true,
    include: 1,
  });

  if (!entries.items.length) throw new Error("Company not found");
  console.log(
    "Raw Contentful data:",
    JSON.stringify(entries.items[0].fields, null, 2)
  );

  const item = entries.items[0].fields;

  const result = {
    slug: item.slug,
    name: item.name,
    logoUrl:
      ((item.logo as any)?.fields?.file?.url &&
        ((item.logo as any)?.fields?.file?.url.startsWith("//")
          ? `https:${(item.logo as any).fields.file.url}`
          : (item.logo as any).fields.file.url)) ??
      null,
    primaryColor: item.primaryColor,
    secondaryColor: item.secondaryColor,
    heroTagline: {
      en: item.heroTaglineEn,
      es: item.heroTaglineEs,
    },
    whyFit: {
      en: item.whyFitEn,
      es: item.whyFitEs,
    },
    isVisible: item.isVisible,
  };

  // Log the transformed data
  console.log("Transformed data:", JSON.stringify(result, null, 2));

  return result;
}
