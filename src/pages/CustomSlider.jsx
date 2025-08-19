import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomSlider = () => {
  const sliderRef = useRef(null); 

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div className="slide-container">

      {/* <button
        className="prev-button"
        onClick={() => sliderRef.current.slickPrev()} 
      >
        <FaChevronLeft size={40}  color="white" /> 
      </button> */}

      {/* <div className=""> */}
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src="https://a10.gaanacdn.com/gn_img/showcase/Rz4W87v3xD/z4W8v6vKxD/size_l_1742927467.webp"className="w-100 px-2" alt="Image 1"/>
        </div>
        <div>
          <img src="	https://a10.gaanacdn.com/gn_img/showcase/Rz4W8vKxD5/Rz4W8R9KxD/size_l_1742927993.webp" className="w-100 px-2" alt="Image 2" />
        </div>
        <div>
          <img src="https://a10.gaanacdn.com/gn_img/showcase/Dk9KNk23Bx/k9KNeqqbBx/size_l_1738229381.webp" className="w-100 px-2" alt="Image 3" />
        </div>
        <div>
          <img src="	https://a10.gaanacdn.com/gn_img/showcase/01A3mrWNQX/01A3mV5WNQ/size_l_1739992589.webp"className="w-100 px-2" alt="Image 4"/>
        </div>
        <div>
          <img src="https://a10.gaanacdn.com/gn_img/showcase/YoEWlwa3zX/oEWlmZBbzX/size_l_1731064714.webp" className="w-100 px-2" alt="Image 5"/>
        </div>
        <div>
          <img src="	https://a10.gaanacdn.com/gn_img/showcase/0wrb4qNKLg/0wrb4NM3Lg/size_l_1742553972.webp" className="w-100 px-2" alt="Image 6"/>
        </div>
      </Slider>
      {/* </div> */}


 
      {/* <button
        className="next-button"
        onClick={() => sliderRef.current.slickNext()} 
      >
        <FaChevronRight size={40}  color="white" /> 
      </button> */}
    </div>
  );
};

export default CustomSlider;
