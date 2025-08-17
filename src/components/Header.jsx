import Logo from "../components/Logo_Seven.png";
import "./Header.css";

const Header = () => (
    <header className="header-container">
        <img src={Logo} alt="Logo DTI" className="header-logo" />
    </header>
);

export default Header;
