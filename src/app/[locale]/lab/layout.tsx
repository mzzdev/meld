import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab"
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
