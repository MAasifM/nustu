import "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      name={props.name}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={ref}
    ></input>
  );
});

export default Input;
