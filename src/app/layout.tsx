import type { Metadata } from "next";
import { inter, lusitana } from "@/components/ui/fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Meld",
  description: "Showcase web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
