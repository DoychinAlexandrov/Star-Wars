import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.png";
import Wrapper from "../wrappers/Navbar";

const Navbar = () => {
    return (
        <Wrapper>
            <div className="social-links">
                <a
                    href="https://www.facebook.com/StarWars/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaFacebook className="social-icon" />
                </a>
                <a
                    href="https://www.instagram.com/starwars/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaInstagram className="social-icon" />
                </a>
                <a
                    href="https://twitter.com/starwarsuk?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaTwitter className="social-icon" />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=HnzNZ0Mdx4I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaYoutube className="social-icon" />
                </a>
            </div>
            <span className="logo">
                <img className="logo" src={Logo} alt="logo" />
            </span>
            <div className="nav-center">
                <div className="nav-links">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/story" className="nav-link">
                        Story
                    </NavLink>
                    <NavLink to="/people" className="nav-link">
                        People
                    </NavLink>
                    <NavLink to="/gallery" className="nav-link">
                        Gallery
                    </NavLink>
                    <NavLink to="/species" className="nav-link">
                        Species
                    </NavLink>
                    <NavLink to="/vehicles" className="nav-link">
                        Vehicles
                    </NavLink>
                    <NavLink to="/films" className="nav-link">
                        Films
                    </NavLink>
                </div>
            </div>

            <hr />
        </Wrapper>
    );
};

export default Navbar;
