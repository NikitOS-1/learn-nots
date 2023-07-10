import { useForm } from "react-hook-form";
import "./ReactHooKForm.scss";

const ReactHooKForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>React Hook Form</h2>
      <label className="firstname">
        First name
        <input
          type="text"
          {...register("firstName", {
            required: "You must to put your Name",
            minLength: {
              value: 5,
              message: "Minimum 5 symbols",
            },
          })}
        />
      </label>
      <div className="error">
        {errors?.firstName && (
          <p style={{ color: "tomato" }}>
            {errors?.firstName?.message || "Error!"}
          </p>
        )}
      </div>

      <label className="lastname">
        Last name
        <input
          type="text"
          {...register("lastname", {
            required: "You must to put your Name",
            minLength: {
              value: 5,
              message: "Minimum 5 symbols",
            },
          })}
        />
      </label>
      <div className="error">
        {errors?.lastname && (
          <p style={{ color: "tomato" }}>
            {errors?.lastname?.message || "Error!"}
          </p>
        )}
      </div>

      <input type="submit" className="button" />
    </form>
  );
};
export default ReactHooKForm;
