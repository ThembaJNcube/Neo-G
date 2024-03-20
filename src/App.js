import "./components/Navbar";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
//import Galary from "./components/Galary";
//import slides from "./components/slides";
/*let slides = [
  "https://i.ytimg.com/vi/6PIWzQnapnc/maxresdefault.jpg",
  "https://www.denverpost.com/wp-content/uploads/2016/12/fe23sing.jpg?w=1024",
  "https://variety.com/wp-content/uploads/2021/11/Sing-2.jpg?w=1000",
];*/

//console.log(slides);
//<Galary slides={slides} />;

//<Galary />
function App() {
  return (
    <div>
      <Navbar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
