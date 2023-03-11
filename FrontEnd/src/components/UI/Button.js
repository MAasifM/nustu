import { Fragment } from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <Fragment>
      <button className={props.className} onClick={props.onClick}>
        <span>
          {props.svgIcon && (
            <img
              style={{ paddingBottom: "1px" }}
              src={props.svgIcon}
              alt="Icon"
            ></img>
          )}
        </span>{" "}
        {props.innerText}
      </button>
    </Fragment>
  );
};

export default Button;
