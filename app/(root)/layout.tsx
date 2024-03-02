import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import "../globals.css";

export const metadata = {
  title: "Threads Clone",
  description: "A Next.js application",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <Topbar/>
          <main>
            <LeftSidebar/>
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>
            <RightSidebar/>
          </main>
          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
