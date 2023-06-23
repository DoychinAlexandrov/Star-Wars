import { useEffect, useState } from "react";
import axios from "axios";

const FilmList = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/films/")
            .then((response) => setFilms(response.data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Star Wars Films</h1>
            {films.map((film, index) => (
                <div key={index}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/films/${
                            index + 1
                        }.jpg`}
                        alt={`Film ${index + 1}`}
                    />
                    <p>{film.title}</p>
                </div>
            ))}
        </div>
    );
};

export default FilmList;
