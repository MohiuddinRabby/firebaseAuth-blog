import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Login from "./components/Login/Login";
import Blogs from "./components/Blogs/Blogs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
     <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route  path="/blog/posts" component={Blogs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
