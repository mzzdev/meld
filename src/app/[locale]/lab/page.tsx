import { Link } from '@nextui-org/react';
import { HomeIcon } from '@heroicons/react/24/solid';

export default function Lab() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden cursor-default">
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-8 bg-white dark:bg-black">
        <h1 className="my-8 text-9xl text-white dark:text-black bg-black dark:bg-white rounded-lg tracking-tight animate-second transition-transform-background">Lab</h1>
        <Link href="#" className="w-8 text-purple-500 hover:opacity-50 transition-all ">[placeholder]</Link>
        <Link href="/lab/loader" className="w-8 text-indigo-500 hover:opacity-50 transition-all ">LOADER</Link>
        <Link href="/" className="w-8 text-neutral-500 hover:opacity-50 transition-all "><HomeIcon /></Link>
      </div>
    </main>
  );
}