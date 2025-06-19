import React from "react";
import { Award, Calendar, CheckCircle, MapPin, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";
import useLocale from "@/lib/context/useLocale";

interface ExperienceProps {
  primaryColor?: string; // Main brand color
  secondaryColor?: string; // Contrasting color
}

const Experience = ({
  primaryColor = "#4f46e5", // Default to indigo
  secondaryColor = "#10b981", // Default to emerald
}: ExperienceProps) => {
  const { t, locale: contextLocale } = useLocale();
  return (
    <div className="mb-16">
      {" "}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        style={{ color: `${secondaryColor}` }}
      >
        {t("experience.title")}
      </h2>
      <h2
        className="text-md font-light text-center mb-16"
        style={{ color: `${secondaryColor}` }}
      >
        {t("experience.subtitle")}
      </h2>
      <div className="max-w-4xl mx-auto relative">
        {" "}
        {/* Timeline Line */}
        <div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${secondaryColor}40, ${secondaryColor}80, ${secondaryColor}40)`,
          }}
        ></div>
        {/* Experience Items */}
        <div className="space-y-12">
          {/* Current Position - Bechsud */}
          <div
            className="relative flex flex-col md:flex-row items-start md:items-center"
            style={{
              backgroundColor: `${primaryColor}10`,
            }}
          >
            {/* Timeline Dot */}
            <div
              className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"
              style={{
                backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${secondaryColor}DD)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-75"
                style={{
                  backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${secondaryColor}DD)`,
                }}
              ></div>
            </div>
            {/* Content Card - Right Side */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-4">
              <Card
                className={cn(
                  "backdrop-blur-sm border-white/20 transition-all duration-500 hover:scale-105 group shadow-2xl",
                  "hover:bg-white/15"
                )}
                style={{
                  backgroundColor: `${primaryColor}20`, // 20% opacity to differentiate from parent background
                }}
              >
                <CardContent className="p-6">
                  {/* Current Badge */}
                  <div className="flex items-center justify-between mb-4">
                    {" "}
                    <Badge
                      className="border-0 animate-pulse"
                      style={{
                        backgroundColor: secondaryColor,
                        color: `${primaryColor}`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: `${primaryColor}` }}
                      ></div>
                      {t("experience.current")}
                    </Badge>
                    <div
                      className="flex items-center text-sm"
                      style={{ color: `${secondaryColor}` }}
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {t("experience.bechsud.date")}
                    </div>
                  </div>{" "}
                  <h3
                    className="text-xl font-bold mb-2 transition-colors"
                    style={{ color: `${secondaryColor}` }}
                  >
                    {t("experience.bechsud.title")}
                  </h3>{" "}
                  <div
                    className="flex items-center mb-4"
                    style={{ color: `${secondaryColor}` }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    <span
                      className="font-semibold"
                      style={{ color: `${secondaryColor}` }}
                    >
                      {t("experience.bechsud.company")}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: secondaryColor }}
                      />{" "}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: `${secondaryColor}` }}
                      >
                        <strong style={{ color: `${secondaryColor}` }}>
                          {t("experience.bechsud.achievement1.title")}
                        </strong>{" "}
                        {t("experience.bechsud.achievement1.description")}
                      </p>
                    </div>

                    <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all">
                      <TrendingUp
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: secondaryColor }}
                      />{" "}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: `${secondaryColor}` }}
                      >
                        {" "}
                        <strong style={{ color: `${secondaryColor}` }}>
                          {t("experience.bechsud.achievement2.title")}
                        </strong>{" "}
                        {t("experience.bechsud.achievement2.description")
                          .split("15%")
                          .map((part, i) =>
                            i === 0 ? (
                              <React.Fragment key={i}>
                                {part}
                                <span
                                  className="font-semibold"
                                  style={{ color: secondaryColor }}
                                >
                                  15%
                                </span>
                              </React.Fragment>
                            ) : (
                              part
                            )
                          )}
                      </p>
                    </div>

                    <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all">
                      <Award
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: secondaryColor }}
                      />{" "}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: `${secondaryColor}` }}
                      >
                        <strong style={{ color: `${secondaryColor}` }}>
                          {t("experience.bechsud.achievement3.title")}
                        </strong>{" "}
                        {t("experience.bechsud.achievement3.description")}
                      </p>
                    </div>
                  </div>{" "}
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Next", "React", ".NET MAUI", "Blazor", "C#"].map(
                      (skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs transition-colors hover:bg-opacity-10"
                          style={{
                            borderColor: `${secondaryColor}30`,
                            color: secondaryColor,
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = `${secondaryColor}20`;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          {skill}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>{" "}
          {/* Previous Position - Universal Assistance */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center">
            {" "}
            {/* Timeline Dot */}
            <div
              className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"
              style={{
                backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${secondaryColor}DD)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-75"
                style={{
                  backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${secondaryColor}DD)`,
                }}
              ></div>
            </div>
            {/* Empty div for left side (pushing content to right) */}
            <div className="hidden md:block md:w-1/2"> </div>
            {/* Content Card - Right Side */}
            <div className="ml-16 md:ml-0 md:w-1/2 pl-4">
              {" "}
              <Card
                className="backdrop-blur-sm border-white/20 transition-all duration-500 hover:scale-105 group shadow-2xl"
                style={{
                  backgroundColor: `${primaryColor}20`, // 20% opacity to differentiate from parent background
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      style={{
                        color: `${secondaryColor}`,
                        borderColor: `${secondaryColor}30`,
                        backgroundColor: "transparent",
                      }}
                    >
                      {t("experience.universal.duration")}
                    </Badge>{" "}
                    <div
                      className="flex items-center text-sm"
                      style={{ color: `${secondaryColor}` }}
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {t("experience.universal.date")}
                    </div>
                  </div>{" "}
                  <h3
                    className="text-xl font-bold mb-2 transition-colors"
                    style={{ color: `${secondaryColor}` }}
                  >
                    {t("experience.universal.title")}
                  </h3>{" "}
                  <div
                    className="flex items-center mb-4"
                    style={{ color: `${secondaryColor}` }}
                  >
                    {" "}
                    <MapPin className="w-4 h-4 mr-2" />
                    <span
                      className="font-semibold"
                      style={{ color: `${secondaryColor}` }}
                    >
                      {t("experience.universal.company")}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: `${secondaryColor}` }}
                      />{" "}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: `${secondaryColor}` }}
                      >
                        <strong style={{ color: `${secondaryColor}` }}>
                          {t("experience.universal.achievement1.title")}
                        </strong>{" "}
                        {t("experience.universal.achievement1.description")}
                      </p>
                    </div>

                    <div className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all">
                      <TrendingUp
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: `${secondaryColor}` }}
                      />{" "}
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: `${secondaryColor}` }}
                      >
                        <strong style={{ color: `${secondaryColor}` }}>
                          {t("experience.universal.achievement2.title")}
                        </strong>{" "}
                        {t("experience.universal.achievement2.description")}
                      </p>
                    </div>
                  </div>{" "}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["UI/UX Design", "Figma", "Design Thinking"].map(
                      (skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs transition-colors"
                          style={{
                            borderColor: `${secondaryColor}30`,
                            color: secondaryColor,
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = `${primaryColor}20`;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          {skill}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
