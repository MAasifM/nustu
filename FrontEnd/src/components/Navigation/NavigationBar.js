import Button from "../UI/Button";
import Uni from "../Uni/Uni";
import classes from "./NavigationBar.module.css";
import NavigationLink from "./NavigationLink";
import axios from "axios";

const URL = "https://nustuback.herokuapp.com/";
// // const URL = "http://localhost:8080/";

const NavigationBar = () => {
  const logOutHandler = async () => {
    await axios.get(URL + "logout", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    window.location.reload(true);
  };

  return (
    <div className={classes.parent_navBar}>
      <div id="navigationBar" className={classes.navigationBar}>
        <Uni></Uni>
        <NavigationLink
          svg="/svg/Dashboard.svg"
          innerText="Dashboard"
          toLink="/student/dashboard"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Profile.svg"
          innerText="Profile"
          toLink="/student/profile"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Courses.svg"
          innerText="Courses"
          toLink="/student/courses"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Finances.svg"
          innerText="Finances"
          toLink="/student/finances"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Messages.svg"
          innerText="Messages"
          toLink="/student/messages"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Requests.svg"
          innerText="Requests"
          toLink="/student/requests"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Feedback.svg"
          innerText="Feedback"
          toLink="/student/feedback"
        ></NavigationLink>
        <NavigationLink
          svg="/svg/Settings.svg"
          innerText="Settings"
          toLink="/student/settings"
        ></NavigationLink>
        <Button
          onClick={logOutHandler}
          svgIcon="/svg/LogOut.svg"
          className="logOutButton"
          innerText="Log Out"
        ></Button>
      </div>
    </div>
  );
};

export default NavigationBar;
