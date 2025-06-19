import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface CompanyCardProps {
  name: string;
  role?: string;
  image: string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  isPersonal?: boolean;
}

export const CompanyCard = ({
  name,
  role,
  image,
  className,
  primaryColor = "#000000",
  secondaryColor = "#ffffff",
  isPersonal = false,
}: CompanyCardProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const constraints = {
    width: "240px",
    height: "80px",
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <motion.div ref={constraintsRef} style={constraints}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className="relative overflow-hidden rounded-2xl p-4 w-[220px] h-[60px] flex items-center gap-3"
        style={{
          backgroundColor: "transparent",
          color: secondaryColor,
          border: `1px solid #${secondaryColor}66`,
          cursor: "grab",
        }}
        animate={{
          y: [0, -10, 0], // Moves up by 10px and back to 0
        }}
        transition={{
          repeat: 2, // Repeats the animation infinitely
          repeatType: "loop", // Loops the animation
          duration: 0.6, // Duration of one jump
          delay: 6, // Delay between jumps
        }}
      >
        <div className="h-[40px] w-[40px] relative flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className={`rounded-full ${
              isPersonal ? "object-cover" : "object-contain"
            }`}
            style={{
              cursor: "draggable",
            }}
          />
        </div>
        <div className="flex flex-col justify-start">
          <h3
            className="font-semibold text-left"
            style={{ color: `#${secondaryColor}` }}
          >
            {name}
          </h3>
          {role && (
            <p
              className="text-xs opacity-70 font-normal"
              style={{ color: `#${secondaryColor}` }}
            >
              {role}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
