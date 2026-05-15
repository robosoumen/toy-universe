import React from "react";
import { Link } from "react-router";

const Resister = () => {

    // registration form submit function
    const handleResisterForm = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value
        console.log('resister Clicked', name, email, password, photo)
    }

  return (
    <div>
      {/* resister */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Resister Here!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleResisterForm}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input"
                    placeholder="Type Your Name"
                  />
                  {/* PhotoURL */}
                  <label className="label">PhotoURL</label>
                  <input
                    type="text"
                    name="photo"
                    required
                    className="input"
                    placeholder="Photo URL"
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input"
                    placeholder="Email"
                  />
                  {/* password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="input"
                    placeholder="Password"
                  />
                  <button className="btn btn-neutral mt-4">Resister Now</button>
                  <p>Already Have An Account? Please <Link className="text-blue-500 hover:text-blue-700" to='/login'>Login</Link></p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
