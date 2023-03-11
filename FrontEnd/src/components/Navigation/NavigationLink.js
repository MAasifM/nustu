import { NavLink } from "react-router-dom";
import classes from "./NavigationLink.module.css";

const NavigationLink = (props) => {
  return (
    <NavLink
      style={{ color: "rgba(59, 45, 53, 0.5)", textDecoration: "none" }}
      to={props.toLink}
      className={({ isActive }) =>
        isActive ? classes.activeLink : classes.boardLink
      }
      end
    >
      <img src={props.svg} className={classes.navSvg} alt="Icon"></img>
      {props.innerText}
    </NavLink>
  );
};

export default NavigationLink;
