import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/userDataSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Comp2 = () => {
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
      Comp2 + email:{"email"} <br /> id:{data.map((user) => user.id)}
    </div>
  );
};
export default Comp2;
