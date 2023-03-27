import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/userDataSlice";
// import { fetchUserIsLogin } from "../redux/userIsLogin";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Comp1 = () => {
  const { email, id, tokken } = useSelector((state) => state.user);
  const { status, error, data } = useSelector((state) => state.userData);
  // const isLogined = useSelector((state) => state.userLogin.isLogin);
  const dispatch = useDispatch();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
      console.log(user.email);
      console.log(user.displayName);
    } else {
      console.log("no auth");
    }
  });
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      Comp1 + email:{email}
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
