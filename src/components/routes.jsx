import Work from "./components/myWork/Work";
import Home from "./components/home/Home";

export const routes = [
  { isPublic: true, path: "/", element: <Home /> },
  {
    exact: true,
    isPublic: true,
    path: "/login",
    name: "Login",
    element: <Work />,
  },
];
