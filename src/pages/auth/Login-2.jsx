import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/")
    }
  }, [navigate])

  const handleContinue = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:5200/auth/login", { email, password })
      console.log(res.data)
      // localStorage.setItem("token", res.data.token)
      localStorage.setItem("token", res.data.token);
      console.log("USER BEFORE STORE:", res.data.user);
      
      localStorage.setItem("user", JSON.stringify(res.data.user));  /*these is also for logout    */
    
      window.location.href = "/";

      if (res.data.status) {
        setErrorMessage("Login Successfully");
      } else {
        setErrorMessage("");
      }
    } catch (error) {
      console.error(" Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.mesaage || "User not exists!");
    }
  }
  const isDisabled = email.trim() === '' || password.trim() === '';
  return (
    <>
      <button type="button" class="btn  bg-secondary text-white p-2 rounded-5 w-100 mx-2"
        data-bs-toggle="modal" data-bs-target="#loginModal">
        Login
      </button>
      <div class="modal fade" className="modal modal-lg" id="loginModal"
        tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;