import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
