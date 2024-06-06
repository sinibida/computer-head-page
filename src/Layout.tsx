import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

function Layout() {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
