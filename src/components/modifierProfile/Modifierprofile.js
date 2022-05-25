import React, { useState } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../../api";

// const initialState = {
//   nom: "hamza",
//   prenom: "ben aicha ",
//   email: "....@...com",
//   password: "password",
//   adress: "rue .20...",
// };

const Modifierprofile = () => {
  const user = JSON.parse(localStorage.getItem("curentUser"));

  const [state, setstate] = useState(user.user);
  const navigate = useNavigate();
  const [initialState, setinitialState] = useState({
    username: state?.username,
    email: state?.email,
    adress: state?.adress,
    password: "",
    telephone: state?.telephone
  });

  // console.log("state ----- >", state.user);
  // console.log(user.user);
  const handleChange = (e) => {
    setinitialState({ ...initialState, [e.target.name]: e.target.value });
    //console.log(initialState);
  };
  const handleUpdate = () => {

    API
      .patch(`update_user/${state.id}`,  initialState )
      .then((res) => {
        API
          .post(`login`, {
            email: initialState.email,
            password: initialState.password,
          })
          .then((res) => {
            console.log(res.data);
            const user = res?.data?.token?.user;
            const token = res?.data?.token?.token;
            localStorage.setItem("curentUser", JSON.stringify({ user, token }));
            window.location.reload(false);
            navigate("/profile");
          })
          .catch((err) => console.log(err));

      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card container" style={{ marginTop: "50px" }}>
      {/* <div className="card-header ">Modifier votre Compte</div> */}
      <div className="card-body">
        <h5 className="card-title text-center">Account Settings</h5>

        <br />
        <form>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Your UserName
          </label>
          <input
            type="text"
            id="defaultFormRegisterNameEx"
            defaultValue={initialState?.username}
            className="form-control"
            name="username"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Your adress
          </label>
          <input
            type="text"
            defaultValue={initialState?.adress}
            id="defaultFormRegisterNameEx"
            className="form-control"
            name="adress"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            defaultValue={initialState?.email}
            id="defaultFormRegisterEmailEx"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Your Phone number
          </label>
          <input
            type="number"
            defaultValue={initialState?.telephone}
            id="defaultFormRegisterEmailEx"
            className="form-control"
            name="telephone"
            onChange={handleChange}
          />
          <br />
          <hr>
          </hr>
            <span>
              you can add new password or give us your actuall password to
              confirm that changment
            </span> 
            <br/>
            <br/>
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
            New password
          </label>
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
            confirm password
          </label>
          <input
            type="password"
            id="defaultFormRegisterPasswordEx"
            className="form-control"
          />
          <div className="text-center mt-4">
            <Button variant="primary" onClick={handleUpdate}>
              Done
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modifierprofile;
