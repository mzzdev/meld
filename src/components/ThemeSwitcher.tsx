"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeSwitcher() {

  // UNCOMMENT ALL IF YOU WANT TO WAIT FOR THE COMPONENT TO MOUNT OR IF THERE ARE PROBLEMS WITH THE THEME SWITCHER

  // const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if(!mounted) return null

  const toggleTheme = () => {
    setTheme(isChecked ? "light" : "dark");
    setChecked(!isChecked);
  };

  return (
    <Switch
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      color="secondary"
      onChange={toggleTheme}
      isSelected={!isChecked}
    />
  )
};