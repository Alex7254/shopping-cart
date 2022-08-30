import { Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
// components
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
