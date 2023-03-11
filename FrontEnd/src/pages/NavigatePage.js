import { Navigate, useRouteLoaderData } from "react-router-dom";

const NavigatePage = () => {
  const username = useRouteLoaderData("index");
  if (username) {
    return <Navigate to="/student/dashboard"></Navigate>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default NavigatePage;
