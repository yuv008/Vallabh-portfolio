import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vallabh Wattamwar | Content Automation & Reporting Ops Analyst",
  description:
    "Portfolio of Vallabh Sachin Wattamwar — Content Automation & Reporting Operations Analyst at Goldman Sachs. Specializing in SQL-to-API pipelines, Seismic templating, and data-driven reporting at scale.",
  openGraph: {
    title: "Vallabh Wattamwar | Content Automation & Reporting Ops Analyst",
    description:
      "Content Automation & Reporting Operations Analyst at Goldman Sachs. Building SQL-to-API pipelines and automated reporting systems.",
    type: "website",
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
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
