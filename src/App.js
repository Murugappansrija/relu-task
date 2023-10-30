import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Authentication from "./authentication/Authentication";
import Homepage from "./Homepage";
import { auth } from "./firebase";
import { logoutUser, loginUser, setLoading } from "./features/userSlice";

function App() {
  const user = useSelector((state) => state.data.user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false))
      }
      else{
        console.log("user not login")
      }
    });
  }, []);

  return <div className="App">{user ? <Homepage /> : <Authentication />}</div>;
}

export default App;
