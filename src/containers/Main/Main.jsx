import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </main>
  );
};
export default Main;
