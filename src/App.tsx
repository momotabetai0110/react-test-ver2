import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Face from "./pages/Face";
import NightRain from "./pages/NightRain";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/face" element={<Face />} />
        <Route path="/nightRain" element={<NightRain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
