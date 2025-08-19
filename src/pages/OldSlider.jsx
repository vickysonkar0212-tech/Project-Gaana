import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OldSlider = ({ items }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container1">
      {/* <button className="prev-button1" onClick={() => sliderRef.current.slickPrev()}>
        <FaChevronLeft size={30} color="black" />
      </button> */}

      <Slider ref={sliderRef} {...settings}>
      {Array.isArray(items) &&
          items.map((item, index) => (
            <div key={index}>
              
              <button className="oldsong-btn-1 mx-3">{item.name}</button>
            </div>
          ))}
      </Slider>
{/* 
      <button className="next-button1" onClick={() => sliderRef.current.slickNext()}>
        <FaChevronRight size={30} color="black" />
      </button> */}
    </div>
  );
};

export default OldSlider;
