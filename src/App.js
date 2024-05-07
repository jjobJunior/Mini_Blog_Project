import { BrowserRouter, Routes, Route, navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
