import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "My little life repo",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <div className="absolute inset-0 -z-20">
            <div className="fixed inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#800080_100%)]"></div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
          <Title />

          <div className="flex-1">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
