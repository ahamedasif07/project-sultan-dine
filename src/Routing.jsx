import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut";
// Correct import for LayOut component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

    // children: [
    //   {
    //     path: "/",
    //     element: <Home></Home>,
    //   },
    //   {
    //     path: "/shirts",
    //     element: <Shirts></Shirts>,
    //   },
    //   {
    //     path: "/tShirts",
    //     element: <Tshirts></Tshirts>,
    //   },
    //   {
    //     path: "/PoloShirts",
    //     element: <PoloShirts></PoloShirts>,
    //   },
    //   {
    //     path: "/panjbis",
    //     element: <Panjabis></Panjabis>,
    //   },
    //   {
    //     path: "/pents",
    //     element: <Pents></Pents>,
    //   },
    //   {
    //     path: "/details/:id",
    //     element: <DetailsPage></DetailsPage>,
    //   },
    // ],
  },
]);
