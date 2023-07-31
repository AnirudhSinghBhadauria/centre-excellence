import { AppContextProvider } from "@/store/AppContextProvider";
import SideBar from "@/components/UI/Modal/SideBar";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";

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
  const Header = dynamic(() => import("../components/UI/Header"));
  const SideBar = dynamic(() => import("../components/UI/Modal/SideBar"));
  const Footer = dynamic(() => import("../components/UI/Footer"));

  return (
    <html lang="en">
      <head>
        <title>Centre of Excellence</title>
        <meta
          name="description"
          content="Unlock the power of specialized programs in Power Engineering and AI/ML. Learn electrical power systems and develop intelligent solutions."
        ></meta>
        <meta property="twitter:title" content="Centre of Excellence"></meta>
        <meta
          property="twitter:description"
          content="Power Engineering and AI/ML programs for a future of innovation."
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="og:title" content="Centre of Excellence"></meta>
        <meta
          property="og:description"
          content="Power Engineering and AI/ML programs for a future of innovation."
        />
        <meta property="og:url" content="https://coergpv.vercel.app/"></meta>
      </head>

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
