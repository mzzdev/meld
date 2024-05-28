'use client';

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { SparklesCore } from "@/components/ui/sparkles";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Model } from "@/components/ModelViewer";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { Skeleton } from "@nextui-org/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const [isModelMaximized, setIsModelMaximized] = useState(false);

  const toggleModelView = () => {
    setIsModelMaximized(!isModelMaximized);
  };
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

      {/* dark mode switch */}
      <div className="fixed mt-2 md:mt-4 md:mr-6 z-20 right-0">
        <ThemeSwitcher />
      </div>

      <div className="flex-grow h-screen relative z-10 md:m-0 md:ring-1 ring-neutral-700 pointer-events-none">

        {/* logo card */}
        <div className="flex justify-center items-center h-full ">
          <div className="bg-white dark:bg-black m-10 p-2 md:p-10 rounded-xl ring-1 ring-inset ring-neutral-700 border border-neutral-800 pointer-events-auto">
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
                words="React is a powerful JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, which manage their own state and can be composed to build complex user interfaces. React's declarative nature makes it easy to predict and debug, enhancing developer productivity and code maintainability. By leveraging a virtual DOM, React efficiently updates and renders components when data changes, ensuring optimal performance. Additionally, React's vast ecosystem, including hooks, context API, and integration with other libraries and frameworks, provides extensive tools and flexibility for building dynamic and responsive web applications. Its use in conjunction with Next.js enables server-side rendering and static site generation, further optimizing performance and SEO for modern web projects."
              />
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row w-full h-[50vh]">
            <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
              <motion.p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
                initial={{ opacity: 0, y: -25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 0, ease: "easeInOut" }}>
                Next.js
              </motion.p>
              <motion.p className="relative max-w-96 text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-200 px-4 text-center mt-4"
                initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: 0, ease: "easeInOut" }}>
                Next.js is the backbone of this project, providing
                <span className="text-secondary-400"> robust functionality </span>
                and smooth integration, which streamlines development and enhances the
                <span className="text-secondary-400"> user experience </span>.
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

        <Divider />

        {/* tailwind */}
        <div className="h-[50vh] w-full flex flex-row items-center justify-center overflow-hidden rounded-md bg-white dark:bg-black text-black dark:text-white text-center">
          <motion.div
            initial={{ x: '33vw' }}
            whileInView={{ x: 'calc(33vw - 25rem)' }}
            transition={{ duration: .75, delay: 1, ease: "easeInOut" }}
          >
            <p className="z-20 md:text-9xl text-3xl font-bold text-center leading-tight tracking-tight from-[#38bdf7] to-[#0531f1] bg-gradient-to-b bg-clip-text text-transparent">
              Tailwind
            </p>
            <div className="w-[40rem] relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-800 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-800 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-600 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-600 to-transparent h-px w-1/4" />

              {/* Core component */}
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <SparklesCore
                  background="transparent"
                  minSize={.1}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </Suspense>

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              {/* <div className={`absolute inset-0 w-full h-full bg-black [mask-image: ${isDarkMode ? 'radial-gradient(350px_200px_at_top,transparent_20%,white)' : 'radial-gradient(350px_200px_at_top,transparent_20%,black)'}]`}></div> */}
            </div>
          </motion.div>
          <motion.p
            className="max-w-sm m-auto text-lg"
            initial={{ filter: "blur(5px)", opacity: 0 }}
            whileInView={{ filter: "blur(0)", opacity: 1 }}
            transition={{ duration: .5, delay: 2, ease: "linear" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </motion.p>
        </div>

      </div>
    </main>
  );
}
