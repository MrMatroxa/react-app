import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import Dashboard from "./components/Dashboard";
import data from "./assets/data.json";

import { Router, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <List/>
      <Footer />
    </>
  );
}

export default App;
