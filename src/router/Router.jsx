import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Profile from "../pages/dashboard/profile/Profile";
import UserHome from "../pages/dashboard/userHome/UserHome";
import CreateDonation from "../pages/dashboard/createDonation/CreateDonation";
import MyDonationRequest from "../pages/dashboard/myDonationRequest/MyDonationRequest";
import DonationRequestUpdate from "../pages/dashboard/donationRequestDetails/DonationRequestUpdate";
import DonationRequestDetails from "../pages/dashboard/donationRequestDetails/DonationRequestDetails";
import AdminHome from "../pages/dashboard/admin/AdminHome";
import AllUser from "../pages/dashboard/admin/AllUser";
import AllBloodDonationRequest from "../pages/dashboard/admin/AllBloodDonationRequest";
import ContentManagement from "../pages/dashboard/admin/ContentManagement";
import AddBlog from "../pages/dashboard/admin/AddBlog";
import DonationRequest from "../pages/donationRequest/DonationRequest";
import AllDonationRequestDetails from "../pages/donationRequest/AllDonationRequestDetails";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog/BlogDetails";
import SearchPage from "../pages/searchPage/Search";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/searchPage",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/blog-details/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_COMMON}/blogShow/${params.id}`)
      },
      {
        path: '/donation-request',
        element: <DonationRequest></DonationRequest>
      },
      {
        path: '/donationDetails/:id',
        element: <AllDonationRequestDetails></AllDonationRequestDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_COMMON}/donationStatus/${params.id}`)
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
        path: "admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "all-users",
        element: <AllUser></AllUser>,
      },
      {
        path: "all-blood-donation-request",
        element: <AllBloodDonationRequest></AllBloodDonationRequest>,
      },
      {
        path: "content-management",
        element: <ContentManagement></ContentManagement>,
      },
      {
        path: "content-management/add-blog",
        element: <AddBlog></AddBlog>,
      },
      // voluntener
      {
        path: "volunteer-home",
        element: <AdminHome></AdminHome>,
      },
    ],
  },
]);
