export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  logoImage: string;
  buttonText?: string;
  bgColor?: string;
  onButtonClick?: () => void;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

function PortfolioCard({ item, className = "" }: PortfolioCardProps) {
  const {
    title,
    description,
    backgroundImage,
    logoImage,
    buttonText = "View",
    onButtonClick,
    bgColor = "#eea85bcc",
  } = item;

  return (
    <div
      className={`group relative w-80 overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      <img
        src={backgroundImage}
        alt={`${title} 背景图`}
        className="h-full w-full object-cover"
      />

      <div
        className="absolute bottom-0 left-0 h-[40%] w-full backdrop-blur-[5px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
        }}
      ></div>

      <div
        className={`absolute bottom-0 left-0 flex h-20 w-full items-center rounded-b-2xl bg-[${bgColor}] bg-[linear-gradient(rgba(0,0,0,.4)_0_0)] px-4 backdrop-blur-sm`}
      >
        <img
          src={logoImage}
          alt={`${title} Logo`}
          className="h-12 w-12 rounded-xl shadow-md"
        />

        <div className="ml-3 flex-1">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-xs text-white/80">{description}</p>
        </div>

        <button
          className="rounded-full bg-black/25 px-4 py-1 text-sm font-medium text-white transition hover:bg-white/20"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PortfolioCard;
