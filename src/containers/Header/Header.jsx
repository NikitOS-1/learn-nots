import { useDispatch, useSelector } from "react-redux";
import { isDay } from "../../redux/dayOrNightSlice";
import { Switch } from "@mui/material";

const Header = () => {
  const checked = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const handleChange = () => {
    checked ? dispatch(isDay(false)) : dispatch(isDay(true));
  };
  return (
    <header>
      <Switch checked={checked} onChange={handleChange} />
    </header>
  );
};
export default Header;
