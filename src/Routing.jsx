import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut";
import { Home } from "./Pages/Home";
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
    ],
  },
]);
