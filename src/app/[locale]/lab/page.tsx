import { Card, CardHeader, Link, Image } from '@nextui-org/react';
import { HomeIcon } from '@heroicons/react/24/solid';

export default function Lab() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden cursor-default">
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-8 dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <h1 className="my-8 text-9xl text-white dark:text-black bg-black dark:bg-white rounded-lg tracking-tight hover:animate-second transition-transform-background">Lab</h1>
        <div className="max-w-[50vw] w-full grid grid-cols-2 gap-4">
          <Link href="#" className='col-span-1 h-[40vh] hover:scale-105 hover:shadow-xl transition-all'>
            <Card className="h-full w-full">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Placeholder</p>
                <h4 className="text-white font-medium text-large">Placeholder</h4>
              </CardHeader>
              <Image
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://picsum.photos/id/238/2000/2000"
              />
            </Card>
          </Link>
          <Link href="/lab/loader" className='col-span-1 h-[40vh] hover:scale-105 hover:shadow-xl transition-all'>
            <Card className="h-full w-full">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Loader</p>
                <h4 className="text-white font-medium text-large">Enter the model loader</h4>
              </CardHeader>
              <Image
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://picsum.photos/id/242/2000/2000"
              />
            </Card>
          </Link>
        </div>
        <Link href="/" className="w-10 text-neutral-500 hover:opacity-50"><HomeIcon /></Link>
      </div>
    </main>
  );
}