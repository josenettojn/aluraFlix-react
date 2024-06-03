import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import NewVideo from "../components/NewVideo/NewVideo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewVideo />,
  }
]);