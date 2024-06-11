'use client';
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Controls() {
  return (
    <div className="z-50 fixed mt-2 md:mt-4 md:mr-6 right-0 flex flex-row gap-2 rounded-xl backdrop-blur-sm">
      <LanguageSelector locales={['en', 'es', 'ru']} />
      <ThemeSwitcher />
    </div>
  )
}