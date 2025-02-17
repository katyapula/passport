import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Layout from "@/routes/Layout";
import Login from "@/routes/Login";
import Chakra from "@/routes/Chakra";
import Dictionary from "@/routes/Dictionary";
import PassportList from "@/routes/PassportList";
import ProtectedRoute from "@/routes/ProtectedRoute";

export const routes = [
  {path: '/home', element: <Home />},
  {path: '/chakra', element: <Chakra />},
  {path: '/dictionary', element: <Dictionary />},
  {path: '/passport', element: <PassportList />}
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/login", element: <Login /> }, // ✅ Login is public
      {
        element: <ProtectedRoute />, // ✅ Wrap all protected routes
        children: routes,
      },
    ],
  },
]);
