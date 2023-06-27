import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Wrapper from "../wrappers/Footer";

const Footer = () => {
    return (
        <Wrapper>
            <footer className="footer-section">
                <div className="footer-content">
                    <p className="footer-text">
                        © 2023 Star Wars. All rights reserved.
                    </p>
                    <div className="social-links">
                        <a
                            href="https://www.facebook.com/StarWars/?locale=bg_BG"
                            className="social-link"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com/starwars?lang=bg"
                            className="social-link"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.instagram.com/starwars/?hl=bg"
                            className="social-link"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;
