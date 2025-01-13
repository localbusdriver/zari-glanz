import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import Navbar from "@/components/ui/top-navbar";

import Footer from "@/components/footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zari Glanz",
  description: "Wellington based luxury underwear brand.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <SidebarProvider>
//           <AppSidebar />
//           <SidebarTrigger className="" />
//           <main className="flex flex-col w-full h-full overflow-hidden">
//             <div className="h-16 px-32 w-full text-center">
//               <h1 className="text-3xl font-bold italic mx-auto">Zari Glanz</h1>
//             </div>
//             {children}
//             <Footer />
//           </main>
//         </SidebarProvider>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex flex-col w-full h-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
