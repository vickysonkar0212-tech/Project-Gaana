import Signup from "./Signup-2"
const Offcanvas = () => {

  return (
    <>
 <a href="#" className="nav-link px-2">
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <svg width="24" height="24" viewBox="0 0 24 24"><path className="svg_color offcanvas-img" fill-rule="nonzero" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"></path></svg>
        </a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <header data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
              <span className=" text-end ">
                <h5 class="offcanvas-title mx-2" id="offcanvasExampleLabel">
                  <svg width="35" height="35" viewBox="0 0 18 18"><path class="svg_color" fill="#000" d="M14.351 13.545c-.804-1.281-2.036-2.215-3.448-2.664.738-.573 1.22-1.457 1.22-2.46 0-1.723-1.4-3.124-3.123-3.124-1.722 0-3.124 1.401-3.124 3.124 0 1.003.483 1.888 1.221 2.46-1.412.449-2.644 1.383-3.448 2.664C2.606 12.318 1.972 10.733 1.972 9c0-3.876 3.153-7.03 7.028-7.03 3.875 0 7.028 3.154 7.028 7.03 0 1.732-.634 3.317-1.677 4.544M6.848 8.42c0-1.187.965-2.152 2.152-2.152 1.187 0 2.152.965 2.152 2.152 0 1.186-.965 2.152-2.152 2.152-1.187 0-2.152-.966-2.152-2.152M9 16.028c-1.792 0-3.424-.68-4.666-1.787.011-.016.03-.024.042-.042.958-1.637 2.729-2.654 4.624-2.654 1.894 0 3.666 1.017 4.623 2.653.011.018.028.03.04.046C12.421 15.35 10.79 16.028 9 16.028M9 1C4.59 1 1 4.59 1 9.001 1 13.411 4.59 17 9 17s8-3.588 8-7.999C17 4.589 13.41 1 9 1" transform="translate(-1109 -73) translate(1089 58) translate(19 15) translate(1)"></path></svg> <span className="barlogin mx-2">
                   <a href="Signup">Sign Up </a>   </span></h5>
              </span>
            </header>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body mx-3 ">
            <ul className="list-unstyled fslogin">
              <li>  Home </li>
              <li className="mt-4">Radio</li>
              <li className="mt-4">Podcast</li>
              <li className="mt-4">Reads</li>
              <li className="mt-4">Videos</li>
              <li className="mt-4">My Music</li>
              <li className="mt-4">Language</li>
              <li className="mt-4">Night Mode</li>
            </ul>
            <h6 className="mt-4"> <b>Go Premium </b></h6>
            <h6 className=" barfontsize mt-3">Get Gaana Plus</h6>
            <p className="barfontsize mt-3"> <span className="offer text-center  justify-content-center"> Welcome Offer</span>  1 Month Trial @just Rs1</p>
            <hr />
            <ul className="list-unstyled  mt-4">
              <li ><b > Quick Access</b> </li>
              <li className="fslogin mt-4">New Songs </li>
              <li className="mt-4"><h6 className="fslogin">Old Songs </h6> </li>
              <li className="mt-4"> <h6 className="fslogin">Albumbs</h6> </li>
              <li className="mt-4"> <h6 className="fslogin">Artist </h6> </li>
              <li className="mt-4"> <h6 className="fslogin">Lyrics </h6> </li>
              <li className="mt-4"> <h6 className="fslogin">Music Labels  </h6></li>
              <li className="mt-4"><h6 className="fslogin">  Genres </h6></li>
              <li className="mt-4"><h6 className="fslogin">Gaana Charts </h6> </li>
              <li className="mt-4"><h6 className="fslogin">MMA 2023 <span className="see">NEW</span> </h6> </li>
            </ul>
          </div>
        </div>
      </a>
    </>
  )
}

export default Offcanvas;