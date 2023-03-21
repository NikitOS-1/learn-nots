import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/login"));
  return (
    <div>
      <p> Welcome !!! </p>
      <p> Home page</p>
      <button>Log Out</button>
    </div>
  );
};
export default HomePage;
