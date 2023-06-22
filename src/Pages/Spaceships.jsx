import { useState, useEffect } from "react";

const SpaceshipPage = () => {
    const [spaceships, setSpaceships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpaceships = async () => {
            try {
                const response = await fetch(
                    "https://swapi.dev/api/starships/"
                );
                const data = await response.json();
                setSpaceships(data.results);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSpaceships();
    }, []);

    const getSpaceshipImageUrl = async (spaceship) => {
        try {
            const response = await fetch(spaceship.url);
            const data = await response.json();
            return `https://starwars-visualguide.com/assets/img/starships/${
                data.url.split("/")[5]
            }.jpg`;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    return (
        <div>
            <h1>Star Wars Spaceships</h1>
            {loading ? (
                <div className="loader"></div>
            ) : (
                <div className="spaceship-container">
                    {spaceships.map((spaceship, index) => (
                        <div className="spaceship-card" key={index}>
                            <img
                                className="spaceship-image"
                                src={getSpaceshipImageUrl(index)}
                                alt={spaceship.name}
                            />
                            <div className="spaceship-info">
                                <h2>{spaceship.name}</h2>
                                <p>Model: {spaceship.model}</p>
                                <p>Manufacturer: {spaceship.manufacturer}</p>
                                <p>Passengers: {spaceship.passengers}</p>
                                <p>
                                    Cargo Capacity: {spaceship.cargo_capacity}
                                </p>
                                <p>Class: {spaceship.starship_class}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SpaceshipPage;
