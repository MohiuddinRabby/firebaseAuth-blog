import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Login from "./components/Login/Login";
import Blogs from "./components/Blogs/Blogs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContextProvider, PrivateRoute } from "./components/Login/useAuth";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login></Login>
              </Route>
            <PrivateRoute path="/blog">
              <Blogs></Blogs>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
