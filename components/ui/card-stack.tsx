"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import useLocale from "@/lib/context/useLocale";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const { t } = useLocale();
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      flipCard();
    }, 5000);
  };

  const flipCard = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div
      className="relative h-auto w-full md:h-28 md:w-96 cursor-pointer select-none "
      onClick={flipCard}
      title={t("cardstack.tooltip")}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`
      absolute
      ${
        index === 0
          ? "bg-gradient-to-tr from-[#300000] to-[#400000]"
          : index === 1
          ? "bg-gradient-to-bl from-[#260000] to-[#1a0000]"
          : "bg-gradient-to-bl from-[#100000] to-[#0a0000]"
      }
      h-[120px] w-full md:w-96
      rounded-2xl
      p-6
      shadow-xl
      flex flex-col justify-between
      transition-all
      duration-300
    `}
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-md md:text-md text-gray-400">
              {card.content}
            </span>
          </div>
          <div className="mt-auto">
            <p className="text-sm md:text-md font-light text-[#ff5050]">
              {card.name}
            </p>
            {card.designation && (
              <p className="text-sm text-neutral-400">{card.designation}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
