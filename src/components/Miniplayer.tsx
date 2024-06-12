import { Suspense } from "react";
import { Skeleton, useDisclosure } from "@nextui-org/react";
import { ReactModel } from "./ModelViewer";
import { Modal, ModalContent } from "@nextui-org/modal";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useTranslations } from "next-intl";

export function Miniplayer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations("Home");

  return (
    <>
      <div
        className="z-20 flex items-center justify-center bordered-lg ring-1 ring-inset ring-neutral-700 hover:ring-neutral-400 bg-white dark:bg-black shadow-xl rounded-lg cursor-pointer pointer-events-none transition-all absolute h-1/4 w-1/4 md:h-1/2 md:w-1/5 top-4 right-4 md:top-auto md:bottom-8 md:right-8"
        onClick={onOpen}
      >
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <ReactModel />
        </Suspense>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange} className="bg-inherit">
        <ModalContent>
          <div className="relative w-full h-[50vh] flex flex-col md:flex-row gap-4">
            <div
              className="z-20 flex items-center justify-center bordered-lg ring-1 ring-inset ring-neutral-700 bg-white dark:bg-black shadow-xl rounded-lg cursor-grab transition-all fixed inset-12 right-[calc(50%+1rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Suspense fallback={<Skeleton className="w-full h-full" />}>
                <ReactModel />
              </Suspense>
            </div>
            <div className="z-20 flex items-center justify-center fixed inset-12 left-[calc(50%+1rem)] bordered-lg ring-1 ring-inset ring-neutral-700 bg-white dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] shadow-xl rounded-lg transition-all">
              <TextGenerateEffect
                className="leading-tight font-semibold text-sm tracking-tight m-24 cursor-default"
                words={t('nextjs.react')}
              />
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}