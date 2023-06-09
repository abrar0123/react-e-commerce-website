import React from "react";
import Card from "../../components/common/UI/Card/card";
import Button from "../../components/common/UI/button/Button";
import "./style.css";
import { useState, useEffect } from "react";
import InputForm from "./Signup";
import Signup from "./Signup";

export default function Login() {
  const [email, setEmail] = useState("abc@gmail.com");
  const [pass, setPass] = useState("");
  const [IsLogin, setLogin] = useState(false);
  const [formISValid, setformISValid] = useState(true);

  const ctx = "abc";

  const [errorText, seterrorText] = useState({
    email: "",
    pass: "",
  });
  const [Islogin, setIslogin] = useState();
  const [blurred, setblurred] = useState(false);

  const name1handler = (event) => {
    setEmail(event.target.value);
    setformISValid(true);
    if (event.target.value.length > 4) {
      seterrorText({
        email: "",
      });
    }
  };

  const name2handler = (event) => {
    setPass(event.target.value);
    seterrorText({
      pass: "",
    });
  };

  const blurHandler = () => {
    setblurred(true);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (email.trim() === "" || email.trim().length <= 2) {
      seterrorText({ email: "email must required or valid..." });
      return;
    } else if (pass.trim() === "" || pass.trim().length <= 2) {
      seterrorText({ pass: "password must required or valid..." });
      return;
    }
    // FirebaseAuthLogin();
  };

  const FirebaseAuthLogin = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjAo7Ms93bxXzhpFxyz-ozLofBrirTJBM",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        console.log("login_data__:", data.error.message);
        seterrorText({ pass: data.error.message });
        return;
      }

      console.log("authsuccessfull__:", data);

      if (!response.ok) {
        throw Error("Throw_error__");
      }
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1
      );

      ctx.onLogin(data.idToken, expirationTime);
      setEmail("");
      setPass("");
    } catch (error) {
      console.log("auth error Ocurs__:\n\n", error);
    }
  };

  return (
    <>
      {IsLogin ? (
        <Signup />
      ) : (
        <Card className="signup">
          <h1 className="headrerh1"> Login </h1>
          <form action="#" onSubmit={formSubmitHandler}>
            <div className={`inputContainer ${blurred ? "ISblurred" : ""}`}>
              <input
                type="text"
                value={email}
                onChange={name1handler}
                onBlur={blurHandler}
                placeholder="Enter Email"
              />
              <p className="errorhander">{errorText.email}</p>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                value={pass}
                placeholder="Enter Password"
                onChange={name2handler}
              />
              <p className="errorhander">{errorText.pass}</p>
            </div>

            <div>
              <Button
                customStyle="btnContainer"
                onClick={() => {
                  setLogin(true);
                }}
              >
                Signup
              </Button>
              <Button
                disbaled={!formISValid}
                onClick={formSubmitHandler}
                customStyle="btnContainer"
              >
                Login
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
}
