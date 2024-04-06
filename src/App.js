import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Login from "./components/login";
import Home from "./Pages/Home";
import Template1 from "./Pages/Template1";
import Template2 from "./Pages/Template2";

// Templates are taken and used from website https://devsnap.me/html-resume-templates

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Template1" element={<Template1 />}></Route>
        <Route path="/Template2" element={<Template2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
