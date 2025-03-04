import { Metadata } from "next";
import Layout from "@/components/layout";
import Hello from "@/components/hello";
import AboutMe from "@/components/about-me";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Juan Murguia | Front-end Developer",
  description: "Front-end developer focused on design and performance",
};

export default function Home() {
  return (
    <Layout>
      <div id="hello" className="min-h-screen">
        <Hello />
      </div>
      <div id="about-me" className="min-h-screen">
        <AboutMe />
      </div>
      <div id="portfolio" className="min-h-screen">
        <Portfolio />
      </div>
      <div id="skills" className="min-h-screen">
        <Skills />
      </div>
      <div id="contact-me" className="min-h-screen">
        <Contact />
      </div>
    </Layout>
  );
}
