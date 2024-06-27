"use client";

import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({className}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      variant="secondary"
      size="icon"
      className={className}
    >
      <MoonIcon
       size={24}
        className={`h-[1.2rem] w-[1.2rem] transition-opacity ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
      <SunIcon
       size={24}
        className={`absolute h-[1.2rem] w-[1.2rem] transition-opacity ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
