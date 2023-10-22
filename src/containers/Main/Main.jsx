import AsyncFn from "../../components/AsyncFn/AsyncFn";
import Closure from "../../components/Closure/Closure";
import DestrObj from "../../components/DestrObj/DestrObj";
import FindToArr from "../../components/FindToArr/FindToArr";
import Motion from "../../components/Motion/Motionbasic/Motion";
import ShowHidden from "../../components/Motion/AnimatePresence/ShowHidden";
import Pagination from "../../components/Pagination/Pagination";
import Promise1 from "../../components/Promise/Promise";
import Recurse from "../../components/Recurse/Recurse";
import ReactHooKForm from "../../hooks/ReactHooKForm/ReactHooKForm";
import AnimatePresences from "../../components/Motion/AnimatePresence/AnimatePresences";
import FilterPages from "../../components/Motion/Filter/FilterPages";
import Menu from "../../components/Motion/AnimateSharedLayout/Menu";
import LazyLoad from "../../components/LazyLoad/LazyLoad";
import LocalStorage from "../../components/LocalStorage/LocalStorage";
import { Route, Routes, Link } from "react-router-dom";
import { RequireAuth } from "../../hooks/PrivatePages/RequireAuth";
import HomePage from "../../pages/HomePage";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Auth from "../../components/Auth/Auth";
import UsedModal from "../../components/Modal/UsedModal";
import Table from "../../components/Table/Table";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import BgVideo from "../../components/BgVideo/BgVideo";
import Calc from "../../components/Calc/Calc";
import Tests from "../../components/tests/Tests";

const Main = () => {
  return (
    <main>
      {/* <Routes>
        <Route path="/" element={<RequireAuth children={<HomePage />} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes> */}
      {/* <AsyncFn /> */}
      {/* <Promise1 /> */}
      {/* <Closure /> */}
      {/* <Recurse /> */}
      {/* <FindToArr /> */}
      {/* <DestrObj /> */}
      {/* <DestrArr /> */}
      {/* <Spread /> */}
      {/* <ArrFunc /> */}
      {/* <ReactHooKForm /> */}
      {/* <Pagination /> */}
      {/* ------------Animation Frame Motion------------ */}
      {/* <Motion /> */}
      {/* <AnimatePresences /> */}
      {/* _____ */}
      {/* <Menu /> */}
      {/* <FilterPages /> */}
      {/* <LazyLoad /> */}
      {/* <LocalStorage /> */}
      {/* <Auth /> //auth with CRUD firestore in firebase */}
      {/* <UsedModal /> */}
      {/* <Table /> */}
      {/* <BurgerMenu /> */}
      {/* <BgVideo /> */}
      <Tests />
    </main>
  );
};
export default Main;
