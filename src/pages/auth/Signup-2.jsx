import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [showInput, setShowInput] = useState(false); 
  const [email, setEmail] = useState(); 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(); 
  const [name, setName] = useState();
  const [errorMessage, setErrorMessage] = useState(""); 


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://127.0.0.1:5200/auth/checkMail", { email });
    console.log(" Email check response:", res.data);

    if (res.data.status) {
      setPasswordVisible(true);
      setErrorMessage(""); 
    } else {
      setErrorMessage("Email already exists!");
    }

   } catch (error) {

    console.error(" Error:", error.response?.data || error.message);
    setErrorMessage(error.response?.data?.mesaage || "Something went wrong");
  }
};


  const handlePasswordSubmit = async (e) => {
    e.preventDefault();


    try {
      var res = await axios.post("http://127.0.0.1:5200/auth/register", { name , email , password });

      console.log( res.data);
            alert("Signup successful!");

    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <>
      {/* <button class="btn bg-secondary text-white p-2 rounded-5 w-100 mx-2"data-bs-toggle="modal"data-bs-backdrop="static"
        data-bs-keyboard="false"data-bs-target="#exampleModal">
        SignUp
      </button> */}
      <button 
  class="btn bg-secondary text-white p-2 rounded-5 w-100 mx-2"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal">
  Sign Up
</button>
 <div className="modal modal-lg" 

      id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
      >
        <div className="modal-dialog text-center justify-content-center">
          <div className="modal-content">
            <div className="row login-bg-img">
              <div className="col text-center top login-text-clr">
                <h4 className="text-center mt-4"> Listen to Gaana Non-Stop </h4>
                <p className="barlogin"> Quick Sign In Options </p>

                <button className="logingoogle ms-5 loginborder bg-white py-2 px-2">
                  <span className="ms-5 justify-content-center">Continue with Google</span>
                </button>

                <div className="d-flex mt-3 align-items-center justify-content-center">
                  <hr className="mx-2 w-25" />
                  <span className="fs">or Sign in with</span>
                  <hr className="mx-2 w-25" />
                </div>
                                {errorMessage && (
                  <div className="alert alert-primary mx-5" role="alert">
                    {errorMessage}
                  </div>
                )}


                {!showInput  &&  (
                  <div
                    className="mt-3 loginemail bg-danger ms-5 text-white py-2 px-3"
                    onClick={() => setShowInput(true)}
                  >
                    Continue with phone/Email id
                  </div>
                )}

                {showInput && !passwordVisible && (
                  <form method="post" onSubmit={handleSubmit} >
                    <div className="ms-5 mt-3 px-3 w-75 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone or Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="btn btn-danger mt-2 w-100"
                        disabled={!email}
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                )}

                                {passwordVisible && (
                  <form method="post" onSubmit={handlePasswordSubmit}>
                    <div className="ms-5 mt-3 px-3 w-75 mx-auto d-grid gap-3">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="btn btn-success mt-2 w-100"
                        disabled={!password}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                )}


                <p className="text-center justify-content-center mt-4">
                  By proceeding, you agree to our Privacy Policy and Terms of Services
                </p>
              </div>

              <div className="col bg-danger text-end">
                <div className="position-relative">
                  <img
                    src="https://a10.gaanacdn.com/gn_img/images/login_bg_v1_1621430866.jpg"
                    width="100%"
                    alt="Login Visual"
                  />
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
  );
};

export default Signup;
