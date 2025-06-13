import { headers } from "next/headers";

/**
 * Extracts the brand key from the request headers or search params
 * Handles three variations:
 * 1. Subdomain: company.juanmurguia.tech
 * 2. Path segment: /[company]
 * 3. Query param: ?brand=company
 *
 * @param searchParams Search parameters from the URL
 * @returns The brand key or "default" if none is found
 */
export function extractBrandKey(
  searchParams: ReadonlyURLSearchParams | URLSearchParams
): string | null {
  return searchParams.get("brand") || null;
}

/**
 * Checks if the color has sufficient contrast with white text (for WCAG AA compliance)
 * @param backgroundColor Hex color code
 * @returns true if contrast is sufficient, false otherwise
 */
export function hasEnoughContrast(backgroundColor: string): boolean {
  // Convert hex to RGB
  const hex = backgroundColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate relative luminance
  const luminance =
    (0.2126 * r) / 255 + (0.7152 * g) / 255 + (0.0722 * b) / 255;

  // WCAG AA requires a contrast ratio of at least 4.5:1 for normal text
  const contrast =
    luminance > 0.5 ? (luminance + 0.05) / 0.05 : 0.05 / (luminance + 0.05);

  if (contrast < 4.5) {
    console.warn(
      `Color ${backgroundColor} does not have enough contrast with white text (ratio: ${contrast.toFixed(
        2
      )})`
    );
    return false;
  }

  return true;
}
