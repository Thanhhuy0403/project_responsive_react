import logo from "../img/logo.svg";
import "../css/Navbar.css";
import { useState, useRef } from "react";
import "../css/responsive.css";
import MenuNav from "./MenuNav";

import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [menuToggle, setMenuToggle] = useState(false);
    const [logoDisplay, setLogoDisplay] = useState(true);

    function handleClick(event, itemName) {
        setSelectedItem(itemName);
    }

    function handleMenu() {
        setMenuToggle((prevToggle) => !prevToggle);
        setLogoDisplay((prev) => !prev);
    }

    return (
        // <!-- Header -->
        <header className="header">
            <div className="container">
                {/* <!-- Navigation Bar --> */}
                <nav className="nav-bar">
                    {/* <!-- Logo --> */}
                    <div className={logoDisplay ? "logo" : "logo-hidden"}>
                        <img src={logo} alt="MODULARS" />
                    </div>

                    {/* <!-- Nav bar --> */}
                    <div className="list-item">
                        <a
                            onClick={(event) => handleClick(event, "home")}
                            href="#home"
                            className={selectedItem === "home" ? "click" : ""}
                        >
                            Home
                        </a>
                        <a
                            onClick={(event) => handleClick(event, "about")}
                            href="#about"
                            className={selectedItem === "about" ? "click" : ""}
                        >
                            About
                        </a>
                        <a
                            onClick={(event) => handleClick(event, "blog")}
                            href="#blog"
                            className={selectedItem === "blog" ? "click" : ""}
                        >
                            Blog
                        </a>
                        <a
                            onClick={(event) => handleClick(event, "contact")}
                            href="#contact"
                            className={selectedItem === "contact" ? "click" : ""}
                        >
                            Contact
                        </a>

                        {/* <!-- Action --> */}
                        <div className="action">
                            <button className="button">
                                <a href="#!">Sign up</a>
                            </button>
                        </div>
                        <i className="fa-solid fa-bars menu-icon" onClick={handleMenu}></i>
                    </div>
                </nav>
            </div>
            <MenuNav menuToggle={menuToggle} setMenuToggle={setMenuToggle} setLogoDisplay={setLogoDisplay} />
        </header>
    );
}

export default Navbar;
