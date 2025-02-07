import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ItemDetailsPage from "./components/ItemDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./components/AboutPage";


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
