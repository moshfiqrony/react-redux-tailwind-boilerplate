import { useDispatch, useSelector } from "react-redux";
import DangerButton from "../../components/DangerButton";
import { logoutUser } from "../../redux/auth/actions";

function Home() {
  const token = useSelector(({authUser}) => authUser.token)
  const dispatch = useDispatch();

  return <div>
    <h1>Welcome home, your token is {token}</h1>
    <DangerButton
      name="Logout"
      onClick={() => dispatch(logoutUser())}
    />
  </div>;
}

export default Home;
