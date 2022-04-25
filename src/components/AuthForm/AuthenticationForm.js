import React, { useState } from "react";
import "./auth.scss";
import { Button, ForgetPassword } from "../../Elements";
const initialState = {
  email: "",
  password: "",
};

const LoginContainer = () => {
  const [credentials, setCredentials] = useState(initialState);

  const loginListenner = () => {
    console.log(credentials);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const style = {
    margin: "10px 0",
  };

  const [state, setState] = useState({ focused: false, value: "" });

  const focusField = () => {
    const { focused } = state;
    setState({
      focused: !focused,
    });
  };
  const { focused, value } = state;

  let inputClass = "fluid-input";

  if (focused) {
    inputClass += " fluid-input--focus";
  } else if (value !== "") {
    inputClass += " fluid-input--open";
  }

  return (
    <div className="login-container">
      <div className="title">Login</div>
      {/* <FluidInput
        type="email"
        label="Email f"
        style={style}
        id="email1"
        name="email"
        onChange={handleChange}
      /> */}
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          <input
            name="email"
            className="fluid-input-input"
            type="email"
            id="email"
            onFocus={focusField}
            onBlur={focusField}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
      </div>
      <div className={inputClass} style={style}>
        <div className="fluid-input-holder">
          <input
            name="password"
            className="fluid-input-input"
            type="password"
            id="password"
            onFocus={focusField}
            onBlur={focusField}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Password "
          />
        </div>
      </div>

      <ForgetPassword
        buttonText="forget password ?"
        buttonClass="forget-pasword-button"
      />
      <Button
        buttonText="log in"
        buttonClass="login-button"
        onClick={loginListenner}
      />
    </div>
  );
};

export default LoginContainer;