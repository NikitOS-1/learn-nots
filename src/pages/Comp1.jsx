import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/userDataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Comp1 = () => {
  const { status, error, data } = useSelector((state) => state.userData);

  const dispatch = useDispatch();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("auth ON");
    } else {
      console.log("auth OFF");
    }
  });
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      Comp1 + email:{"email"}
      <br />
      {status}
      <br />
      {error}
      <br />
      {!data ? "Loading..." : data.map((state) => state.name)}
    </div>
  );
};
export default Comp1;
