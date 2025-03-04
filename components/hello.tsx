export default function Hello() {
  return (
    <div className="section-container flex flex-col justify-center min-h-screen">
      <div className="max-w-3xl">
        <p className="text-vscode-text mb-2">Hey, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Juan Murguia</h1>
        <div className="flex items-center mb-12">
          <span className="text-vscode-accent mr-2">&gt;</span>
          <p className="text-vscode-accent text-xl md:text-2xl">
            Front-end developer
          </p>
        </div>

        <div className="space-y-4 font-mono text-sm">
          <div className="code-line">
            <span className="comment">// my info</span>
          </div>

          <a
            className="code-line hover:brightness-150 block"
            href="mailto:juancruzmur@gmail.com"
            target="_blank"
          >
            <span className="keyword">const</span>{" "}
            <span className="variable">email</span> ={" "}
            <span className="string">"juancruzmur@gmail.com"</span>;
          </a>

          <a
            className="code-line hover:brightness-150 block"
            href="https://github.com/juanMurguia"
            target="_blank"
          >
            <span className="keyword">const</span>{" "}
            <span className="variable">githubLink</span> ={" "}
            <span className="string">"github.com/juanMurguia"</span>;
          </a>

          <a
            className="code-line hover:brightness-150 block"
            href="https://www.linkedin.com/in/juan-cruz-murguia/"
            target="_blank"
          >
            <span className="keyword">const</span>{" "}
            <span className="variable">linkedinPage</span> ={" "}
            <span className="string">"linkedin.com/juan-cruz-murguia"</span>;
          </a>
        </div>
      </div>
    </div>
  );
}
