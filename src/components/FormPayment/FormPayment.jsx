import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./FormPayment.scss";
import visaMasterCard from "./visa-master.png";
import Errors from "./Errors";

const FormPayment = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    reset();
  };
  return (
    <div>
      <div>
        <Link to={"/"}>Back</Link>
      </div>
      <form className="form-payment" onSubmit={handleSubmit(onSubmit)}>
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
            <label className="accountNumber">
              <input
                type="text"
                {...register("accountNumber", {
                  required: "Enter your account number",
                  minLength: {
                    value: 16,
                    message: "Invalid card",
                  },
                })}
              />
              <Errors
                errors={errors?.accountNumber}
                errorMessage={errors?.accountNumber?.message}
              />
              <p>Card Number</p>
            </label>
            <div className="acc-cart-about">
              <label className="expDate">
                <input
                  type="text"
                  {...register("expDate", {
                    required: "Enter expiration Date",
                    minLength: {
                      value: 4,
                      message: "Invalid exp Date",
                    },
                  })}
                />
                <Errors
                  errors={errors?.expDate}
                  errorMessage={errors?.expDate?.message}
                />
              </label>
              <label className="svs">
                <input
                  type="text"
                  {...register("svs", {
                    required: "Enter you SVS",
                    minLength: {
                      value: 2,
                      message: "Invalid SVS code",
                    },
                  })}
                />
                <Errors
                  errors={errors?.svs}
                  errorMessage={errors?.svs?.message}
                />
              </label>
            </div>
          </div>
          <div className="billing-address"></div>
        </div>
        <div className="btns"></div>
      </form>
    </div>
  );
};
export default FormPayment;
