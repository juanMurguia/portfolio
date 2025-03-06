"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const textResponse = await response.text();
      const responseData = JSON.parse(textResponse);

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send:", responseData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
          <p className="text-vscode-text mb-8">
            <span className="comment">{"//"} Send me a message!</span>
          </p>

          <div className="space-y-6 font-mono text-sm">
            <div className="flex items-start">
              <div className="w-24 text-vscode-text-muted">Email:</div>
              <a
                href="mailto:juancruzmur@gmail.com"
                className="hover:text-vscode-accent hover:underline"
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono mb-1 text-vscode-text-muted"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
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
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
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
                Message:
              </label>
              <textarea
                id="message"
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
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
                <Send size={16} />
              </button>
            </div>
          </form>

          {responseMessage && (
            <div className="mt-4 text-center font-mono text-sm">
              <span
                className={
                  responseMessage.startsWith("✅")
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {responseMessage}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
