import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="Sidebar">
      <Link to="">Home</Link>&nbsp;
      <Link to="about">About</Link>&nbsp;
    </nav>
  );
}

export default Sidebar;
