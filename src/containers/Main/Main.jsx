import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { RequireAuth } from "../../hooks/PrivatePages/RequireAuth";
import ArrFunc from "../../components/ArrFunc/ArrFunc";
import Spread from "../../components/Spread/Spread";
import DestrArr from "../../components/DestrArr/DestrArr";
import DestrObj from "../../components/DestrObj/DestrObj";

const Main = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main>
      <DestrObj />
      {/* <DestrArr /> */}
      {/* <Spread /> */}
      {/* <ArrFunc /> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<RequireAuth children={<HomePage />} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      {/* </Routes> */}
    </main>
  );
};
export default Main;
