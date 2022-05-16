import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PublicRoutes } from "./Routes/PublicRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Navbar>
      <Routes>
        {PublicRoutes.map(({ path, Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
