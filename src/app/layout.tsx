import type { Metadata } from "next";
import { Outfit, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import BackToTop from "@/components/BackToTop";
import VaporBackground from "@/components/VaporBackground";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rima Naurin | AI Engineer & Data Scientist Portfolio",
  description: "B.Tech in Artificial Intelligence & Data Science student. Passionate about machine learning, deep learning, software engineering, and data science.",
  keywords: ["Rima Naurin", "AI Engineer", "Data Scientist", "Machine Learning", "Portfolio", "KTU", "B.Tech AI"],
  authors: [{ name: "Rima Naurin" }],
  openGraph: {
    title: "Rima Naurin | AI & Data Science Portfolio",
    description: "Modern, interactive portfolio of Rima Naurin, AI Engineer & Data Scientist student at KTU.",
    type: "website",
    locale: "en_US",
    siteName: "Rima Naurin Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>
          <VaporBackground />
          <Loader />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
