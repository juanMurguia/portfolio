import AboutMe from "@/components/about-me";
import Hello from "@/components/hello";
import Layout from "@/components/layout";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Murguia | Software Developer",
  description: "Software developer focused on design and performance",
};

export default function Home() {
  return (
    <Layout>
      <div className="flex-col px-8 gap-16 md:gap-36 flex">
        <div>
          <Hello />
        </div>
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="portfolio" className="min-h-screen">
          <Portfolio />
        </div>
        <div id="skills" className="py-44">
          <Skills />
        </div>
      </div>
    </Layout>
  );
}
