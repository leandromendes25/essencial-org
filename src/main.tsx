import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../builder-registry";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);