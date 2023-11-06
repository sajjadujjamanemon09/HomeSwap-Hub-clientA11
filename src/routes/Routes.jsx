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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
      {
        path: 'addProducts',
        element: <AddProducts />,
      },
      {
        path: 'allServices',
        element: <AllServices />,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: 'updateService/:id',
        element: <UpdateServices/>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'singleService/:id',
        element: <SingleServices/>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
    ]
  },
  {
    path: '/errorPage',
    element: <ErrorPage />
  }
]);



export default routes;
