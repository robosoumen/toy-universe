import React from "react";
import { Link } from "react-router";

const Login = () => {
    const handleLogInForm = (e) => {
        e.preventDefault();
        console.log('clicked Login')
    }
  return (
    <div>
      {/* form */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogInForm}>
                <fieldset className="fieldset">
                    {/* email */}
                  <label className="label">Email</label>
                  <input type="email" name="email" required className="input" placeholder="Email" />
                  {/* password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <p>Don't Have account? Please <Link className='text-blue-400 hover:text-blue-800' to='/resister'>Resister</Link></p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
