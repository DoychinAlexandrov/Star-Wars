import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
    Home,
    People,
    Planets,
    Spaceships,
    Species,
    Vehicles,
    Error,
    Films,
    SharedLayout,
} from "./Pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/spaceships" element={<Spaceships />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
