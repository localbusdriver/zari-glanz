import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import Navbar from "@/components/ui/top-navbar";

import { Abhaya_Libre } from "next/font/google";

import Footer from "@/components/footer/footer";

const Abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//       <div className={Abhaya.className}>
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
//       </div>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={Abhaya.className}>
      <Navbar />
      <main className="flex flex-col w-full h-full overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
