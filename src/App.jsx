import { RouterProvider, createBrowserRouter } from "react-router-dom";

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

const router = createBrowserRouter([
    {
        path: "/",
        element: <SharedLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "people",
                element: <People />,
            },
            {
                path: "planets",
                element: <Planets />,
            },
            {
                path: "spaceships",
                element: <Spaceships />,
            },
            {
                path: "species",
                element: <Species />,
            },
            {
                path: "vehicles",
                element: <Vehicles />,
            },
            {
                path: "films",
                element: <Films />,
            },
        ],
    },
]);

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<SharedLayout />}>
//                     <Route index element={<Home />} />
//                     <Route path="/people" element={<People />} />
//                     <Route path="/planets" element={<Planets />} />
//                     <Route path="/spaceships" element={<Spaceships />} />
//                     <Route path="/species" element={<Species />} />
//                     <Route path="/vehicles" element={<Vehicles />} />
//                     <Route path="/films" element={<Films />} />
//                 </Route>
//                 <Route path="/*" element={<Error />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }
const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
