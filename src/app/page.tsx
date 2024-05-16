import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen relative">
      <div className="absolute inset-0 bg-white">
        <BackgroundGradientAnimation />
      </div>

      <div className="flex-grow relative z-10">
        <div className="flex justify-center items-center h-full">
          <div className="bg-black p-10 rounded-xl border border-gray-700">
            <HeroHighlight className="flex items-center gap-10">
              <div>
                <p><Highlight>Meld</Highlight> is a showcase web project.</p>
              </div>
              <Image
                src={'logo/normal.svg'}
                alt={'meld-logo'}
                width={500}
                height={500}
              />
            </HeroHighlight>
          </div>
        </div>

        <div><p>TEST</p></div>
      </div>
    </main>
  );
}
