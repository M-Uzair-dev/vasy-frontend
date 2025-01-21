import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Token from "./layout/Token.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <BrowserRouter>
      <Token>
        <App />
      </Token>
    </BrowserRouter>
  </StrictMode>
);
