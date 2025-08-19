import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const CircleSlider = ({ items }) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
        <FaChevronLeft size={30} color="white" />
      </button> */}
      <Slider ref={sliderRef} {...settings}>
        {items &&
          items.map((item, index) => (
            <div className="play-btn-hover  align-items-center" key={index}>
              <div className="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
              </div>
              <img className="img" src={item.image} alt={item.title} />
              <h6 className="ms-4">{item.title}</h6>
            </div>
          ))}
      </Slider>
      {/* <button className="next-button1" onClick={() => sliderRef.current.slickNext()}>
        <FaChevronRight size={30} color="white" />
      </button> */}
    </div>
  );
};
export default CircleSlider;
