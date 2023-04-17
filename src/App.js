import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@mui/material";
import "./App.style.scss";
import { isDay } from "./redux/dayOrNightSlice";
import HomePage from "./pages/HomePage";

function App() {
  const checked = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleChange = () => {
    checked ? dispatch(isDay(false)) : dispatch(isDay(true));
  };

  return (
    <div className={!checked ? "day" : "night"}>
      <Switch checked={checked} onChange={handleChange} />
      <HomePage />
    </div>
  );
}

export default App;
