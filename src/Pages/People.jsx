import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/PeopleModal";
import Wrapper from "../wrappers/People";
import Footer from "../components/Footer";

function App() {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const fetchPeopleData = async () => {
            setIsLoading(true);
            try {
                // Check if data is stored in local storage for the current page
                const cachedData = localStorage.getItem(
                    `swapi-people-page-${page}`
                );
                if (cachedData) {
                    setPeople(JSON.parse(cachedData));
                    setIsLoading(false);
                    setIsTransitioning(false);
                } else {
                    const response = await axios.get(
                        `https://swapi.dev/api/people/?page=${page}`
                    );
                    setPeople(response.data.results);
                    setIsLoading(false);
                    setIsTransitioning(false);
                    // Store data in local storage for future use
                    localStorage.setItem(
                        `swapi-people-page-${page}`,
                        JSON.stringify(response.data.results)
                    );
                }
            } catch (error) {
                console.error("Error fetching people data:", error);
                setIsLoading(false);
                setIsTransitioning(false);
            }
        };

        fetchPeopleData();
    }, [page]);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    };

    const handlePreviousPage = () => {
        if (page > 1 && !isTransitioning) {
            setIsTransitioning(true);
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < 9 && !isTransitioning) {
            setIsTransitioning(true);
            setPage(page + 1);
        }
    };

    return (
        <Wrapper>
            <h1>Star Wars Characters</h1>
            {isLoading ? (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div>
                    <div className="card-container">
                        {people.map((person) => (
                            <div className="card" key={person.name}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
                                        person.url
                                    )}.jpg`}
                                    alt={person.name}
                                    className="character-image"
                                />
                                <p className="character-name">{person.name}</p>
                                <button
                                    className="show-more-button"
                                    onClick={() => handleCharacterClick(person)}
                                >
                                    Show More
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button
                            className="pagination-button"
                            onClick={handlePreviousPage}
                            disabled={page === 1 || isTransitioning}
                        >
                            Previous
                        </button>
                        <span className="page-number">{page}</span>
                        <button
                            className="pagination-button"
                            onClick={handleNextPage}
                            disabled={page === 9 || isTransitioning}
                        >
                            Next
                        </button>
                    </div>
                    {selectedCharacter && (
                        <Modal
                            character={selectedCharacter}
                            onClose={handleCloseModal}
                        />
                    )}
                    <Footer />
                </div>
            )}
        </Wrapper>
    );
}

function getCharacterId(url) {
    const matches = url.match(/\/(\d+)\/$/);
    if (matches && matches.length === 2) {
        return matches[1];
    }
    return "";
}

export default App;
