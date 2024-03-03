import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartDropdownProvider } from "./contexts/cart.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartDropdownProvider>
          <RouterProvider router={router} />
        </CartDropdownProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
