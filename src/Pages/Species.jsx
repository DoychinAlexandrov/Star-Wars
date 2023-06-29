import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Wrapper from "../wrappers/Species";

const SpeciesSlider = () => {
    const [species, setSpecies] = useState([]);
    useEffect(() => {
        // Check if species data exists in local storage
        const savedSpecies = localStorage.getItem("species");
        if (savedSpecies) {
            setSpecies(JSON.parse(savedSpecies));
        } else {
            fetch("https://swapi.dev/api/species/")
                .then((response) => response.json())
                .then((data) => {
                    setSpecies(data.results);
                    // Save species data in local storage
                    localStorage.setItem(
                        "species",
                        JSON.stringify(data.results)
                    );
                })
                .catch((error) => console.log(error));
        }
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

    const getIdFromUrl = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
    };

    return (
        <Wrapper>
            <h1 className="slider-heading">Star Wars Species</h1>
            <Carousel responsive={responsive} className="species-carousel">
                {species.map((specie) => (
                    <div key={specie.name} className="species-card">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/species/${getIdFromUrl(
                                specie.url
                            )}.jpg`}
                            alt={specie.name}
                            className="species-image"
                        />
                        <div className="species-details">
                            <h3 className="species-name">{specie.name}</h3>
                            <p>
                                <span className="detail-label">
                                    Classification:
                                </span>{" "}
                                {specie.classification}
                            </p>
                            <p>
                                <span className="detail-label">
                                    Designation:
                                </span>{" "}
                                {specie.designation}
                            </p>
                            <p>
                                <span className="detail-label">
                                    Average Height:
                                </span>{" "}
                                {specie.average_height}
                            </p>
                            <p>
                                <span className="detail-label">
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

export default SpeciesSlider;
