import { Code } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="section-container">
      <div className="flex items-center mb-8">
        <div className="tab active">
          <span className="font-mono text-sm">_about-me</span>
        </div>
      </div>

      <div className="max-w-2xl p-6 border border-vscode-border rounded-lg bg-vscode-bg-light/50 shadow-md backdrop-blur space-y-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <Code className="text-vscode-accent" />
          About Me
        </h2>
        <p className="leading-relaxed text-vscode-text">
          Hey! I&apos;ma software developer focused on building fast,
          accessible, and elegant user interfaces.
        </p>
        <p className="leading-relaxed text-vscode-text">
          I care about clean code, good UX, and solving real problems. Currently
          creating my own products.
        </p>
      </div>
    </div>
  );
}
