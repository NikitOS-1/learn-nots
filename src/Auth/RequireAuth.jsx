import { Navigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  // const auth = localStorage.getItem("isLogin");
  const auth = getAuth();

  const user = auth.currentUser;
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  } else {
    return children;
  }

  // if (!auth) {
  //   return <Navigate to={"/login"} state={{ from: location }} />;
  // }

  // return children;
};
export { RequireAuth };
