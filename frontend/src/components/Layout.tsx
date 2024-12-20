import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-100 py-4 text-center">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
};

export default Layout;
