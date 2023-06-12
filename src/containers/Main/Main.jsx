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
  // let arr = [9, 3, 2, 8, 5, 6, 7, 4, 1];

  // let sortArr = arr.sort((x1, x2) => {
  //   if (x1 < x2) {
  //     return -1;
  //   }
  //   if (x1 === x2) {
  //     return 0;
  //   }
  //   return 1;
  // });
  // console.log(sortArr);

  const users = [
    {
      name: "Djon",
      age: 12,
    },
    {
      name: "akol",
      age: 10,
    },
    {
      name: "fQwor",
      age: 14,
    },
  ];
  let sortUsersToStr = users.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  console.log(sortUsersToStr);
  // let sortUsersToNumb = users.sort((a, b) => a.age - b.age);
  // console.log(users);
  // console.log(sortUsersToNumb);

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
