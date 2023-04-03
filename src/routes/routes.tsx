import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../page/Main/Main";
import Courses from "../page/Courses/Courses";
import AddCourses from "../page/AddCourses/AddCourses";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { path: "/", element: <Main /> },
      { path: "/courses", element: <Courses /> },
      { path: "/addCourses", element: <AddCourses /> },
    ],
  },
]);

export default router;
