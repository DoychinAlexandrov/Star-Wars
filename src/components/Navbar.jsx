import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/people">People</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/spaceships">Spaceships</Link>
            <Link to="/species">Species</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="/films">Films</Link>
        </nav>
    );
};

export default Navbar;
