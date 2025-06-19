"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageBackground() {
  const pathname = usePathname();
  const [isMainPage, setIsMainPage] = useState(true);

  useEffect(() => {
    // Check if we're on the main page (not in a company page)
    const isMain = pathname === "/";
    setIsMainPage(isMain);

    // Apply the class to the body element directly
    if (isMain) {
      document.body.classList.add("main-page-body");
    } else {
      document.body.classList.remove("main-page-body");
    }
  }, [pathname]);

  // Only render the noise background on the main page
  return <div className="bg-noise" aria-hidden="true" />;
}
