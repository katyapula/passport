import { Navigate, Outlet } from "react-router-dom";
import {isAuthenticated} from "@/app/utils";

export default function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}
