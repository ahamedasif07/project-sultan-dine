import Benar from "../Components/HomeComponents/Benar";
import { ExplorText } from "../Components/HomeComponents/ExplorText";
import { HomeSarvices } from "../Components/HomeComponents/HomeSarvices";
import MenuItems from "../Components/HomeComponents/MenuItems";

export const Home = () => {
  return (
    <div>
      <Benar></Benar>
      <MenuItems></MenuItems>
      <ExplorText></ExplorText>
      <HomeSarvices></HomeSarvices>
    </div>
  );
};
