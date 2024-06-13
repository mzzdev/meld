import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Lab - %s",
    default: "Lab"
  },
}

export default async function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
