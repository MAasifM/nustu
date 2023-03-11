import classes from "./Personal.module.css";
import { useRouteLoaderData } from "react-router-dom";

const Personal = () => {
  const currentUser = useRouteLoaderData("index");
  return (
    <div className={classes.personalInfo}>
      <div className="d-flex">
        <div className={classes.Name}>Hello, {currentUser.name}</div>
        <div className={classes.Search}>Search</div>
        <div className={classes.Notify}>Notifications</div>
        <div className={classes.Picture}>Profile Picture</div>
      </div>
    </div>
  );
};

export default Personal;
