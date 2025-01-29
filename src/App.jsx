import "./App.css";
import Footer from "./components/Footer";
import List from "./components/list";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


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
