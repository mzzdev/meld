import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { SparklesCore } from "@/components/ui/sparkles";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen relative overflow-x-hidden scroll-container">

      {/* logo background */}
      <div className="absolute inset-0 bg-purple-950">
        {/* <BackgroundGradientAnimation /> */}
      </div>
      {/* <ThemeSwitcher className="absolute inset-0"/> */}

      {/* logo card */}
      <div className="flex-grow relative z-10 m-2 md:m-0 ring-1 ring-neutral-700">
        <div className="flex justify-center items-center h-full">
          <div className="bg-white dark:bg-black p-10 rounded-xl ring-1 ring-inset ring-neutral-700 border border-neutral-800">
            <HeroHighlight className="flex flex-col items-center gap-10 md:flex-row md:gap-32">
              <div>
                <p className="max-w-64 text-5xl leading-tight font-semibold tracking-tight text-white">
                  <Highlight className=""><span className="">Meld</span></Highlight> is a showcase web project.
                </p>
              </div>
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
        <div className="flex flex-row h-full">
          <div className="h-full w-1/2 dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Next.js
            </p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex items-center justify-center h-full w-1/2 bg-white text-black dark:text-white dark:bg-black">
            <p className="text-4xl sm:text-7xl font-bold py-8">3d here</p>
          </div>
        </div>

      </div>
    </main>
  );
}
