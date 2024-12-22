import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./components/context/ProductContext.jsx";
import AuthContext from "./components/context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <App />
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
  