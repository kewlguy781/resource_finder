import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ThingsDemo from "./things/ThingsDemo";
import { Container } from "semantic-ui-react";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import Entries from "./components/Entries";
import BusinessView from "./components/BusinessView";

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/categories/:id" component={Entries} />
            <Route exact path="/BusinessView" component={BusinessView}/>
            <ProtectedRoute exact path="/thingsDemo" component={ThingsDemo} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
