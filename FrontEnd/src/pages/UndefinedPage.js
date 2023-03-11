import Undefined from "../components/Undefined/Undefined";
import { useRouteLoaderData } from "react-router-dom";

const UndefinedPage = () => {
  const { user } = useRouteLoaderData("index");

  return <Undefined userData={user}></Undefined>;
};

export default UndefinedPage;
