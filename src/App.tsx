import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Face from "./pages/Face";
import NightRain from "./pages/NightRain";
import NightRainStatistics from "./pages/NightRainStatistics";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/face" element={<Face />} />
        <Route path="/nightRain" element={<NightRain />} />
        <Route path="/nightRain/statistics" element={<NightRainStatistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
