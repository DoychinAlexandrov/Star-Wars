import { useState, useEffect } from "react";
import Wrapper from "../wrappers/Vehicles";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/vehicles/");
                const data = await response.json();
                setVehicles(data.results);
            } catch (error) {
                console.log("Error fetching vehicles:", error);
            }
        };

        fetchVehicles();
    }, []);

    const handleVehicleClick = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    const handleCloseModal = () => {
        setSelectedVehicle(null);
    };

    return (
        <Wrapper>
            <div className="vehicle-list">
                <h1>Star Wars Vehicles</h1>
                <ul>
                    {vehicles.map((vehicle, index) => (
                        <li className="image-container" key={index}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${getImageId(
                                    vehicle.url
                                )}.jpg`}
                                alt={vehicle.name}
                                className="vehicle-image"
                                onClick={() => handleVehicleClick(vehicle)}
                            />
                        </li>
                    ))}
                </ul>
                {selectedVehicle && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <h3>{selectedVehicle.name}</h3>
                            <p>Model: {selectedVehicle.model}</p>
                            <p>Manufacturer: {selectedVehicle.manufacturer}</p>
                            <p>Class: {selectedVehicle.vehicle_class}</p>
                            <p>Length: {selectedVehicle.length}</p>
                            <p>Crew: {selectedVehicle.crew}</p>
                            <p>Passengers: {selectedVehicle.passengers}</p>
                            <p>
                                Max Atmosphering Speed:{" "}
                                {selectedVehicle.max_atmosphering_speed}
                            </p>
                            <p>
                                Cargo Capacity: {selectedVehicle.cargo_capacity}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

const getImageId = (url) => {
    const pattern = /\/(\d+)\/$/;
    const matches = url.match(pattern);
    if (matches && matches.length > 1) {
        return matches[1];
    }
    return "";
};

export default VehicleList;
