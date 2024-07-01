import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Check Your Khodam",
  description: "Check your khodam with this simple app, made by @abdipurnawan",
  creator: "Abdi Purnawan",
  authors: {
    name: "Abdi Purnawan",
    url: "https://abdipurnawan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          {children}
          <div className="absolute bottom-5 mx-auto text-white hover:text-gray-100">
            Made with ❤️ by
            <Link
              href="https://abdipurnawan.com"
              className="ml-1 font-semibold hover:underline"
            >
              Abdi Purnawan
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
