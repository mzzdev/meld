'use client';

import { useState, Suspense, ReactNode } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Card, CardHeader, Skeleton, Link } from '@nextui-org/react';
import Image from 'next/image';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { ArrowUpIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

export default function GLSL() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const t = useTranslations('GLSL');

  const openModalHandler = (modalId: string) => {
    setOpenModal(modalId);
  };

  const closeModalHandler = () => {
    setOpenModal(null);
  };

  type ModalContent = {
    description: () => ReactNode;
    cardBackgroundUrl: string;
    logoModalUrl: string;
    link: string;
  };

  type ModalsContent = {
    [key: string]: ModalContent;
  };

  const modalsContent: ModalsContent = {
    'WebGL': {
      description: () => t('webglDescription'),
      cardBackgroundUrl: '/images/glslpage/cardBackground/webgl.gif',
      logoModalUrl: '/images/glslpage/logoModal/webgl.svg',
      link: 'https://get.webgl.org/'
    },
    'Three.js': {
      description: () => t('threejsDescription'),
      cardBackgroundUrl: '/images/glslpage/cardBackground/threejs.gif',
      logoModalUrl: '/images/glslpage/logoModal/threejs.svg',
      link: 'https://threejs.org/'
    },
    'React Three Fiber': {
      description: () => t('r3fDescription'),
      cardBackgroundUrl: '/images/glslpage/cardBackground/r3f.gif',
      logoModalUrl: '/images/glslpage/logoModal/r3f.png',
      link: 'https://docs.pmnd.rs/react-three-fiber/'
    },
    'Drei': {
      description: () => t('dreiDescription'),
      cardBackgroundUrl: '/images/glslpage/cardBackground/drei.gif',
      logoModalUrl: '/images/glslpage/logoModal/drei.jpeg',
      link: 'https://github.com/pmndrs/drei/'
    }
  };

  return (
    <main className="flex flex-col flex-grow relative overflow-x-hidden bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] cursor-default">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      <div className="z-50 fixed top-0 left-0 flex items-center p-4 gap-4">
        <Link href="/lab" title={t('goBackButton')} aria-label={t('goBackButton')} role="button" className="w-8 text-neutral-500 hover:opacity-50 transition-all">
          <ArrowUturnLeftIcon />
        </Link>
      </div>
      <TracingBeam>
        <div className="max-w-full w-full grid grid-cols-1 gap-4 my-10">
          {["WebGL", "Three.js", "React Three Fiber", "Drei"].map((title, idx) => (
            <div key={idx} className="mx-4 md:mx-0 h-[40vh] hover:scale-105 hover:shadow-xl transition-all" onClick={() => openModalHandler(title)}>
              <Card className="h-full w-full relative cursor-pointer">
                <CardHeader className="absolute z-10 top-0 left-0 right-0 bottom-0 flex mix-blend-difference items-center justify-center text-center">
                  <p className="text-white font-semibold text-[5rem] tracking-tight md:text-[9rem]">{title}</p>
                </CardHeader>
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <Image
                    unoptimized
                    alt={`${title} card background`}
                    className="z-0 w-full h-full object-cover"
                    src={modalsContent[title].cardBackgroundUrl}
                    width={2000}
                    height={2000}
                  />
                </Suspense>
              </Card>
            </div>
          ))}
          <div className="flex items-center justify-center mt-8">
            <ArrowUpIcon className="inline-block h-6 w-6 md:mr-2 text-black dark:text-white" />
            <p className="text-black dark:text-white font-semibold text-lg tracking-tight text-center">{t('glslMessage')}</p>
          </div>
        </div>
      </TracingBeam>

      {["WebGL", "Three.js", "React Three Fiber", "Drei"].map((title, idx) => (
        <Modal
          key={idx}
          isOpen={openModal === title}
          onOpenChange={closeModalHandler}
          className="leading-8 font-medium text-medium tracking-tight text-black dark:text-white"
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody className="mb-4">
              <Image
                unoptimized
                alt={`${title} modal background`}
                src={modalsContent[title].logoModalUrl}
                width={2000}
                height={2000}
                className="my-2"
              />
              <p>{modalsContent[title].description()}</p>
              <Link href={modalsContent[title].link} target={'_blank'} className="text-secondary-600 dark:text-secondary-400 hover:opacity-50 transition-opacity">{t('moreInfo')}</Link>
            </ModalBody>
          </ModalContent>
        </Modal>
      ))}
    </main>
  );
}
