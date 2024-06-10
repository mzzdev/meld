import { Link } from '@/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/react';

export default function Lab() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden cursor-default">
      <div className="flex flex-col h-screen bg-orange-500">
        
      </div>
      <div className="flex flex-col items-center justify-center m-8 gap-8">
        <h1 className="text-9xl bg-orange-500 rounded-lg tracking-tight animate-pulse">Lab</h1>
        <Link href="/" className="w-8 hover:opacity-50 transition-all "><HomeIcon /></Link>
      </div>

    </main>
  );
}