import Work from "./pages/work/Work";
import Home from "./pages/home/Home";
import Project from "./components/project/Project";
import Studio from "./pages/studio/Studio";
import Contact from "./pages/contact/Contact";
import Clients from "./pages/clients/Clients";

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
  {
    exact: true,
    isPublic: true,
    path: "/about",
    name: "About",
    element: <Studio />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/clients",
    name: "Clients",
    element: <Clients />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/contact",
    name: "Contact",
    element: <Contact />,
  },
];
