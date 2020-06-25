import React from "react";
import Auth, { useAuth } from "./useAuth";
const Login = () => {
  const auth = useAuth();
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
                  {auth.user ? (
                    <button onClick={auth.signOutWithGoogle}>signedIn</button>
                  ) : (
                    <button
                      className="btn btn-block btn-outline-danger"
                      onClick={auth.signInWithGoogle}
                    >
                      <i className="fab fa-google-plus-square"></i> Google sing
                      in
                    </button>
                  )}
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
