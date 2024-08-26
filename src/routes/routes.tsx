import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/ErrorPage";
import Home from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
