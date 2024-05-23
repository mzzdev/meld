'use client';

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { SparklesCore } from "@/components/ui/sparkles";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Model } from "@/components/ModelViewer";
import { easeOut, motion, spring } from "framer-motion";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen relative overflow-x-hidden">

      {/* logo background */}
      <div className="absolute inset-0 bg-purple-950 z-10 pointer-events-auto">
        {/* TODO: hacer que le afecte el modo oscuro */}
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

      <div className="fixed mt-4 mr-6 z-20 right-0">
        <ThemeSwitcher />
      </div>

      {/* logo card */}
      <div className="flex-grow h-screen relative z-10 m-2 md:m-0 ring-1 ring-neutral-700 pointer-events-none">
        <div className="flex justify-center items-center h-full">
          <div className="bg-white dark:bg-black p-10 rounded-xl ring-1 ring-inset ring-neutral-700 border border-neutral-800 pointer-events-auto">
            <HeroHighlight className="flex flex-col items-center gap-10 md:flex-row md:gap-32">
              <motion.div initial={{ filter: "blur(5px)", opacity: 0 }} whileInView={{ filter: "blur(0)", opacity: 1 }} transition={{ duration: .5, delay: 0, ease: "linear" }}>
                <p className="max-w-64 text-5xl leading-tight font-semibold tracking-tight text-black dark:text-white">
                  <Highlight className=""><span className="">Meld</span></Highlight> is a showcase web project.
                </p>
              </motion.div>
              <Image
                src={'/logo/png.png'}
                alt={'meld-logo'}
                width={375}
                height={375}
                className="pointer-events-none select-none"
              />
            </HeroHighlight>
          </div>
        </div>

        <Divider />

        {/* nextjs & react */}
        <div className="flex w-full flex-col md:flex-row h-auto md:h-[75%]">
          <div className="h-full w-full md:w-1/2 dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <motion.p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
              initial={{ opacity: 0, y: -25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 0, ease: "easeInOut" }}>
              Next.js
            </motion.p>
            <motion.p className="relative max-w-96 text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-200 px-4 text-center mt-4"
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 0, ease: "easeInOut" }}>
              Next.js is the powerhouse of this project, providing
              <span className="text-secondary-400 dark:text-secondary-600"> robust functionality </span>
              and smooth integration, which streamlines development and enhances the
              <span className="text-secondary-400 dark:text-secondary-600"> user experience </span>.
            </motion.p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex items-center justify-center h-full w-full md:w-1/2 bg-white text-black dark:text-white dark:bg-black">
            <Suspense fallback={<Spinner label="Loading..." color="secondary" labelColor="secondary"/>}>
              <Model />
            </Suspense>
          </div>
        </div>

      </div>
    </main>
  );
}
