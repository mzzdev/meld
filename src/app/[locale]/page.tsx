'use client';

import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Model } from "@/components/ModelViewer";

import { Divider, Button, Skeleton, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { US, ES } from 'country-flag-icons/react/3x2';

export default function Home() {
  const [isModelMaximized, setIsModelMaximized] = useState(false);
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState("#FFFFFF");
  const router = useRouter();

  const t = useTranslations("Home");

  useEffect(() => {
    setParticleColor(theme === "dark" ? "#FFFFFF" : "#000000");
  }, [theme]);

  function handleLocaleChange(locale: string): void {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <main className="flex md:flex-col min-h-screen min-w-screen relative overflow-x-hidden" onClick={() => isModelMaximized && setIsModelMaximized(false)}>

      {/* logo background */}
      <div className="absolute inset-0 bg-purple-950 z-10 pointer-events-auto">
        <BackgroundGradientAnimation
          firstColor="0, 0, 0"
          secondColor="0, 0, 0"
          thirdColor="0, 0, 0"
          fourthColor="0, 0, 0"
          fifthColor="0, 0, 0"
          pointerColor="179, 0, 255"
          gradientBackgroundEnd="rgb(69, 12, 161)"
          gradientBackgroundStart="rgb(0, 0, 0)"
        />
      </div>

      {/* controls */}
      <div className="fixed mt-2 md:mt-4 md:mr-6 z-20 right-0 flex flex-row gap-2">
        <Dropdown className="text-black dark:text-white dark:bg-black">
          <DropdownTrigger className="w-auto h-auto">
            <Button isIconOnly>
              <GlobeAltIcon className="w-6 h-6" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Language selector">
            <DropdownItem
              onPress={() => handleLocaleChange('en')}
              startContent={<US className={'w-5 h-auto'} />}
            >
              {t('navBar.langs.en')}
            </DropdownItem>
            <DropdownItem
              onPress={() => handleLocaleChange('es')}
              startContent={<ES className={'w-5 h-auto'} />}
            >
              {t('navBar.langs.es')}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <ThemeSwitcher />
      </div>

      <div className="flex-grow h-screen relative z-10 md:m-0 md:ring-1 ring-neutral-700 pointer-events-none">

        {/* logo card */}
        <div className="flex justify-center items-center h-full">
          <div className="bg-white dark:bg-black m-10 p-2 md:p-10 rounded-xl ring-1 ring-inset ring-neutral-700 border border-neutral-800 pointer-events-auto">
            <HeroHighlight className="flex flex-col items-center gap-10 md:flex-row md:gap-32">
              <motion.div initial={{ filter: "blur(5px)", opacity: 0 }} whileInView={{ filter: "blur(0)", opacity: 1 }} viewport={{ once: true }} transition={{ duration: .5, delay: 0, ease: "linear" }}>
                <p className="max-w-64 text-5xl leading-tight font-semibold tracking-tight text-black dark:text-white">
                  <Highlight className=""><span className="">Meld</span></Highlight> {t('logoCard.title')}
                </p>
              </motion.div>
              <Image
                src={'/icons/logo/logo.png'}
                alt={'meld-logo'}
                width={375}
                height={375}
                className="pointer-events-none select-none"
              />
            </HeroHighlight>
          </div>
        </div>

        <Divider className="bg-neutral-200 dark:bg-neutral-800" />

        {/* nextjs & react */}
        {isModelMaximized ? (
          <div className="relative w-full h-[50vh] flex flex-col md:flex-row gap-4">
            <div
              className="z-20 flex items-center justify-center bordered-lg ring-1 ring-inset ring-neutral-700 bg-white dark:bg-black shadow-xl rounded-lg cursor-grab transition-all fixed inset-12 right-[calc(50%+1rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <Model />
              </Suspense>
            </div>
            <div className="z-20 flex items-center justify-center bordered-lg ring-1 ring-inset ring-neutral-700 hover:ring-neutral-400 bg-white dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] shadow-xl rounded-lg transition-all fixed inset-12 left-[calc(50%+1rem)]">
              <TextGenerateEffect
                className="leading-tight font-semibold text-sm tracking-tight m-24"
                words={t('nextjs.react')}
              />
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row w-full h-[50vh]">
            <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
              <motion.p className="text-5xl md:text-7xl font-bold tracking-tight relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4"
                initial={{ opacity: 0, y: -25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: 0, ease: "easeInOut" }}>
                Next.js
              </motion.p>
              <motion.p className="relative max-w-96 text-lg font-semibold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 px-4 text-center mt-4"
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: 0, ease: "easeInOut" }}>
                {t.rich('nextjs.description', {
                  highlight: (chunks) => <span className="text-secondary-400">{chunks}</span>
                })}
              </motion.p>
            </div>
            <div
              className="z-20 flex items-center justify-center bordered-lg ring-1 ring-inset ring-neutral-700 hover:ring-neutral-400 bg-white dark:bg-black shadow-xl rounded-lg cursor-pointer transition-all absolute h-1/4 w-1/4 md:h-1/2 md:w-1/5 top-4 right-4 md:top-auto md:bottom-8 md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                setIsModelMaximized(true);
              }}
            >
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <Model />
              </Suspense>
            </div>
          </div>
        )}

        <Divider className="bg-neutral-200 dark:bg-neutral-800" />

        {/* tailwind */}
        <div className="h-auto w-screen flex flex-col items-center bg-white dark:bg-black">
          <motion.div
            className="mt-8"
            initial={{ filter: "blur(5px)" }}
            whileInView={{ filter: "blur(0)" }}
            viewport={{ once: true }}
            transition={{ duration: .75, delay: 0, ease: "easeInOut" }}
          >
            <p className="z-20 text-5xl md:text-9xl font-bold text-center leading-tight tracking-tight from-[#38bdf7] to-[#0531f1] bg-gradient-to-b bg-clip-text text-transparent">
              Tailwind
            </p>
            <div className="w-[40rem] relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-800 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-800 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-600 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-600 to-transparent h-px w-1/4" />
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <SparklesCore
                  background="transparent"
                  minSize={.1}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor={particleColor}
                />
              </Suspense>
              <div className={`absolute inset-0 w-full h-full bg-white dark:bg-black ${theme === 'dark' ? ' [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]' : ' [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,black)]'}`}></div>
            </div>
          </motion.div>
          <motion.p
            className="max-w-md m-10 mb-16 text-lg font-semibold leading-tight tracking-tight text-center from-sky-600 to-blue-700 bg-gradient-to-b bg-clip-text text-transparent"
            initial={{ filter: "blur(5px)", opacity: 0, y: -20 }}
            whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: .25, ease: "easeInOut" }}
          >
            {t('tailwind.description')}
          </motion.p>
        </div>

        <Divider className="bg-neutral-200 dark:bg-neutral-800" />

        {/* footer (WIP) */}
        <div className="flex flex-col items-center text-center py-8 space-y-4 pointer-events-auto bg-white dark:bg-black">
          <div className="flex items-center space-x-2">
            <Link href="https://github.com/mzzdev/meld" target="_blank" className="hover:opacity-50 transition-all">
              <Image
                src={'/icons/github.svg'}
                alt={'github-logo'}
                width={25}
                height={25}
                className="pointer-events-none select-none"
              />
            </Link>
          </div>
          <div className="leading-8 font-semibold text-medium tracking-tight text-black dark:text-white">
            <p>
              {t.rich('footer.madeWithLove', {
                link: (chunks) => (
                  <Link href="https://github.com/mzzdev/" target="_blank" className="hover:opacity-50 transition-all">
                    {chunks}
                  </Link>
                )
              })}
            </p>
            <p>
              <Link href="https://meld-mu.vercel.app/" className="hover:opacity-50 transition-opacity">
                Meld
              </Link> | {new Date().getFullYear()}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}