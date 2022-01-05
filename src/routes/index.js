import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import { URL_HOME } from "../constants/routes";

function ProtectedRoute() {
  const location = useLocation();

  if (location.pathname === "/")
    return <Navigate to={URL_HOME} replace={true} />;

  return (
    <Routes>
      <Route path={URL_HOME} element={<Home />} />
    </Routes>
  );
}

export default ProtectedRoute;
