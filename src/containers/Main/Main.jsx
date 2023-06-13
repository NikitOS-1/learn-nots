import Closure from "../../components/Closure/Closure";
import DestrObj from "../../components/DestrObj/DestrObj";
import FindToArr from "../../components/FindToArr/FindToArr";
import Recurse from "../../components/Recurse/Recurse";

const Main = () => {
  const sum = (num1, num2) => {
    let res = num1 + num2;
    return res;
  };
  console.log(sum(2, 2));
  return (
    <main>
      <Closure />
      {/* <Recurse /> */}
      {/* <FindToArr /> */}
      {/* <DestrObj /> */}
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
