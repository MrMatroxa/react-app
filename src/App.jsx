import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import ItemDetailsPage from "./components/ItemDetailsPage";
import NotFoundPage from "./components/NotFoundPage";
import AboutPage from "./components/AboutPage";
import data from "./assets/data.json";
import { useState } from "react";

function App() {
  const location = useLocation().pathname;
  const [dataCopy, setDataCopy] = useState(data);

  // console.log("data copy:",dataCopy)
  // console.log("dataCopy:", dataCopy);

  const handleDelete = (data) => {
    setDataCopy((prevState) => {
      return prevState.filter((eachEl) => eachEl.id !== data);
    });
  };

  const getAfterToggle = (afterToggle) => {
    console.log("after toggle:", afterToggle);

    setDataCopy(afterToggle);
  };

  return (
    <>
      {location !== "/notfound" && <Navbar />}
      {/* <Navbar /> */}
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <List
                dataFromMyParent={data}
                idOnDelete={handleDelete}
                sendBack={getAfterToggle}
              />
            }
          />
          <Route
            path="/item/:id"
            element={<ItemDetailsPage dataFromMyParent={dataCopy} />}
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
