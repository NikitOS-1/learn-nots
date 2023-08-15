const BtnBurger = (isOpen, handleMenuToggle) => {
  return (
    <div
      className={`button-burger ${isOpen ? "open" : ""}`}
      onClick={handleMenuToggle}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
};
export default BtnBurger;
