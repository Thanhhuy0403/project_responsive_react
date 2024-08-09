import "../css/responsive.css";
import logo from "../img/logo.svg";
import { useEffect, useState } from "react";

function MenuNav({ menuToggle, setMenuToggle, setLogoDisplay }) {
    const [isVisible, setIsVisible] = useState(menuToggle);

    useEffect(() => {
        setIsVisible(menuToggle);
    }, [menuToggle]);

    function handleOverlay() {
        setMenuToggle(false);
        setLogoDisplay(true);
    }

    return (
        <div className={isVisible ? "overlay overlay-visible" : "overlay"} onClick={handleOverlay}>
            <div className={isVisible ? "menu-draw menu-draw-visible" : "menu-draw"}>
                {/* <!-- Logo --> */}
                <div className="logo">
                    <img src={logo} alt="MODULARS" />
                </div>

                <div className="list-item">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default MenuNav;
