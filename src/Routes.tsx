import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import TrackPage from "./components/TrackPage/TrackPage";
import AboutArea from "./components/AboutArea/AboutArea";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: '/track/:slug',
        element: <TrackPage/>
    },
    {
        path: '/about-area',
        element: <AboutArea />
    }
]);

const Routes = () => (
    <RouterProvider router={router}/>
)

export default Routes