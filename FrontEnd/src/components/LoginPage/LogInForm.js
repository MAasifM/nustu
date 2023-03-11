import { Form, useActionData } from "react-router-dom";
import Input from "../UI/Input";
import classes from "./LogIn.module.css";
import Button from "../UI/Button";
import { useRef, useEffect } from "react";

const LogInForm = () => {
  const statusCode = useActionData();
  useEffect(() => {
    if (statusCode && statusCode.statusCode === 401) {
      incorrectRef.current.style.visibility = "visible";
    }
  }, [statusCode]);
  const passwordRef = useRef();
  const usernameRef = useRef();
  const usernameInvalidRef = useRef();
  const passwordInvalidRef = useRef();
  const incorrectRef = useRef();

  function showPasswordHandler() {
    if (passwordRef.current.type === "text") {
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
    }
  }

  function submitHandler(event) {
    if (!usernameRef.current.value) {
      event.preventDefault();
      event.stopPropagation();
      usernameRef.current.className = classes.isInValid;
      usernameInvalidRef.current.style.visibility = "visible";
    }
    if (!passwordRef.current.value) {
      event.preventDefault();
      event.stopPropagation();
      passwordRef.current.className = classes.isInValid;
      passwordInvalidRef.current.style.visibility = "visible";
    }
  }

  function validateIDHandler() {
    if (usernameRef.current.value) {
      usernameRef.current.className = classes.isValid;
      usernameInvalidRef.current.style.visibility = "hidden";
      incorrectRef.current.style.visibility = "hidden";
    } else {
      usernameRef.current.className = "";
    }
  }

  function validatePassHandler() {
    if (passwordRef.current.value) {
      passwordRef.current.className = classes.isValid;
      passwordInvalidRef.current.style.visibility = "hidden";
      incorrectRef.current.style.visibility = "hidden";
    } else {
      passwordRef.current.className = "";
    }
  }

  return (
    <Form method="POST" onSubmit={submitHandler}>
      <Input
        name="username"
        type="text"
        id="username"
        placeholder="Your ID"
        ref={usernameRef}
        onChange={validateIDHandler}
      ></Input>
      <p className={classes.credWarning} ref={usernameInvalidRef}>
        Enter your ID.
      </p>
      <Input
        name="password"
        type="password"
        id="password"
        placeholder="Password"
        ref={passwordRef}
        onChange={validatePassHandler}
      ></Input>
      <p className={classes.credWarning} ref={passwordInvalidRef}>
        Enter your Password.
      </p>
      <div className={classes.showDiv}>
        <img
          className={classes.showPassword}
          src="/svg/Show.svg"
          alt="Show Password"
          title="Show Password"
          onClick={showPasswordHandler}
        ></img>
      </div>
      <p className={classes.isIncorrect} ref={incorrectRef}>
        The Username or Password is Incorrect!
      </p>
      <Button className="logInButton" innerText="Next"></Button>
    </Form>
  );
};

export default LogInForm;
