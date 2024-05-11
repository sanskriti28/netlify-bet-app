import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useToast } from '@chakra-ui/react';
import { useSelector } from "react-redux";
import img1 from "../assets/images/carousel/c1.jpg";
import img2 from "../assets/images/carousel/c2.jpg";
import img3 from "../assets/images/carousel/c3.jpg";
import { ImBullhorn } from "react-icons/im";

const Carousel = () => {
  const images = [img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const toast = useToast();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  const {
    bgColor1,
    bgGray,
    bgYellow,
    PrimaryText,
    secondaryText,
    hoverColor,
    ClickActiveColor,
  } = useSelector((state) => state.theme);
  const inlineStyles = {
    fontSize: '0.9rem',
    marginRight:'20px',
  };

  return (
    <div>
      <div className="relative w-full">
        <Slider {...settings} ref={sliderRef}>
          {images.map((img, index) => (
            <div key={index} className="relative h-56 md:h-96">
              <img
                src={img}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-500' : 'bg-gray-200'}`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => sliderRef.current.slickPrev()}
        />
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
     <div className='news-announcement flex justify-center items-center' style={{backgroundColor:bgGray, paddingTop: '5px', paddingBottom: '5px',}}>
     <ImBullhorn style={{margin: '0 10px'}} size={20}/>
      <marquee style={{inlineStyles,lineHeight: '5px', padding: '0 0 10px',}} className="font-bold">
        <span style={inlineStyles}>
          <span style={{color:secondaryText}} className='news-title'>Backup site link :</span>
          <span className='news-text'>In case of trouble visiting www.betvisa.com, please visit www.b8visa.com, which is our backup URL.</span>
        </span>
        <span style={inlineStyles}>
          <span style={{color:secondaryText}} className='news-title'>Backup site link :</span>
          <span className='news-text'>In case of trouble visiting www.betvisa.com, please visit www.b8visa.com, which is our backup URL.</span>
        </span>
        <span style={inlineStyles}>
          <span style={{color:secondaryText}} className='news-title'>Backup site link :</span>
          <span className='news-text'>In case of trouble visiting www.betvisa.com, please visit www.b8visa.com, which is our backup URL.</span>
        </span>
        <span style={inlineStyles}>
          <span style={{color:secondaryText}} className='news-title'>Backup site link :</span>
          <span className='news-text'>In case of trouble visiting www.betvisa.com, please visit www.b8visa.com, which is our backup URL.</span>
        </span>
      </marquee>
     </div>
    </div>
  );
  
};

export default Carousel;