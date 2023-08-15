import "./MenuBurger.scss";

const MenuBurger = ({ isOpen }) => {
  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};
export default MenuBurger;
