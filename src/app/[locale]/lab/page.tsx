import { Card, CardHeader, Link, Skeleton } from '@nextui-org/react';
import { HomeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Suspense } from 'react';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Lab() {
  const t = useTranslations("Lab");

  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden cursor-default dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <AuroraBackground className="flex flex-col items-center justify-center h-screen w-screen gap-8">
        <div className="relative flex flex-col items-center justify-center">
          <p className="text-5xl md:text-7xl font-bold dark:text-white text-center tracking-tight">Lab</p>
        </div>
        <div className="max-w-[50vw] w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/lab/glsl" className='col-span-1 h-auto hover:scale-105 hover:shadow-xl transition-all'>
            <Card className="h-full w-full relative">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start mix-blend-difference">
                <p className="text-tiny text-white uppercase font-bold">GLSL</p>
                <h4 className="text-white font-semibold text-lg tracking-tight">{t('glsl')}</h4>
              </CardHeader>
              <Suspense fallback={<Skeleton className="h-full w-full" />}>
                <Image
                  unoptimized
                  alt="GLSL card background"
                  className="z-0 w-full h-full object-cover"
                  src="/images/glsl.gif"
                  width={2000}
                  height={2000}
                />
              </Suspense>
            </Card>
          </Link>
          <Link href="/lab/loader" className='col-span-1 h-auto hover:scale-105 hover:shadow-xl transition-all'>
            <Card className="h-full w-full relative">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start mix-blend-difference">
                <p className="text-tiny text-white uppercase font-bold">Loader</p>
                <h4 className="text-white font-semibold text-lg tracking-tight">{t('loader')}</h4>
              </CardHeader>
              <Suspense fallback={<Skeleton className="h-full w-full" />}>
                <Image
                  unoptimized
                  alt="Model loader card background"
                  className="z-0 w-full h-full object-cover"
                  src="/images/maxwell.gif"
                  width={2000}
                  height={2000}
                />
              </Suspense>
            </Card>
          </Link>
        </div>
        <Link href="/" title={t('home')} aria-label={t('home')} role="button" className="w-10 text-black dark:text-white hover:opacity-50"><HomeIcon /></Link>
      </AuroraBackground>
    </main>
  );
}
