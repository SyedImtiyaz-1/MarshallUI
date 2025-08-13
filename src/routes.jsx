import Work from "./components/myWork/Work";
import Home from "./components/home/Home";
import Project from "./components/project/Project";

export const routes = [
  { isPublic: true, path: "/", element: <Home /> },
  {
    exact: true,
    isPublic: true,
    path: "/work",
    name: "Work",
    element: <Work />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/work/:id",
    name: "Project",
    element: <Project />,
  },
];
