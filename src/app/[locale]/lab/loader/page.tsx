'use client';

import { useRef, useState } from 'react';
import { ModelViewer } from '@/components/ModelViewer';
import { Button, Divider, Link, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { ArrowUpTrayIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function Loader() {
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
      <Popover shadow="sm" placement="bottom" offset={10} showArrow isOpen={isDragging}>
        <PopoverTrigger>
          <div
            className={`relative flex flex-col items-center justify-center h-[90vh] w-full outline-none ${isDragging ? 'rounded-lg outline-dashed outline-2 outline-neutral-400' : ''}`}
            onDrop={handleFileUpload}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            {!fileUrl && (
              <Button
                className={`h-16 w-16 `}
                onClick={handleClick}
                isIconOnly
                variant="ghost"
              >
                <ArrowUpTrayIcon className="h-full p-4 text-black dark:text-white" />
              </Button>
            )}
            {fileUrl && <ModelViewer fileUrl={fileUrl} />}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold text-black dark:text-white">Arrastra aquí tu archivo .glb</div>
            <div className="text-tiny text-black dark:text-white">Suelta el archivo para cargar el modelo 3D</div>
          </div>
        </PopoverContent>
      </Popover>

      <Divider className="bg-neutral-200 dark:bg-neutral-800" />

      <div className="flex items-center justify-center h-[10vh] p-8 gap-8 w-full">
        <Link href="/lab" className="w-8 text-neutral-500 hover:opacity-50 transition-all">
          <ArrowUturnLeftIcon />
        </Link>
      </div>

      <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
    </main>
  );
}
