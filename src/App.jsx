import { Route, Routes } from "react-router";
import { routes } from "./routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="font-family-helvetica">
      <Header />
      <ScrollToTop />
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
