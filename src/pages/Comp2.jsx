import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/userDataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Comp2 = () => {
  const dispatch = useDispatch();
  const { status, error, data } = useSelector((state) => state.userData);

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("exit");
  } else {
    console.log(user);
  }
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <div>
      {status} <br />
      {!data ? "Loading..." : data.map((state) => state.id)}
    </div>
  );
};
export default Comp2;
