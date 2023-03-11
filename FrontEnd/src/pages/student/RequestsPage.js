import { Fragment } from "react";
import { Navigate, useRouteLoaderData } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";

const RequestsPage = () => {
  const username = useRouteLoaderData("index");
  if (username) {
    return (
      <Fragment>
        <NavigationBar></NavigationBar>
      </Fragment>
    );
  }
  return <Navigate to="/login"></Navigate>;
};

export default RequestsPage;
