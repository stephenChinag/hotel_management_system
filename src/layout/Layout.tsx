import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <div className="container mx-auto py-10 flex-1">{children} </div>
      <Footer />
    </div>
  );
};

export default Layout;
