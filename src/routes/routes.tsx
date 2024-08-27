import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/ErrorPage";
import Home from "../pages/HomePage";
import Params from "../pages/UtentiPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/utenti",
    element: <Params />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
