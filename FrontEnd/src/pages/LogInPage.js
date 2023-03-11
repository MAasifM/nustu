import LogIn from "../components/LoginPage/LogIn";
import { React } from "react";
import axios from "axios";
import { Navigate, useRouteLoaderData } from "react-router-dom";
import URLContext from "../store/URLContext";
import { useContext } from "react";

const backURL = "https://nustuback.herokuapp.com/";
// const backURL = "http://localhost:8080/";

const LogInPage = () => {
  let URL = useContext(URLContext);
  if (URL === "/login") {
    URL = "/student/dashboard";
  }
  const username = useRouteLoaderData("index");
  if (!username) {
    return <LogIn></LogIn>;
  } else {
    return <Navigate to={URL}></Navigate>;
  }
};

export default LogInPage;

export async function action({ request }) {
  const data = await request.formData();
  const logInData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  try {
    const response = await axios.post(backURL + "login", logInData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response.data);
    return { data: response.data, statusCode: 200 };
  } catch {
    return { username: null, statusCode: 401 };
  }
}
