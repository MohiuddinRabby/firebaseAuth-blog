import React from "react";
import Auth, { useAuth } from "./useAuth";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const auth = useAuth()
  const handleSignIn = () => {
    auth.signInWithGoogle().then((res) => {
      history.replace("/blog");
    });
  };
  console.log(auth);
  return (
    <div>
      <div className="container">
        <div className="login-form">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <div>
                    <h3 className="">Login to Process the BLOG</h3>
                    <p className="note note-danger">
                      For now only sign in
                      <span className="text-danger">Google</span> works
                    </p>
                    {/* <img src='https://source.unsplash.com/collection/1971015/800x400' className="img-fluid"  alt=""/> */}
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-block btn-outline-danger"
                    onClick={handleSignIn}
                  >
                    <i className="fab fa-google-plus-square"></i> Google sing in
                  </button>
                  <br />
                  <button className="btn btn-outline-primary btn-block">
                    <i className="fab fa-facebook"></i> FaceBook sing in
                  </button>
                  <br />
                  <button className="btn btn-outline-info btn-block">
                    <i className="fab fa-twitter-square"></i> Twitter sing in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
