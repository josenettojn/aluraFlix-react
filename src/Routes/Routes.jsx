import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import NewVideo from "../components/NewVideo/NewVideo";
import Layout from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewVideo />,
      },
    ],
  },
]);
