import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
    Home,
    People,
    GalleryPage,
    Story,
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
                path: "story",
                element: <Story />,
            },
            {
                path: "people",
                element: <People />,
            },
            {
                path: "gallery",
                element: <GalleryPage />,
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

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
