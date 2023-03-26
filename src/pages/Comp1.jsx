import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/userDataSlice";

const Comp1 = () => {
  const { email, id, tokken } = useSelector((state) => state.user);
  const { status, error, data } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

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
