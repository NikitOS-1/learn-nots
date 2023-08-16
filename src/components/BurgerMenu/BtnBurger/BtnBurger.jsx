import "./BtnBurger.scss";

const BtnBurger = ({ isOpen, handleMenuToggle }) => {
  return (
    <div
      className={`button-burger ${isOpen ? "open" : ""}`}
      onClick={handleMenuToggle}>
      <div className="btn-line-one"></div>
      <div className="btn-line-two"></div>
      <div className="btn-line-three"></div>
    </div>
  );
};
export default BtnBurger;
