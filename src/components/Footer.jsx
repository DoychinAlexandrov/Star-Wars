import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
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
                </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;
