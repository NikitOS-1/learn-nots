import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to={"/sign-in"} state={{ from: location }} />;
  } else {
    return children;
  }
};
