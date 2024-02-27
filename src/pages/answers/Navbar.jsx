import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1052);

  const handleShowMobileNav = () => {
    setShowMobileNav((prevState) => !prevState);
  };

  const handleShowMobileSearch = () => {
    setShowMobileSearch((prevState) => !prevState);
  };

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 1052);
    };

    updateView(); // Initial check on mount

    window.addEventListener("resize", updateView); // Add event listener for window resize

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  console.log(showMobileSearch);
  return (
    <div className="Navbar">
      <div className="flex-container">
        <div className="left">
          <span className="nav-toggle" onClick={() => handleShowMobileNav()}>
            AEON
          </span>
        </div>
        <div className="middle">
          <div id={showMobileNav ? "hidden" : ""} className="nav-container">
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => handleShowMobileNav()}
            >
              Showcase
            </NavLink>
            <NavLink
              className="nav-link"
              to="/docs"
              onClick={() => handleShowMobileNav()}
            >
              Docs
            </NavLink>
            <NavLink
              className="nav-link"
              to="/blog"
              onClick={() => handleShowMobileNav()}
            >
              Blog
            </NavLink>
            <NavLink
              className="nav-link"
              to="/analytics"
              onClick={() => handleShowMobileNav()}
            >
              Analytics
            </NavLink>
            <NavLink
              className="nav-link"
              to="/commerce"
              onClick={() => handleShowMobileNav()}
            >
              Commerce
            </NavLink>
            <NavLink
              className="nav-link"
              to="/templates"
              onClick={() => handleShowMobileNav()}
            >
              Templates
            </NavLink>
            <NavLink
              className="nav-link"
              to="/enterprise"
              onClick={() => handleShowMobileNav()}
            >
              Enterprise
            </NavLink>
          </div>
        </div>
        <div className="right">
          <div className="search-container">
            <i
              className={
                "bx bx-search " +
                (showMobileSearch && isMobileView ? "d-none" : "")
              }
              onClick={() => handleShowMobileSearch()}
            />
            {((showMobileSearch && isMobileView) || !isMobileView) && (
              <Form.Control
                type="text"
                name="search"
                className="search-input"
                placeholder="Search documentation..."
                onChange={(e) => console.log(e.target.value)}
              />
            )}
            <i
              className={"bx bx-x " + (showMobileSearch ? "" : "d-none")}
              onClick={() => handleShowMobileSearch()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
