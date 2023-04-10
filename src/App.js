import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Auth/RequireAuth";
import AuthorizePage from "./pages/AuthorizePage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Comp1 from "./pages/Comp1";
import Comp2 from "./pages/Comp2";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@mui/material";
import "./App.style.scss";
import { isDay } from "./redux/dayOrNightSlice";
function App() {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.theme.theme);

  const handleChange = () => {
    checked ? dispatch(isDay(false)) : dispatch(isDay(true));
  };
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let noArr = [];
  let yesArr = [];
  arr.forEach((i) => {
    if (i % 2) {
      noArr.push(i);
    } else {
      yesArr.push(i);
    }
  });
  console.log(noArr);
  console.log(yesArr);
  return (
    <div className={!checked ? "day" : "night"}>
      <Switch checked={checked} onChange={handleChange} />
      {/* <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path="/comp1"
          element={
            <RequireAuth>
              <Comp1 />
            </RequireAuth>
          }
        />
        <Route path="/comp2" element={<Comp2 />} />
        <Route path="/login" element={<AuthorizePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
