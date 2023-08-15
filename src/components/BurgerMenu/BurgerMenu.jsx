import { useState } from "react";
import "./BurgerMenu.scss";
import BtnBurger from "./BtnBurger/BtnBurger";
import ContentBurger from "./ContentBurger/ContentBurger";
import MenuBurger from "./MenuBurger/MenuBurger";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="app-container">
        <BtnBurger isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
        <ContentBurger />
        <MenuBurger isOpen={isOpen} />
      </div>
    </div>
  );
};
export default BurgerMenu;
