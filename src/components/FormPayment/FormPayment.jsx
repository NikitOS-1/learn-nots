import { Link } from "react-router-dom";
import "./FormPayment.scss";
import visaMasterCard from "./visa-master.png";

const FormPayment = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Back</Link>
      </div>
      <form className="form-payment">
        <div className="payment-info">
          <div className="payment-method">
            <h3>Payment Method</h3>
            <select className="payment-type">
              <option value="PayPal Checkout">PayPal Checkout</option>
              <option value="Stripe">Stripe</option>
            </select>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed
              ducimus, deserunt .
            </p>
            <div className="check-payment-system">
              <img src={visaMasterCard} alt="payment" />
            </div>
            <input type="text" />
          </div>
          <div className="billing-address"></div>
        </div>
        <div className="btns"></div>
      </form>
    </div>
  );
};
export default FormPayment;
