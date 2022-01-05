import "../styles/app.scss";
import { QueryClientProvider, QueryClient } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "../routes";
import Login from "../routes/login";
import { URL_LOGIN } from "../constants/routes";

const AuthedRoute = ({ ...rest }) => {
  const userToken = useSelector(({ authUser }) => authUser.token);
  return userToken ? (
    <ProtectedRoute />
  ) : (
    <Navigate to={URL_LOGIN} replace={true} />
  );
};

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-app-main bg-primary">
        <Routes>
          <Route path="*" element={<AuthedRoute />} />
          <Route path={URL_LOGIN} element={<Login />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
