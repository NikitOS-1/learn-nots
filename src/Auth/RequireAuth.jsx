import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  } else {
    return children;
  }
};
export { RequireAuth };
