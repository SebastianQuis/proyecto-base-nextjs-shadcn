"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CustomMode() {
  const { theme, setTheme } = useTheme();
  const [mountedTheme, setMountedTheme] = useState(false);

  useEffect(() => {
    setMountedTheme(true);
  }, []);

  const onToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  if (!mountedTheme) return null;

  return (
    <div className="flex items-center gap-2 mr-4">
      <button id="theme-toggle">
        {theme === "light" ? (
          <Moon onClick={onToggleTheme} />
        ) : (
          <Sun className="text-white" onClick={onToggleTheme} />
        )}
      </button>
    </div>
  );
}
