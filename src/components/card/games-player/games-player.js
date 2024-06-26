import { useTheme } from "@/context/themeContext"; // Adjust the import path as per your project structure

const GamesPlayerCard = ({
  contentCardIcon,
  contentCardAlt,
  contentCardTitle,
  children,
}) => {
  const { theme } = useTheme(); // Assuming useTheme provides theme state

  return (
    <div className="rounded-md border-2 border-mirageOpa01Color dark:border-romanceOpa01Color p-4">
      <div className="flex justify-between items-center text-lg font-bold text-mirageOpa50Color dark:text-romanceOpa50Color">
        <div>{contentCardTitle}</div>
        <img src={contentCardIcon} alt={contentCardAlt} className="w-6 h-auto" />
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default GamesPlayerCard;
