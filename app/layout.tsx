import type { Metadata } from "next";
import { Playfair_Display, Poppins, Caveat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat-script",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sadhana T P — Full Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Sadhana T P — a Full Stack Developer and AI/ML Engineer with exceptional frontend skills. Building things that work & look stunning. Available for freelance & full-time opportunities.",
  keywords: [
    "Sadhana T P",
    "Full Stack Developer",
    "AI ML Engineer",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "Portfolio",
  ],
  authors: [{ name: "Sadhana T P", url: "https://github.com/sadhanatp14" }],
  openGraph: {
    title: "Sadhana T P — Full Stack Developer & AI/ML Engineer",
    description:
      "Building things that work & look stunning. End-to-end development. Pixel-perfect interfaces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadhana T P — Full Stack Developer",
    description: "Building things that work & look stunning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
