import "./ReactHooKForm.scss";

const ReactHooKForm = () => {
  return (
    <form action="submit">
      <h2>React Hook Form</h2>
      <div className="firstname">
        <input type="text" placeholder="First name" />
      </div>
      <div className="lastname">
        <input type="text" placeholder="Last name" />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default ReactHooKForm;
