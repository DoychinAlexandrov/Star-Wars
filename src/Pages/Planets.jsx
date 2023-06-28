// import { useState, useEffect } from "react";
// import Wrapper from "../wrappers/Planets";

// const PlanetPage = () => {
//     const [planets, setPlanets] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchPlanets = async () => {
//             try {
//                 const response = await fetch("https://swapi.dev/api/planets/");
//                 const data = await response.json();
//                 setPlanets(data.results);
//                 setLoading(false);
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchPlanets();
//     }, []);

//     const getPlanetImageUrl = (index) => {
//         if (index === 0) {
//             return "https://starwars-visualguide.com/assets/img/planets/1.jpg";
//         } else {
//             return `https://starwars-visualguide.com/assets/img/planets/${
//                 index + 1
//             }.jpg`;
//         }
//     };

//     return (
//         <Wrapper>
//             <h1>Star Wars Planets</h1>
//             {loading ? (
//                 <div className="loader"></div>
//             ) : (
//                 <div className="planet-container">
//                     {planets.map((planet, index) => (
//                         <div className="planet-card" key={index}>
//                             <img
//                                 className="planet-image"
//                                 src={getPlanetImageUrl(index)}
//                                 alt={planet.name}
//                             />
//                             <div className="planet-info">
//                                 <h2>{planet.name}</h2>
//                                 <p>Climate: {planet.climate}</p>
//                                 <p>Terrain: {planet.terrain}</p>
//                                 <p>Population: {planet.population}</p>
//                                 <p>Diameter: {planet.diameter}</p>
//                                 <p>Gravity: {planet.gravity}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </Wrapper>
//     );
// };

// export default PlanetPage;
import Gallery from "../components/Gallery";

const Planets = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
            <Gallery />
        </>
    );
};

export default Planets;
