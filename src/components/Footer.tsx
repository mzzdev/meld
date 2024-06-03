import Link from 'next/link';
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex flex-col items-center text-center py-8 space-y-4 pointer-events-auto bg-white dark:bg-black">
      <div className="flex items-center space-x-2">
        <Link href="https://github.com/mzzdev/meld" target="_blank" className="hover:opacity-50 transition-all">
          <Image
            src={'/icons/github.svg'}
            alt={'github-logo'}
            width={25}
            height={25}
            className="pointer-events-none select-none"
          />
        </Link>
      </div>
      <div className="leading-8 font-semibold text-medium tracking-tight text-black dark:text-white">
        <p>
          {t.rich('madeWithLove', {
            link: (chunks) => (
              <Link href="https://github.com/mzzdev/" target="_blank" className="hover:opacity-50 transition-all">
                {chunks}
              </Link>
            )
          })}
        </p>
        <p>
          <Link href="https://meld-mu.vercel.app/" className="hover:opacity-50 transition-opacity">
            Meld
          </Link> | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}