import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/ErrorPage";
import Home from "../pages/HomePage";
import Params from "../pages/UtentiPage";
import HoursPage from "@/pages/HoursPage";
import TutorialPage from "@/pages/TutorialPage";

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
    path: "/aggiungi-ore",
    element: <HoursPage />,
  },
  {
    path:"/tutorial",
    element: <TutorialPage />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
