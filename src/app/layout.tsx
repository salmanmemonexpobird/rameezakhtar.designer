import "../styles/index.scss";
import ThemeProvider from "@/components/provider/ThemeProvider";
import { VideoProvider } from "@/provider/VideoProvider";

import {
  Abril_Fatface,
  DM_Sans,
  EB_Garamond,
  Kufam,
  Poppins,
  Playfair_Display,
} from "next/font/google";

// all font configure
const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-garamond",
});

const kufam = Kufam({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kufam",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      tp-theme="tp-theme-dark"
      className={`
        ${abril.variable}
        ${dmSans.variable}
        ${garamond.variable}
        ${kufam.variable}
        ${poppins.variable}
        ${playfair.variable}
      `}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="scroll-smooth">
        <ThemeProvider>
          <VideoProvider>{children}</VideoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
