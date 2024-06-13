'use client';

import { useRef, useState, useCallback } from 'react';
import { ModelViewer } from '@/components/ModelViewer';
import { Button, Divider, Link, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { ArrowUpTrayIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

const sampleModels = [
  { name: 'ae86', url: '/models/samples/ae86.glb' },
  { name: 'bust', url: '/models/samples/bust.glb' },
  { name: 'maxwell', url: '/models/samples/maxwell.glb' },
];

export default function Loader() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('Loader');

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.type === 'drop' ? (event as React.DragEvent).dataTransfer?.files[0] : (event as React.ChangeEvent<HTMLInputElement>).target.files?.[0];
    if (file) {
      if (file.name.endsWith('.glb')) {
        const url = URL.createObjectURL(file);
        setFileUrl(url);
        setError(null);
      } else {
        setError(t('fileTypeErrorMessage'));
      }
    }
    setIsDragging(false);
  }, []);

  const handleDrag = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.type === 'dragenter') {
      setIsDragging(true);
    } else if (event.type === 'dragleave' || event.type === 'drop') {
      setIsDragging(false);
    }
    if (event.type === 'dragover') {
      event.dataTransfer.dropEffect = 'move';
    }
  }, []);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const loadSampleModel = (url: string) => {
    setFileUrl(url);
    setError(null);
  };

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden cursor-default bg-white dark:bg-black">
      <Popover shadow="sm" placement="bottom" offset={-100} showArrow isOpen={isDragging}>
        <PopoverTrigger>
          <div
            className={`relative flex flex-col items-center justify-center h-[100vh] w-full outline-none ${isDragging ? 'rounded-lg outline-dashed outline-2 outline-neutral-400' : ''}`}
            onDrop={handleFileUpload}
            onDragOver={handleDrag}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
          >
            {!fileUrl ? (
              <>
                <Button
                  className="h-16 w-16"
                  onClick={handleClick}
                  isIconOnly
                  variant="ghost"
                  title={t('uploadButton')}
                  aria-label={t('uploadButton')}
                  role="button"
                >
                  <ArrowUpTrayIcon className="h-full p-4 text-black dark:text-white" />
                </Button>
                <Link target='_blank' className="mt-4 text-black/60 dark:text-white/60 leading-tight font-semibold text-medium tracking-tight" href='https://sbtron.github.io/makeglb/'>{t('fileTypesMessage')}</Link>
                <div className="mt-4 flex flex-col items-center">
                  <p className="text-sm text-black/60 dark:text-white/60">{t('sampleModelsMessage')}</p>
                  <div className="flex flex-col mt-2 space-y-2">
                    <ul className='list-disc'>
                      {sampleModels.map((model, index) => (
                        <li className="font-mono text-black/60 dark:text-white/60 leading-tight font-normal text-sm tracking-tight cursor-pointer hover:font-black" key={index} onClick={() => loadSampleModel(model.url)}>{model.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <ModelViewer fileUrl={fileUrl} />
            )}
            {error && (
              <Popover shadow="sm" placement="bottom" color="danger" offset={10} isOpen={!!error} onClose={() => setError(null)}>
                <PopoverTrigger><div></div></PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold text-black dark:text-white">{error}</div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold text-black dark:text-white">{t('dragFileTitleMessage')}</div>
            <div className="text-tiny text-black dark:text-white">{t('dragFileBodyMessage')}</div>
          </div>
        </PopoverContent>
      </Popover>

      <Divider className="bg-neutral-200 dark:bg-neutral-800" />

      <div className="z-50 fixed top-0 left-0 flex items-center p-4 gap-4">
        <Link href="/lab" title={t('goBackButton')} aria-label={t('goBackButton')} role="button" className="w-8 text-neutral-500 hover:opacity-50 transition-all">
          <ArrowUturnLeftIcon />
        </Link>
        {fileUrl && (
          <Button
            className="h-16 w-16"
            onClick={handleClick}
            isIconOnly
            variant="ghost"
          >
            <ArrowUpTrayIcon className="h-full p-4 text-black dark:text-white" />
          </Button>
        )}
      </div>

      <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
    </main>
  );
}
