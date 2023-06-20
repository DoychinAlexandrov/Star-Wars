import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Wrapper from "../wrappers/Navbar";

const Navbar = () => {
    return (
        <Wrapper>
            <span className="logo">
                <img className="logo" src={Logo} alt="logo" />
            </span>
            <div className="nav-center">
                <div className="nav-links">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/people" className="nav-link">
                        People
                    </NavLink>
                    <NavLink to="/planets" className="nav-link">
                        Planets
                    </NavLink>
                    <NavLink to="/spaceships" className="nav-link">
                        Spaceships
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
        </Wrapper>
    );
};

export default Navbar;
