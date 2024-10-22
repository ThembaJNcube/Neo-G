import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "./components/Navbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Footer from "./components/Footer";
//import Galary from "./components/Galary";
import Prices from "./components/Prices";
import Membership from "./components/Membership";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Trainers from "./components/Trainers";
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
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Membership />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
