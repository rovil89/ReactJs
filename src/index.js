import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRHtRAwWjePQYdeV7_lsZ6fixZNi-4mA8",
  authDomain: "somos-pacifica.firebaseapp.com",
  projectId: "somos-pacifica",
  storageBucket: "somos-pacifica.appspot.com",
  messagingSenderId: "826439169690",
  appId: "1:826439169690:web:2819ba9078297eb1e7d123"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


reportWebVitals();
