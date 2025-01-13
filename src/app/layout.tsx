
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zari Glanz",
  description: "Wellington based luxury underwear brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col w-full h-full overflow-hidden">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
