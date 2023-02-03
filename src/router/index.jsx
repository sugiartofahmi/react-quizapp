import { createBrowserRouter } from "react-router-dom";
import Quiz from "../views/Quiz";
import About from "../views/About";
import Modul from "../views/Modul";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/modul",
    element: <Modul />,
  },
]);

export default Router;
