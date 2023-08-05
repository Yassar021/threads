import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "..//globals.css";
import BottomBar from "@/components/shared/Bottombar";
import LeftSideBar from "@/components/shared/Leftsidebar";
import RightSideBar from "@/components/shared/Rightsidebar";
import TopBar from "@/components/shared/Topbar";

export const metadata = {
  title: "Threads",
  description: "A Next JS 13 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`} >
          <TopBar />

          <main className='flex flex-row'>
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            <RightSideBar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
