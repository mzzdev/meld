import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { US, ES, RU } from 'country-flag-icons/react/3x2';
import { useTranslations } from "next-intl";

const flagStyle = 'w-5 h-auto';

const flagMap: { [key: string]: JSX.Element } = {
  en: <US className={flagStyle} />,
  es: <ES className={flagStyle} />,
  ru: <RU className={flagStyle} />,
};

export function LanguageSelector({ locales }: { locales: string[] }) {
  const router = useRouter();
  const t = useTranslations("Home");

  const handleLocaleChange = (locale: string): void => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <Dropdown className="text-black dark:text-white dark:bg-black">
      <DropdownTrigger className="w-auto h-auto">
        <Button isIconOnly>
          <GlobeAltIcon className="w-6 h-6" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Language selector">
        {locales.map(locale => (
          <DropdownItem
            key={locale}
            onPress={() => handleLocaleChange(locale)}
            startContent={flagMap[locale]}
          >
            {t(`navBar.langs.${locale}`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
