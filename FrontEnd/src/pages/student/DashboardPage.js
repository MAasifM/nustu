import { Fragment } from "react";
import { useRouteLoaderData, Navigate } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Personal from "../../components/Personal/Personal";

const HomePage = () => {
  const Data = useRouteLoaderData("index");
  if (Data) {
    return (
      <Fragment>
        <div className="d-flex" style={{ backgroundColor: "#FFF9FF" }}>
          <NavigationBar></NavigationBar>
          <Personal></Personal>
        </div>
      </Fragment>
    );
  }
  return <Navigate to="/login"></Navigate>;
};

export default HomePage;
