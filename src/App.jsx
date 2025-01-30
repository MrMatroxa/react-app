import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {  Route, Routes, useLocation } from "react-router-dom";
import ItemDetailsPage from "./components/ItemDetailsPage";
// import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
// import Dashboard from "./components/Dashboard";
import data from "./assets/data.json";



function App() {
  const location = useLocation().pathname;
  return (
    <>
      {location !== "/notfound" && <Navbar />}
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/item/:id" element={<ItemDetailsPage dataFromMyParent={data} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
