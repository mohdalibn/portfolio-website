import localFont from "next/font/local";
import "./globals.css";
import { Manrope } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const geomanist = localFont({
//   src: "./fonts/Geomanist-Medium.woff",
//   variable: "--font-geomanist",
// });

const manrope = Manrope({
  subsets: ['latin'],
  variable: "--var-manrope"
});

export const metadata = {
  title: "MABN Portfolio Website",
  description: "This is Mohd Ali Bin Naser's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={`${manrope.variable} antialiased`}
        // className={`${geomanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
