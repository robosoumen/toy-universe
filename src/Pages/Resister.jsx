import React from "react";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "@contentstack/react-toastify";

const Resister = () => {
  const navigate = useNavigate();
  const [errorC, setErrorC] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, setUser, googleSignIn, updateUser } = use(AuthContext);

  //signIn With Google
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  // registration form submit function signUp
  const handleResisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    // console.log("resister Clicked", name, email, password, photo);

    // regEx Password validation
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      // console.log("password should be more ");
      setErrorC(
        '"Password must be at least 6 characters long and include both uppercase and lowercase letters."',
      );
      return;
    }

    signUp(email, password)
      .then((result) => {
        const rUser = result.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({...rUser, displayName: name, photoURL: photo });
        }).catch(error => {
          // console.log(error);
          setUser(rUser);
        })
          alert("SignUp Complete");
          toast('Account create Successful');
          toast('account crete successful')
          navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        setErrorC(error.message);
      });
  };

  // handleShowPassword
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
       <title>toy-universe-resister</title>
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
                  <div className="relative ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className="input"
                      placeholder="Password"
                    />
                    <button
                      className="absolute top-3 right-6"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <IoMdEye></IoMdEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                  </div>
                  <button className="btn btn-neutral mt-4">Resister Now</button>
                  {/* Google */}
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn bg-blue-300 text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                  {errorC && <p className="text-red-600">{errorC}</p>}
                  <p>
                    Already Have An Account? Please{" "}
                    <Link
                      className="text-blue-500 hover:text-blue-700"
                      to="/auth/login"
                    >
                      Login
                    </Link>
                  </p>
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
