import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Destination from "./pages/Destination";
import { path } from "./constant";
import { color } from "./constant";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<Home />} />
        <Route path={path.about} element={<Home screen={<About />} />} />
        <Route path={path.contact} element={<Home screen={<Contact />} />} />
        <Route path={path.blog} element={<Home screen={<Blog />} />} />

        <Route path={path.gallery} element={<Home screen={<Gallery />} />} />
        <Route
          path={path.destination}
          element={<Home screen={<Destination />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
