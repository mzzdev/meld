'use client';

import { useRef, useState } from 'react';
import { ModelViewer } from '@/components/ModelViewer';
import { Button, Divider, Link } from '@nextui-org/react';
import { ArrowUpTrayIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function Lab() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.type === 'drop' ? (event as React.DragEvent).dataTransfer?.files[0] : (event as React.ChangeEvent<HTMLInputElement>).target.files?.[0];
    if (file && file.name.endsWith('.glb')) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else console.error('Invalid file type');
    setIsDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden cursor-default bg-white dark:bg-black">
      <div
        className={`flex flex-col items-center justify-center h-[90vh] w-full`}
        onDrop={handleFileUpload}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        {!fileUrl && (
          <Button
            className={`h-16 w-16 ${isDragging ? 'm-8 border-2 border-gray-400' : ''}`}
            onClick={handleClick}
            isIconOnly
            variant="ghost"
          >
            <ArrowUpTrayIcon className="h-full p-4 text-black dark:text-white" />
          </Button>
        )}
        {fileUrl && <ModelViewer fileUrl={fileUrl} />}
      </div>
  
      <Divider className="bg-neutral-200 dark:bg-neutral-800" />
  
      <div className="flex items-center justify-center h-[10vh] p-8 gap-8 w-full">
        <Link href="/" className="w-8 text-neutral-500 hover:opacity-50 transition-all">
          <ArrowUturnLeftIcon />
        </Link>
      </div>
  
      <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
    </main>
  );
}
