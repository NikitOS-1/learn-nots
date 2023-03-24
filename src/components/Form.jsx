import { Password } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Form.style.scss";

const Form = ({ title, handleClick, send }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  let validPass = userPass === "" || null || undefined ? true : false;
  let validEmail = userEmail === "" || null || undefined ? true : false;
  return (
    <div className="wraper">
      <h1>{title}</h1>
      <TextField
        className="email"
        error={validEmail}
        id="outlined-basic"
        label="Login"
        variant="outlined"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <TextField
        className="pass"
        error={validPass}
        id="standard-password"
        label="Password"
        variant="outlined"
        type="password"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
      />
      <Button
        className="btn"
        onClick={() => handleClick(userEmail, userPass)}
        variant="outlined">
        {send}
      </Button>
    </div>
  );
};
export default Form;
