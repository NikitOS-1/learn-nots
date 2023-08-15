import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="app-container">
        <button className="button-burger">Open</button>
        <div className="content">
          <h1>Burger menu </h1>
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;
