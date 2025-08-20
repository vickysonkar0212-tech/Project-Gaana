import Offcanvas from "../pages/auth/Offcanvas";
import { Link,useNavigate } from "react-router-dom";

const Header = ({ theme, setTheme ,user}) => {
const navigate = useNavigate()

console.log("ggg",user?.data?.email)

const handleLogout = () => {

 const confirm = window.confirm("Are You Sure")
 if(confirm) {
  localStorage.removeItem("accesstoken")
  window.location.reload()
  navigate("/")
 }
}

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };


  return (
    <div className="container-fluid px-4 header-index">
      <div className="row d-flex align-items-center">
        <header className="d-flex align-items-center justify-items-center gap-4 bg-header position-fixed px-4">
          <ul className="nav col align-items-center justify-items-center">
            <li> <Offcanvas /> </li>
            <li>
              <a href="#" className="nav-link px-2">
                <img
                  src="https://a10.gaanacdn.com/images/section/logo_1724226700.svg"
                  alt="Logo"
                />
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                <div className="pos-1 align-item-center">
                  <div className="input-container">
                    <input type="text" className="py-2 mx-3" placeholder="Search Artists, Songs, Albums" />
                    <svg width="17" height="17" viewBox="0 0 25 25">
                      <path className="svg_color absolute" fill="" fillRule="evenodd"
                        d="M10.5 2A6.5 6.5 0 0 1 17 8.5c0 1.6-.6 3.1-1.56 4.23l.27.27h.8l5 5-1.5 1.5-5-5v-.8l-.27-.27C13.55 14.447 12.05 15 10.5 15a6.5 6.5 0 1 1 0-13zm0 2A4.48 4.48 0 0 0 6 8.5a4.48 4.48 0 0 0 4.5 4.5A4.48 4.48 0 0 0 15 8.5 4.48 4.48 0 0 0 10.5 4z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <div className="d-flex mt-3 align-items-center">
            <ul className="d-flex list-unstyled gap-3 align-items-center justify-content-center">
              <li className="btn-offer text-center justify-content-center py-1 px-3 fs1">
                Welcome offer: 1 Month Trial @ Rs1
              </li>
              <li className="btn-header-plus align-items-center d-flex justify-content-center py-1">
                <span className="fs">Get Gaana Plus</span>
              </li>
              <li>

                <button
                  className="btn border-0 bg-transparent"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                >
                  {theme === "light" ? (

                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <g
                          className="svg_stroke"
                          fillRule="nonzero"
                          stroke="#000"
                          strokeWidth=".5"
                        >
                          <path
                            d="M18.062 15.441c-2.222 1.13-4.847 1.148-7.084.047-2.237-1.1-3.825-3.19-4.287-5.64-.526-2.94.62-5.93 2.975-7.768.241-.185.321-.512.193-.787-.119-.279-.415-.438-.714-.384h-.002c-2.678.463-5.047 2.012-6.545 4.28-1.497 2.269-1.99 5.055-1.364 7.7.568 2.587 2.164 4.833 4.42 6.22 2.087 1.27 4.565 1.739 6.972 1.319.193-.034.386-.074.577-.12 1.393-.337 2.697-.971 3.822-1.859.72-.584 1.35-1.27 1.872-2.036.174-.247.158-.58-.04-.81-.196-.23-.524-.296-.795-.162z"
                            transform="translate(5 5)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  ) : (

                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                </button>

              </li>

              <li className="px-3 align-items-center"> 
  {!user ? (
    <>
      <Link to="/Signup">
        <button className="login-btn py-2">Sign up</button>
      </Link>
      <Link to="/Login">
        <button className="login-btn py-2 mx-3 text-center">Login</button>
      </Link>  
    </>
  ) : (
    <>
      <span className=" me-3"> {user?.data?.email}</span>
      <button className="login-btn py-2" onClick={handleLogout}>
        Logout
      </button>
    </>
  )}
</li>


  </ul>
          </div>
          <div className="row ">
            <div className="col ">
              <ul className="list-unstyled d-flex gap-4 align-items-center topnav fixed-top allheader px-5 py-3 ">
                <li >  <a class="active" href="Home">All</a> </li>
                <li> <a href="/second">Trending Songs</a></li>
                <li>  <a href="New-Song">New Songs</a> </li>
                <li><a href="done">Old Songs</a></li>
                <li>
                  <div class="dropdown  ">
                    <a href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" className="dropdown">
                      Mood &  Genre <svg width="10" className="header-svg ms-1 " height="12" viewBox="0 0 10 17"><path class="svg_color" fill="#000" fill-rule="evenodd" d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path></svg>
                    </a>


                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" className="dropdown-content">
                      <li>  <a class="dropdown-item" href="/Part">Party </a></li>
                      <li><a class="dropdown-item" href="#">Romance</a></li>
                      <li><a class="dropdown-item" href="#">90's & 2000</a></li>
                      <li><a class="dropdown-item" href="#">Bhakti</a></li>
                      <li><a class="dropdown-item" href="#">Indie</a></li>
                      <li><a class="dropdown-item" href="#">EDM</a></li>
                      <li><a class="dropdown-item" href="#">Ghazal's</a></li>
                      <li><a class="dropdown-item" href="#">Workout</a></li>
                      <li><a class="dropdown-item" href="#">Stars</a></li>
                      <li><a class="dropdown-item" href="#">Retro</a></li>
                    </ul>
                  </div> </li>
                <li>  <a href="/Album-song">Albumb</a></li>
                <li>  <div class="dropdown">
                  <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown">
                    Top Playlist <svg width="10" className="header-svg ms-1 " height="12" viewBox="0 0 10 17"><path class="svg_color" fill="#000" fill-rule="evenodd" d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path></svg>
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" className="dropdown-content">
                    <li><a class="dropdown-item" href="#">Top Hindi Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top Punjabi  Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top Haryanvi Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top Rajasthani Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top Gujarathi Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top Kannad Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top Malayalam Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top  TamilSongs</a></li>
                    <li><a class="dropdown-item" href="#">Top Bhojpuri Songs</a></li>
                    <li><a class="dropdown-item" href="#">Top English Songs</a></li>
                  </ul>
                </div> </li>
                <li>  <div class="dropdown">
                  <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown">
                    Top Artist<svg width="10" className="header-svg ms-1" height="12" viewBox="0 0 10 17"><path class="svg_color" fill="#000" fill-rule="evenodd" d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path></svg>
                  </a>
 <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" className="dropdown-content">
                    <li><a class="dropdown-item" href="#">Arjit Singh</a></li>
                    <li><a class="dropdown-item" href="#">Shreya Ghoshal</a></li>
                    <li><a class="dropdown-item" href="#">Masoum Sharma</a></li>
                    <li><a class="dropdown-item" href="#">Gippy Grewal</a></li>
                    <li><a class="dropdown-item" href="#"> Honey Singh</a></li>
                    <li><a class="dropdown-item" href="#">Jubin Natiuyal</a></li>
                  </ul>
                </div> </li>
  <li> <a href="/Podcast">Podcast</a></li>
                <li>  <a href="Radiointernal">Gaana Charts</a> </li>
                <li> <a href="#home">my Music</a></li>
                <li> <a href="#home">Reads</a></li>
                 </ul>
            </div>
          </div>
        </header>
      </div>

    </div>
  );
};

export default Header;

