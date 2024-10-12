import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Index";
import Shop from "../pages/shop/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
