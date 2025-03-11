"use client";
import Spline from "@splinetool/react-spline";
import { useState, useEffect, Suspense } from "react";

export default function Hello() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on client side
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial value
      checkMobile();

      // Add resize listener
      window.addEventListener("resize", checkMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);
  return (
    <div className="section-container flex flex-col md:flex-row justify-space-around h-svh w-full items-center overflow-hidden gap-4 md:gap-0">
      <div className="w-full">
        <p className="text-vscode-text mb-2">Hey, I&apos;m</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Juan Murguia</h1>
        <div className="flex items-center mb-12">
          <span className="text-vscode-accent mr-2">&gt;</span>
          <p className="text-vscode-accent text-xl md:text-2xl">
            Front-end developer
          </p>
        </div>

        <div className="space-y-4 font-mono text-sm">
          <div className="code-line">
            <span className="comment">{"// my info"}</span>
          </div>

          <a
            className="code-line hover:brightness-150 block"
            href="mailto:juancruzmur@gmail.com"
            target="_blank"
          >
            <span className="keyword">const</span>{" "}
            <span className="variable">email</span> ={" "}
            <span className="string">&quot;juancruzmur@gmail.com&quot;</span>;
          </a>

          <a
            className="code-line hover:brightness-150 block"
            href="https://github.com/juanMurguia"
            target="_blank"
          >
            <span className="keyword">const</span>{" "}
            <span className="variable">githubLink</span> ={" "}
            <span className="string">&quot;github.com/juanMurguia&quot;</span>;
          </a>

          <a
            className="code-line hover:brightness-150 block"
            href="https://www.linkedin.com/in/juan-cruz-murguia/"
            target="_blank"
          >
            <span className="keyword">const</span>{" "}
            <span className="variable">linkedinPage</span> ={" "}
            <span className="string">
              &quot;linkedin.com/juan-cruz-murguia&quot;
            </span>
            ;
          </a>
        </div>
      </div>
      <div
        className="scene-container"
        style={{ overflow: "hidden", width: "100%", height: "100%" }}
      >
        <div
          className="zoomed-spline"
          style={
            isMobile
              ? {
                  transform: "scale(1.2) translateY(5%)",
                  width: "100%",
                  height: "100%",
                }
              : {
                  transform: "scale(1.12) translateX(20%) translateY(5%)",
                  width: "100%",
                  height: "100%",
                }
          }
        >
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Spline scene="https://prod.spline.design/qR9xNOFtDzaRXXh7/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
