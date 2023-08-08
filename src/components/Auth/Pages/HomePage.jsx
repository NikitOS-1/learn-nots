import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, clearUser } from "../../../redux/authReducer";

const HomePage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, id, token } = useSelector((data) => data.auth);

  const exit = () => {
    signOut(auth);
  };

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
      <button onClick={exit}>Exit</button>
      <p>
        Hello {email}
        <br />
        id: {id}
        <br />
        token: {token}
      </p>
    </div>
  );
};
export default HomePage;
