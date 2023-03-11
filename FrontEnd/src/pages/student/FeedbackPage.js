import { Fragment } from "react";
import { Navigate, useRouteLoaderData } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";

const FeedBackPage = () => {
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

export default FeedBackPage;
