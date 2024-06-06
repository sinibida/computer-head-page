import { getPublicURL } from "../../utils";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={getPublicURL("BlogTitleHero.svg")} />
    </header>
  );
}

export default Header;
