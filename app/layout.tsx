import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F4] text-[#0F1B2D]">
        {children}
      </body>
    </html>
  );
}
