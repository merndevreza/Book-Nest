"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="secondary"
      size="icon"
      className={className}
    >
      {theme === "light" ? (
        <MoonIcon
          size={24}
          className="h-[1.2rem] w-[1.2rem] transition-opacity"
        /> 
      ) : (
        <SunIcon
          size={24}
          className="absolute h-[1.2rem] w-[1.2rem] transition-opacity"
        />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
