import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Applayout = () => {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {

    const token = localStorage.getItem("accesstoken")

    if (!token) {
      navigate("/login")
    }
    getUser(token)
  }, [])

  const getUser = async (token) => {
    try {

      axios.defaults.headers.common['Authorization'] = token;

      const response = await axios.get("http://127.0.0.1:5000/user/get")
      setUser(response.data)
      console.log("hlo", response)
    } catch (error) {
      console.log("error get", error?.response?.data?.data?.message)
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <Header user={user} theme={theme} setTheme={setTheme} />
        <div className="col-9">
          <Outlet />
        </div>
        <div className="col-3">
          <Sidebar />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Applayout; 
