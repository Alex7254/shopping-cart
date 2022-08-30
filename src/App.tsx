import { Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
// components
import { Navbar } from "./components/Navbar";
// shopping cart context provider
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
