import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-sm transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
