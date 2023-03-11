import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogInPage, { action as actionLogIn } from "./pages/LogInPage";
import { loader as loaderFetch } from "./store/FetchLoader";
import UndefinedPage from "./pages/UndefinedPage";
import CoursesPage from "./pages/student/CoursesPage";
import DashboardPage from "./pages/student/DashboardPage";
import FeedbackPage from "./pages/student/FeedbackPage";
import FinancesPage from "./pages/student/FinancesPage";
import MessagesPage from "./pages/student/MessagesPage";
import ProfilePage from "./pages/student/ProfilePage";
import RequestsPage from "./pages/student/RequestsPage";
import SettingsPage from "./pages/student/SettingsPage";
import URLContext from "./store/URLContext";
import NavigatePage from "./pages/NavigatePage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: loaderFetch,
    id: "index",
    children: [
      {
        index: true,
        element: <NavigatePage></NavigatePage>,
      },
      {
        path: "login",
        element: <LogInPage></LogInPage>,
        action: actionLogIn,
      },
      {
        path: "student",
        children: [
          {
            path: "dashboard",
            element: <DashboardPage></DashboardPage>,
          },
          {
            path: "profile",
            element: <ProfilePage></ProfilePage>,
          },
          {
            path: "courses",
            element: <CoursesPage></CoursesPage>,
          },
          {
            path: "finances",
            element: <FinancesPage></FinancesPage>,
          },
          {
            path: "messages",
            element: <MessagesPage></MessagesPage>,
          },
          {
            path: "requests",
            element: <RequestsPage></RequestsPage>,
          },
          {
            path: "feedback",
            element: <FeedbackPage></FeedbackPage>,
          },
          {
            path: "settings",
            element: <SettingsPage></SettingsPage>,
          },
        ],
      },
      {
        path: "*",
        element: <UndefinedPage></UndefinedPage>,
      },
    ],
  },
]);

function App() {
  return (
    <URLContext.Provider value={window.location.pathname}>
      <RouterProvider router={router} />
    </URLContext.Provider>
  );
}

export default App;
