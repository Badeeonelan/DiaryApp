import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { StrictMode } from "react";
import FolderContextProvider from "./context/folder.context.jsx";

createRoot(document.getElementById("root")).render(
   <FolderContextProvider>
      <App />
   </FolderContextProvider>
);
