import { useEffect, useState } from "react";
import axios from "axios";
import "../wrappers/films.css";

const FilmCard = ({ film, onOpenModal }) => {
    return (
        <div className="film-card">
            <img
                src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
                alt={film.title}
                className="film-image"
                onClick={() => onOpenModal(film)}
            />
            <h3 className="film-title">{film.title}</h3>
        </div>
    );
};

const FilmList = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilm, setSelectedFilm] = useState(null);

    useEffect(() => {
        const savedFilms = localStorage.getItem("films");
        if (savedFilms) {
            setFilms(JSON.parse(savedFilms));
            setLoading(false);
        } else {
            axios
                .get("https://swapi.dev/api/films/")
                .then((response) => {
                    setFilms(response.data.results);
                    setLoading(false);
                    localStorage.setItem(
                        "films",
                        JSON.stringify(response.data.results)
                    );
                })
                .catch((error) => console.log(error));
        }
    }, []);

    const openModal = (film) => {
        setSelectedFilm(film);
    };

    const closeModal = () => {
        setSelectedFilm(null);
    };

    return (
        <div>
            <br />
            {loading ? (
                <div className="loader">Loading...</div>
            ) : (
                <div className="film-list">
                    {films.map((film, index) => (
                        <FilmCard
                            key={index}
                            film={film}
                            onOpenModal={openModal}
                        />
                    ))}
                </div>
            )}
            {selectedFilm && (
                <div className="film-modal">
                    <div className="film-modal-content">
                        <button className="close-button" onClick={closeModal}>
                            Close
                        </button>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/films/${selectedFilm.episode_id}.jpg`}
                            alt={selectedFilm.title}
                            className="film-modal-image"
                        />
                        <div className="film-modal-info">
                            <h2 className="film-modal-title">
                                {selectedFilm.title}
                            </h2>
                            <p className="film-modal-description">
                                <strong>Episode:</strong>{" "}
                                {selectedFilm.episode_id}
                            </p>
                            <p className="film-modal-description">
                                <strong>Director:</strong>{" "}
                                {selectedFilm.director}
                            </p>
                            <p className="film-modal-description">
                                <strong>Producer:</strong>{" "}
                                {selectedFilm.producer}
                            </p>
                            <p className="film-modal-description">
                                <strong>Release Date:</strong>{" "}
                                {selectedFilm.release_date}
                            </p>
                            <p className="film-modal-description">
                                <strong>Opening Crawl:</strong>{" "}
                                {selectedFilm.opening_crawl}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <br />
        </div>
    );
};

export default FilmList;
