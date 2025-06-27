import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main section */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
