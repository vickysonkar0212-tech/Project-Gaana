
import { useEffect } from "react";

const Sidebar = ({ theme }) => {
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);



      return (

          <>
        
          <div className="row ">
  <div className="col-3 sidebartop">
      
          <div className="card text-center">

    <p className="text-center mt-5"> <img src="https://tpc.googlesyndication.com/simgad/1840126878803169724/14763004658117789537?w=300&h=300&tw=1&q=75"width="140"/>
    </p> 
      <h1 className="sidebarclr"> <u> Downloading 2025 </u></h1>
      <p className=" sidebarclr"><h5> Downloading </h5></p>

      <p className="mt-5 sidebarclr" ><h5>Downloading Right Now</h5></p>

    <p className="mt-5 sidebarclr"> <button className="downloadbtn py-3 mb-5"> Download </button></p>
  
  </div>

  </div>
          </div>
    
          <div className="row mt-5">
              <div className="col d-flex justify-content-between align-items-center">
              <h3>New Releases</h3>
              <span>See All</span>
              </div>
        
          </div>
  <div className="row mt-3">
      <div className="col">
          <img  className="borderside"src="https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1EDGMjWk/size_m.jpg"width="50px"/>
        <span className="px-2 fw-bold"> Sikander Nachhe(From "Sika..")</span>    
      </div>
  </div>

  <div className="row mt-3">
      <div className="col">
          <img className="borderside"src="https://a10.gaanacdn.com/gn_img/albums/VdNW0Mbo5e/NW0Xr7qOWo/size_m.jpg"width="50px"/>
        <span className="px-2 fw-bold"> Sikander Nachhe(From "Sika..")</span>    
      </div>
  </div>

  <div className="row mt-3">
      <div className="col">
          <img className="borderside" src="https://a10.gaanacdn.com/gn_img/albums/VdNW0Mbo5e/NW0XrzjEWo/size_m_1742998745.jpg"width="50px"/>
        <span className="px-2 fw-bold"> Thomkiya</span>    
      </div>
  </div>

  <div className="row mt-3">
      <div className="col">
          <img className="borderside"src="https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1EDGMjWk/size_m.jpg"width="50px"/>
        <span className="px-2 fw-bold"> Sikander Nachhe(From "Sika..")</span>    
      </div>
  </div>

          <div className="sidebarimg mt-2">
          <img src="https://a10.gaanacdn.com/images/section/rightSideImage_1740989848.jpg"width="100%"/>   
          </div>

      
          </>
      )
  }
  export default Sidebar;