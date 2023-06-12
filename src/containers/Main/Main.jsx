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
  let arr = [9, 3, 2, 8, 5, 6, 7, 4, 1];

  let sortArr = arr.sort((x1, x2) => {
    if (x1 < x2) {
      return -1;
    }
    if (x1 === x2) {
      return 0;
    }
    return 1;
  });
  console.log(sortArr);

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
