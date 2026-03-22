import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/layout";
import { lazy } from "react";
const Home = lazy(()=>import('../components/home/home2'));
const Discover = lazy(() => import("../components/discover/discover"));
const About = lazy(()=>import('../components/about/about'));
// const Service = lazy(()=>import('../components/service/service'));
const Contact = lazy(()=>import('../components/contact/contact'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "discover", element: <Discover /> },
            // { path: "service", element: <Service /> },
            { path: "contact", element: <Contact /> },
        ],
    },
])

const Rout:React.FC = () =>{
    return <RouterProvider router={router} />
}

export default Rout;