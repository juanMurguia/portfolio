"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="section-container">
      <div className="flex items-center mb-8">
        <div className="tab active">
          <span className="font-mono text-sm">_contact-me</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-4 text-vscode-text mb-8">
            <p className="code-line">
              <span className="comment">/**</span>
            </p>
            <p className="code-line">
              <span className="comment"> * Send me a message!</span>
            </p>
            <p className="code-line">
              <span className="comment">
                {" "}
                * Got a question or proposal, or just want
              </span>
            </p>
            <p className="code-line">
              <span className="comment"> * to say hello? Go ahead.</span>
            </p>
            <p className="code-line">
              <span className="comment"> */</span>
            </p>
          </div>

          <div className="space-y-6 font-mono text-sm">
            <div className="flex items-start">
              <div className="w-24 text-vscode-text-muted">Email:</div>
              <a
                href="mailto:juancruzmur@gmail.com"
                className="text-vscode-accent hover:underline"
              >
                juancruzmur@gmail.com
              </a>
            </div>

            <div className="flex items-start">
              <div className="w-24 text-vscode-text-muted">LinkedIn:</div>
              <a
                href="https://www.linkedin.com/in/juan-cruz-murguia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-vscode-accent transition-colors"
              >
                juan-cruz-murguia
              </a>
            </div>

            <div className="flex items-start">
              <div className="w-24 text-vscode-text-muted">GitHub:</div>
              <a
                href="https://github.com/juanMurguia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-vscode-accent transition-colors"
              >
                juanMurguia
              </a>
            </div>
          </div>
        </div>

        <div className="bg-vscode-bg-light border border-vscode-border rounded-md p-6">
          <div className="mb-6">
            <div className="code-line">
              <span className="keyword">function</span>{" "}
              <span className="function">sendMessage</span>() {"{"}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono mb-1 text-vscode-text-muted"
                >
                  name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="w-full px-3 py-2 bg-vscode-bg border border-vscode-border rounded-md focus:outline-none focus:ring-1 focus:ring-vscode-accent text-vscode-text font-mono text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono mb-1 text-vscode-text-muted"
                >
                  email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-2 bg-vscode-bg border border-vscode-border rounded-md focus:outline-none focus:ring-1 focus:ring-vscode-accent text-vscode-text font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono mb-1 text-vscode-text-muted"
              >
                message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Hi, I think we need a dev for our project. How soon can you hop on to discuss this?"
                required
                rows={5}
                className="w-full px-3 py-2 bg-vscode-bg border border-vscode-border rounded-md focus:outline-none focus:ring-1 focus:ring-vscode-accent text-vscode-text font-mono text-sm"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn btn-primary flex items-center justify-center gap-2 w-full"
              >
                <span>Send</span>
                <Send size={16} />
              </button>
            </div>
          </form>

          <div className="mt-4">
            <div className="code-line">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
