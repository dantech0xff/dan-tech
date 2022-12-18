import { useEffect, useState } from "react";
import useTheme from "next-theme";
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import useSound from "use-sound";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const ThemeSwitch = () => {
    setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="ml-1 cursor-pointer rounded bg-zinc-300 ring-zinc-400 transition-all hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800">
      <motion.button
        className="flex h-8 w-8 items-center justify-center p-2"
        whileTap={{
          scale: 0.7,
          rotate: 360,
        }}
        whileHover={mounted ? { scale: 1.1 } : {}}
        transition={{ duration: 0.2, ease: "easeIn" }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          ThemeSwitch();
        }}
      >
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
          // hover:animate-spin
          <HiSun className="h-4 w-4" />
        ) : (
          <HiMoon className="h-4 w-4" />
        )}
      </motion.button>
    </div>
  );
};

export default ThemeSwitch;
