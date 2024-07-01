import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Check Your Khodam",
  description: "Check your khodam with this simple app, made by @abdipurnawan",
  creator: 'Abdi Purnawan',
  authors: {
    name: 'Abdi Purnawan',
    url: 'https://abdipurnawan.com'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        </div>
      </body>
    </html>
  );
}
