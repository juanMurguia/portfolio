import Image from "next/image";

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
  return (
    <div
      className="relative overflow-hidden rounded-xl p-4 w-[220px] h-[60px] flex items-center gap-3"
      style={{
        backgroundColor: `#${primaryColor}`,
        color: secondaryColor,
        border: `1px solid #${secondaryColor}`,
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
            className="text-xs opacity-60"
            style={{ color: `#${secondaryColor}` }}
          >
            {role}
          </p>
        )}
      </div>
    </div>
  );
};
