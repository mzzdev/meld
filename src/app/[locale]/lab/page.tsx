import {Link} from '@/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/react';

export default function Lab() {
  return (
    <div className="flex flex-col gap-96 h-screen items-center justify-center">
      <h1 className="text-9xl bg-indigo-700 rounded-lg tracking-tight animate-pulse">Lab</h1>
      <Link href="/" className="w-8 hover:opacity-50 transition-all "><HomeIcon /></Link>
    </div>
  );
}