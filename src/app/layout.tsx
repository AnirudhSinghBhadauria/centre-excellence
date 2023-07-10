import { AppContextProvider } from "@/store/AppContextProvider";
import SideBar from "@/components/UI/Modal/SideBar";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// NEXT 13 FONTS -----------------------

export const sarif = Inter({ subsets: ["latin"] });
export const sans = localFont({
  src: "../assets/fonts/ActiveGrotesk/AktivGrotesk_W_Rg.woff2",
});
export const italia = localFont({
  src: [
    {
      path: "../assets/fonts/ItalianPlateExpanded/ItalianPlateNo1Expanded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/ItalianPlateExpanded/ItalianPlateNo1Expanded-Demibold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <AppContextProvider>
          <Header />
          <SideBar />
          <main className="relative z-30">
            <aside
              className="fixed left-[100%] top-0 z-40 w-full bg-primary transition-all
               duration-700 ease-in-out md:hidden"
              id="side-bar"
            ></aside>
            {children}
          </main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}

// header : z-50
// sidebar : z-40
// main : z-30
// footer : z-10
