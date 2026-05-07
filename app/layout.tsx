import type { Metadata } from "next";
import { Inter, Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Daniel Dennis & Co. — Boston CPA firm for nonprofits, charters, and affordable housing",
  description:
    "An independent Massachusetts CPA firm trusted by nonprofits, charter schools, affordable-housing organizations, and employee-benefit plans across New England.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", fraunces.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F4] text-[#0F1B2D]">
        {children}
      </body>
    </html>
  );
}
