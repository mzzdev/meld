'use client';

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

import { Miniplayer } from "@/components/Miniplayer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { SparklesCore } from "@/components/ui/sparkles";

import { Button, Divider, Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Link } from '@/navigation'; // <-- next-intl navigation

export default function Home() {
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState("#FFFFFF");
  const t = useTranslations("Home");

  useEffect(() => {
    setParticleColor(theme === "dark" ? "#FFFFFF" : "#000000");
  }, [theme]);

  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden cursor-default">

      {/* logo screen */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-purple-950 z-10 pointer-events-auto">
        <BackgroundGradientAnimation />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/lab">
            <div className="bg-white dark:bg-black m-10 p-2 md:p-10 rounded-xl ring-1 ring-inset ring-neutral-200 dark:ring-neutral-800 pointer-events-auto cursor-pointer transition-all dark:hover:ring-purple-700 dark:hover:ring-2 hover:scale-105">
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
          </Link>
        </div>
      </div>

      <Divider className="bg-neutral-200 dark:bg-neutral-800" />

      {/* nextjs & react */}
      <div className="relative flex flex-col md:flex-row w-full h-[50vh]">
        <div className="h-full w-full relative flex flex-col items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <motion.p className="text-5xl md:text-7xl font-bold tracking-tight relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4"
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
        <Miniplayer />
      </div>

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

      {/* lab */}
      <div className="flex items-center justify-center w-screen h-[25vh] dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <Button
          variant="shadow"
          radius="md"
          size="lg"
          color="secondary"
        >
          <Link href="/lab">{t('labButton.title')}</Link>
        </Button>
      </div>
    </main>
  );
}
