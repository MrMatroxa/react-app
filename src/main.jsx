import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDosContextWrapper } from "./context/ToDosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ToDosContextWrapper>
        <App />
      </ToDosContextWrapper>
    </Router>
  </StrictMode>
);
