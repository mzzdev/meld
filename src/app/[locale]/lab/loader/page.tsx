'use client';

import { useRef, useState } from 'react';
import { ModelViewer } from '@/components/ModelViewer';
import { Button, Divider, Link } from '@nextui-org/react';
import { ArrowUpTrayIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function Lab() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    const file = event.type === 'drop' ? (event as React.DragEvent).dataTransfer?.files[0] : (event as React.ChangeEvent<HTMLInputElement>).target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden cursor-default bg-white dark:bg-black">
      <div className="flex flex-col h-[90vh] w-screen">
        {fileUrl && <ModelViewer fileUrl={fileUrl} />}
      </div>

      <Divider className="bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex flex-row items-center justify-center h-[10vh] p-8 gap-8">
        <div className="flex items-center justify-center w-[25vw] h-16" onDrop={handleFileUpload} onDragOver={handleDragOver}>
          <Button
            className="h-full w-full"
            onClick={handleClick}
            isIconOnly
            variant='ghost'
          >
            <ArrowUpTrayIcon className="h-full p-4 text-black dark:text-white" />
          </Button>
        </div>
        <Link href="/lab" className="w-8 text-neutral-500 hover:opacity-50 transition-all">
          <ArrowUturnLeftIcon />
        </Link>
      </div>
      <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
    </main>
  );
}
