import axios from "axios";

const backURL = "https://nustuback.herokuapp.com/";
// const backURL = "http://localhost:8080/";

export async function loader() {
  const response = await axios.get(backURL + "login", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
}
