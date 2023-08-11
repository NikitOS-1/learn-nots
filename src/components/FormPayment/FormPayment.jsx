import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./FormPayment.scss";
import FormPaymentMethod from "./PaymentMethod/FormPaymentMethod";

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
          <FormPaymentMethod errors={errors} register={register} />
          <div className="billing-address"></div>
        </div>
        <div className="btns"></div>
      </form>
    </div>
  );
};
export default FormPayment;
