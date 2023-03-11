import { React } from "react";
import UI from "../UI/UI";
import classes from "./LogIn.module.css";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <UI>
      <div className={classes.login_panel}>
        <img
          src="/images/NUST-U Logo.png"
          alt="Logo"
          className={classes.uni_logo}
        ></img>
        <LogInForm></LogInForm>
      </div>
      <div className={classes.copy_right}>
        Copyright NUST-U 2023, all Rights Reserved.
      </div>
    </UI>
  );
};

export default LogIn;
