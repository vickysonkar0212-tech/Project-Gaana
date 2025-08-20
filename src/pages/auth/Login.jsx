
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        email,
        password
      });
      localStorage.setItem("accesstoken", response.data.data.token);

      toast.success(response.data.data.message);

      console.log("login", response || "login");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
      console.log("Error:", error?.response?.data?.data || "Something went wrong");
    }
  };

  const isDisabled = email.trim() === '' || password.trim() === '';

  return (

    <>
      <div className="row">
        <div className="col">
          <div className="card mx-auto login-card">
            <div className="row login-bg-img">
              <div className="col text-center top login-text-clr">
                <h4 className="text-center mt-4">Listen to Gaana Non-Stop</h4>
                <p className="barlogin">Quick Login</p>

                <form onSubmit={handleContinue} >
                  {errorMessage && (
                    <div className="alert alert-primary mx-5" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <input type="email" className=" form-control w-75 mx-auto py-2 px-3" placeholder="Enter Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" className="form-control px-3 w-75 mx-auto mt-4" placeholder="Enter Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  <button
                    type="submit" className=" btn mt-3 bg-danger mx-auto w-75 text-white py-2 "
                    disabled={isDisabled} >
                    Continue
                  </button>
                </form>
                <p className="text-center justify-content-center mt-4">
                  By proceeding, you agree to our Privacy Policy and Terms of Services
                </p>
              </div>
              <div className="col bg-danger text-end">
                <div className="position-relative">
                  <img src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg" width="100%" alt="Login Visual" />
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>

          </div>


        </div>


      </div>






    </>
  )
}
export default Login