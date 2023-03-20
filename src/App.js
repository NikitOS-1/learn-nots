import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthorizePage from "./pages/AuthorizePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { dec, inc } from "./redux/countSlice";

function App() {
  const count = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();
  const foo = () => {
    dispatch(inc());
  };
  const footoo = () => {
    dispatch(dec());
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={foo}>+</button>
      <button onClick={footoo}>-</button>
      {/* <p>{counts}</p> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthorizePage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
