import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen relative">
      <div className="absolute inset-0 bg-white">
        <BackgroundGradientAnimation  />
      </div>

      <div className="flex-grow relative z-10 ">
        <p className="text-red-600 text-3xl font-black animate-pulse absolute top-0 left-0"><ExclamationTriangleIcon />WIP</p>
        <div className="flex justify-center items-center h-full">
          <div className="bg-black p-10 rounded-xl ring-1 ring-inset ring-neutral-700 border border-neutral-800">
            <HeroHighlight className="flex items-center gap-32">
              <div>
                <p className="max-w-64 text-5xl leading-tight font-semibold tracking-tight">
                  <Highlight><span className="">Meld</span></Highlight> is a showcase web project.
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
      </div>
    </main>
  );
}
