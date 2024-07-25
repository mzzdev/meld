'use client';

import Image from "next/image";
import Link from 'next/link';
import { useTranslations } from "next-intl";
import { Divider, useDisclosure } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";

export function Footer() {
  const t = useTranslations("Footer");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Divider className="bg-neutral-200 dark:bg-neutral-800" />
      <div className="flex flex-col items-center text-center py-8 space-y-4 pointer-events-auto bg-white dark:bg-black">
        <div className="flex items-center space-x-2">
          <Link href="https://github.com/mzzdev/meld" target="_blank" className="hover:opacity-50 transition-all">
            <Image
              src={'/icons/github.svg'}
              alt={'GitHub logo'}
              width={0}
              height={0}
              style={{ width: '1.5rem', height: 'auto' }}
              className="pointer-events-none select-none"
            />
          </Link>
        </div>
        <div className="leading-8 font-semibold text-medium tracking-tight text-black dark:text-white cursor-default select-none">
          {t.rich('madeWithLove', {
            link: (chunks) => (
              <Link href="https://github.com/mzzdev/" target="_blank" className="hover:opacity-50 transition-all text-secondary-600 dark:text-secondary-400">
                {chunks}
              </Link>
            )
          })}

          <Link href="https://vercel.com/" target="_blank" className="flex flex-row gap-2 justify-center hover:opacity-50 transition-opacity">
            <p>{t('deployedOn')}</p>
            <Image
              src={'/icons/vercel.svg'}
              alt={'Vercel logo'}
              width={0}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
              className="pointer-events-none inline-block"
            />
          </Link>

          <button onClick={onOpen} title={t('accesibility.title')} aria-label={t('accesibility.title')} role="button" className="hover:opacity-50 transition-all">{t('accesibility.title')}</button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="leading-8 font-semibold text-medium tracking-tight text-black dark:text-white">
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1">{t('accesibility.title')}</ModalHeader>
              <ModalBody className="mb-4">
                <p>
                  {t('accesibility.description')}
                </p>
                <Link href="https://web.dev/explore/accessible/" target="_blank" className="text-secondary-600 dark:text-secondary-400 hover:opacity-50 transition-opacity">
                  {t('accesibility.moreInfo')}
                </Link>
              </ModalBody>
            </ModalContent>
          </Modal>

          <p className="justify-center mt-8 text-neutral-500 dark:text-neutral-400">
            <Link href="https://meld-mu.vercel.app/" className="hover:opacity-50 transition-opacity">
              Meld / 2024
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
