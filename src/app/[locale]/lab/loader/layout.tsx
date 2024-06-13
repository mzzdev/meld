import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loader"
}

export default async function LoaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
