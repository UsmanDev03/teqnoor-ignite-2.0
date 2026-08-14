import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "@/components/common/CookieBanner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
