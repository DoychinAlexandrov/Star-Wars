import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Wrapper from "../wrappers/Species";

const SpeciesSlider = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/species/")
            .then((response) => response.json())
            .then((data) => setSpecies(data.results))
            .catch((error) => console.log(error));
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1, // Number of slides to slide at once
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <Wrapper>
            <h1>Star Wars Species</h1>
            <Carousel responsive={responsive}>
                {species.map((specie) => (
                    <div key={specie.name} className="species-card">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/species/${getIdFromUrl(
                                specie.url
                            )}.jpg`}
                            alt={specie.name}
                        />
                        <div className="species-details">
                            <h3>{specie.name}</h3>
                            <p>
                                <span style={{ fontWeight: "bold" }}>
                                    Classification:
                                </span>{" "}
                                {specie.classification}
                            </p>
                            <p>
                                <span style={{ fontWeight: "bold" }}>
                                    Designation:
                                </span>{" "}
                                {specie.designation}
                            </p>
                            <p>
                                <span style={{ fontWeight: "bold" }}>
                                    Average Height:
                                </span>{" "}
                                {specie.average_height}
                            </p>
                            <p>
                                <span style={{ fontWeight: "bold" }}>
                                    Average Lifespan:
                                </span>{" "}
                                {specie.average_lifespan}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </Wrapper>
    );
};

// Helper function to extract the ID from the species URL
const getIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
};

export default SpeciesSlider;
