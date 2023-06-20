import { Link } from "react-router-dom";
import img from "../assets/not-found.png";

const Error = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "753px",
            }}
        >
            <Link
                style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "24px",
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                    transform: "translate(-50%, -50%)",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                }}
                to="/"
            >
                back home
            </Link>
        </div>
    );
};

export default Error;
