import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterUserPage from "../pages/RegisterUser";

const Routes = () => {
  return (
    <Switch>
      <Route isPublic component={Home} exact path="/" />
      <Route isPublic component={Login} exact path="/login" />
      <Route isPublic component={RegisterUserPage} exact path="/register" />
    </Switch>
  );
};

export default Routes;
