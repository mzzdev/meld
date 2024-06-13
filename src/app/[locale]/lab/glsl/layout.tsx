import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLSL"
}

export default async function LoaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
