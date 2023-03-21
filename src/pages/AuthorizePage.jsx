import { Link } from "react-router-dom";
import Form from "../components/Form";

const AuthorizePage = () => {
  const handleLogin = (email, pass) => {};
  return (
    <div>
      <Form title="Login" handleClick={handleLogin} />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
};
export default AuthorizePage;
