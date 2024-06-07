import {Link} from '@/navigation';

export default function Lab() {
  return (
    <div className="flex flex-col gap-96 h-screen items-center justify-center">
      <h1 className="text-9xl bg-indigo-700 rounded-lg tracking-tight animate-pulse">Lab</h1>
      <Link href="/">Go back</Link>
    </div>
  );
}