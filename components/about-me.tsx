export default function AboutMe() {
  return (
    <div className="section-container">
      <div className="flex items-center mb-8">
        <div className="tab active">
          <span className="font-mono text-sm">_about-me</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-vscode-text">
            <p className="code-line">
              <span className="comment">{"/**"}</span>
            </p>
            <p className="code-line">
              <span className="comment">
                {" "}
                * I am a front-end developer with a strong focus on delivering
              </span>
            </p>
            <p className="code-line">
              <span className="comment">
                {" "}
                * responsive, high-performance web applications that exceed user
              </span>
            </p>
            <p className="code-line">
              <span className="comment">
                {" "}
                * expectations and drive business outcomes. I also have
                expanding
              </span>
            </p>
            <p className="code-line">
              <span className="comment">
                {" "}
                * back-end skills, enabling me to build efficient full-stack
              </span>
            </p>
            <p className="code-line">
              <span className="comment"> * solutions.</span>
            </p>
            <p className="code-line">
              <span className="comment"> {" */"}</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">My Approach</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-vscode-accent">
                Design-Driven Development
              </h4>
              <p className="text-vscode-text-muted">
                I work closely with designers to create seamless, user-friendly
                interfaces that drive results.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-vscode-accent">
                Full-Stack Proficiency
              </h4>
              <p className="text-vscode-text-muted">
                Along with front-end expertise, I build efficient full-stack
                solutions, including APIs and databases.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-vscode-accent">
                Performance Optimization
              </h4>
              <p className="text-vscode-text-muted">
                I optimize applications for speed and responsiveness using
                techniques like code splitting and lazy loading.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-vscode-accent">
                Clean, Maintainable Code
              </h4>
              <p className="text-vscode-text-muted">
                I write clean, scalable, and well-documented code following best
                practices for long-term project success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
