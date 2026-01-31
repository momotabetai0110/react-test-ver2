import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Face from "./pages/Face";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/face" element={<Face />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
