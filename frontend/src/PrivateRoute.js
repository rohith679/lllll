// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authtoken");
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default PrivateRoute;
