import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {  Route, Routes, useLocation } from "react-router-dom";
import ItemDetailsPage from "./components/ItemDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
// import AboutPage from "./components/AboutPage";
// import Dashboard from "./components/Dashboard";
import data from "./assets/data.json";
import { useState } from "react";



function App() {
  const location = useLocation().pathname;
  const [dataCopy,setDataCopy] = useState(data)

  console.log("data copy:",dataCopy)

  const getClickedIndex = (data) => {
    console.log("last point index at parent:",data)

    setDataCopy((prevState)=> {
      return prevState.filter((eachEl)=> eachEl.id !== data)
    })
  }

  

  return (
    <>
      {location !== "/notfound" && <Navbar />}
      {/* <Navbar /> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<List dataFromMyParent={dataCopy} sendToParent={getClickedIndex} />} />
        <Route path="/item/:id" element={<ItemDetailsPage dataFromMyParent={dataCopy} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
