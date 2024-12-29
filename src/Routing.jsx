import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Catering from "./Pages/Catering";
import Reservation from "./Pages/Reservation";
import Media from "./Pages/Media";
import Career from "./Pages/Career";
import KacchiBasmoti from "./Components/AboutComponents/KacchiBasmoti";
import KacchiDetails from "./Pages/KacchiDetails";
import KacchiMenu from "./Pages/KacchiMenu";
import PolaoMenu from "./Pages/PolaoMenu";
import BeefRezalaMenu from "./Pages/BeefRezalaMenu";
import RoastMenu from "./Pages/RoastMenu";
import AddOnMenu from "./Pages/AddOnMenu";
import BorhaniMenu from "./Pages/BorhaniMenu";
import Shop from "./Pages/Shop";
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
      {
        path: "/catering",
        element: <Catering />,
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/media-outlets",
        element: <Media></Media>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/kacchi",
        element: <KacchiDetails></KacchiDetails>,
      },
      {
        path: "/kacchiMenu",
        element: <KacchiMenu></KacchiMenu>,
      },
      {
        path: "/polaoMenu",
        element: <PolaoMenu></PolaoMenu>,
      },
      {
        path: "/beefRezalaMenu",
        element: <BeefRezalaMenu></BeefRezalaMenu>,
      },
      {
        path: "/RoastMenu",
        element: <RoastMenu></RoastMenu>,
      },
      {
        path: "/addOnMenu",
        element: <AddOnMenu></AddOnMenu>,
      },
      {
        path: "/BorhaniMenus",
        element: <BorhaniMenu></BorhaniMenu>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
]);
