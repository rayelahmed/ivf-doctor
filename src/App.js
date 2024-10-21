import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Treatment from "./Pages/Treatment/Treatment";
import Contact from "./Pages/Contact/Contact";
import Media from "./Pages/Media/Media";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
