import { CardStack } from "./ui/card-stack";

const aboutMeFacts = [
  {
    id: 1,
    name: "Location",
    designation: "",
    content: <span>📍 Somewhere in the Milky Way—near Argentina</span>,
  },
  {
    id: 2,
    name: "Energy Source",
    designation: "",
    content: <span>🧉 Mate lover → keyboard powered</span>,
  },
  {
    id: 3,
    name: "Passion",
    designation: "",
    content: <span>🧩 Lives for small UI details no one else notices</span>,
  },
];

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-column items-center justify-space-between w-full min-h-[60dvh] gap-8">
      <div className="w-full md:w-auto p-12  rounded-3xl bg-gradient-to-br from-slate-900  to-slate-950 shadow-md space-y-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex flex-row items-center gap-4 w-full">
          <h2 className="text-3xl ">About Me</h2>
        </div>

        <p className="leading-relaxed text-gray-400">
          Hey! I&apos;m Juan, a software developer focused on building scalable,
          accessible, and memorable products.
        </p>
        <p className="leading-relaxed text-gray-400">
          I care about clean code, good UX, and solving real problems.
        </p>
      </div>

      <CardStack items={aboutMeFacts} />
    </div>
  );
}
