"use client";
import { CardStack } from "./ui/card-stack";
import useLocale from "@/lib/context/useLocale";
export default function AboutMe() {
  const { t } = useLocale();
  console.log("useLocale is", useLocale);
  const aboutMeFacts = [
    {
      id: 1,
      name: t("about.fact.location.name"),
      designation: "",
      content: <span>{t("about.fact.location.content")}</span>,
    },
    {
      id: 2,
      name: t("about.fact.energy.name"),
      designation: "",
      content: <span>{t("about.fact.energy.content")}</span>,
    },
    {
      id: 3,
      name: t("about.fact.passion.name"),
      designation: "",
      content: <span>{t("about.fact.passion.content")}</span>,
    },
  ];
  return (
    <div className="flex flex-col md:flex-column items-center justify-space-between w-full min-h-[60dvh] gap-8">
      <div className="w-full md:w-auto p-12 space-y-5 transition-all duration-300  hover:-translate-y-1">
        <h2 className="text-4xl text-center font-bold">{t("about.title")}</h2>

        <p className=" text-gray-400 text-center">{t("about.p1")}</p>
        <p className="text-gray-400 text-center">{t("about.p2")}</p>
      </div>

      <CardStack items={aboutMeFacts} />
    </div>
  );
}
