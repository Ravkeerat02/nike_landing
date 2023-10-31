import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import "../assets/styles/nav.css"; // Import your CSS file
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        // Close the menu when the screen width is greater than 767px
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        {/* adding functionality when clicked or on smaller devices */}
        <div className="menu-toggle max-lg:hidden" onClick={toggleMenu}>
          {/* hamburger menu */}
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>

        {/* Navigation Links for Mobile or when menu is clicked */}
        <ul
          className={`flex-l flex justify-center items-center gap-16 max-lg:hidden ${
            isMenuOpen ? "open" : ""
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
