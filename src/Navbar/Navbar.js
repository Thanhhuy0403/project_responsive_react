import logo from "../img/logo.svg";
import "../css/Navbar.css";
import { useState } from "react";

function Navbar() {
    const [selectedItem, setSelectedItem] = useState(null);

    function handleClick(event, itemName) {
        setSelectedItem(itemName);
    }

    return (
        // <!-- Header -->
        <header className="header">
            <div className="container">
                {/* <!-- Navigation Bar --> */}
                <nav className="nav-bar">
                    {/* <!-- Logo --> */}
                    <div className="logo">
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
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
