import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import AddProducts from "../components/layout/AddProducts/AddProducts";
import UpdateServices from "../components/layout/UpdateServices/UpdateServices";
import AllServices from "../page/AllServices/AllServices";
import SingleServices from "../page/SingleServices/SingleServices";
import MyServices from "../page/MyServices/MyServices";
import MySchedule from "../page/MySchedule/MySchedule";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://assignment-11-server-rose-gamma.vercel.app/services"),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "addProducts",
        element: (
          <PrivateRoutes>
            <AddProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "myServices",
        element: (
          <PrivateRoutes>
            <MyServices />
          </PrivateRoutes>
        ),
        loader: () =>
        fetch("https://assignment-11-server-rose-gamma.vercel.app/userServices"),
      },
      {
        path: "mySchedule",
        element: (
          <PrivateRoutes>
            <MySchedule />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://assignment-11-server-rose-gamma.vercel.app/bookings"),
      },
      {
        path: "allServices",
        element: (
          <PrivateRoutes>
            <AllServices />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://assignment-11-server-rose-gamma.vercel.app/services"),
      },
      {
        path: "updateService/:id",
        element: (
          <PrivateRoutes>
            <UpdateServices />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-rose-gamma.vercel.app/userServices/${params.id}`
          ),
      },
      {
        path: "singleService/:id",
        element: (
          <PrivateRoutes>
            <SingleServices />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-rose-gamma.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/errorPage",
    element: <ErrorPage />,
  },
]);

export default routes;
