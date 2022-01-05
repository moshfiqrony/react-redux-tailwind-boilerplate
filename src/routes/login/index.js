import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import { URL_HOME } from "../../constants/routes";
import { loginUser } from "../../redux/auth/actions";

function Login() {
  const token = useSelector(({ authUser }) => authUser.token);
  const dispatch = useDispatch();

  if (token) return <Navigate to={URL_HOME} replace={true} />;

  return (
    <div>
      <PrimaryButton
        name="Login"
        onClick={() => dispatch(loginUser())}
      />
    </div>
  );
}

export default Login;
