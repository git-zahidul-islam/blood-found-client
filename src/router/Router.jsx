import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signup/SignUp";
import Others from "../components/others/Others";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/Profile";
import UserHome from "../pages/dashboard/userHome/UserHome";
import CreateDonation from "../pages/dashboard/createDonation/CreateDonation";
import MyDonationRequest from "../pages/dashboard/myDonationRequest/MyDonationRequest";
import DonationRequestUpdate from "../pages/dashboard/donationRequestDetails/DonationRequestUpdate";
import DonationRequestDetails from "../pages/dashboard/donationRequestDetails/DonationRequestDetails";
import AdminHome from "../pages/dashboard/admin/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/other",
        element: (
          <PrivateRoute>
            <Others></Others>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "user-home",
        element: <UserHome></UserHome>,
      },
      {
        path: "create-donation",
        element: <CreateDonation></CreateDonation>,
      },
      {
        path: "my-donation-requests",
        element: <MyDonationRequest></MyDonationRequest>,
      },
      {
        path: "/dashboard/donation-requests-update/:id",
        element: <DonationRequestUpdate></DonationRequestUpdate>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_COMMON}/donationDetails/${params.id}`
          ),
      },
      {
        path: "/dashboard/donation-requests-details/:id",
        element: <DonationRequestDetails></DonationRequestDetails>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_COMMON}/donationDetails/${params.id}`
          ),
      },
      // admin route
      {
        path: 'admin-home',
        element: <AdminHome></AdminHome>
      }
    ],
  },
]);
