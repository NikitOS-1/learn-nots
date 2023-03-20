import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  const navigate = useNavigate();
  const logOut = () => setIsLogIn(false);

  useEffect(() => {
    isLogIn ? navigate("/") : navigate("/login");
  }, [isLogIn]);

  return (
    <div>
      <p> Welcome !!! </p>
      <p> Home page</p>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};
export default HomePage;
