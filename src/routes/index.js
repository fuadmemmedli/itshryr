import { createBrowserRouter } from "react-router-dom";
import Home from "pages/home";
import Cart from "pages/cart";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
  ]);