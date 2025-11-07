import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Letbuild from "./pages/Letbuild";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Letbuild />} />
      </Routes>
      {/* <About /> */}

      {/* <Home /> */}
    </>
  );
}

export default App;
