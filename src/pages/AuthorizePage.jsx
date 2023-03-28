import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addData, fetchFile } from "../redux/fileSlice";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

const AuthorizePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uData = useSelector((state) => state.file.file);
  useEffect(() => {
    dispatch(fetchFile());
  }, [dispatch]);

  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        dispatch();
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <div>{!uData ? <CircularProgress /> : uData.map((i) => i.title)}</div>
      <Form title="Login" handleClick={handleLogin} send={"Login"} />
      <Link to={"/register"}>Create account</Link>
    </div>
  );
};
export default AuthorizePage;
