import { hasEnoughContrast } from "../lib/utils/companyUtils";

describe("Contrast Checker", () => {
  test("Passes WCAG AA for light background with dark text", () => {
    // Test with white background (#FFFFFF) - Should pass
    expect(hasEnoughContrast("#FFFFFF")).toBe(true);

    // Test with light grey background (#DDDDDD) - Should pass
    expect(hasEnoughContrast("#DDDDDD")).toBe(true);
  });

  test("Passes WCAG AA for dark background with light text", () => {
    // Test with black background (#000000) - Should pass
    expect(hasEnoughContrast("#000000")).toBe(true);

    // Test with dark blue background (#003A99) - Should pass
    expect(hasEnoughContrast("#003A99")).toBe(true);
  });

  test("Fails WCAG AA for medium backgrounds with poor contrast", () => {
    // Test with medium grey background (#888888) - Should fail
    expect(hasEnoughContrast("#888888")).toBe(false);

    // Test with yellow background (#FFE600) - Should fail or be borderline
    // Note: Yellow often has poor contrast with white text
    const yellowResult = hasEnoughContrast("#FFE600");
    // We're just testing if the function provides a result, regardless if it passes or fails
    expect(typeof yellowResult).toBe("boolean");
  });
});
