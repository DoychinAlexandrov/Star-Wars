function Modal({ character, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
                            character.url
                        )}.jpg`}
                        alt={character.name}
                        className="character-image"
                    />
                    <div>
                        <h2 className="character-name">{character.name}</h2>
                        <p>
                            <strong>Height:</strong> {character.height}
                        </p>
                        <p>
                            <strong>Mass:</strong> {character.mass}
                        </p>
                        <p>
                            <strong>Hair color:</strong> {character.hair_color}
                        </p>
                        <p>
                            <strong>Skin color:</strong> {character.skin_color}
                        </p>
                        <p>
                            <strong>Eye color:</strong> {character.eye_color}
                        </p>
                        <p>
                            <strong>Gender:</strong> {character.gender}
                        </p>
                        <p>
                            <strong>Birth Year:</strong> {character.birth_year}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getCharacterId(url) {
    const matches = url.match(/\/(\d+)\/$/);
    if (matches && matches.length === 2) {
        return matches[1];
    }
    return "";
}

export default Modal;
