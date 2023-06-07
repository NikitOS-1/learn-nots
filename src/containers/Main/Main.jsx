import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import { RequireAuth } from "../../hooks/PrivatePages/RequireAuth";
import ArrFunc from "../../components/ArrFunc/ArrFunc";

const Main = () => {
  return (
    <main>
      <ArrFunc />
      <Routes>
        {/* <Route path="/" element={<RequireAuth children={<HomePage />} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      </Routes>
    </main>
  );
};
export default Main;
