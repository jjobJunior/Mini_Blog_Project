import { BrowserRouter, Routes, Route, navigate } from "react-router-dom";


import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
