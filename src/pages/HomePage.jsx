import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p> Welcome !!! </p>
      <p> Home page</p>
      <button>Log Out</button>
    </div>
  );
};
export default HomePage;
