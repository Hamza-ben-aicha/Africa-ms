import React, { useState } from "react";
import "./auth.scss";
import { Button, ForgetPassword } from "../../Elements";
import { useNavigate } from "react-router-dom";
import classes from "./Layout.module.scss";
import API from "../../api/index";

const initialState = {
  email: "",
  password: "",
};

const LoginContainer = () => {
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();
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

  //------------------------------------------------------------------------
  const [error,setError]=useState(false)
  //------------------------------------------------------------------------
  const handleSubmit = (e) => {
    API.post("login", credentials)
      .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            const user = res?.data?.token?.user;
            const token = res?.data?.token?.token;
            localStorage.setItem("curentUser", JSON.stringify({ user, token }));
            window.location.reload(false);
            navigate("/profile");
          }
      })
      .catch((err) => setError(true));
  };

  return (
    <div className={classes.container}>
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
          onClick={handleSubmit}
        />
        {error ? <p style={{color : 'red'}}>verify your credentials </p> : null}
      </div>
    </div>
  );
};

export default LoginContainer;
