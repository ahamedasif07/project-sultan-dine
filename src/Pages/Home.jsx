import Benar from "../Components/HomeComponents/Benar";
import Branches from "../Components/HomeComponents/Branches";
import { ExplorText } from "../Components/HomeComponents/ExplorText";
import { HomeSarvices } from "../Components/HomeComponents/HomeSarvices";
import LatestUpdated from "../Components/HomeComponents/LatestUpdated";
import MenuItems from "../Components/HomeComponents/MenuItems";
import Review from "../Components/HomeComponents/Review";

export const Home = () => {
  return (
    <div>
      <Benar></Benar>
      <MenuItems></MenuItems>
      <ExplorText></ExplorText>
      <HomeSarvices></HomeSarvices>
      <Branches></Branches>
      <Review></Review>
      <LatestUpdated />
    </div>
  );
};
