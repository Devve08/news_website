import "./globals.css";
import type { Metadata } from "next";
import { ReduxProvider } from "./redux/provider";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className="bg-background px-4 sm:px-10 md:px-20">
          <Navbar />
          {children}
          
        </body>
        <Footer />
      </ReduxProvider>
    </html>
  );
}
