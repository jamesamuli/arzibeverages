
import SocialItems from "./SocialItems";
import { Icons } from "./Menu";
import logoArzi from "../../assets/images/logoArzi.png";
import ItemsContainer from "./ItemsContainer";

export default function Footer() {
  return (
    <footer className=" bg-sky-500 text-white font-Nunito">
      <div className="p-7">
        <img src={logoArzi} alt="arzi" />
      </div>
      <div className="h-px bg-white w-full"></div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center pt-2 text-gary-400 ">
        {/* <span>@ copyright all right reserved</span> */}
        <span>Arzi-Beverage Operating Company. All rights reserved.</span>
        <SocialItems Icons={Icons} />
      </div>
    </footer>
  );
}
