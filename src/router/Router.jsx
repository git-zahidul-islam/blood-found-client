import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signup/SignUp";
import Others from "../components/others/Others";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/other',
                element: <PrivateRoute><Others></Others></PrivateRoute>
            }
        ]
    },
]);