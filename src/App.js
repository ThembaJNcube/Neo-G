import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "./components/Navbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
//import Galary from "./components/Galary";
import Prices from "./components/Prices";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
//import slides from "./components/slides";
//<Galary slides={slides} />;

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainers" element={<Prices />} />
          <Route path="/classes" element={<Prices />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Prices />} />
          <Route path="/form" element={<Membership />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
