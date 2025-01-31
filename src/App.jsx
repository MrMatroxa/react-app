import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutPage from "./components/AboutPage";
// import NotFoundPage from "./components/NotFoundPage";
// import Dashboard from "./components/Dashboard";
// import ItemDetailsPage from "./components/ItemDetailsPage";
// import data from "./assets/data.json";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className="main-content">
      <Routes>

        <Route path="/" element={<List />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
      </div>
    </>
  );
}

export default App;
