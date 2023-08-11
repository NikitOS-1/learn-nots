const Errors = ({ errors, errorMessage }) => {
  return (
    <div className="error">
      {errors && <p style={{ color: "tomato" }}>{errorMessage || "Error"}</p>}
    </div>
  );
};
export default Errors;
