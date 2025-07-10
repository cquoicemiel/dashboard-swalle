"use client";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleDarkMode() {
    const isDark = !dark;
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div
      onClick={toggleDarkMode}
      className={`fixed top-2.5 right-2.5 z-10 h-8 w-8 p-1 blur-card-white cursor-pointer rounded-sm`}
    >
      <div className="relative h-full w-full">{dark ? "🌞" : "🌙"}</div>
    </div>
  );
}
