import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin !== "true") {
    return <Navigate to="/" replace />;
  }

  return children;
}