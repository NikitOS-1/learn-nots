import { Password } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Form.style.scss";

const Form = ({ title, handleClick, send }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userName, setUserName] = useState("");
  let validPass = userPass === "" || null || undefined ? true : false;
  let validEmail = userEmail === "" || null || undefined ? true : false;
  let validName = userName === "" || null || undefined ? true : false;

  if (title == "Register") {
    return (
      <div className="wraper">
        <h1>{title}</h1>
        <TextField
          className="email"
          error={validEmail}
          placeholder="Email"
          variant="outlined"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          className="text"
          error={validName}
          placeholder="Name"
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          className="pass"
          error={validPass}
          placeholder="Password"
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
  } else {
    return (
      <div className="wraper">
        <h1>{title}</h1>
        <TextField
          className="email"
          error={validEmail}
          id="outlined-basic"
          placeholder="Login"
          variant="outlined"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          className="pass"
          error={validPass}
          id="standard-password"
          placeholder="Password"
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
  }
};
export default Form;
