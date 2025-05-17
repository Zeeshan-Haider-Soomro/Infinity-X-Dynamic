import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import OurWork from "../pages/OurWork";
import OurServices from "../pages/OurServices";
import OurClients from "../pages/OurClients";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ThankYou from "../Components/ThankYou";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            },
            {
                path: "/our-work",
                element: <OurWork/>
            },
            {
                path: "/our-services",
                element: <OurServices/>
            },
            {
                path: "/our-clients",
                element: <OurClients/>
            },
            {
                path: "/contact-us",
                element: <ContactUs/>
            },
            {
                path: "/thank-you",
                element: <ThankYou />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
])

export default router