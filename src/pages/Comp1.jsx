import { useSelector } from "react-redux";

const Comp1 = () => {
  const { email, id, tokken } = useSelector((state) => state.user);
  return <div>Comp1 + email:{email}</div>;
};
export default Comp1;
