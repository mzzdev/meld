import { Suspense } from "react";
import { Card, CardHeader, Kbd, Skeleton, useDisclosure } from "@nextui-org/react";
import { ReactModel } from "./ModelViewer";
import { Modal, ModalContent } from "@nextui-org/modal";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Miniplayer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations("Miniplayer");

  return (
    <>
      <div
        className="z-20 bordered-lg ring-1 ring-neutral-700 hover:ring-neutral-400 bg-white dark:bg-black shadow-xl rounded-lg cursor-pointer transition-all absolute h-1/4 w-1/4 md:h-1/2 md:w-1/5 top-4 right-4 md:top-auto md:bottom-8 md:right-8"
        onClick={onOpen}
      >
        <Card className="h-full w-full relative">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start mix-blend-difference">
            <p className="text-tiny text-white uppercase font-bold">{t('reactInfo1')}</p>
            <h4 className="text-white font-semibold text-lg tracking-tight">{t('reactInfo2')}</h4>
          </CardHeader>
          <Suspense fallback={<Skeleton className="h-full w-full" />}>
            <Image
              unoptimized
              alt="React info"
              className="z-0 w-full h-full object-cover"
              src="/images/react.gif"
              width={2000}
              height={2000}
            />
          </Suspense>
        </Card>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange} className="bg-inherit">
        <ModalContent>
          <div className="relative w-full h-[50vh] flex flex-col md:flex-row gap-4">
            <div
              className="z-20 flex items-center justify-center bordered-lg ring-1 ring-inset ring-neutral-700 bg-white dark:bg-black shadow-xl rounded-lg cursor-grab transition-all fixed inset-12 right-[calc(50%+1rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <div className="absolute top-2 left-2 z-30">
                  <Kbd keys={['escape']} className="leading-tight font-normal text-sm tracking-tight select-none"><span className="font-semibold">Esc </span>{t('closeTooltip')}</Kbd>
                </div>
                <ReactModel />
              </Suspense>
            </div>
            <div className="z-20 flex items-center justify-center fixed inset-12 left-[calc(50%+1rem)] bordered-lg ring-1 ring-inset ring-neutral-700 bg-white dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] shadow-xl rounded-lg transition-all">
              <TextGenerateEffect
                className="leading-tight font-semibold text-sm tracking-tight m-24 cursor-default"
                words={t('reactText')}
              />
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}