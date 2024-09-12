import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
// Correct import for LayOut component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
