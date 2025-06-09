"use client";
import ProfileImg from "@/app/assets/profile.jpg";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GlareCard } from "./ui/glare-card";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import useLocale from "@/lib/context/useLocale";
export default function Hello() {
  const { t } = useLocale();
  const [isMobile, setIsMobile] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    // Check if we're on client side
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial value
      checkMobile();

      const timer = setTimeout(() => {
        setShowCard(true);
      }, 2500);

      // Add resize listener
      window.addEventListener("resize", checkMobile);

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkMobile);
        clearTimeout(timer);
      };
    }
  }, []);
  return (
    <div className=" flex flex-col md:flex-row justify-center w-full min-h-dvh items-center overflow-hidden gap-4 md:gap-8">
      <div className="max-w-4xl cursor-default w-full flex flex-col items-start md:items-center justify-center text-center gap-6  p-4">
        <TextGenerateEffect
          words={t("hello.tagline")}
          className="text-5xl text-left md:text-center md:text-6xl mb-2 text-white"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showCard ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlareCard className=" h-auto py-4 md:py-2 px-4  flex flex-row items-center justify-center">
            <Image
              src={ProfileImg}
              width={500}
              height={500}
              alt={t("hello.name")}
              className="rounded-[24px] object-cover h-14 w-14 md:h-10 md:w-10 mr-4"
            />
            <div className="flex flex-col text-left justify-center">
              <h1 className="text-md md:text-sm  mb-0">{t("hello.name")}</h1>
              <div className="flex items-center">
                <p className="text-white-400 text-md md:text-xs font-light">
                  {t("hello.role")}
                </p>
              </div>
            </div>
          </GlareCard>
        </motion.div>
      </div>
    </div>
  );
}
