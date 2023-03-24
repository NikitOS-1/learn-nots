import { useSelector } from "react-redux";

const Comp2 = () => {
  const { email, id, tokken } = useSelector((state) => state.user);
  return <div>Comp2 + email:{email}</div>;
};
export default Comp2;
