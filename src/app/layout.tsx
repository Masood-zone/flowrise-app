import type { Metadata } from "next";
import "./globals.css";
import { getMonaSans } from "./fonts/fonts";
import { createClient } from "@/prismicio";
import Header from "@/components/header";
import Footer from "@/components/footer";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title || "Flowrise",
    description:
      settings.data.meta_description ||
      "Flowrise is the cool app for cool people.",
    openGraph: {
      images: [settings.data.og_image?.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getMonaSans.variable} antialiased font-body`}>
        {/* Navbar */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
