import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/ErrorPage";
import Home from "../pages/HomePage";
import Params from "../pages/ParamsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/parametri",
    element: <Params />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
