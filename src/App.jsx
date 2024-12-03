import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Portfolio from "./assets/pages/Portfolio";
import Layout from "./components/Layout";
import Watchlist from "./assets/pages/Watchlist";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<div>Portfolio Page</div>} />
            <Route path="/watchlist" element={<div>Watchlist Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
