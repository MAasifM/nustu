import { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Undefined.module.css";
import { Navigate, NavLink } from "react-router-dom";

const Undefined = (props) => {
  if (props.userData) {
    return (
      <Fragment>
        <h1 className={classes.pageNotFound}>No Page Found</h1>
        <div className={classes.restPage}>
          <NavLink to="/student/dashboard" style={{ textDecoration: "none" }}>
            <Button className="logInButton" innerText="Home"></Button>
          </NavLink>
        </div>
      </Fragment>
    );
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default Undefined;
