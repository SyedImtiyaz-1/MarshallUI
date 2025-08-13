import { Route, Routes } from "react-router";
import { routes } from "./routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-family-helvetica">
      <Header />

      <Routes>
        {routes.map((item, index) => {
          return (
            <Route key={"" + index} path={item.path} element={item.element} />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
