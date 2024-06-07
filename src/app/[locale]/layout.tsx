import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts";
import "./globals.css";
import { Providers } from "./providers";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meld",
  description: "Showcase web",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
