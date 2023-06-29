import { navbar } from "../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={navbar} alt="navbar" />
      </div>
    </nav>
  );
};

export default Navbar;
