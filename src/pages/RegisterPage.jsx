import { Link } from "react-router-dom";
import Form from "../components/Form";

const RegisterPage = () => {
  const foo = (a, b) => {};
  return (
    <div>
      <Form title="Register" handleClick={foo} />
      <Link to={"/"}>If you have account Login</Link>
    </div>
  );
};
export default RegisterPage;
