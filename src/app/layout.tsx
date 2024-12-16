import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "../components/footer";
import PlausibleCode from "../components/plausible";

export const metadata: Metadata = {
  title: "Tristan's Works",
  description: "works of Tristan, just for fun!",
};
export const viewport: Viewport = {
  themeColor: "#7f828d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: `rgb(25, 97, 39)`,
          backgroundImage: `url('/assets/bg.square.png')`,
        }}
        className={`antialiased`}
      >
        <Providers>{children}</Providers>
        <Footer />
        {process.env.NODE_ENV == "production" && <PlausibleCode />}
      </body>
    </html>
  );
}
