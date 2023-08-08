import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, clearUser } from "../../../redux/authReducer";
import AddData from "../Components/AddData";
import ReadData from "../Components/ReadData";

const HomePage = () => {
  const { email, id, token } = useSelector((data) => data.auth);

  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
      } else {
        dispatch(clearUser());
        navigate("/sign-in");
      }
    });
  });

  return (
    <div>
      <button onClick={() => signOut(auth)}>Exit</button>
      <p>Hello {email}</p>
      <AddData />
      <ReadData />
    </div>
  );
};
export default HomePage;
