import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ItemDetailsPage from "./components/ItemDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./components/AboutPage";
import data from "./assets/data.json";
import { useEffect, useState } from "react";

function App() {
  const [dataCopy, setDataCopy] = useState(data);

  const handleDelete = (id) => {
    setDataCopy((prevState) => {
      return prevState.filter((eachEl) => eachEl.id !== id);
    });
  };

  const toggleCompletion = (id) => {
    const itemsCopy = [...dataCopy];
    const findIndex = dataCopy.findIndex((eachEl) => {
      return eachEl.id === id;
    });

    if (itemsCopy[findIndex].completed) {
      itemsCopy[findIndex].completed = false;
    } else {
      itemsCopy[findIndex].completed = true;
    }

    setDataCopy(itemsCopy);
    // sendBack(itemsCopy);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <List
                dataCopy={dataCopy}
                setDataCopy={setDataCopy}
                idOnDelete={handleDelete}
                toggleCompletion={toggleCompletion}
              />
            }
          />
          <Route
            path="/item/:id"
            element={
              <ItemDetailsPage
                dataFromMyParent={dataCopy}
                toggleCompletion={toggleCompletion}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
