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
      <div className="w-full md:w-auto p-12 space-y-5 transition-all duration-300  hover:-translate-y-1">
        <h2 className="text-4xl text-center font-bold">About Me</h2>

        <p className=" text-gray-400 text-center">
          Hey! I&apos;m Juan, a software developer focused on building scalable,
          accessible, and memorable products.
        </p>
        <p className="text-gray-400 text-center">
          I care about clean code, good UX, and solving real problems.
        </p>
      </div>

      <CardStack items={aboutMeFacts} />
    </div>
  );
}
