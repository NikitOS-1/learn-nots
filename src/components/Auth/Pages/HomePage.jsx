import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const auth = getAuth();
  const email = auth.currentUser.email;
  const navigate = useNavigate();

  const exit = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/sign-in");
      }
    });
  });

  return (
    <div>
      <button onClick={exit}>Exit</button>
      <p>Hello {email}</p>
    </div>
  );
};
export default HomePage;
