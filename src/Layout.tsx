import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import "./Layout.css";
import { getPublicURL } from "./utils";

function Layout() {
  return (
    <div className="Layout">
      <div className="bgdeco-container">
        <img src={getPublicURL("BGDeco.svg")} className="bgdeco" />
      </div>
      <div className="grid">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
