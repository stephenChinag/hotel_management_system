import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Outlet />
    </div>
  );
};

export default Layout;
