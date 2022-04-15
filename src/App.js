import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./Pages/Shared/NotFound";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
