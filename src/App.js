import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import OrderProceed from "./components/OrderProceed/OrderProceed";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SingUp/SignUp";
import Main from "./layouts/Main";
import { productsAndCartLoader } from "./loader/productsAndCartLoader";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/proceed",
          element: (
            <PrivateRoute>
              <OrderProceed></OrderProceed>{" "}
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
