import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../routes/Home";
import Layout from "@/routes/Layout";
import Login from "@/routes/Login";
import Chakra from "@/routes/Chakra";
import Dictionary from "@/routes/Dictionary";
import PassportList from "@/routes/PassportList";
import ProtectedRoute from "@/routes/ProtectedRoute";
import { isAuthenticated } from "@/app/utils";

export const routes = [
  { path: "/home", element: <Home /> },
  { path: "/chakra", element: <Chakra /> },
  { path: "/dictionary", element: <Dictionary /> },
  { path: "/passport", element: <PassportList /> },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: isAuthenticated() ? (
          <Navigate to="/home" replace />
        ) : (
          <Navigate to="/login" replace />
        ),
      },
      {
        path: "/login",
        element: isAuthenticated() ? (
          <Navigate to="/home" replace />
        ) : (
          <Login />
        ),
      },
      {
        element: <ProtectedRoute />,
        children: routes,
      },
      {
        path: "*",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);
